const oshoCostaRicaCenters = [
  {
    name: "OSHO Amatra Meditation Center",
    contact: "Amrit Nartana (R. Maceratesi)",
    location: "P.O. Box #75-8203, Peninsula de Osa, Puerto Jimenez, Costa Rica",
    phone: "+506 87939153",
    email: "amritnartana@hotmail.com",
    meditations: "Daily: Osho Kundalini Meditation. Occasionally: Osho Dynamic Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditation Events",
    facilities: "Home meditation room, guest rooms"
  },
  {
    name: "OSHO Information Center",
    contact: "Satori Basho",
    location: "ICE Tibas 200 Este, San Jose, SJ, Costa Rica",
    phone: "+506 88478810",
    email: "manchaher@gmail.com",
    activities: "OSHO Meditations occasionally",
    facilities: "Rented public space"
  }
];

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderCostaRicaCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoCostaRicaCenters.length);

  grid.innerHTML = oshoCostaRicaCenters.map((center) => {
    const meditations = center.meditations ? `<div><strong>Meditations</strong><span>${escapeHtml(center.meditations)}</span></div>` : "";
    const activities = center.activities ? `<div><strong>Activities</strong><span>${escapeHtml(center.activities)}</span></div>` : "";
    const facilities = center.facilities ? `<div><strong>Facilities</strong><span>${escapeHtml(center.facilities)}</span></div>` : "";
    return `
      <article class="card">
        <span class="badge">Imported from Osho.com</span>
        <h3>${escapeHtml(center.name)}</h3>
        <p>${escapeHtml(center.contact || "Contact person not listed")}</p>
        <div class="profile-list">
          <div><strong>Location</strong><span>${escapeHtml(center.location)}</span></div>
          <div><strong>Phone</strong><span>${escapeHtml(center.phone || "Not listed")}</span></div>
          <div><strong>Email</strong><span>${escapeHtml(center.email || "Not listed")}</span></div>
          ${meditations}
          ${activities}
          ${facilities}
          <div><strong>Source</strong><span>Osho.com Places to Meditate, Costa Rica</span></div>
          <div><strong>Status</strong><span>Needs claim / verification</span></div>
        </div>
        <div class="card-actions">
          <a class="button" href="mailto:oshonc369@gmail.com?subject=Claim%20Osho%20Central%20profile%3A%20${encodeURIComponent(center.name)}">Claim</a>
          <a class="button light" href="mailto:${escapeHtml((center.email || "").split(",")[0])}">Email</a>
        </div>
      </article>
    `;
  }).join("");
}

renderCostaRicaCenters();
