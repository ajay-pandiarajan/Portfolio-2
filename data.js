const USER_PROFILE = {
  name: "Ajay P",
  logoInitials: "AP",
  title: "Electronics Student & Explorer",
  location: "Chennai, India",
  bio: "I design and build intelligent electronic systems — from PCB layouts to embedded firmware — turning circuit diagrams into working prototypes. Currently exploring the space where signal processing meets machine learning.",
  heroCtaLabel: "View Work",
  heroCtaHref: "#projects",
  resumeHref: "#",

  socials: {
    github: "https://github.com/ajay-pandiarajan",
    linkedin: "https://www.linkedin.com/in/ajay-pandiarajan/",
    email: "mailto:ajaypandiyarajann@gmail.com",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
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

  projects: [
    {
      title: "Design of Basic Electronic Voting Machine",
      description: "A basic EVM build using CD4026 Decade Counters, 7-Segment Display to demonstrate the voting process",
      tags: ["IoT", "CD4026", "EVM"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },
    {
      title: "Fingerprint based Electronic Voting Machine",
      description: "A Biometric enabled Voting Machine which enables the eligible voters to vote and designed with Arduino microcontroller and RM305 FP sensor.",
      tags: ["RM305", "Arduino", "IoT"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },
    {
      title: "TrackoVex-a simple solution",
      description: "An BLE Tracker device,inspired from Apple Airtag and build with the ESP32",
      tags: ["ESP32", "BLE", "WebApp"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },
  /*  {
      title: "Modular PCB Weather Station",
      description: "A stackable, solar-powered weather station with swappable sensor daughterboards and a LoRa uplink to a home dashboard.",
      tags: ["KiCad", "LoRa", "C++"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },
    {
      title: "Voice-Activated Lab Bench",
      description: "An offline voice-command interface for switching bench instruments, built on a Raspberry Pi with a local keyword spotter.",
      tags: ["Raspberry Pi", "TensorFlow Lite", "Linux"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },
    {
      title: "Open-Source Oscilloscope Probe",
      description: "A low-cost, high-impedance active probe design with an accompanying calibration app for hobbyist oscilloscopes.",
      tags: ["Analog Design", "KiCad", "React"],
      link: "https://github.com/",
      linkLabel: "GitHub",
    },*/
  ],

  certificates: [
    {
      name: "Embedded Systems Essentials",
      issuer: "Texas Instruments",
      date: "2025",
      link: "#",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "#",
    },
    {
      name: "Digital Signal Processing",
      issuer: "IIT Madras — NPTEL",
      date: "2024",
      link: "#",
    },
    {
      name: "PCB Design with KiCad",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      name: "Google Cloud Digital Leader",
      issuer: "Google",
      date: "2023",
      link: "#",
    },
    {
      name: "IoT Systems Architecture",
      issuer: "Cisco Networking Academy",
      date: "2023",
      link: "#",
    },
  ],

  achievements: [
    { year: "2026", title: "1st place, National Embedded Systems Hackathon", detail: "Led a 3-person team building the vibration fault classifier under a 24-hour deadline." },
    { year: "2025", title: "Published undergraduate research note on MPPT efficiency", detail: "Presented findings at a regional student power-electronics symposium." },
    { year: "2024", title: "Selected for university robotics research assistantship", detail: "Assisted with actuator control research in the robotics lab." },
    { year: "2023", title: "Finalist, State-Level Electronics Design Contest", detail: "Reached the top 5 out of 140 teams with the modular weather station." },
    { year: "2022", title: "Started documenting builds publicly", detail: "Began writing up projects and circuit notes to track progress over time." },
  ],

  contact: {
    heading: "Let's talk",
    text: "Open to internships, collaborations, and interesting hardware problems. The fastest way to reach me is email.",
  },

  footer: {
    copyright: "Ajay P. Built with curiosity and a lot of solder flux.",
  },
};
