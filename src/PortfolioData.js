import apnavote from "./assets/apnavote.jpg";
import snapmeet from "./assets/snapmeet.jpg";
import weather from "./assets/weather.png";
import animal from "./assets/animal.jpg";
import issuer_uci from "./assets/issuer/uci.png";
import certificate_predictive from "./assets/cer/predictive.png";
import issuer_men from "./assets/issuer/man.png";
import certificate_dsa from "./assets/cer/dsa.png";
import certificate_java from "./assets/cer/java.png";
import issuer_learnquest from "./assets/issuer/learn.png";
import certificate_js from "./assets/cer/hacker.png";
import issuer_hack from "./assets/issuer/hackerrank.png";

const header = {
  homepage: "",
  title: "Diptoman Singh",
};
const about = {
  name: "Diptoman Singh",
  profession: "I.T Developer",
  experience: "Entry Level",
  phone: "(+91)9749027688",
  email:"diptomansingh.personal@gmail.com",
  address:"Near RadhaKrishna Mandir, R.N.M Lane,Ashokpally, Raniganj, Bardhaman, West Bengal, India - 713347",
  role: ["AI/ML Developer", "FrontEnd Developer", "BackEnd Developer", "Database Developer", "Full Stack Developer", "Software Developer"], 
  description:
    "I am an aspiring full-stack developer with a focus on the MERN stack, experienced in creating responsive and interactive web applications. Passionate about exploring emerging technologies and maintaining clean, efficient code practices, I recently completed my Master of Computer Applications. I am now seeking a challenging role in software development to leverage my expertise in Python, AI, and web development, contributing to impactful and innovative projects that support organizational success.",
  resume:
    "https://drive.google.com/file/d/1-2taaTHo_OSFgAu3ZUQj0h1SLCK4YlMo/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/diptomansingh/",
    github: "https://github.com/DipSingh05/",
  },
};
const projects = [
  {
    title: "ApnaVote",
    name: "ApnaVote---AI-Ml-and-Blockchain-Based-Python-Desktop-Tkinter-Project",
    description:
      "ApnaVote is a secure Python-based voting app using Tkinter, AI/ML, Firebase, and blockchain. It enables one-time voting with AI facial verification and tamper-proof blockchain storage. Firebase manages voter and candidate data, while smart contracts handle real-time results and candidate updates.",
    stack: ["Python", "JavaScript", "Solidity", "AI/ML"],
    image: apnavote,
    sourceCode: "https://github.com/DipSingh05/ApnaVote---AI-Ml-and-Blockchain-Based-Python-Desktop-Tkinter-Project.git",
    livePreview:"https://github.com/user-attachments/assets/c81b4913-2c12-49ad-ab97-d63ab8656ad1",
  },
  {
    title: "Snapmeet",
    name: "Snapmeet - A Cutting-Edge Communication Platform",
    description:
      "Snapmeet is a cutting-edge communication platform offering high-quality video calls, instant messaging, live chat and video translation, screen sharing, document sharing, speech recognition, and emoji support. It seamlessly connects users worldwide with advanced features for a superior communication experience.",
    stack: ["React SSR", "Redux", "WebRTC", "MongoDB"],
    image: snapmeet,
    sourceCode: "https://github.com/DipSingh05/snapmeet.git",
    livePreview:"https://github.com/user-attachments/assets/5a347323-0ccd-4707-8996-d465996de856",
  },
  {
    itle: "MyWeather",
    name: "Weather App",
    description:
      "This Weather App is made in Java using Java swing component and Openweathermap API for the data.",
    stack: ["Java", "Rest API"],
    image: weather,
    sourceCode: "https://github.com/DipSingh05/weather-app-java-main.git",
    livePreview:"https://github.com/user-attachments/assets/d2d9b1f6-8ea4-4765-8c19-d1ebb2df4ae7",
  },
  {
    itle: "Wildlife Classification",
    name: "Wildlife Classification & Detection Using AI/ML",
    description:
      "This project aims to use articial intelligence and machine learning for wildlife species classication and detection using image recognition and deep learning models.",
    stack: ["Deep Learning", "Python", "Numpy", "TensorFlow"],
    image: animal,
    sourceCode: "https://github.com/DipSingh05/Animal.git",
    livePreview:"https://github.com/user-attachments/assets/cb5455b9-af52-4932-b102-179bcfe6b704",
  },
];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];
const contact = {
  email: "diptomansingh.personal@gmail.com",
};
const certificate = [
  {
    id:1,
    name: "Predictive Modeling, Model Fitting, and Regression Analysis",
    cover_image: certificate_predictive,
    issuedate: "Aug 29, 2023",
    issueby: "University of California, Irvine",
    issuerimg: issuer_uci,
    platform:"Coursera",
    description:"Gained hands-on experience in applying predictive modeling techniques, including classification (decision trees) and regression analysis (linear and logistic), to solve real-world academic and professional challenges.",
    marks: "Grade Achieved: 100%",
    link:"https://coursera.org/share/76efa6b6beac8e548c80b29880757d95",
  },
  {
    id:2,
    name: "Python Data Structures",
    cover_image: certificate_dsa,
    issuedate: "Aug 29, 2023",
    issueby: "University of Michigan, Michigan",
    issuerimg: issuer_men,
    platform:"Coursera",
    description:"Developed a strong understanding of data structure principles and their applications. Learned to create programs for reading and writing data from files, efficiently store data using Python dictionaries, and perform complex tasks such as sorting and looping with tuples.",
    marks: "Grade Achieved: 96.80%",
    link:"https://coursera.org/share/2449650052fcfc7a101f6e2a8528b63b",
  },
  {
    id:3,
    name: "Introduction to Java",
    cover_image: certificate_java,
    issuedate: "Aug 29, 2023",
    issueby: "LearnQuest",
    issuerimg: issuer_learnquest,
    platform:"Coursera",
    description:"Acquired knowledge of Java product offerings and their benefits. Gained proficiency in basic Java syntax, data types, expressions, operators, and control structures, enabling the development of simple Java applications.",
    marks: "Grade Achieved: 92.06%",
    link:"https://coursera.org/share/e629c03fa5bdf59613c6e190efc149b2",
  },
  {
    id:4,
    name: "JavaScript Certificate",
    cover_image: certificate_js,
    issuedate: "Aug 29, 2023",
    issueby: "HackerRank",
    issuerimg: issuer_hack,
    platform:"HackerRank",
    description:"It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
    marks: "Grade Achieved: 94.6%",
    link:"https://www.hackerrank.com/certificates/8f12050ad9aa",
  },
]

const educations = [
  {
    id: 1,
    title: "Master Degree",
    duration: "10/2022 - 17/2024",
    subject: "Master Of Computer Applications (M.C.A)",
    grade: "7.78",
    institution: "Asansol Engineering College",
    location: "Asansol, India",
  },
  {
    id: 2,
    title: "Bachelor Degree",
    duration: "08/2019 - 07/2022",
    subject: "Bachelor of Science(Honors) in Geology",
    grade: "8.21",
    institution: "K.J.R Govt. General Degree College",
    location: "Bankura, India",
  },
  {
    id: 3,
    title: "Higher Secondary Certificate",
    duration: "07/2017 - 07/2019",
    subject: "Higher Secondary Certificate (WBCHSE)",
    grade: "6.08",
    institution: "Raniganj High School",
    location: "Raniganj, India",
  },
  {
    id: 4,
    title: "Secondary School Certificate",
    duration: "12/2012 - 17/2017",
    subject: "Secondary School Certificate (WBBSE)",
    grade: "8.11",
    institution: "Raniganj High School",
    location: "Raniganj, India",
  }
]

// const resume = "https://app.enhancv.com/share/901be431/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"

const progress = [
  { "title": "Problem Solving & Decision Making", "value": 85, "level":"Proficient"},
  { "title": "Creativity & Innovation", "value": 70, "level":"Proficient" },
  { "title": "Adaptability & Upgradability", "value": 88, "level":"Advance" },
  { "title": "Focus & Management", "value": 80, "level":"Proficient" },
  { "title": "Team Leadership and Collaboration", "value": 90, "level":"Advance" },
  { "title": "Time Management and Task Prioritization", "value": 95, "level":"Advance" }
]


export { header, about, projects, skills, contact, certificate, educations, progress };
