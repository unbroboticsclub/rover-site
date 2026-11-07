// Site content for rover.unbrobotics.ca.
// Facts here come from the main site (sponsor page, homepage, FAQ). Edit this file to update the text.

export const MAIN_SITE = "https://unbrobotics.ca";

export const competition = {
  name: "Canadian International Rover Challenge",
  short: "CIRC",
  organizer: "CSTAG",
};

// Every year the rover gets a new name. Sapere was the first.
export const currentRover = "Iterum";

export const sapere = {
  name: "Sapere",
  year: 2026,
  dates: "August 7–10, 2026",
  sponsorFunding: "$8,690",
};

// Where the team is based now.
export const base = "Head Hall H302";

// The 2026 (Sapere) build season.
export const meetings = {
  season: "April 27 to August 6",
  when: "Weekdays, 5–8 PM",
  where: "Head Hall H214",
};

// Sapere's 2026 season.
export const stats = [
  { value: "60+", label: "Active Participants", body: "Students from across UNB designing CAD, writing firmware, and building system diagrams." },
  { value: "200+", label: "Hours of Combined Work", body: "Mechanical prototyping, design reviews, electrical architecture, and software development." },
  { value: sapere.sponsorFunding, label: "Sponsor & Partner Funding", body: "Contributed by our sponsors and partners toward Sapere's rover equipment." },
];

// Lead positions we're currently recruiting for.
export const roles = [
  { title: "Software Lead", focus: "Autonomy, navigation, firmware" },
  { title: "Mechanical Lead", focus: "Chassis, suspension, robotic arm" },
  { title: "Electrical Lead", focus: "Power systems, sensors, wiring" },
  { title: "Science Lead", focus: "Life detection, geology sampling" },
];

// The four subsystem teams that build each rover.
export const subsystems = [
  { name: "Mechanical", body: "Chassis, suspension and the robotic arm, from CAD to machined parts." },
  { name: "Electrical", body: "Power systems, sensors and wiring that keep every motor and board alive." },
  { name: "Software", body: "Autonomy, navigation and firmware, from the drive controller up." },
  { name: "Science", body: "Life detection and geology sampling for the science mission." },
];

export const faqs = [
  {
    question: "What is Project Iterum?",
    answer:
      "Iterum is this year's fully custom rover, designed and built by UNB Robotics for the Canadian International Rover Challenge. Every subsystem, from mechanical and electrical to software, is built entirely by UNB students.",
  },
  {
    question: "Is the team recruiting?",
    answer:
      "Yes! We're currently recruiting leads for software, mechanical, electrical, and science. General members are always welcome too.",
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
    answer: `During the ${sapere.year} build season (${meetings.season}) we met ${meetings.when.toLowerCase()} in ${meetings.where}. Follow @unbrobotics for next season's schedule.`,
  },
  {
    question: "How can my company support Iterum?",
    answer:
      "This year we're looking for new sponsors. We offer sponsorship tiers and also welcome donations of electronics, PCB fabrication, 3D printing filament, structural materials, software licenses, and engineering tools. See the sponsorship page on unbrobotics.ca.",
  },
];

export const sponsors = [
  { name: "Best Build", logo: "/images/sponsors/bestbuild.jpg", url: "https://www.facebook.com/profile.php?id=61578223006198", height: "10rem" },
  { name: "goBILDA", logo: "/images/sponsors/gobilda.png", url: "https://www.gobilda.com/", height: "6rem" },
  { name: "Viathan", logo: "/images/sponsors/viathan2png.png", url: "https://viathanwater.com/", height: "6rem" },
  { name: "Xsens", logo: "/images/sponsors/xsens.png", url: "https://www.xsens.com/", height: "6rem" },
  { name: "Basicmicro", logo: "/images/sponsors/basicmicro.jpg", url: "https://www.basicmicro.com/", height: "6rem" },
  { name: "NB Power", logo: "/images/sponsors/nbpower.png", url: "https://www.nbpower.com/", height: "6rem" },
];
