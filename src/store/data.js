const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Keynotes", link: "/keynotes", activeIndex: 1 },
  { name: "Presentation", link: "/presentations", activeIndex: 2 },
  { name: "Downloads", link: "/downloads", activeIndex: 3 },
  { name: "Registrations", link: "/registration", activeIndex: 4 },
  { name: "Workshops", link: "/workshops", activeIndex: 5 },
  { name: "Contact Us", link: "/contact-us", activeIndex: 6 },
];

const venueImages = [
  { id: "1", src: "https://i.ibb.co/bdny1yB/sliitone.jpg" },
  { id: "2", src: "https://i.ibb.co/yWHFyR6/sliittwo.jpg" },
  { id: "3", src: "https://i.ibb.co/L1S7z9v/sliitfour.png" },
  { id: "4", src: "https://i.ibb.co/VQVZLkn/sliitfive.jpg" },
  { id: "5", src: "https://i.ibb.co/4pz6BL4/sliitsix.png" },
  { id: "6", src: "https://i.ibb.co/r7tJS8f/sliitseven.jpg" },
  { id: "7", src: "https://i.ibb.co/XJsv2gs/sliiteight.jpg" },
  { id: "8", src: "https://i.ibb.co/XpbP8BG/sliitnine.jpg" },
  { id: "9", src: "https://i.ibb.co/Gxp74qM/sliitten.jpg" },
];

const news = [
  {
    id: "1",
    date: "April 03, 2021",
    content: "Registrations are now open for the workshops. Register here",
  },
  {
    id: "2",
    date: "April 03, 2021",
    content:
      "Extended abstract submission deadline for ERU Symposium has been extended to 3rd May 2021. Submit ",
  },
  {
    id: "3",
    date: "April 03, 2021",
    content: "Registrations are now open for the workshops. Register here",
  },
  {
    id: "4",
    date: "April 03, 2021",
    content: "Registrations are now open for the workshops. Register here",
  },
  {
    id: "5",
    date: "April 03, 2021",
    content: "Registrations are now open for the workshops. Register here",
  },
  {
    id: "5",
    date: "April 03, 2021",
    content: "Registrations are now open for the workshops. Register here",
  },
];

const registrationRules = [
  { id: "1", content: "Registration and payment deadline: 10th June 2021" },
  {
    id: "2",
    content:
      "When the researcher registered to the system, the research paper should be uploaded alongside the contact information",
  },
  {
    id: "3",
    content:
      "When the workshop conductor is registered to the system, a proposal containing all the necessary details about the workshop should be uploaded alongside the contact information",
  },
  {
    id: "4",
    content:
      "When the user is registered to the system all the necessary contact information should be uploaded",
  },
  {
    id: "5",
    content: "Attendees must pay upfront to register for the conference",
  },
  {
    id: "5",
    content:
      "Research paper presenters must pay if their papers got approved to present them at the conference",
  },
  { id: "7", content: "Workshop conductors don’t have to pay" },
];

const workshops = [
  {
    id: "1",
    header: "Advanced Instrumental Techniques and Future of Advanced Materials",
    resourcePerson:"Dr. Galhenage A. Sewvandi",
    content:
      "This workshop focuses on advance instrumental techniques and future advance materials. Advanced instrumental techniques, namely; scanning electron microscopy (SEM), transmission electron microscopy (TEM) based instrumental techniques are widely used in experimental research in various streams of science and engineering. The knowledge on the advanced instrumental techniques is crucial for experimental research, failure analysis, and quality assurance. Future advance materials open an avenue for design and development of new devices. The scope of this workshop is firstly to acquaint participants with a fundamental understanding of the theoretical basis as well as the practical applications of these instrumental techniques along with lectures and demonstrations on the techniques. Secondly to rise awareness on future advance materials for cutting-edge research and new developments along with lectures, research guidance, international collaboration, fundraising, and project investigations.",
    link: "#",
  },
  {
    id: "2",
    header: "A Hands-on Introduction for Computational Fluid Dynamics (CFD) Promoting Multidisciplinary Research",
    resourcePerson:"Dr. R.A.C.P. Ranasinghe",
    content:
      "Computational Fluid Dynamics (CFD) has now become a common tool for modelling heat and fluid flow applications in many engineering disciplines. Obtaining accurate results through proper use of CFD requires a solid understanding of underling modelling principles with technical know-how gained through experience. The proposed workshop aims to disseminate the required basic theoretical understanding and technical know-how among researches of various disciplines. The workshop is designed to be largely with hands on sessions solving several real-life engineering problems",
    link: "#",
  },
  {
    id: "3",
    header: "Digital Technology Deployment in Apparel Product Development",
    resourcePerson:"Dr. R.K. Jayamali De Silva",
    content:
      "Digital technology is demanded in various business models, that is from mass production to mass personalization. With the rapid development and adoption of digital technologies, clothing manufacturers tend to provide digital customization of clothing (Yan & Chiou, 2020). Therefore, this workshop aims to demonstrate how modern technologies can be utilized in future apparel development process centering on the human body in the process.",
    link: "#",
  },
  {
    id: "4",
    header: "Work-Study for Productivity Improvement in Manufacturing Organizations",
    resourcePerson:"Dr. Himan Punchihewa",
    content:
      "Most manufacturing organisations have line balancing issue, manning issues and man-machine interaction issues. All these are directly causing lower productivity of the organisation. Work-study (method and time studies) scientifically analyses and helps to resolve the above issues.",
    link: "#",
  },
  {
    id: "5",
    header: "Biomedical Product Development - A Sri-Lankan Perspective",
    resourcePerson:"Dr. Pujitha Silva",
    content:
      "This workshop focuses on creating awareness on the multidisciplinary nature of combining engineering, medicine and commerce, and the essential stepwise process that needs to be followed for successful biomedical device development within Sri Lanka. This will be illustrated using Sri Lankan success stories, by the speakers, who are part of the growing CeBI community of practitioners. The workshop also highlights the challenges faced within Sri Lanka in the current context, and discusses some strategies to overcome them.",
    link: "#",
  },

];

const aboutDetailsOne =
  "The 3rd International conference on advancements in computing -2021 (ICAC2021) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library";
const aboutDetailsTwo =
  "July 24 - 27 in Sri Lanka Institute of Information Technology";

export {
  routes,
  aboutDetailsOne,
  aboutDetailsTwo,
  news,
  venueImages,
  registrationRules,
  workshops
};
