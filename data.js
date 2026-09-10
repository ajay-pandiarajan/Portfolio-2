const USER_PROFILE = {
  name: "Ajay P",
  logoInitials: "AP",
  title: "Electronics Student & Explorer",
  location: "Madurai / Chennai, India",
  bio: "I design and build intelligent electronic systems — from PCB layouts to embedded firmware — turning circuit diagrams into working prototypes. Currently exploring the space where signal processing meets machine learning.",
  heroCtaLabel: "View Education",
  heroCtaHref: "#education",
  resumeHref: "#",

  socials: {
    github: "https://github.com/ajay-pandiarajan",
    linkedin: "https://www.linkedin.com/in/ajay-pandiarajan/",
    email: "mailto:ajaypandiyarajann@gmail.com",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
    { label: "Feedback", href: "#feedback" },
  ],

  about: {
    heading: "About",
    paragraphs: [
      "I'm an electronics engineering student who thinks best with a soldering iron in one hand and a datasheet in the other. My work sits at the intersection of embedded hardware, signal processing, and applied machine learning.",
      "Outside of coursework, I take apart old radios, prototype sensor rigs on breadboards, and write firmware that occasionally works on the first try.",
    ],
    stats: [
      { value: "4", label: "Circuits prototyped" },
      { value: "10+", label: "Certificates Earned" },
      { value: "8.04", label: "CGPA Earned" },
    ],
  },

  education: [
    {
      institution: "TVS Higher Secondary School, Madurai",
      period: "2020 – 2024",
      field: "Higher Secondary Education (HSC)",
      interests: ["Basic Electronics", "Physics", "Mathematics", "Computer Science"],
      description: "Foundational schooling focusing on core science and mathematics, where initial interest in electronics and programming was developed."
    },
    {
      institution: "Mepco Schlenk Engineering College, Sivakasi",
      period: "2022 – 2026",
      field: "B.E. Electronics and Communication Engineering",
      interests: ["Embedded Systems", "IoT Architecture", "Digital Signal Processing", "Biometric Applications"],
      description: "Undergraduate degree focusing on circuit design, microcontroller integration, firmware development, and practical hardware design."
    }
  ],

  achievements: {
    symposiums: [
      {
        year: "2025",
        title: "Paper Presentation",
        detail: "Presented a paper- Cobots in HealthCare at Government College of Engineering and Technology, Erode."
      },
      {
        year: "2023",
        title: "State-Level Electronics Design Contest",
        detail: "Finalist standing in top 5 out of 140 teams for innovative hardware system design presentation."
      }
    ],
    researchDone: [
      {
        year: "2026",
        title: "Design of MicroStrip Patch Antenna using OpenEMS",
        detail: "Attended Workshop on designing an Antenna and designed a Microstrip Patch Antenna and gone through its parameters."
      },
    /*  {
        year: "2025",
        title: "Undergraduate Research Note on MPPT Efficiency",
        detail: "Published research note analyzing efficiency parameters in modern solar charge controllers."
      },
      {
        year: "2024",
        title: "Actuator Control Research Assistantship",
        detail: "Selected for university robotics research assistantship focused on high-precision actuator control."
      }*/
    ]
  },

  contact: {
    heading: "Let's talk",
    text: "Open to internships, collaborations, and interesting hardware problems. Connect with me directly via email, LinkedIn, or GitHub.",
  },

  footer: {
    copyright: "Ajay P. Built with curiosity and a lot of solder flux.",
  },
};
