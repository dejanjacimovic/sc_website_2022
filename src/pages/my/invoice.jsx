import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../components/invoice.module.css';

const formatterEur = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const formatterRsd = new Intl.NumberFormat('rs-RS', {
  style: 'currency',
  currency: 'RSD',
});

function exchangeRateF() {
  let exRate = 117.5;
  return parseFloat(exRate);
}

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
  return (
    <div>
      Valuta: {number_of_days} dana od dana izdavanja fakture. / Terms: please
      pay within {number_of_days} days of receiving this invoice.
    </div>
  );
}

function invoiceItem(count, item) {
  return (
    <tr>
      <td valign="top">{count}</td>
      <td valign="top" align="left">
        {item['service']}
      </td>
      <td valign="top" align="right">
        {formatterEur.format(parseFloat(item['subtotal']).toFixed(2))}
      </td>
    </tr>
  );
}

export default function Invoice() {
  let currency = 'EUR';
  let customer =
    'Random client GmbH<br />Company number. XXX YYY ZZZ<br />Address: Gamle Ringeriksvei 66,<br />1357 Bekkestua<br />Bærum, Norway';
  let perHour = 150;
  let invoiceNumber = '117/2022';
  let total = 300;
  let totalValue = 300;
  let totalRsd = total * exchangeRateF();
  let totalEur = formatterEur.format(total);

  const [exchangeRate, setExchangeRate] = useState(0);
  useEffect(() => {
    fetch(`https://kurs.resenje.org/api/v1/currencies/eur/rates/today`)
      .then((response) => response.json())
      .then((resultData) => {
        setExchangeRate(resultData.exchange_middle);
      });
  }, []);

  return (
    <div id="invoice">
      <Helmet>
        <title>Invoice-226-ASM-StuntCoders</title>
      </Helmet>

      <div className="container">
        <header id="header">
          <table>
            <tr>
              <td width="50%" valign="top">
                <h3>Korisnik usluga / Client</h3>
                <p style={{ marginBottom: 0 }}>{customer}</p>
              </td>
              <td style={{ textAlign: 'auto', width: '50%' }} valign="top">
                <h3>Uslugu pružio / Invoiced by</h3>
                <p style={{ marginBottom: 0 }}>
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

          <div className="row">
            <div className="large-12 columns">
              <p style={{ marginTop: '0.5em' }}>
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
          <h1 style={{ color: '#44b2fe' }}>
            Račun br. / Invoice no. &ndash; {invoiceNumber}
          </h1>

          <table>
            <thead>
              <tr>
                <th></th>
                <th align="left">Osnov za naplatu / Service</th>
                <th align="right" style={{ minWidth: '130px' }}>
                  Iznos / Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceItem(1, {
                service:
                  'Usluge računarskog programiranja za prethodni mesec (45 radnih sati). / Software development services for January (45h).',
                subtotal: '2150',
              })}
              {invoiceItem(2, {
                service:
                  'Usluge održavanja servera za period od jednog meseca. / Hosting services for period of one month.',
                subtotal: '100',
              })}
            </tbody>
          </table>

          <p>
            Svega bez PDVa / Total without VAT: {formatterEur.format(totalEur)}
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
                  {formatterEur.format(totalEur)}
                </td>
                <td align="left">20%</td>
                <td align="right">0.00</td>
              </tr>
              <tr>
                <td width="50%" align="left">
                  {formatterRsd.format(totalRsd)}
                </td>
                <td align="left">20%</td>
                <td align="right">0.00</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ color: '#44b2fe' }}>
            Svega za uplatu / Total: {formatterEur.format(totalEur)}
          </h2>
          <p style={{ fontSize: '16px' }}>
            Total u RSD / Total in RSD currency: {formatterRsd.format(totalRsd)}
          </p>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {getNetPayment(15)}
          </p>
        </main>

        <footer>
          <p style={{ fontSize: '16px' }}>
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
                <td valign="top" style={{ padding: '20px 0' }}>
                  70: Remittance information / Payment details
                </td>
                <td valign="top" style={{ padding: '20px 0' }}>
                  Invoice {invoiceNumber}
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
