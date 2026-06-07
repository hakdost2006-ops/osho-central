const oshoEcuadorCenters = [
  {
    name: "OSHO Bhadra Meditation Center",
    contact: "Prem Ameeta (M.E. Gonzalez), Silvia, Zahira",
    location: "Gonzalo Noriega N39-221, Sect. El Batan, Quito 17-8-8329, Pobok, Ecuador",
    phone: "+593 982657241 (Ameeta); Zahira +34 635273097 Spain; Jackeline +593958871272",
    email: "Oshoameeta@gmail.com, silviapaolanasser@gmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "Other OSHO Meditations, Festivals, Events. Zahira email: Raffa.nasser@gmail.com",
    website: "https://www.facebook.com/oshoecua",
    websiteLabel: "Facebook",
    facilities: "Countryside large Ecological Resort & city place",
    starred: true
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Aem (T. Medina Mora)",
    location: "Guayaquil 090615, Ecuador. Event address: Av. El Bombero, Edificio Ceibos Center, torre B, oficinas 408",
    phone: "+593 978962007",
    email: "aemsito@gmail.com",
    activities: "Weekly OSHO Meditations",
    website: "https://www.instagram.com/aeminstitute.ec?igsh=dWI2dWU0a3hwaWhx",
    websiteLabel: "Instagram",
    facilities: "Guayaquil Av. El Bombero, Edificio Ceibos Center, torre B, oficinas 408"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Govinda (John Montalvo)",
    location: "Business Center Torre B local B, Km 1 1/2 Via a Samborondon, Samborondon 091650, Guayas, Ecuador",
    phone: "+593 994009618",
    email: "premgovinda@hotmail.com",
    activities: "OSHO Meditation classes and Events occasionally",
    facilities: "Yoga place, public"
  }
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

function renderEcuadorCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoEcuadorCenters.length);

  grid.innerHTML = oshoEcuadorCenters.map((center) => {
    const website = center.website ? linkForUrl(center.website, center.websiteLabel || "Website") : "";
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
          <div><strong>Source</strong><span>Osho.com Places to Meditate, Ecuador</span></div>
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

renderEcuadorCenters();
