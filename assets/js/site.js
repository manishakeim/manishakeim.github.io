const timelineData = [
  {
    date: "Mar 2026",
    text: "Paper accepted at ICWSM'26: <i>Measuring the Semantic Structure and Evolution of Conspiracy Theories</i>",
    links: [
      { label: "ICWSM'26", href: "https://www.icwsm.org/2026/index.html" }
    ]
  },
  {
    date: "Mar 2026",
    text: "Our poster, <i>Measuring the Semantic Structure and Evolution of Conspiracy Theories</i> has been accepted for presentation at the Jakobsen Graduate Research 2026.",
    links: [
      { label: "UIowa", href: "https://gss.grad.uiowa.edu/jakobsen-conference/jakobsen-graduate-development-series-research-showcase" }
    ]
  },
  {
    date: "Jun–Aug 2025",
    text: "I spent the summer at TRIPS Lab as a Software Developer, supporting bicycling safety research with data annotation tools and workflows.",
    links: [
      { label: "TRIPS Lab", href: "https://trips.lab.uiowa.edu/bicycle-and-pedestrian" }
    ]
  },
  {
    date: "Sep 2024",
    text: "I passed my Ph.D. qualifying exam on 'Shifting Sands'. Check out my presentation and report on how words change their meaning over time.",
    links: [
      { label: "Slides", href: "assets/documents/Qualifying_Presentation_MK.pdf" },
      { label: "Report", href: "assets/documents/QualifyingReport_MK.pdf" }
    ]
  },
  {
    date: "Sep 2024",
    text: "I served as a student volunteer at ACM CSCW 2024 in San José, Costa Rica.",
    links: [
      { label: "CSCW 2024", href: "https://cscw.acm.org/2024/" }
    ]
  },
  {
    date: "Apr 2024",
    text: "I was selected for the CRA-WP Grad Cohort for Women 2024.",
    links: [
      { label: "CRA-WP", href: "https://web.cvent.com/event/af32de64-9853-4aff-a0c9-b0dc590dd1e8/summary" }
    ]
  },
  {
    date: "Dec 2023",
    text: "I received a travel grant for CoNEXT 2023 and delivered a lightning talk.",
    links: [
      { label: "CoNEXT", href: "https://conferences.sigcomm.org/co-next/2023/#!/home" }
    ]
  },
  {
    date: "Oct 2023",
    text: "I attended CSCW 2023 in Minneapolis and learned from inspiring talks and discussions.",
    links: [
      { label: "CSCW 2023", href: "https://cscw.acm.org/2023/" }
    ]
  },
  {
    date: "Sep 2023",
    text: "I was awarded a travel grant for IMC 2023.",
    links: [
      { label: "IMC 2023", href: "https://conferences.sigcomm.org/imc/2023/" }
    ]
  },
  {
    date: "Aug 2023",
    text: "I started my Ph.D. in Computer Science at the University of Iowa.",
    links: [
      { label: "UIowa", href: "https://uiowa.edu" }
    ]
  },
  {
    date: "Jul 2023",
    text: "I wrapped up my industry role at Cisco after nearly four years.",
    links: [
      { label: "Cisco", href: "https://www.cisco.com/" }
    ]
  }
];

const timelineContainer = document.querySelector("#timeline-list");

if (timelineContainer) {
  timelineContainer.innerHTML = timelineData
    .map((item) => {
      const iconFor = (label) => {
        const lower = label.toLowerCase();
        if (lower.includes("presentation") || lower.includes("slides")) {
          return "assets/images/ppt.png";
        }
        if (lower.includes("report") || lower.includes("pdf")) {
          return "assets/images/pdf.png";
        }
        return "";
      };

      const links = item.links
        ? item.links
            .map((link) => {
              const icon = iconFor(link.label);
              const iconTag = icon ? `<img src=\"${icon}\" alt=\"\" aria-hidden=\"true\"> ` : "";
              return `<a href=\"${link.href}\" target=\"_blank\" rel=\"noopener\">${iconTag}${link.label}</a>`;
            })
            .join("")
        : "";
      return `
        <article class=\"timeline-item\">
          <div class=\"timeline-date\">${item.date}</div>
          <div class=\"timeline-body\">
            <p>${item.text}</p>
            ${links ? `<div class=\"timeline-links\">${links}</div>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".timeline-item").forEach((item) => observer.observe(item));
