// Site content for rover.unbrobotics.ca.
// Facts here come from the main site (sponsor page, homepage, FAQ). Edit this file to update the text.

export const MAIN_SITE = "https://unbrobotics.ca";

export const competition = {
  name: "Canadian International Rover Challenge",
  short: "CIRC",
  organizer: "CSTAG",
  year: 2026,
  dates: "August 7–10, 2026",
  status: "Competed",
};

export const meetings = {
  season: "April 27 to August 6",
  when: "Weekdays, 5–8 PM",
  where: "Head Hall H214",
};

export const stats = [
  { value: "60+", label: "Active Participants", body: "Students from across UNB designing CAD, writing firmware, and building system diagrams." },
  { value: "200+", label: "Hours of Combined Work", body: "Mechanical prototyping, design reviews, electrical architecture, and software development." },
  { value: "$5,430", label: "Funding Secured", body: "Awarded by the UNB Engineering Endowment Fund." },
];

export const principles = [
  ["Zone Division", "Decentralized subsystems — one fault can't cascade."],
  ["System Design Engineering", "MIT 16.842 methodology with rigorous design reviews."],
  ["Limit COTS Parts", "Custom interconnects, chassis, and instrumentation."],
  ["Design for Serviceability", "Quick-release interconnects on all critical components."],
  ["HIL Testing", "Hardware-in-the-Loop validates field performance."],
  ["Rapid Iteration", "CAD and EDA toolchains with robust version control."],
];

export const subsystems = [
  {
    title: "Mechanical",
    items: [
      "Fusion 360 models complete: arm, chassis, wheels",
      "Custom rocker-bogie suspension geometry",
      "Virtual LiDAR & stereo camera arrays designed",
      "Lightweight, waterproof low-cost frame",
      "Gasketed airflow for Nvidia Orin GX thermal control",
    ],
  },
  {
    title: "Electrical",
    items: [
      "7-Zone decentralized architecture",
      "24V 72Ah LiFePO4 + Smart BMS (8S 100A)",
      "Hardware fail-safes & transient suppression",
      "IP67-rated ruggedized interconnects",
      "Mac mini M4 Pro + Nvidia compute backbone",
    ],
  },
  {
    title: "Software",
    items: [
      "Hard real-time scheduling (time-triggered cycle)",
      "Static resource allocation — no mission-critical starvation",
      "Envelope protection blocks unsafe actuation",
      "Fixed-size periodic data packets, no latency spikes",
      "Automatic fail-safe reversion on timing violations",
    ],
  },
];

export const roles = [
  "Mechanical — chassis, suspension, robotic arm",
  "Electrical — power systems, sensors, wiring",
  "Software — autonomy, navigation, firmware",
  "Science — life detection, geology sampling",
];

export const faqs = [
  {
    question: "What is Project Iterum?",
    answer:
      "Iterum is a fully custom rover platform designed and built by the UNB Robotics Club for the Canadian International Rover Challenge. Every subsystem — mechanical, electrical, and software — is built entirely by UNB students.",
  },
  {
    question: "Has Iterum competed yet?",
    answer: `Yes. After clearing the qualifier round, Iterum competed at CIRC ${competition.year}, held ${competition.dates} and organized by ${competition.organizer}.`,
  },
  {
    question: "Who can join the rover team?",
    answer:
      "Anyone from any faculty can join. The only requirement is that you are a UNB student and excited to learn about robotics.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No experience is required. Our electrical, mechanical, and software team leads are always around to help you get started.",
  },
  {
    question: "When and where does the team meet?",
    answer: `During the ${competition.year} build season (${meetings.season}) we met ${meetings.when.toLowerCase()} in ${meetings.where}. Follow @unbrobotics for next season's schedule.`,
  },
  {
    question: "How can my company support Iterum?",
    answer:
      "We offer sponsorship tiers and also welcome donations of electronics, PCB fabrication, 3D printing filament, structural materials, software licenses, and engineering tools. See the sponsorship page on unbrobotics.ca.",
  },
];

export const sponsors = [
  { name: "Best Build", logo: "/images/sponsors/bestbuild.jpg", url: "https://www.facebook.com/profile.php?id=61578223006198", height: "10rem" },
  { name: "goBILDA", logo: "/images/sponsors/gobilda.png", url: "https://www.gobilda.com/", height: "6rem" },
  { name: "Viathan", logo: "/images/sponsors/viathan2png.png", url: "https://viathanwater.com/", height: "6rem" },
  { name: "Xsens", logo: "/images/sponsors/xsens.png", url: "https://www.xsens.com/", height: "6rem" },
  { name: "Basicmicro", logo: "/images/sponsors/basicmicro.jpg", url: "https://www.basicmicro.com/", height: "6rem" },
];
