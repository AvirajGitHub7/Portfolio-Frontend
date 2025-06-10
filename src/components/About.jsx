import React from 'react';
import { FaUserGraduate, FaSchool, FaUniversity } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="bg-base-100 dark:bg-gray-900 py-20 px-5 md:px-24 max-w-screen-2xl mx-auto scroll-mt-20 mb-20"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-black dark:text-white">About Me</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-16">
        I'm <span className="font-semibold">Aviraj Seal</span>, a passionate web developer and programmer currently pursuing
        B.Tech in <span className="font-semibold">Computer Science</span>. Skilled in the <span className="font-semibold">MERN Stack</span> and focused on building
        clean, responsive web applications. I enjoy learning new technologies and solving real-world problems through coding.
      </p>

      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Class 10 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaSchool className="text-4xl text-blue-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Class X</h3>
          <p className="text-gray-700 dark:text-gray-300">Purbasha Vidya Niketan (2020)</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Board: SEBA, Assam</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Percentage: 81%</p>
        </div>

        {/* Class 12 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaUserGraduate className="text-4xl text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Class XII</h3>
          <p className="text-gray-700 dark:text-gray-300">Shrimanta Shankar Academy (2022)</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Board: AHSEC</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Percentage: 89%</p>
        </div>

        {/* Graduation */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaUniversity className="text-4xl text-purple-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Graduation</h3>
          <p className="text-gray-700 dark:text-gray-300">Assam University, Silchar</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023 – 2027</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Current CGPA: 8.8</p>
        </div>
      </div>
    </section>
  );
}

export default About;
