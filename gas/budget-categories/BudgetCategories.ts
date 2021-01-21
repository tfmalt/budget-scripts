/**
 * Godt nytt år
 *
 * Calculates all the categories in one function
 *
 * @param {A1:C3} data of input
 * @return array of values
 * @customfunction
 */
function categories(data: Array<[string, number, number]>) {
  // console.log(typeof data, data.length);
  return data.map((r) => [category(r[0], r[1], r[2])]);
}

/**
 * Simple function to map descriptive fields automatically with categories.
 *
 * @param {desc} the desc to check for
 * @returns desc the correct category for the input desc
 * @customfunction
 */
function category(desc: string, expense: number = 0, income: number = 0): string {
  // console.log(`desc: ${desc}, exp: ${expense}, inc: ${income}`);

  // tilbakeføring
  if (desc.match(/tilbakeføring/i)) return 'tilbakeføring';
  if (desc.match(/kreditering/i)) return 'tilbakeføring';
  if (desc.match(/doc martens egenandel/i)) return 'tilbakeføring';
  if (desc.match(/tilbakebetaling utlegg/i)) return 'tilbakeføring';

  // julegaver
  if (desc.match(/julepresang/i)) return 'julegaver';
  if (desc.match(/julegaver/i)) return 'julegaver';
  if (desc.match(/7125 15.12 NOK 926.00 VIPPS.*KOMPLETT.NO/i)) return 'julegaver';
  if (desc.match(/21.12 Bank1 - Tveita.*0671 Oslo/i)) return expense == 1200 ? 'julegaver' : 'kontanter';
  if (desc.match(/22.12 Bank1 - Tveita.*0671 Oslo/i)) return expense == 400 ? 'julegaver' : 'kontanter';

  // julefeiring
  if (desc.match(/Gjermund Sveen/i)) return 'julefeiring';

  // dagligvarer
  if (desc.match(/MENY/i)) return 'dagligvarer';
  if (desc.match(/bunnpris/i)) return 'dagligvarer';
  if (desc.match(/coop/i)) return 'dagligvarer';
  if (desc.match(/DAGLIGVARE/i)) return 'dagligvarer';
  if (desc.match(/EUROPRIS/i)) return 'dagligvarer';
  if (desc.match(/EUROSPAR/i)) return 'dagligvarer';
  if (desc.match(/extra/i)) return 'dagligvarer';
  if (desc.match(/ICA SUPER/i)) return 'dagligvarer';
  if (desc.match(/joker teisen/i)) return 'dagligvarer';
  if (desc.match(/KARA IMPORT/i)) return 'dagligvarer';
  if (desc.match(/KIWI/i)) return 'dagligvarer';
  if (desc.match(/matvarer/i)) return 'dagligvarer';
  if (desc.match(/nille/i)) return 'dagligvarer';
  if (desc.match(/PRIX/i)) return 'dagligvarer';
  if (desc.match(/REMA/i)) return 'dagligvarer';
  if (desc.match(/RIMI/i)) return 'dagligvarer';
  if (desc.match(/sande meieri/i)) return 'dagligvarer';
  if (desc.match(/metro buga trygve lies/i)) return 'dagligvarer';
  if (desc.match(/manglerud frukt/i)) return 'dagligvarer';

  // helse
  if (desc.match(/helse/i)) return 'helse';
  if (desc.match(/apotek/i)) return 'helse';
  if (desc.match(/gastro poliklinikk/i)) return 'helse';
  if (desc.match(/AHUS/i)) return 'helse';
  if (desc.match(/NIMI.*AS/i)) return 'helse';
  if (desc.match(/STOROKLINIKKEN/i)) return 'helse';

  // aviser
  if (desc.match(/aftenposten/i)) return 'aviser';
  if (desc.match(/paypal.*newyorktime/i)) return 'aviser';
  if (desc.match(/paypal.*washpost/i)) return 'aviser';
  if (desc.match(/paypal.*ny.times/i)) return 'aviser';
  if (desc.match(/paypal.*guardiannew/i)) return 'aviser';

  // klær og sko
  if (desc.match(/xxl alna/i)) return 'klær og sko';
  if (desc.match(/www.stormberg.com/i)) return 'klær og sko';
  if (desc.match(/lindex/i)) return 'klær og sko';
  if (desc.match(/klær/i)) return 'klær og sko';
  if (desc.match(/H&M/i)) return 'klær og sko';
  if (desc.match(/fretex/i)) return 'klær og sko';
  if (desc.match(/euro ?sko/i)) return 'klær og sko';
  if (desc.match(/cubus/i)) return 'klær og sko';
  if (desc.match(/paypal.*fruugo/i)) return 'klær og sko';
  if (desc.match(/paypal.*zaful/i)) return 'klær og sko';
  if (desc.match(/paypal.*zalando/i)) return 'klær og sko';
  if (desc.match(/paypal.*princesspol/i)) return 'klær og sko';
  if (desc.match(/paypal.*bodymod/i)) return 'klær og sko';
  if (desc.match(/Nettgiro til.*Federal Expre Betalt.*22.12.20/)) return 'klær og sko';

  // Hus og hage
  if (desc.match(/plantasjen/i)) return 'hus og hage';
  if (desc.match(/maxbo/i)) return 'hus og hage';
  if (desc.match(/jernia/i)) return 'hus og hage';
  if (desc.match(/elkjoep/i)) return 'hus og hage';
  if (desc.match(/clas ohl/i)) return 'hus og hage';
  if (desc.match(/biltema/i)) return 'hus og hage';
  if (desc.match(/lovenskiold han/i)) return 'hus og hage';

  // hund
  if (desc.match(/1503.17.34573/i)) return 'hund';
  if (desc.match(/alnavet/i)) return 'hund';
  if (desc.match(/oslo dyrebutikk/i)) return 'hund';
  if (desc.match(/buddy tveita/i)) return 'hund';
  if (desc.match(/vipps.*cotrau/i)) return 'hund';
  if (desc.match(/cotrau groomin/i)) return 'hund';
  if (desc.match(/iZ.*Cotrau Grooming/i)) return 'hund';

  // kiosk
  if (desc.match(/7-?eleven/i)) return 'kiosk';
  if (desc.match(/deli de luca/i)) return 'kiosk';
  if (desc.match(/kiosk/i)) return 'kiosk';
  if (desc.match(/narvesen/i)) return 'kiosk';
  if (desc.match(/on the track/i)) return 'kiosk';
  if (desc.match(/DRONNINGVEIEN S/i)) return 'kiosk';

  // Internett
  if (desc.match(/paypal.*privateint/i)) return 'internett';
  if (desc.match(/domeneshop/i)) return 'internett';
  if (desc.match(/GET AS/i)) return 'internett';
  if (desc.match(/get a\.s\./i)) return 'internett';
  if (desc.match(/get/i) && expense == 539) return 'internett';
  if (desc.match(/Telia TV og int/i)) return 'internett';

  // Spill
  if (desc.match(/paypal.*steam games/i)) return 'spill';
  if (desc.match(/nintendo/i)) return 'spill';
  if (desc.match(/UBISOFT/i)) return 'spill';
  if (desc.match(/paypal.*playstation/i)) return 'spill';

  // parkering
  if (desc.match(/parkering/i)) return 'parkering';
  if (desc.match(/apcoa flow/i)) return 'parkering';
  if (desc.match(/paypal.*easypark/i)) return 'parkering';

  // lommepenger
  if (desc.match(/penger til sjampo/i)) return 'lommepenger';
  if (desc.match(/lommepenger/i)) return 'lommepenger';
  if (desc.match(/til.*martha brukskon/i)) return 'lommepenger';
  if (desc.match(/Nettgiro til: Malt Martha/i)) return 'lommepenger';
  if (desc.match(/overført til annen konto/i)) return expense == 180 ? 'lommepenger' : 'overføring';
  if (desc.match(/^nettbank$/i)) return expense == 180 ? 'lommepenger' : 'overføring';
  if (desc.match(/til.*annie therese videsjorden/i)) return 'lommepenger';

  // kiosk eller drivstoff
  if (desc.match(/yx sande/i)) return expense > 300 ? 'drivstoff' : 'kiosk';
  if (desc.match(/circle k/i)) return expense > 300 ? 'drivstoff' : 'kiosk';

  // drivstoff
  if (desc.match(/diesel/i)) return 'drivstoff';
  if (desc.match(/automat 1/i)) return 'drivstoff';
  if (desc.match(/UNO-X/i)) return 'drivstoff';

  // aktiviteter
  if (desc.match(/aktiviteter/i)) return 'aktiviteter';
  if (desc.match(/museum/i)) return 'aktiviteter';
  if (desc.match(/NEBBURSVOLLEN/i)) return 'aktiviteter';

  // hobby
  if (desc.match(/trg norge/i)) return 'hobby';
  if (desc.match(/flying tiger copenhagen/i)) return 'hobby';
  if (desc.match(/ark [a-z]/i)) return 'hobby';
  if (desc.match(/nøstet mitt/i)) return 'hobby';
  if (desc.match(/PANDURO KARL JOHANS/i)) return 'hobby';
  if (desc.match(/kjell.*company/i)) return 'hobby';
  if (desc.match(/PAYPAL.*SFE/i)) return 'hobby';

  // apper
  if (desc.match(/microsoft sto/i)) return 'apper';
  if (desc.match(/apple\.com/i)) return expense > 600 ? 'apple' : 'apper';
  if (desc.match(/paypal.*evernote/i)) return 'apper';
  if (desc.match(/itunes/i)) return 'apper';

  // Gaver
  if (desc.match(/til.*eira.*gunvor/i)) return 'gaver';
  if (desc.match(/til.*tord fredrik brinch malt/i)) return 'gaver';
  if (desc.match(/til.*jenny/i)) return 'gaver';
  if (desc.match(/til.*lars ivar næss/i)) return 'gaver';
  if (desc.match(/til.*anne ånstad/i)) return 'gaver';
  if (desc.match(/til.*jens gislason/i)) return 'gaver';
  if (desc.match(/til.*anders fredrik ulsaker malt/i)) return 'gaver';
  if (desc.match(/til.*martha elin ånstad malt/i)) return 'gaver';
  if (desc.match(/mester gr.nn/i)) return 'gaver';
  if (desc.match(/japan photo/i)) return 'gaver';
  if (desc.match(/gaver?/i)) return 'gaver';
  if (desc.match(/glitter/i)) return 'gaver';
  if (desc.match(/KICKS 616 TVEIT TVETENVEIEN/i)) return 'gaver';
  if (desc.match(/BLOMSTERSENTRET HEGDEHAUGSVE/i)) return 'gaver';

  // tannlege
  if (desc.match(/vitalmolar/i)) return 'tannlege';
  if (desc.match(/vitamolar/i)) return 'tannlege';

  // restaurant
  if (desc.match(/vipps.*postkon/i)) return 'restaurant';
  if (desc.match(/sit kafe/i)) return 'restaurant';
  if (desc.match(/restaurant/i)) return 'restaurant';
  if (desc.match(/postkontoret/i)) return 'restaurant';
  if (desc.match(/kaffebrenneriet/i)) return 'restaurant';
  if (desc.match(/hai sushi/i)) return 'restaurant';
  if (desc.match(/byteraffinerie/i)) return 'restaurant';
  if (desc.match(/bad bishop/i)) return 'restaurant';
  if (desc.match(/pub/i)) return 'restaurant';
  if (desc.match(/tijuana/i)) return 'restaurant';
  if (desc.match(/chopstix/i)) return 'restaurant';

  // bøker
  if (desc.match(/bok/i)) return 'bøker';
  if (desc.match(/bøker/i)) return 'bøker';
  if (desc.match(/bokhandel/i)) return 'bøker';
  if (desc.match(/amzn digital/i)) return 'bøker';
  if (desc.match(/kindle/i)) return 'bøker';

  // reise
  if (desc.match(/gbp [0-9]/i)) return 'reise';
  if (desc.match(/flybuss/i)) return 'reise';
  if (desc.match(/caffe ritazza/i)) return 'reise';
  if (desc.match(/vy app/i)) return 'reise';
  if (desc.match(/for goahead/i)) return 'reise';
  if (desc.match(/scandinavian ai/i)) return 'reise';
  if (desc.match(/sas airline/i)) return 'reise';
  if (desc.match(/flytoget/i)) return 'reise';

  // TV og Streaming
  if (desc.match(/paypal.*crunchyroll/i)) return 'tv og streaming';
  if (desc.match(/NETFLIX/i)) return 'tv og streaming';
  if (desc.match(/hbo.nordic/i)) return 'tv og streaming';
  if (desc.match(/amazon video/i)) return 'tv og streaming';
  if (desc.match(/NRK LISENS/i)) return 'tv og streaming';
  if (desc.match(/paypal.*disneyplus/i)) return 'tv og streaming';

  // Elektrisitet
  if (desc.match(/Hafslund/i)) return 'elektrisitet';
  if (desc.match(/FORTUM TELLIER/i)) return 'elektrisitet';
  if (desc.match(/Tibber/i)) return 'elektrisitet';

  // bankgebyr
  if (desc.match(/kostnader sms/i)) return 'bankgebyr';
  if (desc.match(/debetrente/i)) return 'bankgebyr';
  if (desc.match(/bankgebyr/i)) return 'bankgebyr';
  if (desc.match(/årsavgift bankkort/i)) return 'bankgebyr';

  // hytte
  if (desc.match(/obs bygg digernes/i)) return 'hytte';

  // ferie
  if (desc.match(/ferie/i)) return 'ferie';
  if (desc.match(/EIDE HANDEL FJORDVEIEN/i)) return 'ferie';

  // diverse
  if (desc.match(/til.*kristine westby/i)) return 'diverse';
  if (desc.match(/vipps.*posten.*norge/i)) return 'diverse';
  if (desc.match(/7125 09.12 NOK 15.00 POSTEN/i)) return 'diverse';

  // konfirmasjon
  if (desc.match(/HUMAN ETISK FOR/i)) return 'konfirmasjon';

  // kontanter
  if (desc.match(/kontanter/i)) return 'kontanter';
  if (desc.match(/NORDEA TVEITA LOBBY/i)) return 'kontanter';
  if (desc.match(/bank1 - Tveita/i)) return expense == 800 ? 'kontanter' : '';

  // drikkevarer
  if (desc.match(/VINMONOPO/i)) return 'drikkevarer';

  // møbler og interiør
  if (desc.match(/ikea/i)) return 'møbler og interiør';
  if (desc.match(/kid.*interiør/i)) return 'møbler og interiør';

  // Telefon
  if (desc.match(/TELENOR/i)) return 'telefon';
  if (desc.match(/teleregning/i)) return 'telefon';

  // ====================================================================
  // Usortert herfra
  if (desc.match(/^avtalegiro$/i)) return 'regning ukjent';
  if (desc.match(/KLARNA BANK AB/i)) return 'regning ukjent';
  if (desc.match(/^efaktura nettbank/i)) return 'regning ukjent';
  if (desc.match(/NETTGIRO/i)) return 'regning ukjent';

  if (desc.match(/barnetrygd/i)) return 'barnetrygd';
  if (desc.match(/bilkollektivet/i)) return 'bilkollektivet';
  if (desc.match(/biltur/i)) return 'bil';
  if (desc.match(/bilvask/i)) return 'bilservice';

  if (desc.match(/bonus/i)) return 'bonus';

  if (desc.match(/brilleland/i)) return 'briller';

  if (desc.match(/dutyfree/i)) return 'taxfree';
  if (desc.match(/filantropi/i)) return 'filantropi';
  if (desc.match(/Fjellinjen/i)) return 'bomringen';

  if (desc.match(/frisør/i)) return 'frisør';
  if (desc.match(/from .* to .*/i)) return 'overføring';

  if (desc.match(/husholdning/i)) return 'husholdning';

  if (desc.match(/IF SKADEFOR/i)) return 'forsikring';
  if (desc.match(/intersport/i)) return 'sportsutstyr';

  if (desc.match(/julefeiring/i)) return 'julefeiring';
  if (desc.match(/julekalender/i)) return 'julekalender';

  if (desc.match(/kantinekortet/i)) return 'lunsjpenger';
  if (desc.match(/kino/i)) return 'kino';

  if (desc.match(/kirsti/i)) return 'kirsti';
  if (desc.match(/kredittkort/i)) return 'kredittkort';
  if (desc.match(/leker/i)) return 'leker';
  if (desc.match(/linsevann/i)) return 'briller';
  if (desc.match(/^lån$/i)) return 'boliglån';

  if (desc.match(/matpenger/i)) return 'overføring';

  if (desc.match(/^nettbank$/i)) return 'overføring ukjent';

  if (desc.match(/Nohs Oslo/i)) return 'frisør';
  if (desc.match(/norges automobi/i)) return 'naf';
  if (desc.match(/NORLANDIA/i)) return 'barnehage';
  if (desc.match(/OBOS/i)) return 'obos';

  if (desc.match(/oslo sykkelverksted/i)) return 'sykkel';
  if (desc.match(/OSLO KOMMUNE/i)) return 'aktivitetsskole';
  if (desc.match(/overføring/i)) return 'overføring';

  if (desc.match(/penger til kollektiv/i)) return 'overføring';

  if (desc.match(/prince lunchbar/i)) return 'lunch thomas';

  if (desc.match(/ram thai/i)) return 'lunch thomas';

  if (desc.match(/RENTER/i)) return 'renter';

  if (desc.match(/santander consu/i)) return 'kredittkort';
  if (desc.match(/ruter/i)) return 'kollektivtransport';
  if (desc.match(/sayso/i)) return 'frisør';

  if (desc.match(/SKANDIABANKEN/i)) return 'boliglån';
  if (desc.match(/småting kjøpt/i)) return 'overføring';
  if (desc.match(/SOS-BARNEBYER/i)) return 'filantropi';
  if (desc.match(/Spareavtale/i)) return 'sparing';
  if (desc.match(/spotify/i)) return 'musikk';
  if (desc.match(/stiftelsen sos/i)) return 'filantropi';
  if (desc.match(/taxi/i)) return 'taxi';
  if (desc.match(/thomas/i)) return 'thomas';
  if (desc.match(/Til aksjedepot/i)) return 'sparing';
  if (desc.match(/til:97108091812/i)) return 'boliglån';

  if (desc.match(/vedhandel/i)) return 'ved';
  if (desc.match(/verdipapirhandel/i)) return 'sparing';

  return '';
}
