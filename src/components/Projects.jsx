import React from 'react';

const projectData = [
  {
    title: 'E-Train Reservation Website',
    tech: 'HTML, CSS, JavaScript',
    date: 'Oct 2024',
    link: 'https://avirajgithub7.github.io/E-TrainReservation/',
    image: "/Vandebharat.jpg", 
    description:
      'Developed a responsive train reservation website. Features include booking forms, user-friendly interface, and clean UI/UX design.',
  },
  {
    title: 'E-Commerce Website',
    tech: 'HTML, CSS, JavaScript',
    date: 'Jun 2024 - Aug 2024',
    link: 'https://avirajgithub7.github.io/E-Commerce/',
    image: '/ecommerce.jpg', 
    description:
      'Created a shopping website with product listings and a dynamic cart using JavaScript. Focused on responsive layout and smooth user interaction.',
  },
  {
    title: 'Anime MERN Stack Web App',
    tech: 'MongoDB, Express.js, React.js, Node.js',
    date: 'Dec 2024 - Present',
    link: 'https://github.com/AvirajGitHub7/AnimeMernStack.git',
    image: '/suzume.jpg', 
    description:
      'Built a full-stack app to manage anime collections with user auth, dynamic routing, and RESTful APIs for a seamless experience.',
  },
];

function Projects() {
  return (
    <div id="projects" className="py-12 px-4 md:px-20 bg-base-100 dark:bg-gray-900 min-h-screen scroll-mt-20">
      <h1 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">My Projects</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 object-cover w-96 h-48 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{project.tech}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{project.date}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm break-all"
            >
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
