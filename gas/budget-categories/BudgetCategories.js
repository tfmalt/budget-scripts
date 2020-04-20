/**
 * Calculates all the categories in one function
 *
 * @param {A1:C3} data of input
 * @return array of values
 * @customfunction
 */
function categories(data) {
  console.log(typeof data, data.length);
  return data.map((r) => [category(r[0], r[1], r[2])]);
}

/**
 * Simple function to map descriptive fields automatically with categories.
 *
 * @param {desc} the desc to check for
 * @returns desc the correct category for the input desc
 * @customfunction
 */
function category(desc, expense = 0, income = 0) {
  console.log(`desc: ${desc}, exp: ${expense}, inc: ${income}`);

  if (desc.match(/1503.17.34573/i)) return 'hund';
  if (desc.match(/7-?eleven/i)) return 'kiosk';
  if (desc.match(/aftenposten/i)) return 'aviser';
  if (desc.match(/aktiviteter/i)) return 'aktiviteter';
  if (desc.match(/alnavet/i)) return 'hund';
  if (desc.match(/amazon video/i)) return 'tv og streaming';
  if (desc.match(/ark [a-z]/i)) return 'gaver';
  if (desc.match(/apotek/i)) return 'dagligvarer';
  if (desc.match(/apple\.com/i)) return 'apper';
  if (desc.match(/^avtalegiro$/i)) return 'regning ukjent';
  if (desc.match(/årsavgift bankkort/i)) return 'bankgebyr';
  if (desc.match(/bad bishop/i)) return 'restaurant';
  if (desc.match(/bankgebyr/i)) return 'bankgebyr';
  if (desc.match(/barnetrygd/i)) return 'barnetrygd';
  if (desc.match(/biltema/i)) return 'hus og hage';
  if (desc.match(/bilkollektivet/i)) return 'bilkollektivet';
  if (desc.match(/biltur/i)) return 'bil';
  if (desc.match(/bilvask/i)) return 'bilservice';
  if (desc.match(/bok/i)) return 'bøker';
  if (desc.match(/bøker/i)) return 'bøker';
  if (desc.match(/bokhandel/i)) return 'bøker';
  if (desc.match(/bonus/i)) return 'bonus';
  if (desc.match(/buddy tveita/i)) return 'hund';
  if (desc.match(/brilleland/i)) return 'briller';
  if (desc.match(/bunnpris/i)) return 'dagligvarer';
  if (desc.match(/byteraffinerie/i)) return 'restaurant';
  if (desc.match(/caffe ritazza/i)) return 'reise';
  if (desc.match(/clas ohl/i)) return 'hus og hage';
  if (desc.match(/circle k bryn/i)) return expense > 300 ? 'drivstoff' : 'kiosk';
  if (desc.match(/coop/i)) return 'dagligvarer';
  if (desc.match(/cubus/i)) return 'klær og sko';
  if (desc.match(/DAGLIGVARE/i)) return 'dagligvarer';
  if (desc.match(/dutyfree/i)) return 'taxfree';
  if (desc.match(/debetrente/i)) return 'bankgebyr';
  if (desc.match(/deli de luca/i)) return 'kiosk';
  if (desc.match(/diesel/i)) return 'drivstoff';
  if (desc.match(/domeneshop/i)) return 'internett';
  if (desc.match(/elkjoep/i)) return 'hus og hage';
  if (desc.match(/^efaktura nettbank/i)) return 'regning ukjent';
  if (desc.match(/euro ?sko/i)) return 'klær og sko';
  if (desc.match(/EUROPRIS/i)) return 'dagligvarer';
  if (desc.match(/EUROSPAR/i)) return 'dagligvarer';
  if (desc.match(/extra/i)) return 'dagligvarer';
  if (desc.match(/ferie/i)) return 'ferie';
  if (desc.match(/filantropi/i)) return 'filantropi';
  if (desc.match(/Fjellinjen/i)) return 'bomringen';
  if (desc.match(/flybuss/i)) return 'reise';
  if (desc.match(/fretex/i)) return 'klær og sko';
  if (desc.match(/frisør/i)) return 'frisør';
  if (desc.match(/from .* to .*/i)) return 'overføring';
  if (desc.match(/gaver?/i)) return 'gaver';
  if (desc.match(/GET AS/i)) return 'internett';
  if (desc.match(/get/i) && expense == 539) return 'internett';
  if (desc.match(/gbp [0-9]/i)) return 'reise';
  if (desc.match(/glitter/i)) return 'gaver';
  if (desc.match(/Hafslund/i)) return 'elektrisitet';
  if (desc.match(/hai sushi/i)) return 'restaurant';
  if (desc.match(/hbo.nordic/i)) return 'tv og streaming';
  if (desc.match(/helse/i)) return 'helse';
  if (desc.match(/husholdning/i)) return 'husholdning';
  if (desc.match(/ICA SUPER/i)) return 'dagligvarer';
  if (desc.match(/IF SKADEFOR/i)) return 'forsikring';
  if (desc.match(/ikea/i)) return 'møbler og interiør';
  if (desc.match(/intersport/i)) return 'sportsutstyr';
  if (desc.match(/itunes/i)) return 'apper';
  if (desc.match(/for goahead/i)) return 'reise';
  if (desc.match(/japan photo/i)) return 'gaver';
  if (desc.match(/joker teisen/i)) return 'dagligvarer';
  if (desc.match(/jernia/i)) return 'hus og hage';
  if (desc.match(/julefeiring/i)) return 'julefeiring';
  if (desc.match(/julegaver/i)) return 'julegaver';
  if (desc.match(/julekalender/i)) return 'julekalender';
  if (desc.match(/julepresang/i)) return 'julegaver';
  if (desc.match(/kaffebrenneriet/i)) return 'restaurant';
  if (desc.match(/KARA IMPORT/i)) return 'dagligvarer';
  if (desc.match(/kantinekortet/i)) return 'lunsjpenger';
  if (desc.match(/kino/i)) return 'kino';
  if (desc.match(/kiosk/i)) return 'kiosk';
  if (desc.match(/kirsti/i)) return 'kirsti';
  if (desc.match(/kjell.*company/i)) return 'elektronikk';
  if (desc.match(/KIWI/i)) return 'dagligvarer';
  if (desc.match(/klær/i)) return 'klær og sko';
  if (desc.match(/kontanter/i)) return 'kontanter';
  if (desc.match(/kostnader sms/i)) return 'bankgebyr';
  if (desc.match(/kredittkort/i)) return 'kredittkort';
  if (desc.match(/leker/i)) return 'leker';
  if (desc.match(/lindex/i)) return 'klær og sko';
  if (desc.match(/linsevann/i)) return 'briller';
  if (desc.match(/^lån$/i)) return 'boliglån';
  if (desc.match(/lommepenger/i)) return 'lommepenger';
  if (desc.match(/matpenger/i)) return 'overføring';
  if (desc.match(/matvarer/i)) return 'dagligvarer';
  if (desc.match(/maxbo/i)) return 'hus og hage';
  if (desc.match(/mester gr.nn/i)) return 'gaver';
  if (desc.match(/MENY/i)) return 'dagligvarer';
  if (desc.match(/museum/i)) return 'aktiviteter';
  if (desc.match(/narvesen/i)) return 'kiosk';
  if (desc.match(/NEBBURSVOLLEN/i)) return 'aktiviteter';
  if (desc.match(/NETFLIX/i)) return 'tv og streaming';
  if (desc.match(/^nettbank$/i)) return 'overføring ukjent';
  if (desc.match(/nille/i)) return 'dagligvarer';
  if (desc.match(/nintendo/i)) return 'spill';
  if (desc.match(/Nohs Oslo/i)) return 'frisør';
  if (desc.match(/norges automobi/i)) return 'NAF';
  if (desc.match(/NORLANDIA/i)) return 'barnehage';
  if (desc.match(/NRK LISENS/i)) return 'tv og streaming';
  if (desc.match(/OBOS/i)) return 'obos';
  if (desc.match(/on the track/i)) return 'kiosk';
  if (desc.match(/oslo dyrebutikk/i)) return 'hund';
  if (desc.match(/oslo sykkelverksted/i)) return 'sykkel';
  if (desc.match(/OSLO KOMMUNE/i)) return 'aktivitetsskole';
  if (desc.match(/overføring (til|fra)/i)) return 'overføring';
  if (desc.match(/overføring mellom/i)) return 'overføring';
  if (desc.match(/paypal.*princesspol/i)) return 'klær og sko';
  if (desc.match(/paypal.*bodymod/i)) return 'klær og sko';
  if (desc.match(/paypal.*evernote/i)) return 'apper';
  if (desc.match(/paypal.*fruugo/i)) return 'klær og sko';
  if (desc.match(/paypal.*steam games/i)) return 'spill';
  if (desc.match(/paypal.*newyorktime/i)) return 'aviser';
  if (desc.match(/paypal.*guardiannew/i)) return 'aviser';
  if (desc.match(/paypal.*crunchyroll/i)) return 'tv og streaming';
  if (desc.match(/paypal.*zalando/i)) return 'klær og sko';
  if (desc.match(/paypal.*privateint/i)) return 'internett';
  if (desc.match(/paypal.*playstation/i)) return 'spill';
  if (desc.match(/parkering/i)) return 'parkering';
  if (desc.match(/penger til kollektiv/i)) return 'overføring';
  if (desc.match(/penger til sjampo/i)) return 'lommepenger';
  if (desc.match(/plantasjen/i)) return 'hus og hage';
  if (desc.match(/postkontoret/i)) return 'restaurant';
  if (desc.match(/prince lunchbar/i)) return 'lunch thomas';
  if (desc.match(/PRIX/i)) return 'dagligvarer';
  if (desc.match(/pub/i)) return 'restaurant';
  if (desc.match(/ram thai/i)) return 'lunch thomas';
  if (desc.match(/REMA/i)) return 'dagligvarer';
  if (desc.match(/RENTER/i)) return 'renter';
  if (desc.match(/restaurant/i)) return 'restaurant';
  if (desc.match(/RIMI/i)) return 'dagligvarer';
  if (desc.match(/ruter/i)) return 'kollektivtransport';
  if (desc.match(/sande meieri/i)) return 'dagligvarer';
  if (desc.match(/santander consu/i)) return 'kredittkort';
  if (desc.match(/sayso/i)) return 'frisør';
  if (desc.match(/sit kafe/i)) return 'restaurant';
  if (desc.match(/SKANDIABANKEN/i)) return 'boliglån';
  if (desc.match(/småting kjøpt/i)) return 'overføring';
  if (desc.match(/SOS-BARNEBYER/i)) return 'filantropi';
  if (desc.match(/Spareavtale/i)) return 'sparing';
  if (desc.match(/spotify/i)) return 'musikk';
  if (desc.match(/stiftelsen sos/i)) return 'filantropi';
  if (desc.match(/taxi/i)) return 'taxi';
  if (desc.match(/TELENOR/i)) return 'telefon';
  if (desc.match(/thomas/i)) return 'thomas';
  if (desc.match(/Til aksjedepot/i)) return 'sparing';
  if (desc.match(/til:97108091812/i)) return 'boliglån';
  if (desc.match(/til.*eira.*gunvor/i)) return 'gaver';
  if (desc.match(/tilbakeføring/i)) return 'utlegg';
  if (desc.match(/trg norge/i)) return 'hobby';
  if (desc.match(/vedhandel/i)) return 'ved';
  if (desc.match(/verdipapirhandel/i)) return 'sparing';
  if (desc.match(/VINMONOPOLET/i)) return 'drikkevarer';
  if (desc.match(/vy app/i)) return 'reise';
  if (desc.match(/xxl alna/i)) return 'klær og sko';

  return '';
}

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name: 'Update Budget',
      functionName: 'updateBudget',
    },
    { name: 'Fetch Transactions', functionName: 'updateTransactions' },
  ];
  sheet.addMenu('malt.no', entries);
}
