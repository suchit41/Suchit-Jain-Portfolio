import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
   tailwind,
    nodejs,
    git,
    tripguide,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: " Data Structure",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  
  
  const projects = [
    {
      name: "LABMASTER",
      description:
      "Automated reporting and resolution of lab-related issues Developed \n Implemented dynamic grid layout of lab configurations \nGenerated monthly reports for efficient management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name : "Nodejs",
          color: "green-text-gradient"
        },
        {
          name : "Firebase",
          color : "Yellow-text-gradient"
        }
      ],
     // image: carrent,
      source_code_link: "https://github.com/suchit41/Lab-master",
    },
    {
      name: "NOTEBOOK JUNCTION ",
      description:
      "Structured stationary management system to reduce crowd and improve efficiency \n Created algorithms to manage crowd and enhance smoothness of operations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
     // image: jobit,
      source_code_link: "https://github.com/suchit41/e-stationary",
    },
    {
      name: "NOTES APP",
      description:
      "Implemented functionalities for creating, saving, viewing, editing, and deleting notes \n Provided a user-friendly interface, offline access, and simple organization."
,      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        
      ],
     image:tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies,  projects };