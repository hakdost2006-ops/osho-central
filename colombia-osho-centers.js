const oshoColombiaCenters = [
  {
    name: "OSHO Information Center",
    contact: "Nirava Shravano (Hilda N. Merchan)",
    location: "Bogota, Colombia",
    phone: "57 601 6402538; 3002110164",
    email: "deditos736@yahoo.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditations and Events",
    facilities: "Public rented spaces",
    starred: true
  },
  {
    name: "OSHO Institute for Energy, Balance and Meditation",
    contact: "Asmita",
    location: "Bogota, Colombia",
    email: "asmitaclaudiar@gmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditative Therapies, Meditation Training, Courses, Meditation Events",
    website: "http://www.asmitarodriguez.com",
    facilities: "Public rented spaces",
    starred: true
  },
  {
    name: "OSHO Information Center (Festival)",
    contact: "Dhyana (D. Vargas)",
    location: "Cali, Bogota, Pereira, Colombia",
    phone: "1775031675",
    email: "dhyanavargas@gmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "Other OSHO Meditations and courses also in Berlin, Germany parts of the year; OSHO Meditative Therapies, OSHO Meditation Training, and courses",
    website: "http://www.oshocolombia.com",
    facilities: "Public rented spaces"
  },
  {
    name: "OSHO Information Center",
    contact: "Aman Sudhageha (Ledy Zamira Lopez Diaz)",
    location: "Bogota, Colombia",
    phone: "57 2154471; 3153199717",
    email: "info@drazamiralopez.com",
    meditations: "Occasionally: Osho Kundalini Meditation",
    activities: "OSHO Meditations events, workshops, Primal Therapy",
    facilities: "Public rented space"
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

function renderColombiaCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoColombiaCenters.length);

  grid.innerHTML = oshoColombiaCenters.map((center) => {
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
          <div><strong>Source</strong><span>Osho.com Places to Meditate, Colombia</span></div>
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

renderColombiaCenters();
