const oshoBrazilCenters = [
  { name: "OSHO Meditation Activity", contact: "Deva Ashni and Anand Nisandeh", location: "Rua Manoel da Silveira, 135, Campeche - Florianopolis 88063-040, Santa Catarina, Brazil", email: "ashnisandeh@hotmail.com", activities: "OSHO Meditations occasionally", facilities: "Meditation Room", starred: true },
  { name: "OSHO Information Center", contact: "Anand Goloka (Claudio V.S. Jahara)", location: "Teresopolis 25953-680, RJ, Brazil", phone: "+55 (21)99490-3668; (21) 983376399", email: "oshobrasilbrazil@gmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditation Events, Osho Information", facilities: "Local and rented public places, also Guesthouse Muqui91", starred: true },
  { name: "OSHO Institute for Love, Healing and Meditation", contact: "Kimaya", location: "Traveling, Brazil 60842-160", email: "Lovehealingmed@gmail.com", activities: "OSHO Meditations, Trainings, Courses, Individual Sessions", facilities: "Public rented places" },
  { name: "OSHO Amrit Meditation Center", contact: "Jivan Kalyan (J.M. Cavedagne)", location: "Estrada Casemiro Bussinger, casa 77, Montanhas, Teresopolis 25976-510, RJ, Brazil", phone: "+55 21-995954343", email: "sw.rajah@gmail.com", activities: "OSHO Meditations", facilities: "Private Meditation Room" },
  { name: "OSHO Meditation Center", contact: "Anuprem", location: "Campinas 13084-757, Sao Paulo, Brazil", phone: "19.9.9805.0484", email: "diego_tresinari@yahoo.com.br", activities: "Occasionally OSHO Meditations, Meditation days", facilities: "Home" },
  { name: "OSHO Information Center", contact: "Jivan Vistara", location: "Casa Iris, Av. Doze de Novembro, 12300, #95, Armacao dos Buzios 28958-720, RJ, Brazil", phone: "+55 (22)997666003", email: "vistara@sacredcircle.in", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditation Events, Courses, Sessions", facilities: "Rented spaces" },
  { name: "OSHO Meditation Center", contact: "Deva Sharani (M. de Oliveira do Amaral)", location: "Rue Capitao Manuel Novaes, 20 - Santana, Sao Paulo 02017-0330, SP, Brazil", phone: "+55 1199659 4009", email: "sharani@casasharani.com.br", activities: "Daily OSHO Meditations, Sessions", facilities: "Home Meditation Room, Session Room" },
  { name: "OSHO Information Center", contact: "Akhila and Dayita", location: "Rua Amalia de Noronha 292, Sao Paulo 05410-010, Brazil", phone: "+55 1145636943; 976206610; 11982744993", email: "terapiaslotus292@gmail.com", activities: "OSHO Meditations, Events", facilities: "Rented public space" },
  { name: "OSHO Information Center", contact: "Antar Gasha", location: "Vitoria, Brazil", phone: "+55 27 999015198", email: "antar.gasha@gmail.com", activities: "OSHO Meditations occasionally" },
  { name: "OSHO Information Center", contact: "Anand Samadhi (M. Florencia Luciano)", location: "Ilheus, Bahia, Brazil", phone: "+54 9 341 680 6526", email: "lucianoflorencia@gmail.com", activities: "Weekly OSHO Meditations", facilities: "Public rented place: clinic Canto das Mangueiras, Rua Ruy Cajueiro, n 156, Ilheus, Bahia" },
  { name: "OSHO Asheesh Meditation Center", contact: "Prem Dhyana (Borghetti Bruno), Prem Komalgita (Bodei Giuliana)", location: "Rua 9 Quadra 12 Lote 1, Estancia Paraiso 73770-000, Alto Paraiso do Goias, Brazil", phone: "+55 62981532532", email: "prem532br@gmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditation Events, occasional workshops", facilities: "Home, 3 Rooms" },
  { name: "OSHO Information Center", contact: "Deva Shabdam", location: "Rio de Janeiro 20051-070, RJ, Brazil", phone: "+55 021993135118", email: "janeteleg@hotmail.com", activities: "OSHO Information" },
  { name: "OSHO Information Center (Ambar Parinama)", contact: "Prem Rashnu (Vera Regina Mueller)", location: "Porto Alegre, Rio Grande do Sul, Brazil", phone: "+55 51/991848020", email: "rashnuveramuller@gmail.com", activities: "OSHO Information, Creativity Events", facilities: "Home" },
  { name: "OSHO Santosh Meditation Center", contact: "Deva Mimansa (Erika Farny)", location: "R. Machado de Assis QD 4 Lote 56 Apt 904 Bairro Thermal Edificio Tamboril II, Caldas Novas 75690-000, GO, Brazil", phone: "+55 64-34530034; 11 983359834", email: "mimansa@uol.com.br", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", facilities: "Home meditation room" },
  { name: "OSHO Nirvano Information Center", contact: "Deva Jayen (Luis C. Moro Conforto), Sikhar (Lourenco Gotti)", location: "R. Maria Fatuch, 18, Curitiba 82520-310, PR, Brazil", phone: "+55 41-9127-4840", email: "dhyansikhar@gmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation", activities: "OSHO Meditations occasionally, Intensives" },
  { name: "OSHO Estacao Zen Meditation Center", contact: "Ashara (Guilherme da Silva Souza), Juhi (Kenia Monducci Cavedagne)", location: "Rua Lima de Oliveira 180 - Mangabeira, Eusebio 61760-000, CE, Brazil", phone: "+55 85-3229-8511", email: "asharagsouza@gmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation", facilities: "Private meditation hall" },
  { name: "OSHO Information Center", contact: "Deva Darshan & Dhyan Shantam (Monteiro)", location: "Ave. Brasil 766 - Vila Aparecida, Franca SP, Brazil", phone: "+55 16-37226580", email: "oshodarshan@hotmail.com", activities: "OSHO Information" },
  { name: "OSHO Brazil Institute and Book Distribution", contact: "Bodhi Champak (Ronaldo de Moraes)", location: "Rua Tavares Bastos 115/203, Juiz de Fora 36025-180, MG, Brazil", phone: "+55 (32) 3061-4730", email: "oshoinstituto@uol.com.br", activities: "OSHO Meditation Events, Groups, Newsletter, Publications", website: "http://www.oshoinstituto.com.br", facilities: "Rented public places" },
  { name: "OSHO Information Center", contact: "Dyvian Rafeek (F. J. De Rezende Sardinha), Prem Ranvita (I. M. Pavanato Sardinha)", location: "Av. Dom Paulo Rolim Loureiro, 517, Mo Gi Das Cruzes 08790-260, Sao Paulo, Brazil", phone: "+55 11 47964809; (11) 996742309", email: "dyvianrafeek@yahoo.com.br", meditations: "Daily: Osho Dynamic Meditation, Osho Kundalini Meditation. Occasionally: Evening Meditation Meeting", activities: "OSHO Meditations, occasional workshops", facilities: "Meditation Room" },
  { name: "OSHO Information Center", contact: "Anand Shila (Tarsila)", location: "Av. Nascimento de Castro 1907, A, Natal 59056-450, RN, Brazil", phone: "+55 84 9649 9649", email: "tarsilamf@hotmail.com", activities: "OSHO Meditations", facilities: "Public Meditation Room" },
  { name: "OSHO Information Center", contact: "Satyam Zina (Zina Voltis), Paribuddha (Leibich Gruzman)", location: "Rua Moura Brasil, 58 ap. 101 Laranjeiras, Rio de Janeiro 22231-200, RJ, Brazil", phone: "+55 21-5512345", email: "satyamzina@ig.com.br" },
  { name: "OSHO Sukul Meditation & Information Center", contact: "Prem Abodha (Luiz Eduardo M Brasil), Anand Samashti (Delba Monduccci)", location: "Av. Nossa Senhora de Copacabana, 769/803, Rio de Janeiro 22050-002, RJ, Brazil", phone: "+55 (0)21 994424040", email: "oshosukul@centroin.com.br", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditation Days", facilities: "Home Meditation Room" },
  { name: "OSHO Meditation Activity", contact: "Prem Nikas", location: "Ibicoara 41600-810, Bahia, Brazil", phone: "+55 7194027139", email: "lsergio.marinho@gmaill.com", activities: "OSHO Meditations occasionally" },
  { name: "OSHO Information Center", contact: "Deva Mati (Marilia do Carmo Campana)", location: "Rua Entrada Bahia 63F, Loteamento Terra de Cabral, Santa Cruz Cabralia 45807-000, BA, Brazil", phone: "+55 73-3282-2756; 55 7391603300; 73-88364717", email: "devamati@gmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditation Events, sessions", facilities: "Public rented meditation room" },
  { name: "OSHO Information Center", contact: "Deva Prahas (Marcelo Moreira Palma)", location: "Rua Taboao, 9 - Bairro Sumare, Sao Paulo 01256-020, SP, Brazil", phone: "+55 11 99915 2290", email: "prahasdeva@gmail.com", activities: "Garagem de Meditacao. OSHO Dinamica, OSHO Kundalini e AUM", facilities: "Public rented spaces" },
  { name: "OSHO Meditation Center", contact: "Prem Saananda (G. Haiquel)", location: "Caixa postal 135, Itamonte 37466-000, MG, Brazil", phone: "+55 011 3280-8886; WhatsApp 11 97099-0021", email: "contato@ciadoser.org", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting", activities: "OSHO Meditations, Groups, Sessions", facilities: "Public rented spaces" },
  { name: "OSHO Information Center", contact: "Antar Aryo (Marcio Correa), Amrit Devarupa (Luci Cirillo Freire)", location: "Rua Bertioga No 149, Sao Paulo 04059-004, SP - Pindamonhanba, Brazil", phone: "+55 (11) 5584-9037; (11)94389-5548", email: "marciocorrea5@yahoo.com.br", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation", activities: "OSHO Meditations weekly, groups, sessions", facilities: "Public rented space and home" },
  { name: "OSHO Meditation Center", contact: "Prakasho", location: "Sapucaia 25882-000, RJ, Brazil", phone: "+55 24992596537; 21971075005", email: "oshopankaj@hotmail.com", activities: "OSHO Meditations", facilities: "In process" },
  { name: "OSHO Information Center - Sammasati", contact: "Antar Gyan (R. Fereira Da Silva)", location: "Estrada Vale do Pavao 008, Vale do Pavao, Visconde de Maua 27580-000, RJ, Brazil", phone: "+55 21993524426", email: "antargyan@hotmail.com", meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation", activities: "Other OSHO Meditations and Events", facilities: "Private Meditation Room" },
  { name: "OSHO Information Center", contact: "Prem Ganga", location: "Rua Sao Paulo 351-714, Belo Horizonte 30170-130, Minas Gerais, Brazil", phone: "+55 (031) 8448 0525", email: "adailtonsoares@gmail.com", activities: "OSHO Meditations occasionally" },
  { name: "Meditation Activity Osheanic International", contact: "Osheanic International", location: "Avenida 13 de Fevereiro 3059, Prainha, Cidade de Aquiraz, Estado do Ceara 61700-000, near Fortaleza, Brazil", email: "info@osheanicinternational.com", meditations: "Daily: Osho Dynamic Meditation, Osho Kundalini Meditation. Occasionally: Evening Meditation Meeting", facilities: "Large countryside, hall, several houses", website: "https://osheanic.com/" }
];

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkForUrl(url, label = "Website") {
  if (!url) return "";
  const safeUrl = escapeHtml(url);
  return `<a class="button light" href="${safeUrl}">${escapeHtml(label)}</a>`;
}

function renderBrazilCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoBrazilCenters.length);

  grid.innerHTML = oshoBrazilCenters.map((center) => {
    const website = center.website ? linkForUrl(center.website) : "";
    const meditations = center.meditations ? `<div><strong>Meditations</strong><span>${escapeHtml(center.meditations)}</span></div>` : "";
    const activities = center.activities ? `<div><strong>Activities</strong><span>${escapeHtml(center.activities)}</span></div>` : "";
    const facilities = center.facilities ? `<div><strong>Facilities</strong><span>${escapeHtml(center.facilities)}</span></div>` : "";
    return `
      <article class="card">
        <span class="badge">${center.starred ? "Osho.com starred" : "Imported from Osho.com"}</span>
        <h3>${escapeHtml(center.name)}</h3>
        <p>${escapeHtml(center.contact || "Contact person not listed")}</p>
        <div class="profile-list">
          <div><strong>Location</strong><span>${escapeHtml(center.location)}</span></div>
          <div><strong>Phone</strong><span>${escapeHtml(center.phone || "Not listed")}</span></div>
          <div><strong>Email</strong><span>${escapeHtml(center.email || "Not listed")}</span></div>
          ${meditations}
          ${activities}
          ${facilities}
          <div><strong>Source</strong><span>Osho.com Places to Meditate, Brazil</span></div>
          <div><strong>Status</strong><span>Needs claim / verification</span></div>
        </div>
        <div class="card-actions">
          <a class="button" href="mailto:oshonc369@gmail.com?subject=Claim%20Osho%20Central%20profile%3A%20${encodeURIComponent(center.name)}">Claim</a>
          ${website}
          <a class="button light" href="mailto:${escapeHtml((center.email || "").split(",")[0])}">Email</a>
        </div>
      </article>
    `;
  }).join("");
}

renderBrazilCenters();
