import linkedIn from "../assets/icons/linkedIn.svg";
import github from "../assets/icons/github.svg";
import netlify from "../assets/icons/netlify.svg";
import react from "../assets/icons/react.svg";
import js from "../assets/icons/js.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import jsfiddle from "../assets/icons/jsfiddle.svg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#Resume", label: "Resume" },
  { href: "#footer", label: "Contact me" },
];

export const courses = [
  {
    courseName: "CSS",
    projects: [
      {
        title: "Grid",
        name: "Stripedemo",
        link: "https://stripedemo1.netlify.app/",
      },
      {
        title: "Animation",
        name: "3DCube",
        link: "https://sravan-cubedemo.netlify.app/",
      },
      {
        title: "Animation",
        name: "SolarSystem",
        link: "https://sravan-solarsystemdemo.netlify.app/",
      },
    ],
    language: [{ src: css, alt: "css logo", name: "CSS" }],
    summary: " This project mainly focused on grid, flex,and animations",
  },
  {
    courseName: "JS",
    projects: [
      {
        title: "JSConcept",
        name: "Bank",
        link: "https://jsfiddle.net/pvskr/g9jp2fsd/243/",
      },
    ],
    language: [{ src: js, alt: "JS logo", name: "JS" }],

    summary: " This project mainly focused on js ",
  },
  {
    courseName: "HTML",
    projects: [
      {
        title: "projects",
        name: "Otp-sravan",
        link: "https://sravanotp-project.netlify.app/", // Replace with the actual link if available
      },
    ],
    language: [{ src: html, alt: "html logo", name: "HTML" }],
    summary: " This project mainly focused on Frames of HTML",
  },
  {
    courseName: "React",
    projects: [
      {
        title: "ReactDemo",
        name: "buyMe",
        link: "https://new-buy-me.netlify.app/",
      },
      {
        title: "ReactWith-CSS",
        name: "DropboxDemo",
        link: "https://fanciful-kitten-112003.netlify.app/",
      },
      {
        title: "ReactWith-CSS",
        name: "#VANLIFE",
        link: "https://van-life2.netlify.app/",
      },
    ],
    language: [{ src: react, alt: "react logo", name: "React" }],
    summary: " This project mainly focused on React JS",
  },
  {
    courseName: "BootStrap",
    projects: [
      {
        title: "CardDemo",
        name: "Card",
        link: "https://jsfiddle.net/pvskr/pnfjt029/20/",
      },
    ],
    language: [{ src: bootstrap, alt: "bootstrap logo", name: "BootStrap" }],
    summary: " This project mainly focused on BootStrap CSS",
  },
  {
    courseName: "Tailwind",
    projects: [
      {
        title: "nikesravan",
        name: "nike",
        link: "https://sravan-nike.netlify.app",
      },
      {
        title: "sravan-gym",
        name: "GYM",
        link: "https://sravan-gym.netlify.app",
      },
      {
        title: "Task+Breaks",
        name: "Timer",
        link: "https://pomoto12.netlify.app/",
      },
    ],
    language: [{ src: tailwind, alt: "tailwind logo", name: "Tailwind" }],
    summary: " This project mainly focused on Tailwind CSS",
  },
  // Add more courses here
];
export const work = [{ src: tailwind, alt: "tailwind logo", name: "Tailwind" }];
export const footerLinks = [
  {
    title: "Get in touch",
    links: [
      {
        name: "sravanpolu.me@gmail.com",
        link: "mailto:sravanpolu.me@gmail.com",
      },

      {
        name: "linkedin.com/in/SravanPolu",
        link: "https://www.linkedin.com/in/SravanPolu",
      },
      {
        name: "github.com/SravanKumarPolu",
        link: "https://github.com/SravanKumarPolu",
      },
    ],
  },
];

export const socialMedia = [
  {
    src: linkedIn,
    alt: "LinkedIn logo",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/SravanPolu",
  },
  {
    src: github,
    alt: "githu logo",
    name: "Github",
    link: "https://github.com/SravanKumarPolu",
  },
  { src: netlify, alt: "netlify logo", name: "Netlify" },
  { src: jsfiddle, alt: "jsfiddle logo", name: "Jsfiddle" },
];
