const oshoDominicanRepublicCenters = [
  {
    name: "OSHO Meditation Center",
    contact: "Ajasta Bali",
    location: "Santo Domingo, DN, Dominican Republic",
    phone: "+1 (809) 487 4905",
    email: "bali@baliajasta.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditations weekly and Events",
    social: "Instagram: @oshocentrord",
    facilities: "Rented public spaces"
  }
];

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderDominicanRepublicCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoDominicanRepublicCenters.length);

  grid.innerHTML = oshoDominicanRepublicCenters.map((center) => {
    const meditations = center.meditations ? `<div><strong>Meditations</strong><span>${escapeHtml(center.meditations)}</span></div>` : "";
    const activities = center.activities ? `<div><strong>Activities</strong><span>${escapeHtml(center.activities)}</span></div>` : "";
    const social = center.social ? `<div><strong>Social</strong><span>${escapeHtml(center.social)}</span></div>` : "";
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
          ${social}
          ${facilities}
          <div><strong>Source</strong><span>Osho.com Places to Meditate, Dominican Republic</span></div>
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

renderDominicanRepublicCenters();
