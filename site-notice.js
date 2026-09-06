(() => {
  const officialDirectory = "https://www.osho.com/meditation/centers-meditation-facilities/places-to-meditate";
  const disclaimer = "Osho Central is an independent community project. It is not an official website of Osho International Foundation or OSHO Global Connections, and it does not certify or authorize Osho centers. Official center listings are maintained at Osho.com. Osho Central features only participating centers and events submitted or confirmed by their organizers.";

  document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.textContent = ".independence-notice{max-width:920px;margin:22px 0 0;font-size:13px;line-height:1.55}.official-directory-link{color:#3f5748;text-decoration:underline;text-underline-offset:3px}.featured-retreat-link{display:inline-flex;align-items:center;min-height:34px;padding:0 11px;border:1px solid rgba(184,123,69,.42);border-radius:6px;background:#fff7e8;color:#6f3d24!important;font-weight:780;white-space:nowrap}";
    document.head.append(style);

    const inRetreatSection = window.location.pathname.includes("/retreat/");
    if (!inRetreatSection) {
      document.querySelectorAll("header nav").forEach((nav) => {
        let retreatLink = nav.querySelector('a[href="retreat/index.html"]');
        if (!retreatLink) {
          retreatLink = document.createElement("a");
          retreatLink.href = "retreat/index.html";
          nav.append(retreatLink);
        }
        retreatLink.classList.add("featured-retreat-link");
        retreatLink.textContent = "NC Retreat: Nov 12-15";
        retreatLink.setAttribute("aria-label", "Osho Meditation Retreat at Lake Junaluska, November 12 to 15, 2026");
      });
    }
    const footer = document.querySelector("footer .footer-inner");
    if (footer && !footer.querySelector(".independence-notice")) {
      const notice = document.createElement("p");
      notice.className = "independence-notice";
      notice.textContent = disclaimer;
      footer.append(notice);
    }

    document.querySelectorAll('a[href="americas.html"], a[href="usa.html"], a[href="mexico.html"], a[href="brazil.html"], a[href="colombia.html"], a[href="ecuador.html"], a[href="costa-rica.html"], a[href="dominican-republic.html"]').forEach((link) => {
      if (link.closest("nav") || link.closest("footer")) {
        link.href = "participating-centers.html";
        if (/USA|Americas|Centers|Mexico|Brazil|Colombia|Ecuador|Costa Rica|Dominican/i.test(link.textContent)) link.textContent = "Participating Centers";
      }
    });

    document.querySelectorAll("a[data-official-directory]").forEach((link) => {
      link.href = officialDirectory;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  });
})();
