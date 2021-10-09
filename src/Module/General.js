// Importing all sponsors logos from Assets
// import taskade from "./Assets/sponsorsLogos/taskade.png";
// import Replit from "./Assets/sponsorsLogos/replit.png";
// import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
// import echoAR from "./Assets/sponsorsLogos/echoAR.png";
// import cfc from "./Assets/sponsorsLogos/cfc.png";
// import pass from "./Assets/sponsorsLogos/1pass.png";
// import glimpse from "./Assets/sponsorsLogos/glimpse.png";
// import qoom from "./Assets/sponsorsLogos/qoom.svg";
// import sublime from "./Assets/sponsorsLogos/sublime.png";
// import egg from "./Assets/sponsorsLogos/egg.png";
// import ll from "./Assets/sponsorsLogos/ll.png";
// import ACF from "./Assets/sponsorsLogos/ACF.png";
import ieee from './Assets/sponsorsLogos/ieee.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import aditi from "./Assets/teami/aditi.jpg";
import gaurika from "./Assets/teami/gaurika.jpeg";
import kanishk from "./Assets/teami/kanishk.jpg";
import jatin from "./Assets/teami/jatin.jpg";
import harbans from "./Assets/teami/harbans.jpg";
import ritvik from "./Assets/teami/ritvik.jpg";
import gurnameh from "./Assets/teami/gurnameh.jpeg";
import animesh from "./Assets/teami/animesh.jpeg";
import charu from "./Assets/teami/charu.jpg";
import kumud from "./Assets/teami/kumud.jpg";
import shatabarto from "./Assets/teami/shatabarto.jpg";
import pic from "./Assets/teami/pic.png";
import aryan from "./Assets/teami/aryan.jpg";
import muskan from "./Assets/teami/muskan.jpg";
import vishal from "./Assets/teami/vishal.jpg";
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";
import HU from "./Assets/HU.png"

const TOP_SECTION = {
  TITLE: "Join Limbo Hacks",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
  IMG_SRC: HU,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
    instagram: "https://www.instagram.com/pclubuiet/",
    discord: "https://discord.gg/TtBnyeWAqt",
    linkedin: "https://www.linkedin.com/company/pclubbuiet/mycompany/",
    twitter: "https://twitter.com/PClubUIET",
    devpost: "https://limbo-hacks-12968.devpost.com/",
    email: "mailto:pclubuiet@gmail.com",
    mail: "pclubuiet@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is HackUiet?",
  LONG_DESCRIPTION:
    "HackUIET is UIET, PU's premier hackathon organised in the month of November. This year, the hackathon is being held from November.We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes. Throughout the weekend hackers at HackUiet will have unique opportunities to learn from each other trying hands in new technologies .We are determined to have an all-inclusive and diverse group of students attending.So come join us for a 24 hour sprint to build things and most importantly, to learn! Participants are requested to carefully fill the google form.The hackathon will start at  November.Happy Hacking!",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.gle/BFj8mj3Qz1pvAF7W8"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Gurnameh",
      img: gurnameh
    },
    {
      Name: "Harbans Singh",
      img: harbans
    },
    {
      Name: "Aryan Basu",
      img: aryan
    },
    {
      Name: "Kumud Rana",
      img: kumud
    }
  ],
  [
    //Array 2
    
    {
      Name: "Gaurika",
      img: gaurika
    },
    {
      Name: "Kanishk Tyagi",
      img: kanishk
    },
    {
      Name: "Aditi Shandyal",
      img: aditi
    },
    {
      Name: "Shatabarto Bhattacharya",
      img: shatabarto
    },
       
  ],
  [
    {
      Name: "Meghna Thakur",
      img: pic
    },
    {
      Name: "Jatin Jain",
      img: jatin
    },
    {
      Name: "Ritvik Gupta",
      img: ritvik
    },
    {
      Name: "Animesh Bhatt",
      img: animesh
    },
  ],
  [
    {
      Name: "Charu Kaushik",
      img: charu
    },
    {
      Name: "Kumud",
      img: kumud
    },
    {
      Name: "Muskan Jain",
      img: muskan
    },
    {
      Name: "Vishal",
      img: vishal
    },
  ] 
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src:ieee}]
  // [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  // [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'      },
      {
        label: "Who can attend?",
        content: "HackUiet is open to all undergraduate, high school students and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. It would give you exposure for your future journey."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to fill our form and we will guide you through everything."
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at ........... we would happy to help you."
      }
      ,
      {
        label: "Can i volunteer?",
        content: "Yes we are actively looking for volunteers, fill the form and we will be glad to have you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing swag!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
