import React from 'react'
import Cards from './Cards';
function Skills() {
    const skills = [
  {
    id: 1,
    name: "Python",
    description: "Learned basics of Python as my first programming language through a 1-month course on Simplilearn.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    id: 2,
    name: "HTML",
    description: "Started learning HTML while creating basic web pages. Gained confidence by building real projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    id: 3,
    name: "CSS",
    description: "Learned CSS alongside HTML to design and style websites using flexbox and grid.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    id: 4,
    name: "JavaScript",
    description: "Built dynamic functionality into websites. Learned through hands-on projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    id: 5,
    name: "React.js",
    description: "Learned React through project-based tutorials and built portfolio and anime projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: 6,
    name: "Tailwind CSS",
    description: "Used Tailwind CSS to style React apps. Learned utility-first styling.",
    image: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
  },
  {
    id: 7,
    name: "Node.js",
    description: "Started backend development using Node.js. Built APIs and handled server logic.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    id: 8,
    name: "MongoDB",
    description: "Integrated MongoDB in MERN projects using Mongoose. Learned CRUD operations.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    id: 9,
    name: "Express.js",
    description: "Used Express with Node.js to build REST APIs and backend routes.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    id: 10,
    name: "Git & GitHub",
    description: "Used Git for version control and GitHub for hosting and collaboration.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    id: 11,
    name: "MySQL",
    description: "Learned MySQL through college labs and tutorials. Practiced queries and joins.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    id: 12,
    name: "C",
    description: "Learned C programming in college. Strengthened logic and problem-solving.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  {
    id: 13,
    name: "C++",
    description: "Learned C++ in college and practiced OOP concepts like inheritance and polymorphism.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  }
];


  return (
   <div id="skills" className="py-10 px-4 md:px-20 bg-base-100 min-h-screen scroll-mt-20">
  <h1 className="text-3xl font-bold text-center mb-10">My Skills</h1>

  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    {skills.map((skill, index) => (
      <Cards key={index} props={skill} />
    ))}
  </div>
</div>

  )
}

export default Skills
