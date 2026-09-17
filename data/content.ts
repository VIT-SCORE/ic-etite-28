/**
 * ic-ETITE '28 — Conference content
 * ---------------------------------------------------------------------------
 * All copy on the site is defined here as typed constants so it can be edited
 * in one place. The visible brand is "ic-ETITE '28".
 *
 * NOTE: The 2028 edition details (dates, deadlines, speakers, fees, links)
 * are NOT yet official. Everything below is retained from the 2024 edition as
 * EDITABLE PLACEHOLDER content. Replace values as official 2028 information is
 * released. Anything that should visibly read as unofficial/placeholder is
 * marked with `placeholder: true` and rendered with a subtle "TBA" treatment.
 */

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type Sponsor = {
  name: string;
  tier: string;
  href?: string;
  /** Optional logo path under /public. Falls back to a monogram tile. */
  logo?: string;
};

export type ContactChannel = { label: string; value: string; href: string };
export type SocialLink = { label: string; href: string; icon: SocialIcon };
export type SocialIcon = "instagram" | "linkedin" | "facebook" | "email";

export interface HighlightItem {
  text: string;
}

/* -------------------------------------------------------------------------- */
/* Brand                                                                       */
/* -------------------------------------------------------------------------- */

export const BRAND = {
  name: "ic-ETITE '28",
  /** Placeholder logo. Drop the final SVG at public/assets/logo.svg to replace. */
  logo: "/assets/logo.svg",
  edition: "Third International Conference",
  fullName:
    "International Conference on Emerging Trends in Information Technology and Engineering",
} as const;

/* -------------------------------------------------------------------------- */
/* Navigation (2024 information architecture)                                  */
/* -------------------------------------------------------------------------- */

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Conference",
    children: [
      { label: "Authors", href: "/authors" },
      { label: "Registrations", href: "/registrations" },
      { label: "Speakers", href: "/speakers" },
      { label: "Committee", href: "/committee" },
      { label: "Sponsorships", href: "/sponsorship" },
    ],
  },
  { label: "TechNext'24", href: "https://technext.vit.ac.in/" },
  { label: "BOLT 2.0", href: "https://bolt.vit.ac.in/" },
  { label: "Visa", href: "/visa" },
  { label: "ic-ETITE'20", href: "/icetite20" },
  { label: "Hotels", href: "/hotel" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/* Deadline / alert strip (placeholder — 2028 date not yet official)           */
/* -------------------------------------------------------------------------- */

export const DEADLINE_NOTICE = {
  text:
    "Last Date for the Camera Ready Paper Submission and Registration is 27 January 2024.",
  placeholder: true,
} as const;

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "IEEE · VIT VELLORE",
  title: "Welcome to ic-ETITE '28",
  subtitle:
    "Second International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'24)",
  sponsorLine: "Technically co-sponsored by IEEE Madras Section",
  dateLine: "February 22-23, 2024 at VIT Vellore, India",
  placeholder: true,
  primaryCtas: [
    {
      label: "Paper Submission",
      href: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FicETITE2024",
      variant: "primary",
    },
    {
      label: "Registration",
      href: "https://events.vit.ac.in/events/ICETITE",
      variant: "primary",
    },
    {
      label: "Brochure",
      href: "https://icetite.vit.ac.in/docs/ic-ETITE_24.pdf",
      variant: "secondary",
    },
  ] as CtaLink[],
  secondaryLinks: [
    { label: "Download Brochure", href: "https://icetite.vit.ac.in/docs/ic-ETITE_24.pdf" },
    { label: "Book a Stall", href: "https://technext.vit.ac.in/booth-enquiry" },
    {
      label: "Presentation Guidelines",
      href: "https://icetite-web.vercel.app/docs/instructions.pdf",
    },
  ] as CtaLink[],
  /** Small monospace signal labels rendered around the hero chip. */
  signals: [
    "SIG · TX",
    "PLL · LOCK",
    "V-CORE 1.05",
    "CLK 3.2GHz",
    "IEEE·MADRAS",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Content sections                                                            */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  id: "about",
  label: "01 / OVERVIEW",
  title: "About ic-ETITE",
  body: `The purpose of this conference is to enhance the research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering and to afford an international platform for researchers, academicians, engineers, industrialists and students around the world to share their research findings with the global experts in the field of Science and Technology. The primary goal of the conference is to help the delegates to launch their research or business relations and to associate for future collaborations in their career path. Original, unpublished papers highlighting specific research domains from all subject perspectives are invited from delegates worldwide. In this concern, the conference aims to deliver, coordinate and publish research and resources to enrich the impact and growth of education allied.`,
} as const;

export const THEME = {
  id: "theme",
  label: "02 / MISSION",
  title: "Theme of the Conference",
  body: `ic-ETITE'28 expresses the importance of upgrading the research in Information Technology and Engineering. It motivates to provide a worldwide platform to researchers far and widespread by exploring their innovations in the field of science and technology. The mission is to promote and improve the research and development related to Information Technology and Engineering. The essential objective of the conference is to assist the researchers in discovering the global linkage for future joint efforts in their academic outlook.`,
  /** Broad topic areas shown as circuit cards. */
  tracks: [
    "Information Technology",
    "Computer Engineering",
    "Communication Engineering",
    "Electronics Engineering",
    "Emerging Technologies",
    "Interdisciplinary Research",
  ],
} as const;

export const HIGHLIGHTS = {
  id: "highlights",
  label: "03 / LEGACY",
  title: "Highlights of ic-ETITE'20",
  items: [
    { text: "The previous International Conference on Emerging Trends in Information Technology and Engineering was organized on 24th & 25th February 2020." },
    { text: "ic-ETITE'20 was technically Co-sponsored by IEEE Computer Society Madras Chapter, IEEE Communications Society Madras Chapter and supported by ACM-Madras Chapter." },
    { text: "All the presented papers were published in the IEEE Xplore by the IEEE." },
    { text: "ic-ETITE'20 had 21 technical and 17 keynote sessions." },
    { text: "A hackathon titled \u201CBreakthrough on Locked Technology\u201D (BOLT) was conducted with 500+ participants and gave Rs. 1,00,000 as prize money." },
  ] as HighlightItem[],
  proceedings: {
    label: "ic-ETITE'20 Proceedings",
    href: "https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding",
  },
  isbn: [
    "IEEE Xplore ISBN: 978-1-7281-4142-8",
    "USB ISBN: 978-1-7281-4141-1",
  ],
  stats: [
    { value: "21", label: "Technical sessions" },
    { value: "17", label: "Keynote sessions" },
    { value: "500+", label: "Hackathon participants" },
    { value: "\u20B91,00,000", label: "Prize pool" },
  ],
} as const;

export const PREVIOUS_EVENT_IMAGES = [
  { title: "Previous Event", label: "ARCHIVE · 01", image: "" },
  { title: "Previous Event", label: "ARCHIVE · 02", image: "" },
  { title: "Previous Event", label: "ARCHIVE · 03", image: "" },
] as const;

export const VIT = {
  id: "vit",
  label: "04 / HOST",
  title: "About VIT",
  body: `Vellore Institute of Technology was established under Section 3 of the University Grants Commission (UGC) Act, 1956, and was founded in 1984 as Vellore Engineering College. The Union Ministry of Human Resources Development conferred University status on Vellore Engineering College in 2001. The University is headed by its founder and Chancellor, Dr. G. Viswanathan, a former Parliamentarian and Minister in the Tamil Nadu Government. It persistently seeks and adopts innovative methods to improve the quality of higher education consistently. The campus has a cosmopolitan atmosphere with students from all corners of the globe. The institution is committed towards its vision of \u201CTransforming life through excellence in education and research\u201D and adopts a professional approach in governance.`,
  ranking: {
    label: "Ranking & Accreditation",
    intro:
      "VIT has emerged as one of the best institutes in India and is aspiring to become a global leader. Quality in teaching-learning, research and innovation make VIT unique.",
    items: [
      "Engineering and Technology subject areas of VIT are the 240th best in the World and the 9th best in India; eight subjects of VIT are within the top 500 in the world (QS World University Rankings by Subject 2023).",
      "Computer Science & Information Systems subject of VIT is ranked among the top 201-250 Universities in the World and the 7th best institution in India (QS World University Rankings by Subject 2023).",
      "The 8th best University, the 11th best research institution and the 11th best engineering institution in India (NIRF Ranking, Govt. of India 2023).",
      "The 173rd best Institution in Asia (QS - Asia University Rankings 2023).",
      "Ranked among the top 601-700 Universities of the world and one among the top 3 Institutions in India (Shanghai ARWU Ranking 2022).",
      "NAAC Accreditation with A++ grade (3.66 out of 4).",
    ],
  },
} as const;

export const SCORE = {
  id: "score",
  label: "05 / SCHOOL",
  title: "About SCORE",
  subtitle: "Formerly SITE",
  body: `The School of Computer Science Engineering and Information Systems (SCORE) offers B.Tech (IT), M.Tech (Software Engineering), MCA, BCA, B.Sc (Computer Science), M.Tech (by Research) and Ph.D programs in the domain of Information Technology and Engineering. Its focus is on holistic learning to help students make significant contributions to the Information Technology industry and to serve society at large. The school has more than 5,900 students and 188 committed faculty members, apart from many visiting professors, working professionals from the industry and R&D organizations. The School has state-of-the-art infrastructure for teaching-learning, research and consultancy, with strong linkages to leading IT companies and research organizations.`,
  society: {
    title: "About IEEE Information Theory Society, VIT",
    body: `The IEEE Information Theory Society at VIT is a newly established student chapter that explores the latest advancements in information theory to tackle modern-day challenges. We provide a nurturing environment for fresh ideas and innovative thinking, empowering individuals to make a difference. Our chapter organizes technical events, workshops, and delivers high-quality projects to partners and collaborators.`,
  },
} as const;

export const MANUSCRIPT = {
  id: "manuscript",
  label: "06 / SUBMIT",
  title: "Manuscript Submission",
  body: `Papers should be submitted through the link provided. All submitted papers will go through a plagiarism check process. The manuscript should not contain embedded links, scanned images, headers or footers. Email submission will not be accepted. Original contributions are solicited on topics covered under broad areas not restricted to Information Technology and Engineering.`,
  submitLink: {
    label: "Submit via Microsoft CMT",
    href: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FicETITE2024",
  },
  queriesEmail: "icetiteconference@vit.ac.in",
  checklist: [
    "No embedded links",
    "No scanned images",
    "No headers or footers",
    "Passes plagiarism check",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Sponsors                                                                     */
/* -------------------------------------------------------------------------- */

export const SPONSORS: Sponsor[] = [
  { name: "IEEE Madras Section", tier: "Technical Co-Sponsor" },
  { name: "Cisco", tier: "Title Sponsor" },
  { name: "Intel", tier: "Technology Partner & Co-Title Sponsor" },
];

export const SUPPORTED_BY: Sponsor[] = [
  { name: "ACM Madras Chapter", tier: "Supported By" },
  { name: "IEEE Information Theory Society", tier: "Supported By", href: "https://ieee-its-landing.vercel.app/" },
  { name: "IEEE Computer Society", tier: "Supported By" },
  { name: "IEEE Madras", tier: "Supported By" },
  { name: "Institution's Innovation Council", tier: "Supported By" },
  { name: "Rox", tier: "Supported By" },
  { name: "Solaris", tier: "Supported By" },
  { name: "Yellow.ai", tier: "Supported By" },
];

/* -------------------------------------------------------------------------- */
/* Contact / address / social                                                  */
/* -------------------------------------------------------------------------- */

export const CONTACT = {
  id: "contact",
  label: "07 / CONNECT",
  title: "Contact",
  email: "icetiteconference@vit.ac.in",
  address: [
    "School of Computer Science Engineering and Information Systems (SCORE)",
    "Formerly School of Information Technology and Engineering (SITE)",
    "Vellore Institute of Technology",
    "Vellore, Tamil Nadu, India. 632014.",
  ],
  documents: [
    { label: "Download Conference Brochure", href: "https://icetite.vit.ac.in/docs/ic-ETITE_24.pdf" },
    { label: "Download Sponsorship Brochure", href: "https://icetite.vit.ac.in/docs/CONF_BROCHURE_INR.pdf" },
    { label: "Download NOC, MHA India", href: "https://icetite.vit.ac.in/docs/noc_letter.pdf" },
  ] as CtaLink[],
} as const;

export const SOCIALS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/icetite20/", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/icetite.icetite.3/", icon: "facebook" },
  { label: "Email", href: "mailto:icetiteconference@vit.ac.in", icon: "email" },
];
