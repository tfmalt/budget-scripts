/**
 * Godt nytt år
 *
 * Calculates all the categories in one function
 *
 * @param {A1:C3} data of input
 * @return array of values
 * @customfunction
 */
/* function categories(data: Array<[string, number, number]>) {
  console.log(typeof data, data.length);
  return data.map((r) => [category(r[0], r[1], r[2])]);
} */

/**
 * Simple function to map descriptive fields automatically with categories.
 *
 * @param {desc} the desc to check for
 * @returns desc the correct category for the input desc
 * @customfunction
 */
function category(options: CategoryOptions): string {
  const { date, desc, income, expense } = options;

  // Edith handler matvarer tilbakeføring
  if (date >= new Date('2023-02-20') && date <= new Date('2023-02-25')) {
    if (desc.match(/edith anna ånstad malt/i)) return 'dagligvarer';
  }

  // edith synsprøve
  if (date >= new Date('2023-03-01') && date <= new Date('2023-03-02')) {
    if (desc.match(/edith malt/i) && expense > 500) return 'briller';
  }

  // ferie 2022
  if (date >= new Date('2022-07-12') && date <= new Date('2022-07-22')) {
    if (desc.match(/Galleriet Kjopesen/i)) return 'ferieaktiviteter';
    if (desc.match(/Grieggarasjen/i)) return 'bilferie';
    if (desc.match(/SOLAVAGEN/i)) return 'bilferie';
    if (desc.match(/SOLAVAAGEN/i)) return 'bilferie';
    if (desc.match(/NYA.Bane Nor SF/i)) return 'ferieaktiviteter';
    if (desc.match(/STIFTELSEN LIND/i)) return 'severdigheter';
    if (desc.match(/NYA.Offentlig WC/i)) return 'ferieaktiviteter';
    if (desc.match(/KICKS 670 TORGT KIRKEGATEN/i)) return 'ferieaktiviteter';
    if (desc.match(/ROMØES I ROMSØE HAAKON VIISG STAVANGER/i)) return 'ferieaktiviteter';
    if (desc.match(/rema/i)) return 'feriemat';
    if (desc.match(/kiwi/i)) return 'feriemat';
    if (desc.match(/coop prix/i)) return 'feriemat';
    if (desc.match(/SPAR KJOP/i)) return 'ferieutstyr';
    if (desc.match(/klarna/i)) return 'ferieutstyr';
    if (desc.match(/CAMPING/i)) return 'camping';
    if (desc.match(/SOLSTRAND CAMPI/i)) return 'camping';
    if (desc.match(/Vipps.Solstrand Grill/i)) return 'camping';
    if (desc.match(/UNO-X/i)) return 'bilferie';
    if (desc.match(/CIRCLE K/i)) return 'bilferie';
    if (desc.match(/Vipps.Overnatting/i)) return 'overnatting';
    if (desc.match(/Martha brukskonto/i)) return 'ekstra lommepenger';
    if (desc.match(/Nettbank til: 9801.61.97645 Betalt/i)) return 'ekstra lommepenger';
  }

  if (desc.match(/sommerleir/i)) return 'ferieaktiviteter';
  if (desc.match(/checkin as/i)) return 'ferieaktiviteter';

  // tilbakeføring og inntekter
  if (income > 1) {
    if (desc.match(/rammelån/i)) return 'rammelån';
    if (desc.match(/fra.*elvia.*betalt/i)) return 'strømstøtte';
    if (desc.match(/tilbakeføring/i)) return 'tilbakeføring';
    if (desc.match(/feriepenger/i)) return 'feriepenger';
    if (desc.match(/kreditering/i)) return 'tilbakeføring';
    if (desc.match(/doc martens egenandel/i)) return 'tilbakeføring';
    if (desc.match(/tilbakebetaling utlegg/i)) return 'tilbakeføring';
    if (!desc.match(/thomas/i)) return 'tilbakeføring';
  }

  // Overføring
  if (desc.match(/penger til kollektiv/i)) return 'overføring';
  if (desc.match(/småting kjøpt/i)) return 'overføring';
  if (desc.match(/from .* to .*/i)) return 'overføring';
  if (desc.match(/matpenger/i)) return 'overføring';
  if (desc.match(/overføring/i)) return 'overføring';
  if (desc.match(/overførsel/i)) return 'overføring';
  if (desc.match(/from felles sparekonto/i)) return 'overføring';
  if (desc.match(/nettbank til: 9713.44.86531/i)) return 'overføring';

  if (desc.match(/^nettbank$/i)) return 'overføring ukjent';
  if (desc.match(/^Giro$/i)) return 'overføring ukjent';

  // julegaver
  if (desc.match(/gebyr vipps/i)) return 'julegaver';
  if (desc.match(/julepresang/i)) return 'julegaver';
  if (desc.match(/julegaver/i)) return 'julegaver';
  if (desc.match(/02.12 NOK 1773.41 PAYPAL.*POLAROID/i)) return 'julegaver';
  if (desc.match(/7125 15.12 NOK 926.00 VIPPS.*KOMPLETT.NO/i)) return 'julegaver';
  if (desc.match(/21.12 Bank1 - Tveita.*0671 Oslo/i)) return expense == 1200 ? 'julegaver' : 'kontanter';
  if (desc.match(/22.12 Bank1 - Tveita.*0671 Oslo/i)) return expense == 400 ? 'julegaver' : 'kontanter';
  if (desc.match(/paypal.*paperlike/i)) return date.getMonth() == 11 ? 'julegaver' : 'datautstyr';
  if (desc.match(/outland as grensen/i)) return date.getMonth() == 11 ? 'julegaver' : 'bøker';
  if (desc.match(/norli/i)) return date.getMonth() == 11 ? 'julegaver' : 'bøker';
  if (desc.match(/carl heftye/i)) return date.getMonth() == 11 ? 'julegaver' : 'dagligvarer';
  if (desc.match(/NO1089 jernbanetorg/i)) return date.getMonth() == 11 ? 'julegaver' : 'hus og hage';
  if (desc.match(/kitchn tveita/i)) return date.getMonth() == 11 ? 'julegaver' : 'hus og hage';
  if (desc.match(/dhl express/i)) return date.getMonth() == 11 ? 'julegaver' : 'hus og hage';
  if (desc.match(/body shop tveit/i)) return date.getMonth() == 11 ? 'julegaver' : 'hus og hage';

  // julefeiring
  if (desc.match(/Gjermund Sveen/i)) return 'julefeiring';

  // dagligvarer
  if (desc.match(/MENY/i)) return 'dagligvarer';
  if (desc.match(/bunnpris/i)) return 'dagligvarer';
  if (desc.match(/coop mega storo/i)) return 'dagligvarer';
  if (desc.match(/www coop no/i)) return 'dagligvarer';
  if (desc.match(/obs alnabru/i)) return 'dagligvarer';
  if (desc.match(/DAGLIGVARE/i)) return 'dagligvarer';
  if (desc.match(/EUROPRIS/i)) return 'dagligvarer';
  if (desc.match(/EUROSPAR/i)) return 'dagligvarer';
  if (desc.match(/extra/i)) return 'dagligvarer';
  if (desc.match(/ICA SUPER/i)) return 'dagligvarer';
  if (desc.match(/joker/i)) return 'dagligvarer';
  if (desc.match(/KARA IMPORT/i)) return 'dagligvarer';
  if (desc.match(/KIWI/i)) return 'dagligvarer';
  if (desc.match(/matvarer/i)) return 'dagligvarer';
  if (desc.match(/nille/i)) return 'dagligvarer';
  if (desc.match(/PRIX/i)) return 'dagligvarer';
  if (desc.match(/REMA/i)) return 'dagligvarer';
  if (desc.match(/RIMI/i)) return 'dagligvarer';
  if (desc.match(/MFG AVD FURUSET/i)) return 'dagligvarer';
  if (desc.match(/sande meieri/i)) return 'dagligvarer';
  if (desc.match(/metro buga trygve lies/i)) return 'dagligvarer';
  if (desc.match(/manglerud frukt/i)) return 'dagligvarer';
  if (desc.match(/w b samson/i)) return 'dagligvarer';
  if (desc.match(/NO\d+/i)) return 'dagligvarer';
  if (desc.match(/normal oslo/i)) return 'dagligvarer';
  if (desc.match(/oda.com/i)) return 'dagligvarer';

  // helse
  if (desc.match(/helse/i)) return 'helse';
  if (desc.match(/zolva/i)) return 'helse';
  if (desc.match(/apotek/i)) return 'helse';
  if (desc.match(/gastro poliklinikk/i)) return 'helse';
  if (desc.match(/AHUS/i)) return 'helse';
  if (desc.match(/vita 1108/i)) return 'helse';
  if (desc.match(/DKS SKI/i)) return 'helse';
  if (desc.match(/NIMI.*AS/i)) return 'helse';
  if (desc.match(/STOROKLINIKKEN/i)) return 'helse';
  if (desc.match(/MAMMOGRAFIPROGR TRONDHEIMSVE/i)) return 'helse';
  if (desc.match(/Convene Collect/i)) return 'helse';
  if (desc.match(/riks sognsvannsvn/i)) return 'helse';
  if (desc.match(/centrum fastleg rosenkrantz/i)) return 'helse';
  if (desc.match(/unilabs røntgen/i)) return 'helse';
  if (desc.match(/KARKIRURGI POL/i)) return 'helse';
  if (desc.match(/Oslo Legevakt/i)) return 'helse';
  if (desc.match(/vitamin torg/i)) return 'helse';
  if (desc.match(/riverty norway/i)) return 'helse';

  // aviser
  if (desc.match(/aftenposten/i)) return 'aviser';
  if (desc.match(/morgenbladet/i)) return 'aviser';
  if (desc.match(/paypal.*newyorktime/i)) return 'aviser';
  if (desc.match(/paypal.*washpost/i)) return 'aviser';
  if (desc.match(/paypal.*ny.times/i)) return 'aviser';
  if (desc.match(/paypal.*guardiannew/i)) return 'aviser';
  if (desc.match(/vipps.*dagens naeringsliv/i)) return 'aviser';

  // kollektivtransport
  if (desc.match(/ruter/i)) return 'kollektivtransport';
  if (desc.match(/ruter/i)) return 'kollektivtransport';
  if (desc.match(/entur/i)) return 'kollektivtransport';

  // klær og sko
  if (desc.match(/xxl alna/i)) return 'klær og sko';
  if (desc.match(/xxl nor/i)) return 'klær og sko';
  if (desc.match(/dressmann/i)) return 'klær og sko';
  if (desc.match(/boys tveita/i)) return 'klær og sko';
  if (desc.match(/klarna.*xxl no/i)) return 'klær og sko';
  if (desc.match(/www.stormberg.com/i)) return 'klær og sko';
  if (desc.match(/lindex/i)) return 'klær og sko';
  if (desc.match(/klær/i)) return 'klær og sko';
  if (desc.match(/H&M/i)) return 'klær og sko';
  if (desc.match(/hm stroemmen storsenter/i)) return 'klær og sko';
  if (desc.match(/fretex/i)) return 'klær og sko';
  if (desc.match(/euro ?sko/i)) return 'klær og sko';
  if (desc.match(/cubus/i)) return 'klær og sko';
  if (desc.match(/paypal.*fruugo/i)) return 'klær og sko';
  if (desc.match(/paypal.*zaful/i)) return 'klær og sko';
  if (desc.match(/paypal.*zalando/i)) return 'klær og sko';
  if (desc.match(/paypal.*princesspol/i)) return 'klær og sko';
  if (desc.match(/paypal.*revoltenter/i)) return 'klær og sko';
  if (desc.match(/paypal.*bodymod/i)) return 'klær og sko';
  if (desc.match(/paypal.*shein com/i)) return 'klær og sko';
  if (desc.match(/Nettgiro til.*Federal Expre Betalt.*22.12.20/)) return 'klær og sko';
  if (desc.match(/b\-young/i)) return 'klær og sko';
  if (desc.match(/Til.*Anna Volagura/i)) return 'klær og sko';
  if (desc.match(/tveita rens/i)) return 'klær og sko';
  if (desc.match(/svea finans nuf/i)) return 'klær og sko';
  if (desc.match(/jk barber shop/i)) return 'klær og sko';
  if (desc.match(/paypal.*beautycosap/i)) return 'klær og sko';
  if (desc.match(/paypal.*wickedragon/i)) return 'klær og sko';
  if (desc.match(/spar kjop metro/i)) return 'klær og sko';
  if (desc.match(/skorep as/i)) return 'klær og sko';
  if (desc.match(/match tveita/i)) return 'klær og sko';
  if (desc.match(/zizzi tveita/i)) return 'klær og sko';
  if (desc.match(/bogerud tekstil/i)) return 'klær og sko';

  if (date >= new Date('2023-04-15') && date <= new Date('2023-04-20')) {
    if (expense == 3264.2) {
      if (desc.match(/klarna/i)) return 'klær og sko';
    }
    if (expense == 1199) {
      if (desc.match(/klarna/i)) return 'hund';
    }
  }

  // Hus og hage - etc
  if (desc.match(/plantasjen/i)) return 'hus og hage';
  if (desc.match(/maxbo/i)) return 'hus og hage';
  if (desc.match(/jula triaden/i)) return 'hus og hage';
  if (desc.match(/jernia/i)) return 'hus og hage';
  if (desc.match(/jysk/i)) return 'hus og hage';
  if (desc.match(/clas ohl/i)) return 'hus og hage';
  if (desc.match(/clasohlson/i)) return 'hus og hage';
  if (desc.match(/biltema/i)) return 'hus og hage';
  if (desc.match(/lovenskiold han/i)) return 'hus og hage';
  if (desc.match(/amundsen blomst/i)) return 'hus og hage';
  if (desc.match(/amundsens bloms/i)) return 'hus og hage';
  if (desc.match(/TILBORDS TVEITA ANNA ROGSTAD OSLO/i)) return 'hus og hage';
  if (desc.match(/LAMPEHUSET/i)) return 'hus og hage';
  if (desc.match(/husholdning/i)) return 'hus og hage';
  if (desc.match(/no1019/i)) return 'hus og hage';
  if (desc.match(/coop obs bygg alnabru/i)) return 'hus og hage';
  if (desc.match(/coop obs bygg/i)) return 'hus og hage';
  if (desc.match(/nets.*parkett/i)) return 'hus og hage';

  // vedlikehold
  if (desc.match(/elektro.siver/i)) return 'vedlikehold';
  if (desc.match(/FARGERIKE ALNAB/i)) return 'vedlikehold';
  if (desc.match(/lønn for maling/i)) return 'vedlikehold';
  if (desc.match(/Glass-Service Svendsen Og Sønn/i)) return 'vedlikehold';

  // hund
  if (desc.match(/1503.17.34573/i)) return 'hund';
  if (desc.match(/alnavet/i)) return 'hund';
  if (desc.match(/oslo dyrebutikk/i)) return 'hund';
  if (desc.match(/petxl/i)) return 'hund';
  if (desc.match(/buddy tveita/i)) return 'hund';
  if (desc.match(/vipps.*cotrau/i)) return 'hund';
  if (desc.match(/cotrau groomin/i)) return 'hund';
  if (desc.match(/hundeklipp/i)) return 'hund';
  if (desc.match(/iZ.*Cotrau Grooming/i)) return 'hund';
  if (desc.match(/DOGGYSTYLE/i)) return 'hund';
  if (desc.match(/faste utgifter hund/i)) return 'hund';

  // kiosk
  if (desc.match(/7-?eleven/i)) return 'kiosk';
  if (desc.match(/deli de luca/i)) return 'kiosk';
  if (desc.match(/kiosk/i)) return 'kiosk';
  if (desc.match(/narvesen/i)) return 'kiosk';
  if (desc.match(/on the track/i)) return 'kiosk';
  if (desc.match(/DRONNINGVEIEN S/i)) return 'kiosk';
  if (desc.match(/Anders Rønning Dahlen/i)) return 'kiosk';
  if (desc.match(/bit osl gardermoen/i)) return 'kiosk';
  if (desc.match(/mix tveita/i)) return 'kiosk';
  if (desc.match(/backstube/i)) return 'kiosk';

  // Internett
  if (desc.match(/paypal.*privateint/i)) return 'internett';
  if (desc.match(/paypal.*GOOGLE GOOGLE/i)) return 'internett';
  if (desc.match(/domeneshop/i)) return 'internett';
  if (desc.match(/GET AS/i)) return 'internett';
  if (desc.match(/get a\.s\./i)) return 'internett';
  if (desc.match(/get/i) && expense == 539) return 'internett';
  if (desc.match(/Telia.*TV og int/i)) return 'internett';

  // Spill
  if (desc.match(/paypal.*steam games/i)) return 'spill';
  if (desc.match(/paypal.*iracingcomm/i)) return 'spill';
  if (desc.match(/paypal.*racesimstud/i)) return 'spill';
  if (desc.match(/paypal.*nicolasguil/i)) return 'spill';
  if (desc.match(/paypal.*rd bv/i)) return 'spill';
  if (desc.match(/paypal.*itch io/i)) return 'spill';
  if (desc.match(/paypal.*patreonirel/i)) return 'spill';

  if (desc.match(/paypal.*facebook/i)) return 'spill';
  if (desc.match(/nintendo/i)) return 'spill';
  if (desc.match(/UBISOFT/i)) return 'spill';
  if (desc.match(/paypal.*playstation/i)) return 'spill';
  if (desc.match(/steamgames/i)) return 'spill';

  // parkering
  if (desc.match(/parkering/i)) return 'parkering';
  if (desc.match(/apcoa flow/i)) return 'parkering';
  if (desc.match(/apcoa p/i)) return 'parkering';
  if (desc.match(/kredinor as/i)) return 'parkering';
  if (desc.match(/paypal.*easypark/i)) return 'parkering';
  if (desc.match(/arvato finance/i)) return 'parkering';

  // lommepenger
  if (desc.match(/penger til sjampo/i)) return 'lommepenger';
  if (desc.match(/lommepenger/i)) return 'lommepenger';
  if (desc.match(/tentamen/i)) return 'lommepenger';
  if (desc.match(/til.*martha brukskon/i)) return 'lommepenger';
  if (desc.match(/til.*martha malt/i)) return 'lommepenger';
  if (desc.match(/til.*edith malt/i)) return 'lommepenger';
  if (desc.match(/Nettgiro til: Malt Martha/i)) return 'lommepenger';
  if (desc.match(/overført til annen konto/i)) return expense == 180 ? 'lommepenger' : 'overføring';
  if (desc.match(/^nettbank$/i)) return expense == 180 ? 'lommepenger' : 'overføring';
  if (desc.match(/til.*annie therese videsjorden/i)) return 'lommepenger';
  if (desc.match(/vipps.*martha elin anstad/i)) return 'lommepenger';
  if (desc.match(/vipps.*edith anna anstad/i)) return 'lommepenger';
  if (desc.match(/nettbank til.*9801.61.97645/i)) return 'lommepenger';
  if (desc.match(/Til: Silje Isabelle/i)) return 'lommepenger';
  if (desc.match(/Til: Ella Lyche/i)) return 'lommepenger';
  if (desc.match(/Til: Julie Rekstad/i)) return 'lommepenger';
  if (desc.match(/Til: Edith Anna Ånstad Malt/i)) return 'lommepenger';
  if (desc.match(/Til: Camilla Godø Krohn/i)) return 'lommepenger';
  if (desc.match(/pinger/i)) return 'lommepenger';

  // kiosk eller drivstoff
  if (desc.match(/yx sande/i)) return expense > 300 ? 'drivstoff' : 'kiosk';
  if (desc.match(/circle k/i)) return expense > 300 ? 'drivstoff' : 'kiosk';
  if (desc.match(/shell/i)) return expense > 300 ? 'drivstoff' : 'kiosk';

  // drivstoff
  if (desc.match(/diesel/i)) return 'drivstoff';
  if (desc.match(/best ulvsvåg 55 best/i)) return 'drivstoff';
  if (desc.match(/automat 1/i)) return 'drivstoff';
  if (desc.match(/UNO-X/i)) return 'drivstoff';
  if (desc.match(/esso tveita/i)) return 'drivstoff';

  // førerkort
  if (desc.match(/vipps.tabs/i)) return 'førerkort';

  // aktiviteter
  if (desc.match(/aktiviteter/i)) return 'aktiviteter';
  if (desc.match(/oslo mdg/i)) return 'aktiviteter';
  if (desc.match(/mdg butikk/i)) return 'aktiviteter';
  if (desc.match(/museum/i)) return 'aktiviteter';
  if (desc.match(/Nettgiro til.*Su Betalt/i)) return 'aktiviteter';
  if (desc.match(/NEBBURSVOLLEN/i)) return 'aktiviteter';
  if (desc.match(/billettservice as/i)) return 'aktiviteter';
  if (desc.match(/kulturetaten/i)) return 'aktiviteter';
  if (desc.match(/paypal.*billettserv/i)) return 'aktiviteter';
  if (desc.match(/glenn.sverre.gulbrandsen/i)) return 'aktiviteter';
  if (desc.match(/stiftelsen nasj/i)) return 'aktiviteter';

  // hobby
  if (desc.match(/trg norge/i)) return 'hobby';
  if (desc.match(/flying tiger copenhagen/i)) return 'hobby';
  if (desc.match(/nøstet mitt/i)) return 'hobby';
  if (desc.match(/PANDURO/i)) return 'hobby';
  if (desc.match(/kjell.*company/i)) return 'hobby';
  if (desc.match(/PAYPAL.*SFE/i)) return 'hobby';
  if (desc.match(/STOFF OG STIL/i)) return 'hobby';
  if (desc.match(/MINGZHANXIN/i)) return 'hobby';
  if (desc.match(/knapper og garn/i)) return 'hobby';

  // apper
  if (desc.match(/microsoft sto/i)) return 'apper';
  if (desc.match(/paypal.*microsoft/i)) return 'apper';
  if (desc.match(/apple\.com/i)) return expense > 600 ? (date.getMonth() == 11 ? 'julegaver' : 'apple') : 'apper';
  if (desc.match(/paypal.*evernote/i)) return 'apper';
  if (desc.match(/paypal.*adblock/i)) return 'apper';
  if (desc.match(/itunes/i)) return 'apper';

  // Gaver
  if (desc.match(/til.*eira.*gunvor/i)) return date.getMonth() == 11 ? 'julegaver' : 'gaver';
  if (desc.match(/til.*tord fredrik brinch malt/i)) return date.getMonth() == 11 ? 'julegaver' : 'gaver';
  if (desc.match(/til.*jenny/i)) return date.getMonth() == 11 ? 'julegaver' : 'gaver';
  if (desc.match(/til.*lars ivar næss/i)) return 'gaver';
  if (desc.match(/til.*bård enok singstad/i)) return 'gaver';
  if (desc.match(/til.*anne ånstad/i)) return 'gaver';
  if (desc.match(/til.*jens gislason/i)) return 'gaver';
  if (desc.match(/Til.*Brikt Kåre Dahl/i)) return 'gaver';
  if (desc.match(/til.*anders fredrik ulsaker malt/i)) return 'gaver';
  if (desc.match(/til.*martha elin ånstad malt/i))
    return expense >= 1000 ? (date.getMonth() == 11 ? 'julegaver' : 'gaver') : 'lommepenger';
  if (desc.match(/vipps.*brikt kare dahl/i)) return 'gaver';
  if (desc.match(/mester gr.nn/i)) return 'gaver';
  if (desc.match(/japan photo/i)) return 'gaver';
  if (desc.match(/glitter/i)) return 'gaver';
  if (desc.match(/parfymejentene/i)) return 'gaver';
  if (desc.match(/KICKS 616 TVEIT TVETENVEIEN/i)) return 'gaver';
  if (desc.match(/BLOMSTERSENTRET HEGDEHAUGSVE/i)) return 'gaver';
  if (desc.match(/skapemer/i)) return 'gaver';
  if (desc.match(/bjørklund tveit/i)) return date.getMonth() == 11 ? 'julegaver' : 'gaver';
  if (desc.match(/gave martha/i)) return 'gaver';
  // if (desc.match(/olsens enke san/i)) return 'gaver';

  // tannlege
  if (desc.match(/vitalmolar/i)) return 'tannlege';
  if (desc.match(/vitamolar/i)) return 'tannlege';
  if (desc.match(/tannlege/i)) return 'tannlege';
  if (desc.match(/festningen tann/i)) return 'tannlege';

  // restaurant
  if (desc.match(/vipps.*postkon/i)) return 'restaurant';
  if (desc.match(/sit kafe/i)) return 'restaurant';
  if (desc.match(/restaurant/i)) return 'restaurant';
  if (desc.match(/fridtjof oslo/i)) return 'restaurant';
  if (desc.match(/postkontoret/i)) return 'restaurant';
  if (desc.match(/kaffebrenneriet/i)) return 'restaurant';
  if (desc.match(/hai sushi/i)) return 'restaurant';
  if (desc.match(/sushi.*asian tv/i)) return 'restaurant';
  if (desc.match(/byteraffinerie/i)) return 'restaurant';
  if (desc.match(/bad bishop/i)) return 'restaurant';
  if (desc.match(/pub/i)) return 'restaurant';
  if (desc.match(/tijuana/i)) return 'restaurant';
  if (desc.match(/chopstix/i)) return 'restaurant';
  if (desc.match(/dominos/i)) return 'restaurant';
  if (desc.match(/appless.no/i)) return 'restaurant';
  if (desc.match(/o learys order at tab/i)) return 'restaurant';
  if (desc.match(/scandic.*contine/i)) return 'restaurant';
  if (desc.match(/sundvolden hotel/i)) return 'restaurant';
  if (desc.match(/ordr kurs/i)) return 'restaurant';
  if (desc.match(/cafe sjarm/i)) return 'restaurant';
  if (desc.match(/iss.*ulle kirkeveien/i)) return 'restaurant';
  if (desc.match(/cafe amsterdam/i)) return 'restaurant';
  if (desc.match(/grunerhaven/i)) return 'restaurant';
  if (desc.match(/granavolden/i)) return 'restaurant';
  if (desc.match(/gamle munch kaffebar/i)) return 'restaurant';

  // utlegg på restaurant
  if (desc.match(/SUDOEST RESTAURA/i)) return expense > 4000 ? 'utlegg' : 'restaurant';
  if (desc.match(/bestekompis as/i)) return expense > 4000 ? 'utlegg' : 'restaurant';

  // utlegg
  if (desc.match(/stockholm fisk/i)) return 'utlegg';
  if (desc.match(/LAKRIDS BY JOHAN BUELOW/i)) return 'utlegg';

  // bøker
  if (desc.match(/bok/i)) return 'bøker';
  if (desc.match(/bøker/i)) return 'bøker';
  if (desc.match(/bokhandel/i)) return 'bøker';
  if (desc.match(/amzn digital/i)) return 'bøker';
  if (desc.match(/amzn mktp/i)) return 'bøker';
  if (desc.match(/kindle/i)) return 'bøker';

  // reise
  if (desc.match(/gbp \d+/i)) return 'reise';
  if (desc.match(/EUR \d+/i)) return 'reise';
  if (desc.match(/flybuss/i)) return 'reise';
  if (desc.match(/oslekspressen/i)) return 'reise';
  if (desc.match(/caffe ritazza/i)) return 'reise';
  if (desc.match(/vy.?app/i)) return 'reise';
  if (desc.match(/vy\.no/i)) return 'reise';
  if (desc.match(/for goahead/i)) return 'reise';
  if (desc.match(/scandinavian ai/i)) return 'reise';
  if (desc.match(/sas airline/i)) return 'reise';
  if (desc.match(/flytoget/i)) return 'reise';
  if (desc.match(/the thief/i)) return 'reise';
  if (desc.match(/parken 501/i)) return 'reise';
  if (desc.match(/fiskeriet 1914/i)) return 'reise';
  if (desc.match(/quality fredrik/i)) return 'reise';
  if (desc.match(/flyr as/i)) return 'reise';
  if (desc.match(/flyr.no/i)) return 'reise';
  if (desc.match(/dsb kastrup/i)) return 'reise';
  if (desc.match(/lagkagehuset/i)) return 'reise';
  if (desc.match(/inflight services norwegi/i)) return 'reise';
  if (desc.match(/oslo lufth/i)) return 'reise';
  if (desc.match(/db fernverk/i)) return 'reise';
  if (desc.match(/s-bahn berlin/i)) return 'reise';
  if (desc.match(/osl garderm edvard munch/i)) return 'reise';
  if (desc.match(/DFDS Danmark/i)) return 'reise';
  if (desc.match(/DFDS crown of scandinavia/i)) return 'reise';

  // ferie
  if (desc.match(/ferie/i)) return 'ferie';
  if (desc.match(/EIDE HANDEL FJORDVEIEN/i)) return 'ferie';
  if (desc.match(/saama golden kebab/i)) return 'ferie';
  if (desc.match(/boreal sjø as/i)) return 'ferie';
  if (desc.match(/ellingsgården/i)) return 'ferie';
  if (desc.match(/balsfjord arb/i)) return 'ferie';
  if (desc.match(/fjord1 ferdamat/i)) return 'ferie';
  if (desc.match(/storforsen camping/i)) return 'ferie';
  if (desc.match(/tysfjord turistsenter/i)) return 'ferie';
  if (desc.match(/ellingsgaarden/i)) return 'ferie';
  if (desc.match(/nidaros domkirk/i)) return 'ferie';
  if (desc.match(/mcd 009 trondhe/i)) return 'ferie';
  if (desc.match(/revelveien 1 mo i rana/i)) return 'ferie';
  if (desc.match(/svenningdal camping/i)) return 'ferie';
  if (desc.match(/ulvsvaag gjestgiveri/i)) return 'ferie';
  if (desc.match(/thn catering kirkegata/i)) return 'ferie';
  if (desc.match(/theodosakis theodoros/i)) return 'ferie';
  if (desc.match(/funkys/i)) return 'ferie';
  if (desc.match(/chania/i)) return 'ferie';
  if (desc.match(/yioi v. balantinou/i)) return 'ferie';
  if (desc.match(/general stores shop/i)) return 'ferie';
  if (desc.match(/N ARCHAIOL MOUSEIO CHA/i)) return 'ferie';
  if (desc.match(/kadewe/i)) return 'ferie';
  if (desc.match(/novasol/i)) return 'ferie';
  if (desc.match(/GALERIA Karlsruhe/i)) return 'ferie';
  if (desc.match(/lidl dienst/i)) return 'ferie';
  if (date > new Date('2023-05-01') && date < new Date('2023-05-03')) {
    if (desc.match(/til: kirsti ånstad/i)) return 'ferie';
  }
  if (date > new Date('2023-05-14') && date < new Date('2023-05-16')) {
    if (desc.match(/Til: KLARNA BANK AB Betalt: 14.05.23/i)) return 'ferie';
  }

  // TV og Streaming
  if (desc.match(/paypal.*crunchyroll/i)) return 'tv og streaming';
  if (desc.match(/NETFLIX/i)) return 'tv og streaming';
  if (desc.match(/www.f1.com/i)) return 'tv og streaming';
  if (desc.match(/hbo.nordic/i)) return 'tv og streaming';
  if (desc.match(/amazon video/i)) return 'tv og streaming';
  if (desc.match(/NRK LISENS/i)) return 'tv og streaming';
  if (desc.match(/paypal.*disneyplus/i)) return 'tv og streaming';
  if (desc.match(/PAYPAL.*WALTDISNEYC/i)) return 'tv og streaming';
  if (desc.match(/usd.*audible/i)) return 'tv og streaming';
  if (desc.match(/audible uk/i)) return 'tv og streaming';
  if (desc.match(/paypal.*motorsport/i)) return 'tv og streaming';

  // Elektrisitet
  if (desc.match(/Hafslund/i)) return 'elektrisitet';
  if (desc.match(/FORTUM TELLIER/i)) return 'elektrisitet';
  if (desc.match(/Tibber/i)) return 'elektrisitet';
  if (desc.match(/faste utgifter elektrisitet/i)) return 'elektrisitet';
  if (desc.match(/elektrisitet/i)) return 'elektrisitet';

  // bankgebyr
  if (desc.match(/kostnader sms/i)) return 'bankgebyr';
  if (desc.match(/debetrente/i)) return 'bankgebyr';
  if (desc.match(/bankgebyr/i)) return 'bankgebyr';
  if (desc.match(/årsavgift bankkort/i)) return 'bankgebyr';

  // hytte
  if (desc.match(/obs bygg digernes/i)) return 'hytte';
  if (desc.match(/olsens enke san/i)) return 'hytte';
  if (desc.match(/spar kjøp diger/i)) return 'hytte';

  // diverse
  if (desc.match(/til.*kristine westby/i)) return 'diverse';
  if (desc.match(/vipps.*posten.*norge/i)) return 'diverse';
  if (desc.match(/7125 09.12 NOK 15.00 POSTEN/i)) return 'diverse';
  if (desc.match(/grønland politi/i)) return 'diverse';
  if (desc.match(/skatteetaten/i)) return 'diverse';
  if (desc.match(/KLARNA BANK AB/i)) return 'diverse';

  // kontanter
  if (desc.match(/kontanter/i)) return 'kontanter';
  if (desc.match(/NORDEA TVEITA LOBBY/i)) return 'kontanter';
  if (desc.match(/bank1 - Tveita/i)) return expense >= 800 ? 'kontanter' : 'lommepenger';

  // drikkevarer
  if (desc.match(/VINMONOPO/i)) return 'drikkevarer';

  // møbler og interiør
  if (desc.match(/ikea/i)) return 'møbler og interiør';
  if (desc.match(/sostrene grene/i)) return 'møbler og interiør';
  if (desc.match(/skousen.no/i)) return 'møbler og interiør';
  if (desc.match(/kid.*interiør/i)) return 'møbler og interiør';
  if (desc.match(/elkjoep/i)) return 'møbler og interiør';
  if (desc.match(/elkjøp alna/i)) {
    if (expense === 239) return 'datautstyr';
    return 'møbler og interiør';
  }

  // Telefon
  if (desc.match(/TELENOR/i)) return 'telefon';
  if (desc.match(/teleregning/i)) return 'telefon';

  // barnetrygd
  if (desc.match(/barnetrygd/i)) return 'barnetrygd';

  // aktivitetsskole - skole
  if (desc.match(/oslo kommune/i)) return 'skole';
  if (desc.match(/skoleutstyr/i)) return 'skole';
  if (desc.match(/utdanningsetaten/i)) return 'skole';
  if (desc.match(/Lasse Feyling-Gruber/i)) return 'skole';
  if (desc.match(/Leif Inge Dahl Thom/i)) return 'skole';

  // Filantropi
  if (desc.match(/stiftelsen sos/i)) return 'filantropi';
  if (desc.match(/filantropi/i)) return 'filantropi';
  if (desc.match(/SOS-BARNEBYER/i)) return 'filantropi';
  if (desc.match(/vipps.bidra/i)) return 'filantropi';
  if (desc.match(/vipps.spleis/i)) return 'filantropi';
  if (desc.match(/bidra\.no/i)) return 'filantropi';

  // boliglån
  if (desc.match(/^lån$/i)) return 'boliglån';
  if (desc.match(/SKANDIABANKEN/i)) return 'boliglån';
  if (desc.match(/til:97108091812/i)) return 'boliglån';
  if (desc.match(/Til:97138810511/i)) return 'boliglån';
  if (desc.match(/Nettbank til: 9801.52.61633 Betalt: 09.01.23/i)) return 'boliglån';
  if (desc.match(/Nettbank til: 9803.10.01277/i)) return 'rammelån';
  if (desc.match(/Nettbank fra: THOMAS FREDRIK MALT Betalt: 19.02.23/i)) return 'rammelån';
  if (desc.match(/rammelån/i)) return 'rammelån';
  if (desc.match(/fra buffer til ramme/i)) return 'rammelån';

  // sparing
  if (desc.match(/Spareavtale/i)) return 'sparing';
  if (desc.match(/Til aksjedepot/i)) return 'sparing';
  if (desc.match(/verdipapirhandel/i)) return 'sparing';
  if (desc.match(/.*sparing/i)) return 'sparing';

  // Thomas
  if (desc.match(/thomas/i)) return 'thomas';
  if (desc.match(/prince lunchbar/i)) return 'lunch thomas';
  if (desc.match(/ram thai/i)) return 'lunch thomas';
  if (desc.match(/EUREST 3393 ENTRA SUNDTKV/i)) return 'lunch thomas';
  if (desc.match(/EUREST .* ENTRA/i)) return 'lunch thomas';

  // ved
  if (desc.match(/vedhandel/i)) return 'ved';
  if (desc.match(/christiana ved/i)) return 'ved';
  if (desc.match(/kortreistved/i)) return 'ved';
  if (desc.match(/norsk vedsentral/i)) return 'ved';

  // bil
  if (desc.match(/bilkollektivet/i)) return 'bilkollektivet';
  if (desc.match(/biltur/i)) return 'bil';
  if (desc.match(/bilvask/i)) return 'bilservice';
  if (desc.match(/birger n haug/i)) return 'bilservice';
  if (desc.match(/faste bilutgifter/i)) return 'bil';
  if (desc.match(/faste utgifter bil/i)) return 'bil';

  // bomringen
  if (desc.match(/Fjellinjen/i)) return 'bomringen';
  if (desc.match(/Fremtind service/i)) return 'bomringen';

  // bonus
  if (desc.match(/bonus/i)) return 'bonus';

  // briller
  if (desc.match(/brilleland/i)) return 'briller';
  if (desc.match(/linsevann/i)) return 'briller';

  // taxfree
  if (desc.match(/dutyfree/i)) return 'taxfree';
  if (desc.match(/heinemann retail/i)) return 'taxfree';
  if (desc.match(/duty-free/i)) return 'taxfree';

  // Frisør
  if (desc.match(/frisør/i)) return 'frisør';
  if (desc.match(/sayso/i)) return 'frisør';
  if (desc.match(/Nohs Oslo/i)) return 'frisør';

  // husholdning

  // Forsikring
  if (desc.match(/IF SKADEFOR/i)) return 'forsikring';

  // Musikk
  if (desc.match(/spotify/i)) return 'musikk';

  // Taxi
  if (desc.match(/taxi/i)) return 'taxi';
  if (desc.match(/christiania tax/i)) return 'taxi';

  // Datautstyr
  if (desc.match(/komplett/i)) return 'datautstyr';
  if (desc.match(/NOK 2644.00 Klarna/i)) return 'datautstyr';
  if (desc.match(/NOK 599.00 Klarna/i)) return 'datautstyr';
  if (desc.match(/keychron/i)) return 'datautstyr';
  if (desc.match(/proshop.no/i)) return 'datautstyr';
  if (desc.match(/eplehuset.no/i)) return 'datautstyr';

  // kino
  if (desc.match(/kino/i)) return 'kino';
  if (desc.match(/Silje Isabelle Cocozza/i) && expense == 140) return 'kino';

  // teater
  if (desc.match(/ebillett kultur/i)) return 'teater';
  if (desc.match(/albillett/i)) return 'teater';

  // sykkel
  if (desc.match(/oslo sykkelverksted/i)) return 'sykkel';
  if (desc.match(/bike brothers/i)) return 'sykkel';

  // Fest og høytid
  //   andre markeringer
  if (desc.match(/ADSTATE AS BLOMSTER OG BE/i)) return 'andre markeringer';
  //   konfirmasjon
  if (desc.match(/HUMAN ETISK FOR/i)) return 'konfirmasjon';
  if (desc.match(/cakeiteasy.no/i)) return 'konfirmasjon';
  if (desc.match(/heimen husflid/i)) return 'konfirmasjon';
  if (desc.match(/konfirmasjon/i)) return 'konfirmasjon';
  if (desc.match(/kreativ cateeri/i)) return 'konfirmasjon';

  if (desc.match(/fra nesodden/i)) return 'bursdag';
  if (desc.match(/bursdag/i)) return 'bursdag';
  if (desc.match(/fra farmor/i)) return 'bursdag';
  if (desc.match(/til edith fra tord/i)) return 'bursdag';

  // ====================================================================
  // Usortert herfra

  if (desc.match(/intersport/i)) return 'sportsutstyr';

  if (desc.match(/julefeiring/i)) return 'julefeiring';
  if (desc.match(/julekalender/i)) return 'julekalender';

  if (desc.match(/kantinekortet/i)) return 'lunsjpenger';

  if (desc.match(/kirsti/i)) return 'kirsti';

  if (desc.match(/kredittkort/i)) return 'kredittkort';
  if (desc.match(/santander consumer bank/i)) return 'kredittkort';

  if (desc.match(/leker/i)) return 'leker';

  if (desc.match(/norges automobi/i)) return 'naf';
  if (desc.match(/NORLANDIA/i)) return 'barnehage';
  if (desc.match(/OBOS/i)) return 'obos';

  if (desc.match(/RENTER/i)) return 'renter';

  if (desc.match(/santander consu/i)) return 'kredittkort';

  // Generelle kategorier som må være nederst
  if (desc.match(/mat/i)) return 'dagligvarer';
  if (desc.match(/handletur/i)) return 'dagligvarer';

  // Regning ukjent
  if (desc.match(/^avtalegiro$/i)) return 'regning ukjent';
  if (desc.match(/^efaktura nettbank/i)) return 'regning ukjent';
  if (desc.match(/NETTGIRO/i)) return 'regning ukjent';

  return 'regning ukjent';
}
