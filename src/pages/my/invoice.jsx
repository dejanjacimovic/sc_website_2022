import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as invoiceStyles from '../../components/invoice.module.css';

function getBankDetails(bank, detail) {
  if (bank == 'ca' && detail == 'iban') {
    return 'RS35330007010010282854';
  } else if (bank == 'ca' && detail == 'bic') {
    return 'BIC: MEBARS22<br/>CREDIT AGRICOLE SRBIJA AD<br/>Novi Sad, Republic of Serbia';
  } else if (bank == 'intesa' && detail == 'iban') {
    return 'RS35160005380000160536';
  } else {
    return 'BIC: DBDBRSBG<br/>Banca Intesa ad Beograd,<br/>Beograd, Republic of Serbia';
  }
}

function getNetPayment(number_of_days) {
  return 'Valuta: {number_of_days} dana od dana izdavanja fakture. / Terms: please pay within {number_of_days} days of receiving this invoice.';
}

export default function Invoice() {
  let currency = 'EUR';
  let customer = 'Random client GmbH';
  let perHour = 150;
  let invoiceNumber = '117';
  let total = 300;
  let totalValue = 300;

  return (
    <div id="invoice">
      <Helmet>
        <title>Invoice-226-ASM-StuntCoders</title>
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
                <p style="margin-bottom:0">
                  ASM AS
                  <br />
                  Company number. XXX YYY ZZZ
                  <br />
                  Address: Gamle Ringeriksvei 66,
                  <br />
                  1357 Bekkestua
                  <br />
                  Bærum, Norway
                </p>
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
                Mesto i datum izdavanja računa: Beograd, 24.02.2022
                <br />
                Place and date of issuing of invoice: Belgrade, 24.02.2022
                <br />
                Datum prometa usluge: 24.02.2022
              </p>
            </div>
          </div>
        </header>

        <main>
          <h1 style="color:#44b2fe;">
            Račun br. / Invoice no. &ndash; 226/2022
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
            <tbody>
              <tr>
                <td valign="top">1</td>
                <td valign="top" align="left">
                  Usluge računarskog programiranja za prethodni mesec (45 radnih
                  sati). / Software development services for January (45h).
                </td>
                <td valign="top" align="right">
                  2,025.00 EUR
                </td>
              </tr>
              <tr>
                <td valign="top">2</td>
                <td valign="top" align="left">
                  Usluge održavanja servera za period od jednog meseca. /
                  Hosting services for period of one month.
                </td>
                <td valign="top" align="right">
                  100.00 EUR
                </td>
              </tr>
            </tbody>
          </table>

          <p>Svega bez PDVa / Total without VAT: 2,125.00 EUR</p>

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
                  2,125.00 EUR
                </td>
                <td align="left">20%</td>
                <td align="right">0.00</td>
              </tr>
              <tr>
                <td width="50%" align="left">
                  249,687.50 RSD
                </td>
                <td align="left">20%</td>
                <td align="right">0.00</td>
              </tr>
            </tbody>
          </table>

          <h2 style="color:#44b2fe">Svega za uplatu / Total: 2,125.00 EUR</h2>
          <p style="font-size:16px">
            Total u RSD / Total in RSD currency: 249,687.50 RSD
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
                  {getBankDetails('ca', 'bic')}
                </td>
              </tr>
              <tr>
                <td valign="top" style="padding: 20px 0">
                  70: Remittance information / Payment details
                </td>
                <td valign="top" style="padding: 20px 0">
                  Invoice 226/2022
                </td>
              </tr>
              <tr>
                <td valign="top">
                  IBAN: {getBankDetails('ca', 'iban')}
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
