const oshoUsaCenters = [
  {
    name: "OSHO Institute for Emotional Balance and Meditation",
    contact: "Veet Mano",
    location: "Berkeley, CA 94706",
    phone: "+1 4421469775; 510 5284257",
    email: "1veetmano@gmail.com",
    activities: "OSHO Meditation camps, Meditative Therapies, Courses",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Kaifi Meditation Center",
    contact: "Prem Rajeeta (Rajeeta Shah), Krishna Anuradha",
    location: "3902 Rockledge Drive, Austin, TX 78731",
    phone: "+1 512-795-8371",
    email: "rajeeta_shah@hotmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditation Days, Events",
    social: "Facebook page: Oshokaifiaustin",
    facilities: "Meditation Room"
  },
  {
    name: "OSHO Information Center",
    contact: "Anand Pashyo (S. Sarkin)",
    location: "Los Angeles, CA 90035",
    phone: "310 940 4270",
    email: "pashyo@gmail.com",
    activities: "Weekly OSHO Meditations on Zoom. Occasional in-person meditations and events.",
    website: "http://www.OshoLA.com",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Meditation Center",
    contact: "Dhyan Zaki (De Luca), Prem Ananado",
    location: "10359 Shore Crest Terrace, Moreno Valley, CA 92557",
    phone: "+1 909 601-6373",
    email: "zakideluca@gmail.com",
    meditations: "Occasionally: Osho Kundalini Meditation",
    activities: "OSHO Meditations, OSHO Meditative Therapies, Retreats, Residential program, Healing"
  },
  {
    name: "OSHO Information Center",
    contact: "Sada (A. Meza)",
    location: "Washington, DC 20007",
    phone: "+1 2023164268",
    email: "aleksayala@hotmail.com",
    activities: "OSHO Meditations occasionally",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Information Center",
    contact: "Anand Nirup",
    location: "Sedona, AZ 86336",
    phone: "928-300-8338 or 202-9783",
    email: "nirupcontact@gmail.com",
    activities: "Occasional OSHO Meditations, sessions, workshops",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Atmo",
    location: "Red Bluff, CA 96080",
    phone: "+1 323 925 8081",
    email: "ouratmo@hotmail.com",
    activities: "OSHO Meditations"
  },
  {
    name: "OSHO Information Center",
    contact: "Anand Salila",
    location: "Anchorage, AK 99517",
    phone: "415 465 4228",
    email: "salilaandrea@yahoo.com",
    activities: "Occasional OSHO Meditations, sessions, workshops",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Akhila",
    location: "Mt Shasta, CA 96067",
    phone: "+1 3057667792",
    email: "coachsilviatodorov@gmail.com",
    activities: "OSHO Meditations occasionally, tours"
  },
  {
    name: "OSHO Villa-Meditation Activity",
    contact: "Prem Kamal (Rajni)",
    location: "Orange County, CA",
    phone: "+1 949-395-2378",
    email: "rajnikharbanda@yahoo.com",
    activities: "OSHO Meditations on Sunday evenings, occasional meditation events, workshops with international facilitators",
    facilities: "Home Meditation Room"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Elisabetta",
    location: "Sedona, AZ 86336",
    phone: "+1 928 274 1521",
    email: "elibliss@gmail.com",
    activities: "OSHO Information, occasionally Osho Active Meditations",
    facilities: "Private"
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Deepak Anand (D. Svarup)",
    location: "41208 Hot Springs Drive, California Hot Springs, CA 93207",
    phone: "+1 661 548 6424; 714 608 0776",
    email: "info@vshr.org",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditation Events, other courses, residential retreat and healing programs",
    website: "http://www.vshr.org",
    facilities: "Large retreat facility, meditation hall, guestrooms"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Nirdhum (K. Kapuria)",
    location: "Vienna, VA 22182",
    phone: "+1 703 946 4093",
    email: "kantakapuria@gmail.com",
    activities: "OSHO Meditations weekly",
    facilities: "Home Meditation Room"
  },
  {
    name: "OSHO Meditation Center (DhyanYoga)",
    contact: "Anam (Ved Sharma), Vasanti, Dhyan Yoga",
    location: "15155 Bronze Post Ct., Centreville, VA 20121 / Washington DC",
    phone: "+1 813-830-3031; 813-830-1008; 703-774-7250",
    email: "oshoanam@gmail.com",
    meditations: "Daily: Osho Dynamic Meditation. Occasionally: Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Vipassana daily, weekly meditation events, monthly one-day silent retreat",
    facilities: "Big house"
  },
  {
    name: "OSHO Information Center",
    contact: "Isha Jangalee Ghoda (J. Kostek)",
    location: "Upstate NY, NY 1332",
    phone: "+1 518 386 9533",
    email: "islavaa@gmail.com",
    meditations: "Occasionally: Osho Kundalini Meditation",
    activities: "OSHO Meditations",
    facilities: "Rented public spaces"
  },
  {
    name: "OSHO Information Center",
    contact: "Divine Shabnam",
    location: "Frisco, TX 75034",
    phone: "214 6320006",
    email: "gelareh1@yahoo.com",
    activities: "OSHO Meditations occasionally",
    facilities: "Public rented space"
  },
  {
    name: "OSHO Simran Meditation Center",
    contact: "Sangeeta (P. Mattu)",
    location: "Bartonville / Dallas, TX 76226",
    phone: "+1 214-724-1991",
    email: "oshomeera1313@gmail.com",
    activities: "Daily and weekly OSHO Meditations, OSHO Evening Meeting",
    facilities: "Owned large hall, centrally located, high-quality sound systems, small library with Osho books"
  },
  {
    name: "OSHO Meera Meditation Center",
    contact: "Antar Prasuna",
    location: "2255 Willard Dairy Rd., High Point, NC 27265",
    phone: "512-826-6401",
    email: "info@oshomeera.net",
    meditations: "Occasionally: Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Chakra Breathing Meditation weekly, celebrations, events",
    website: "http://www.oshomeera.net",
    facilities: "Home Meditation Hall"
  },
  {
    name: "OSHO Meditation Center",
    contact: "Anand Veetrag",
    location: "7401 Coventry Way, Edina, MN 55439",
    phone: "+1 952 893 0134; 952 400 8008",
    email: "oshomc@hotmail.com",
    activities: "OSHO Meditations weekly, events",
    facilities: "Home meditation space"
  },
  {
    name: "OSHO Information Center",
    contact: "Sunder Ashni (Kimberly Massiah)",
    location: "Brooklyn, NY 11234",
    phone: "+1 9172570969",
    email: "lovingseeds@gmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation",
    activities: "OSHO Meditations weekly",
    facilities: "Public rented space"
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Dhyan Paritosh & Prem Anuradha (Rohit & Bhavya Mathur)",
    location: "3398 Palm Circle, Kennesaw, GA 30144",
    phone: "+1 678 574 8150",
    email: "rohit_mathur@hotmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    facilities: "Home Meditation Room"
  },
  {
    name: "OSHO Dharmadip Meditation Center",
    contact: "Anand Malika, Prem Hamid (Shirlea S. and Barry J. Naster)",
    location: "589 Silent Forest Way, Lake Lure, NC 28746",
    phone: "+1 828-625-2434",
    email: "isama1@bellsouth.net",
    activities: "OSHO Meditations occasionally, events",
    facilities: "Home country place, meditation room, guestrooms"
  },
  {
    name: "OSHO Information Center",
    contact: "Deva Yasha (Joie Taylor)",
    location: "Makawao, HI 96768",
    phone: "+1 808 344 0195",
    email: "oshomeditationsmaui@gmail.com",
    activities: "OSHO Information"
  },
  {
    name: "OSHO Information Center",
    contact: "Anand Suraj (Rachel Holzwarth), White Eagle Medicine Woman",
    location: "P.O. Box 1111, Homer, AK 99603",
    phone: "+1 907-715-4433",
    email: "thewhirlingrainbowfoundation@gmail.com",
    activities: "c/o Whirling Rainbow Foundation",
    facilities: "Rented public spaces, traveling"
  },
  {
    name: "OSHO Information Center",
    contact: "Dhyan Unmani (Jessica M. King), Veet Dharma (Mitchelin M. Williams)",
    location: "4329 N.W. 6th Ave., Pompano Beach, FL 33064",
    phone: "+1 954-786-0015",
    email: "unmani44@bellsouth.net"
  },
  {
    name: "OSHO Information Center",
    contact: "Amrit Roshani (Roshani Shay Curtis)",
    location: "Portland, OR",
    phone: "808-228-9028",
    email: "shayr@wou.edu",
    activities: "OSHO Meditation contacts"
  },
  {
    name: "OSHO Information Center",
    contact: "Gagan (A.S. Malhotra)",
    location: "1896 Shadedwood Rd, Walnut, CA 91789",
    phone: "740 727 3882",
    email: "amritgagan@msn.com",
    meditations: "Occasionally: Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditations weekly",
    facilities: "Home Meditation Room"
  },
  {
    name: "OSHO Information Center",
    contact: "Yati / Raman Bharti",
    location: "6608 Rest Haven Dr., Raleigh, NC 27612",
    phone: "+1 9195384625; 919 5381 4623",
    email: "yati9889@gmail.com",
    activities: "OSHO Meditations weekly, events",
    facilities: "Home Meditation Room",
    localProfile: "center-raleigh.html"
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Sitara",
    location: "Miami, FL 33181",
    phone: "+1 3106141440",
    email: "sitara.meditation@gmail.com",
    activities: "OSHO Meditations occasionally",
    facilities: "Public rented places"
  },
  {
    name: "OSHO Zeenat Information Center",
    contact: "Anand Bhikkhu (Klaus Schober), Deva Waduda (Maria Paradiso)",
    location: "6857 Paiute Ave, Niwot, CO",
    phone: "+1 303 6520241",
    email: "bk@newearthrecords.com",
    activities: "OSHO Meditations occasionally",
    facilities: "Private Meditation Room"
  },
  {
    name: "OSHO Information Center",
    contact: "Yoga Shanti (S. Schenker-Skye), Prartho Subhan (S. Schenker)",
    location: "3412 North East 115th St, Seattle, WA 98115",
    phone: "+1 206-772-8897",
    email: "info@WorldofMeditation.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditations several times a week",
    website: "http://www.WorldofMeditation.com",
    facilities: "Private - 2 large meditation rooms"
  },
  {
    name: "Meditation Activity",
    contact: "Kranti Tilasmi (J. Pace)",
    location: "1023 E Comanche Ave., Tampa, FL 33604",
    phone: "+1 813 237 4778",
    email: "jpacetpa@aol.com"
  },
  {
    name: "OSHO Information Center",
    contact: "Dhyan Haridas (Harold Kornylak, D.O.)",
    location: "1432 E Bay Shore Drive, Virginia Beach, VA 23451",
    phone: "+1 757-4913294; 757 5603294",
    email: "kornylak@earthlink.net, preminmylove@gmail.com",
    meditations: "Occasionally: Osho Dynamic Meditation, Osho Kundalini Meditation, Evening Meditation Meeting",
    activities: "OSHO Meditations, sessions",
    facilities: "Home office combination"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Padmini",
    location: "San Pedro, CA",
    phone: "+1 310 521 0399",
    email: "prempadmi@gmail.com",
    activities: "OSHO Information"
  },
  {
    name: "OSHO Meditation Activity",
    contact: "Stephen (C. Still)",
    location: "Eugene, OR",
    phone: "+1 541 344 7324",
    email: "steve-still@comcast.net",
    activities: "OSHO Meditations occasionally, courses",
    facilities: "Public rented spaces"
  },
  {
    name: "OSHO Information Center",
    contact: "Prem Nadish (W. Leib)",
    location: "PO Box 37, St. John, Virgin Islands 00831",
    phone: "+1 340 7760695",
    email: "lovecityturtle@yahoo.com",
    activities: "OSHO Meditations occasionally"
  },
  {
    name: "OSHO Information Center",
    contact: "Deva Patra",
    location: "Los Angeles, CA 90019",
    phone: "+1 323 549 3489",
    email: "feliciafrench@opuzen.com",
    activities: "OSHO Information"
  }
];

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkForUrl(url) {
  if (!url) return "";
  const safeUrl = escapeHtml(url);
  return `<a class="button light" href="${safeUrl}">Website</a>`;
}

function renderCenters() {
  const grid = document.querySelector("[data-centers-grid]");
  const count = document.querySelector("[data-center-count]");
  if (!grid) return;
  if (count) count.textContent = String(oshoUsaCenters.length);

  grid.innerHTML = oshoUsaCenters.map((center) => {
    const website = center.website ? linkForUrl(center.website) : "";
    const localProfile = center.localProfile ? `<a class="button light" href="${escapeHtml(center.localProfile)}">Local Profile</a>` : "";
    const social = center.social ? `<div><strong>Social</strong><span>${escapeHtml(center.social)}</span></div>` : "";
    const meditations = center.meditations ? `<div><strong>Meditations</strong><span>${escapeHtml(center.meditations)}</span></div>` : "";
    const activities = center.activities ? `<div><strong>Activities</strong><span>${escapeHtml(center.activities)}</span></div>` : "";
    const facilities = center.facilities ? `<div><strong>Facilities</strong><span>${escapeHtml(center.facilities)}</span></div>` : "";
    return `
      <article class="card">
        <span class="badge">${center.localProfile ? "Claimed" : "Imported from Osho.com"}</span>
        <h3>${escapeHtml(center.name)}</h3>
        <p>${escapeHtml(center.contact || "Contact person not listed")}</p>
        <div class="profile-list">
          <div><strong>Location</strong><span>${escapeHtml(center.location)}</span></div>
          <div><strong>Phone</strong><span>${escapeHtml(center.phone || "Not listed")}</span></div>
          <div><strong>Email</strong><span>${escapeHtml(center.email || "Not listed")}</span></div>
          ${social}
          ${meditations}
          ${activities}
          ${facilities}
          <div><strong>Source</strong><span>Osho.com Places to Meditate</span></div>
          <div><strong>Status</strong><span>${center.localProfile ? "Claimed locally" : "Needs claim / verification"}</span></div>
        </div>
        <div class="card-actions">
          <a class="button" href="mailto:oshonc369@gmail.com?subject=Claim%20Osho%20Central%20profile%3A%20${encodeURIComponent(center.name)}">Claim</a>
          ${website}
          ${localProfile}
          <a class="button light" href="mailto:${escapeHtml((center.email || "").split(",")[0])}">Email</a>
        </div>
      </article>
    `;
  }).join("");
}

renderCenters();
