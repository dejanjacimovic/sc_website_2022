import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as invoiceStyles from '../../components/invoice.module.css';

function exchangeRate() {
  return 117.5;
  // if (empty($_GET['exchange_rate'])) {
  //     $exRate = (array)json_decode(
  //         file_get_contents(
  //             'https://kurs.resenje.org/api/v1/currencies/eur/rates/today'
  //         )
  //     );

  //     $_SESSION['exchange_middle'] = (string)$exRate['exchange_middle'];
  //     $exRate = (float)$exRate['exchange_middle'];
  // }
}

function getBankDetails(bank, detail) {
  let bank_account_data = {
    ca: {
      bic: 'BIC: MEBARS22<br/>CREDIT AGRICOLE SRBIJA AD<br/>Novi Sad, Republic of Serbia',
      iban: 'RS35330007010010282854',
    },
    intesa: {
      bic: 'BIC: DBDBRSBG<br/>Banca Intesa ad Beograd,<br/>Beograd, Republic of Serbia',
      iban: 'RS35160005380000160536',
    },
  };

  return bank_account_data[bank][detail];
}

function getNetPayment(number_of_days) {
  return 'Valuta: {number_of_days} dana od dana izdavanja fakture. / Terms: please pay within {number_of_days} days of receiving this invoice.';
}

function numberFormat(value, decimals) {
  return value;
}

function invoiceDate(sth = 'Y') {
  return '01.12.2015';
}

function invoiceItem(count, item, currency) {
  return (
    <tr>
      <td valign="top">{count}</td>
      <td valign="top" align="left">
        {item['service']}
      </td>
      <td valign="top" align="right">
        {numberFormat(item['subtotal'], 2)} {currency}
      </td>
    </tr>
  );
}

function invoiceItemsList(allItems, currency) {
  let output = [];
  let count = 0;
  let total = 0;

  for (let item in allItems) {
    if (!isNaN(item['service'])) {
      item['subtotal'] = Math.ceil(item['service'] * perHour);

      if (0 > item['service']) {
        item['subtotal'] = Math.floor(item['service'] * perHour);
        item['service'] =
          'Popust na usluge računarskog programiranja za prethodni mesec (' +
          Math.abs(item['service']) +
          ' radnih sati). / Discount for software development services for ' +
          date('F', strtotime('-1 month')) +
          ' (' +
          Math.abs(item['service']) +
          'h).';
      } else {
        item['service'] =
          'Usluge računarskog programiranja za prethodni mesec (' +
          item['service'] +
          ' radnih sati). / Software development services for ' +
          date('F', strtotime('-1 month')) +
          ' (' +
          $item['service'] +
          'h).';
      }
    }

    if (!$item['subtotal']) {
      continue;
    }

    item['subtotal'] = Math.ceil(item['subtotal']);

    output.push(invoiceItem(count, item, currency));

    count++;
    total += item['subtotal'];
  }

  totalValue = total;
  total = numberFormat(total, 2);

  return output;
}

export default function Invoice() {
  let currency = 'EUR';
  let client = 'Random client GmbH';
  let perHour = 150;
  let invoiceNumber = '117';
  let total = 300;
  let totalValue = 300;

  return (
    <div id="invoice">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,400italic,700,700italic&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>

      <div class="container">
        <header id="header">
          <table>
            <tr>
              <td width="50%" valign="top">
                <h3>Korisnik usluga / Client</h3>
                <p style="margin-bottom:0">{customer}</p>
              </td>
              <td style="text-align:right; width:50%;" valign="top">
                <h3>Uslugu pružio / Invoiced by</h3>
                <p style="margin-bottom:0">
                  StuntCoders doo
                  <br />
                  Vatroslava Lisinskog 21
                  <br />
                  Beograd, Srbija
                  <br />
                  PIB: 107437730
                </p>
              </td>
            </tr>
          </table>

          <div class="row">
            <div class="large-12 columns">
              <p style="margin-top:0.5em">
                Mesto i datum izdavanja računa: Beograd, {invoiceDate()}><br />
                Place and date of issuing of invoice: Belgrade, {invoiceDate()}
                <br />
                Datum prometa usluge: {invoiceDate()}
              </p>
            </div>
          </div>
        </header>

        <main>
          <h1 style="color:#44b2fe;">
            Račun br. / Invoice no. &ndash; {invoiceNumber}/{invoiceDate('Y')}
          </h1>

          <table>
            <thead>
              <tr>
                <th></th>
                <th align="left">Osnov za naplatu / Service</th>
                <th align="right" style="min-width:130px">
                  Iznos / Amount
                </th>
              </tr>
            </thead>
            <tbody>{invoiceItemsList([], 'EUR')}</tbody>
          </table>

          <p>
            Svega bez PDVa / Total without VAT: {total} {currency}
          </p>

          <table>
            <thead>
              <tr>
                <th align="left">Osnovica za PDV / VAT base</th>
                <th align="left">PDV stopa / VAT rate</th>
                <th align="right">Iznos / Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="50%" align="left">
                  {total} {currency} ?>
                </td>
                <td align="left">20%</td>
                <td align="right">{numberFormat(0, 2)}></td>
              </tr>
              <tr>
                <td width="50%" align="left">
                  {numberFormat(totalValue * exchangeRate(), 2)} RSD
                </td>
                <td align="left">20%</td>
                <td align="right">{numberFormat(0, 2)}</td>
              </tr>
            </tbody>
          </table>

          <h2 style="color:#44b2fe">
            Svega za uplatu / Total: {total} {currency}
          </h2>
          <p style="font-size:16px">
            Total u RSD / Total in RSD currency:{' '}
            {numberFormat(totalValue * exchangeRate(), 2)} RSD
          </p>
          <p style="font-size:16px;font-weight:bold;">{getNetPayment(15)}</p>
        </main>

        <footer>
          <p style="font-size:16px">
            Napomena: ne postoji obaveza obračunavanja i plaćanja PDV-a po članu
            12. stav 6. tačka 7) pod 3. Zakona o PDV-u
            <br />
            Remark: Exempted of VAT, pursuant to Article 12. Paragraph 6.
            Subparagraph 7 Item 3 of the VAT Act („Official Gazette of the
            Republic of Serbia“, No 84/2004, 86/2004, 61/2005 and 61/2007).
          </p>

          <p>
            Molimo Vas da uplatu gore navedenog neto iznosa izvršite na / Please
            pay as instructed below the afforested{' '}
            <strong>
              <u>net amount without any deductions</u>
            </strong>
            :
          </p>

          <table>
            <tbody>
              <tr>
                <td valign="top">57A: ACCOUNT WITH INSTITUTION BANK</td>
                <td valign="top" width="40%">
                  {getBankDetails('bic')}
                </td>
              </tr>
              <tr>
                <td valign="top" style="padding: 20px 0">
                  70: Remittance information / Payment details
                </td>
                <td valign="top" style="padding: 20px 0">
                  Invoice {invoiceNumber}/{invoiceDate('Y')}
                </td>
              </tr>
              <tr>
                <td valign="top">
                  IBAN: {getBankDetails('iban')}
                  <br />
                  NAME: StuntCoders d.o.o. Beograd
                  <br />
                  STREET: Vatroslava Lisinskog 21
                  <br />
                  CITY, COUNTRY: Beograd, Srbija
                </td>
                <td valign="top">
                  Ovaj dokument izrađen je automatskom obradom podataka i
                  ispisan pomoću računara, pa je kao takav punovažan bez pečata
                  i potpisa. /<br />
                  Invoice has been automatically generated and is therefore
                  valid without stamp or signature.
                </td>
              </tr>
            </tbody>
          </table>
        </footer>
      </div>
    </div>
  );
}
