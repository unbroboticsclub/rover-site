// Site content for rover.unbrobotics.ca.
// Facts here come from the main site (sponsor page, homepage, FAQ). Edit this file to update the text.

export const MAIN_SITE = "https://unbrobotics.ca";

// Google Form for joining the team / applying for a lead role.
export const APPLY_FORM = "https://forms.gle/rZAJYoWXYu3qKEnS9";

// Where sponsorship enquiries go.
export const SPONSOR_EMAIL = "robotics@unb.ca";

// Sponsorship tiers. Names carried over from the main site. Tiers are cumulative.
// In-kind sponsorships are recognized up to the tier marked inKindMax.
// `min` is the starting amount in dollars (drives the contribution slider on /sponsor).
export const tiers = [
  { name: "Shuttle Mechanic", min: 0, amount: "Under $500", range: "Up to $499", perks: ["Thank-you letter"] },
  { name: "Rocket Scientist", min: 500, amount: "$500+", range: "$500 – $1,499", perks: ["Name on our sponsor banner", "Name on our website's sponsor page", "Active link to your website"] },
  { name: "Astronaut", min: 1500, amount: "$1,500+", range: "$1,500 – $4,999", popular: true, inKindMax: true, perks: ["Large, central name on our sponsor banner", "Logo on our website's top banner"] },
  { name: "Martian", min: 5000, amount: "$5,000+", range: "$5,000 and up", perks: ["Your name on the rover body's digital signage", "A custom message on the rover's digital signage"] },
];

// In-kind donations we can put to use.
export const inKindNeeds = [
  "Electronics", "PCB fabrication", "3D printing filament", "Structural materials", "Software licenses", "Engineering tools",
];

export const competition = {
  name: "Canadian International Rover Challenge",
  short: "CIRC",
  organizer: "CSTAG",
};

// The team keeps building on the same rover; each season's iteration gets its own name. Sapere was the first.
export const currentRover = "Iterum";

export const sapere = {
  name: "Sapere",
  year: 2026,
  dates: "August 7–10, 2026",
  sponsorFunding: "$8,690",
  inKindSponsorship: "$7,459.08",
};

// This year's rover and its trip back to CIRC.
export const iterum = {
  name: currentRover,
  year: 2027,
  dates: "August 6–9, 2027",
};

// Where the team is based now.
export const base = "Head Hall C127";

// Current team meetings.
export const meetings = {
  when: "every Monday at 6 PM",
  where: base,
};

// Sapere's 2026 season.
export const stats = [
  { value: "60+", label: "Active Participants", body: "Students from across UNB designing CAD, writing firmware, and building system diagrams." },
  { value: "300+", label: "Hours of Combined Work", body: "Mechanical prototyping, design reviews, electrical architecture, and software development." },
  { value: sapere.sponsorFunding, label: "Sponsor & Partner Funding", body: "Contributed by our sponsors and partners toward Sapere's rover equipment." },
  { value: sapere.inKindSponsorship, label: "In-Kind Sponsorship", body: "Equipment, materials, and services donated by our sponsors and partners toward Sapere (CAD)." },
];

// Lead positions we're currently recruiting for.
export const roles = [
  { title: "Mobility Lead", focus: "Structural chassis, suspension, wheels, drivetrain, motor control and tuning, and testing traction, braking, and payload capacity" },
  { title: "Manipulation Lead", focus: "Arm, gripper, interchangeable tools, joint controls, and testing reach, lifting capacity, and grasping" },
  { title: "Mechanical Integration Lead", focus: "Master Fusion assembly, component layout, enclosures, brackets, mounting points, ventilation, cable-routing space, and access for assembly and repairs" },
  { title: "Power & Electrical Lead", focus: "Battery, power distribution, fuses, wire gauge and ampacity, harness design and labeling, connector selection and pinouts, emergency-stop hardware, STM32 Nucleo firmware, and electrical testing" },
  { title: "Autonomy & Navigation Lead", focus: "Localization, route planning, autonomous driving, obstacle avoidance, autonomous task commands, and maintaining the ROS rover model for visualization in RViz" },
  { title: "Communications & Operator Systems Lead", focus: "Rover radios, antennas, base station, video feeds, telemetry, operator controls, onboard computer startup, and the Mac-side interface to the Nucleo" },
  { title: "Project Manager", focus: "Deadlines, competition requirements, coordination between leads, integrated rover testing, tracking issues through resolution, safety coordination, and compiling the safety report with input from each lead" },
];

// Responsibilities every rover lead shares, shown under the roles list.
export const allLeadDuties =
  "Onboard their members, maintain their team's introduction document and dossier, keep current designs and test instructions easy to find, and submit part requests with specifications, cost, and date needed.";

// The subsystem teams that build each rover (matching the lead roles above). `code` is the short tag shown on the site.
export const subsystems = [
  { name: "Mobility", code: "MOB", body: "Structural chassis, suspension, wheels and drivetrain, with motor control and tuning, tested for traction, braking and payload capacity." },
  { name: "Manipulation", code: "MANIP", body: "The arm, gripper and interchangeable tools, plus joint controls, tested for reach, lifting capacity and grasping." },
  { name: "Mechanical Integration", code: "INTEG", body: "The master Fusion assembly: component layout, enclosures, brackets, mounting points, ventilation, cable routing and access for repairs." },
  { name: "Power & Electrical", code: "PWR", body: "Battery, power distribution, fuses and wiring, harnesses and connectors, emergency-stop hardware and STM32 Nucleo firmware." },
  { name: "Autonomy & Navigation", code: "NAV", body: "Localization, route planning, obstacle avoidance and autonomous driving, with a ROS rover model for visualization in RViz." },
  { name: "Communications & Operator Systems", code: "COMMS", body: "Radios, antennas, the base station, video feeds, telemetry, operator controls and the onboard computer's link to the Nucleo." },
];

export const faqs = [
  {
    question: "What is Project Iterum?",
    answer:
      "Iterum is the latest iteration of our custom rover, built on Sapere and designed by UNB Robotics for the Canadian International Rover Challenge. Each season we upgrade the rover and give the new iteration its own name. Every subsystem, from mobility and manipulation to power, autonomy, and communications, is built entirely by UNB students.",
  },
  {
    question: "Is the team recruiting?",
    answer:
      "Yes! We're currently recruiting leads for mobility, manipulation, mechanical integration, power and electrical, autonomy and navigation, and communications and operator systems, plus a project manager. General members are always welcome too.",
  },
  {
    question: "Who can join the rover team?",
    answer:
      "Anyone from any faculty can join. The only requirement is that you are a UNB student and excited to learn about robotics.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No experience is required. Our subsystem leads are always around to help you get started.",
  },
  {
    question: "When and where does the team meet?",
    answer: `We meet ${meetings.when} in ${meetings.where}. New members are always welcome, so just drop by.`,
  },
  {
    question: "How can my company support Iterum?",
    answer:
      "This year we're looking for new sponsors. We offer sponsorship tiers and also welcome donations of electronics, PCB fabrication, 3D printing filament, structural materials, software licenses, and engineering tools. See our sponsorship page or email robotics@unb.ca.",
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
