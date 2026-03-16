/* ══════════════════════════════════════════════════════
   Innov8 Development — Shared Language System
   Używany na wszystkich podstronach projektów
══════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  // ── WSPÓLNE ──
  common: {
    nav_back_pl:    '← Wszystkie projekty',
    nav_back_en:    '← All Projects',
    contact_pl:     'Skontaktuj się',
    contact_en:     'Contact Us',
    call_pl:        'Zadzwoń',
    call_en:        'Call Us',
    send_pl:        'Wyślij zapytanie',
    send_en:        'Send Inquiry',
    available_pl:   'Dostępny',
    available_en:   'Available',
    sold_pl:        'Sprzedany',
    sold_en:        'Sold',
    yes_pl:         'Tak',
    yes_en:         'Yes',
    no_pl:          'Nie',
    no_en:          'No',
    notify_pl:      'Powiadom mnie →',
    notify_en:      'Notify Me →',
    notify_sub_pl:  'Zapisz się — poinformujemy Cię jako pierwszego',
    notify_sub_en:  'Sign up — we\'ll notify you first',
    notify_note_pl: 'Bez spamu. Tylko jedna wiadomość gdy ruszymy sprzedaż.',
    notify_note_en: 'No spam. One email when sales launch.',
    email_ph_pl:    'Twój adres email',
    email_ph_en:    'Your email address',
    footer_pl:      'Wszelkie prawa zastrzeżone.',
    footer_en:      'All rights reserved.',
  },

  // ── SYCOWSKA ──
  sycowska: {
    page_title_pl:   'Sycowska 33 — Apartamenty Warszawa | Innov8 Development',
    page_title_en:   'Sycowska 33 — Warsaw Apartments | Innov8 Development',
    nav_status_pl:   'Sprzedaż Otwarta',
    nav_status_en:   'Sales Open',
    hero_label_pl:   'Sprzedaż Otwarta · Warszawa, Włochy',
    hero_label_en:   'Sales Open · Warsaw, Włochy',
    hero_badge_pl:   'Sprzedaż aktywna',
    hero_badge_en:   'Sales Active',
    hero_h1_pl:      'Sycowska 33<br><em>Apartamenty</em>',
    hero_h1_en:      'Sycowska 33<br><em>Apartments</em>',
    hero_t1_pl:      'lokali',         hero_t1_en: 'units',
    hero_t2_pl:      'metraże',        hero_t2_en: 'floor area',
    hero_t3_pl:      'piętra',         hero_t3_en: 'floors',
    uc_text_pl:      'Prace w toku — budynek jest aktualnie w trakcie remontu. Lokale dostępne w sprzedaży. Odbiór kluczy po zakończeniu prac.',
    uc_text_en:      'Work in progress — the building is currently under renovation. Units available for sale. Keys handed over upon completion.',
    uc_prog_pl:      'Postęp prac',    uc_prog_en: 'Construction Progress',
    sect_about_pl:   'O Projekcie',    sect_about_en: 'About',
    h2_about_pl:     '9 lokali w sercu<br><em style="font-style:italic;color:var(--gold)">Włoch.</em>',
    h2_about_en:     '9 units in the heart<br><em style="font-style:italic;color:var(--gold)">of Włochy.</em>',
    body1_pl:        'Sycowska 33 to kameralna inwestycja w spokojnej dzielnicy Włochy — doskonale skomunikowanej z centrum Warszawy. Kompleksowo remontowany budynek oferuje lokale o zróżnicowanych metrażach, idealne zarówno na własne mieszkanie, jak i pod wynajem.',
    body1_en:        'Sycowska 33 is a boutique investment in the quiet Włochy district — well connected to Warsaw city centre. The comprehensively renovated building offers units in various sizes, ideal as a personal home or rental investment.',
    body2_pl:        'Wszystkie lokale sprzedawane w stanie deweloperskim — gotowe do własnej aranżacji. Wybrane mieszkania posiadają balkony.',
    body2_en:        'All units sold in developer condition — ready for your own fit-out. Selected apartments feature private balconies.',
    f1_title_pl:     'Kompleksowy remont',      f1_title_en: 'Full Renovation',
    f1_desc_pl:      'Wymiana wszystkich instalacji, nowa elewacja, odnowione części wspólne.',
    f1_desc_en:      'Full replacement of all utilities, new facade, renovated common areas.',
    f2_title_pl:     'Stan deweloperski',       f2_title_en: 'Developer Condition',
    f2_desc_pl:      'Lokale gotowe do własnej aranżacji — tynki, wylewki, instalacje.',
    f2_desc_en:      'Units ready for fit-out — plaster, screed, all utilities installed.',
    f3_title_pl:     'Świetna lokalizacja',     f3_title_en: 'Great Location',
    f3_desc_pl:      'Dzielnica Włochy — dobre połączenia z centrum, spokojna okolica.',
    f3_desc_en:      'Włochy district — great transport links to the city, quiet neighbourhood.',
    stat2_pl:        'Największy lokal',        stat2_en: 'Largest Unit',
    stat3_pl:        'Piętra',                  stat3_en: 'Floors',
    stat4_pl:        'm² łącznie',              stat4_en: 'Total m²',
    sect_apt_pl:     'Dostępne Lokale',         sect_apt_en: 'Available Units',
    h2_apt_pl:       'Wybierz swój<br><em style="font-style:italic;color:var(--gold)">lokal.</em>',
    h2_apt_en:       'Choose your<br><em style="font-style:italic;color:var(--gold)">unit.</em>',
    th_floor_pl:     'Piętro',    th_floor_en: 'Floor',
    th_area_pl:      'Powierzchnia', th_area_en: 'Area',
    th_annex_pl:     'Aneks / 2 pokoje', th_annex_en: 'Kitchenette / 2 rooms',
    th_bath_pl:      'Łazienka',  th_bath_en: 'Bathroom',
    th_balc_pl:      'Balkon',    th_balc_en: 'Balcony',
    th_status_pl:    'Status',    th_status_en: 'Status',
    th_price_pl:     'Cena',      th_price_en: 'Price',
    th_psm_pl:       'Cena / m²', th_psm_en:  'Price / m²',
    cta_h_pl:        'Zainteresowany lokalem?',  cta_h_en: 'Interested in a unit?',
    cta_p_pl:        'Skontaktuj się z nami — odpowiemy w ciągu 24h.',
    cta_p_en:        'Contact us — we\'ll reply within 24 hours.',
    gallery_pl:      'Dokumentacja',   gallery_en: 'Documentation',
    h2_gal_pl:       'Postęp <em style="font-style:italic;color:var(--gold)">prac.</em>',
    h2_gal_en:       'Construction <em style="font-style:italic;color:var(--gold)">progress.</em>',
    gal_note_pl:     'Zdjęcia z postępów prac będą aktualizowane na bieżąco. Ostatnia aktualizacja: marzec 2026.',
    gal_note_en:     'Construction photos updated regularly. Last update: March 2026.',
    proc_label_pl:   'Harmonogram',    proc_label_en: 'Timeline',
    h2_proc_pl:      'Etapy <em style="font-style:italic;color:var(--gold)">realizacji.</em>',
    h2_proc_en:      'Project <em style="font-style:italic;color:var(--gold)">stages.</em>',
    p1_t_pl: 'Zakup i przygotowanie',   p1_t_en: 'Acquisition & Preparation',
    p1_d_pl: 'Nabycie nieruchomości, opracowanie projektu remontowego i budżetu inwestycji.',
    p1_d_en: 'Property acquisition, renovation design and investment budget preparation.',
    p2_t_pl: 'Remont i instalacje',     p2_t_en: 'Renovation & Utilities',
    p2_d_pl: 'Kompleksowa wymiana instalacji elektrycznych, hydraulicznych i grzewczych.',
    p2_d_en: 'Full replacement of electrical, plumbing and heating systems.',
    p3_t_pl: 'Wykończenie i elewacja',  p3_t_en: 'Finishing & Facade',
    p3_d_pl: 'Tynki, posadzki, odnowa elewacji, klatki schodowej i otoczenia budynku.',
    p3_d_en: 'Plaster, floors, facade renovation, stairwell and building surroundings.',
    p4_t_pl: 'Odbiory i przekazanie',   p4_t_en: 'Inspections & Handover',
    p4_d_pl: 'Odbiory techniczne, przekazanie lokali nowym właścicielom.',
    p4_d_en: 'Technical inspections and handover of units to new owners.',
    cta2_pl: 'Masz pytania o Sycowską 33?',   cta2_en: 'Questions about Sycowska 33?',
    cta2_sub_pl: 'Chętnie odpowiemy na wszystkie pytania dotyczące lokali, stanu zaawansowania prac i warunków zakupu.',
    cta2_sub_en: 'We\'ll answer all questions about units, construction progress and purchase terms.',
  },

  // ── POKRZYWNICKA ──
  pokrzywnicka: {
    page_title_pl: 'Pokrzywnicka 11 — Zrealizowany Projekt | Innov8 Development',
    page_title_en: 'Pokrzywnicka 11 — Completed Project | Innov8 Development',
    nav_status_pl: 'Projekt zrealizowany',
    nav_status_en: 'Completed Project',
    badge_pl:      'Wszystkie lokale sprzedane',
    badge_en:      'All Units Sold',
    hero_h1_pl:    'Pokrzywnicka 11<br><em>Rewitalizacja</em>',
    hero_h1_en:    'Pokrzywnicka 11<br><em>Renovation</em>',
    hero_label_pl: 'Projekt Zrealizowany · Warszawa',
    hero_label_en: 'Completed Project · Warsaw',
    h1_t1_pl: 'mieszkań',   h1_t1_en: 'units',
    h1_t2_pl: 'metraże',    h1_t2_en: 'floor area',
    h1_t3_pl: 'budynek',    h1_t3_en: 'building',
    sect_about_pl: 'O Projekcie',  sect_about_en: 'About',
    h2_about_pl:   'Kameralna inwestycja<br>w budynku z <em style="font-style:italic;color:var(--gold)">duszą.</em>',
    h2_about_en:   'A boutique investment<br>in a building with <em style="font-style:italic;color:var(--gold)">character.</em>',
    body1_pl: 'Pokrzywnicka 11 to kameralna inwestycja składająca się z 8 mieszkań w budynku wybudowanym w stylu modernistycznym w latach 50. XX wieku. Innov8 Development przeprowadził kompleksową rewitalizację — nadając temu miejscu nowe życie przy zachowaniu jego unikalnego charakteru.',
    body1_en: 'Pokrzywnicka 11 is a boutique investment comprising 8 apartments in a modernist building from the 1950s. Innov8 Development carried out a comprehensive renovation — breathing new life into the property while preserving its unique character.',
    body2_pl: 'Mieszkania o metrażach 32–40 m², zaprojektowane tak aby można je zaadaptować na 2 pokoje lub przestronny open space, trafiły do nowych właścicieli w stanie deweloperskim — gotowe do własnej aranżacji.',
    body2_en: 'Apartments of 32–40 m², designed to be converted into 2 rooms or a spacious open-plan layout, were handed over to new owners in developer condition — ready for personalisation.',
    f1_t_pl: 'Kompleksowy remont instalacji',  f1_t_en: 'Full Utility Renovation',
    f1_d_pl: 'Wymiana wszystkich instalacji wewnętrznych budynku — elektryka, hydraulika, ogrzewanie podłogowe, tynki maszynowe.',
    f1_d_en: 'Full replacement of all internal building utilities — electricity, plumbing, underfloor heating, machine-applied plaster.',
    f2_t_pl: 'Rewitalizacja części wspólnych', f2_t_en: 'Common Areas Revitalised',
    f2_d_pl: 'Klatka schodowa, elewacja, brama wejściowa, domofon, kamery, oświetlenie zewnętrzne — wszystko odnowione.',
    f2_d_en: 'Stairwell, facade, entrance gate, intercom, cameras, exterior lighting — everything renewed.',
    f3_t_pl: 'Sprzedaż z rynku wtórnego',     f3_t_en: 'Secondary Market Sale',
    f3_d_pl: 'Mieszkania sprzedane w stanie deweloperskim, gotowe do własnej aranżacji przez kupujących.',
    f3_d_en: 'Apartments sold in developer condition, ready for buyers to personalise.',
    stat1_pl: 'Mieszkań',           stat1_en: 'Apartments',
    stat2_pl: 'Maks. metraż',       stat2_en: 'Max. Area',
    stat3_pl: 'Lokali sprzedanych', stat3_en: 'Units Sold',
    stat4_pl: 'Rok realizacji',     stat4_en: 'Year Completed',
    sect_ba_pl: 'Dokumentacja',     sect_ba_en: 'Documentation',
    h2_ba_pl:   'Przed i <em style="font-style:italic">po.</em>',
    h2_ba_en:   'Before and <em style="font-style:italic">after.</em>',
    slide_pl:   'Przeciągnij linię aby zobaczyć transformację budynku.',
    slide_en:   'Drag the line to reveal the building\'s transformation.',
    sect_tl_pl: 'Harmonogram',      sect_tl_en: 'Timeline',
    h2_tl_pl:   'Realizacja<br>krok po kroku.',
    h2_tl_en:   'Execution<br>step by step.',
    tl_body_pl: 'Precyzyjny harmonogram prac remontowych pozwolił zakończyć projekt terminowo. Każdy etap był nadzorowany przez zespół Innov8 Development — od wyboru ekipy, przez dobór materiałów, po odbiór końcowy.',
    tl_body_en: 'A precise renovation schedule allowed the project to be completed on time. Every stage was supervised by the Innov8 Development team — from crew selection and materials sourcing to final inspection.',
    sect_res_pl:'Wynik',            sect_res_en: 'Result',
    h2_res_pl:  'Projekt <em>zakończony.</em><br>Wszystkie lokale<br>sprzedane.',
    h2_res_en:  'Project <em>complete.</em><br>All units<br>sold.',
    res_body_pl:'Pokrzywnicka 11 to przykład jak Innov8 Development podchodzi do każdej inwestycji — z pełnym zaangażowaniem, precyzyjnym harmonogramem i transparentną komunikacją na każdym etapie.',
    res_body_en:'Pokrzywnicka 11 exemplifies Innov8 Development\'s approach to every investment — full commitment, precise scheduling and transparent communication at every stage.',
    badge2_pl:  'Lokali sprzedanych', badge2_en: 'Units Sold',
    cta_next_pl:'Następny projekt',   cta_next_en: 'Next Project',
    cta_h_pl:   'Zainteresowany<br><em>współpracą?</em>',
    cta_h_en:   'Interested in<br><em>partnership?</em>',
    cta_sub_pl: 'Aktywnie realizujemy kolejne projekty w Warszawie. Skontaktuj się z nami, aby dowiedzieć się więcej o możliwościach współpracy.',
    cta_sub_en: 'We are actively executing new projects in Warsaw. Contact us to learn more about collaboration opportunities.',
    cta_btn_pl: 'Aktywne projekty →', cta_btn_en: 'Active Projects →',
  },

  // ── OJRZANÓW ──
  ojrzanow: {
    page_title_pl: 'Ojrzanów — Domy Premium | Innov8 Development',
    page_title_en: 'Ojrzanów — Premium Homes | Innov8 Development',
    nav_back_pl:   '← Wszystkie projekty',
    nav_back_en:   '← All Projects',
    label_pl:      'Projekt w przygotowaniu · Okolice Warszawy',
    label_en:      'Project in Preparation · Near Warsaw',
    badge_pl:      'Pozwolenie w toku',
    badge_en:      'Permit Pending',
    h1_pl:         'Ojrzanów<br><em>Domy Premium</em>',
    h1_en:         'Ojrzanów<br><em>Premium Homes</em>',
    sub_pl:        '7 ekskluzywnych domów jednorodzinnych w zielonej okolicy pod Warszawą. Każdy dom ~200 m² z własną działką. Szczegóły wkrótce.',
    sub_en:        '7 exclusive detached homes in a green area near Warsaw. Each home ~200 m² with its own plot. Details coming soon.',
    spec2_pl:      'każdy',          spec2_en: 'each',
    spec3_pl:      'Planowany start',spec3_en: 'Planned Start',
    notify_label_pl: 'Zapisz się — poinformujemy Cię jako pierwszego',
    notify_label_en: 'Sign up — we\'ll notify you first',
    i1_t_pl: 'Lokalizacja',   i1_t_en: 'Location',
    i1_b_pl: 'Ojrzanów — spokojna miejscowość w gminie Grodzisk Mazowiecki. Doskonałe połączenia z Warszawą, zielona okolica, cisza.',
    i1_b_en: 'Ojrzanów — a quiet village in Grodzisk Mazowiecki commune. Excellent connections to Warsaw, green surroundings, peaceful atmosphere.',
    i2_t_pl: 'Standard',      i2_t_en: 'Standard',
    i2_b_pl: 'Domy premium ~200 m² z własną działką. Nowoczesna architektura, wysokiej jakości materiały, przemyślane układy funkcjonalne.',
    i2_b_en: 'Premium homes ~200 m² with private plot. Modern architecture, high-quality materials, thoughtfully designed layouts.',
    i3_t_pl: 'Status',        i3_t_en: 'Status',
    i3_b_pl: 'Pozwolenie na budowę w trakcie uzyskiwania. Sprzedaż ruszy po uzyskaniu pozwolenia. Zapisz się aby być pierwszym w kolejce.',
    i3_b_en: 'Building permit currently being obtained. Sales will launch upon permit approval. Sign up to be first in line.',
  },

  // ── CZARNY LAS ──
  czarnylas: {
    page_title_pl: 'Czarny Las — Projekt Rezydencjalny | Innov8 Development',
    page_title_en: 'Czarny Las — Residential Project | Innov8 Development',
    label_pl:      'Projekt w Pipeline · Mazowsze',
    label_en:      'Pipeline Project · Masovia',
    badge_pl:      'Wkrótce',
    badge_en:      'Coming Soon',
    h1_pl:         'Czarny Las<br><em>Projekt Rezydencjalny</em>',
    h1_en:         'Czarny Las<br><em>Residential Project</em>',
    sub_pl:        'Nowy projekt Innov8 Development na Mazowszu. Pracujemy nad szczegółami — zapisz się aby być pierwszym gdy ogłosimy start.',
    sub_en:        'A new Innov8 Development project in Masovia. We\'re working on the details — sign up to be first when we announce launch.',
    spec2_pl:      'Mazowsze',       spec2_en: 'Masovia',
    spec3_pl:      'Szczegóły wkrótce', spec3_en: 'Details TBD',
    h2_pl:  'Nasz kolejny<br><em>projekt.</em>',
    h2_en:  'Our next<br><em>project.</em>',
    body1_pl: 'Czarny Las to kolejna inwestycja w pipeline Innov8 Development. Zgodnie z naszym sprawdzonym modelem — znajdziemy nieruchomość z potencjałem, przygotujemy projekt i wdrożymy go z pełną transparentnością.',
    body1_en: 'Czarny Las is the next investment in the Innov8 Development pipeline. Following our proven model — we will identify a property with potential, prepare the project and execute it with full transparency.',
    body2_pl: 'Szczegóły projektu zostaną ogłoszone gdy zakończymy fazę przygotowawczą. Zapisz się na listę zainteresowanych.',
    body2_en: 'Project details will be announced once we complete the preparation phase. Join our waitlist.',
    c1_t_pl: 'Sprawdzony model SPV',  c1_t_en: 'Proven SPV Model',
    c1_b_pl: 'Każdy projekt w osobnej spółce celowej — pełna przejrzystość finansowa i operacyjna.',
    c1_b_en: 'Each project in a dedicated SPV — full financial and operational transparency.',
    c2_t_pl: 'Doświadczony operator', c2_t_en: 'Experienced Operator',
    c2_b_pl: 'Innov8 zarządza całym procesem — od zakupu, przez budowę, aż po sprzedaż.',
    c2_b_en: 'Innov8 manages the entire process — from acquisition through construction to sale.',
    c3_t_pl: 'Rynek mazowiecki',      c3_t_en: 'Masovian Market',
    c3_b_pl: 'Jeden z najbardziej stabilnych rynków mieszkaniowych w Polsce.',
    c3_b_en: 'One of the most stable residential markets in Poland.',
  }
};

/* ══════════════════════════════
   UNIVERSAL LANG SYSTEM
══════════════════════════════ */
let currentLang = 'pl';

function setLang(l) {
  currentLang = l;
  document.documentElement.lang = l;

  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('act', b.textContent.trim().toLowerCase() === l);
  });

  // Update data-pl / data-en elements
  document.querySelectorAll('[data-' + l + ']').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (val !== null && val !== '') el.innerHTML = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-' + l + '-ph]').forEach(el => {
    const ph = el.getAttribute('data-' + l + '-ph');
    if (ph) el.placeholder = ph;
  });

  // Update page title
  const page = document.body.dataset.page;
  if (page && TRANSLATIONS[page]) {
    const t = TRANSLATIONS[page];
    if (t['page_title_' + l]) document.title = t['page_title_' + l];
  }
}
