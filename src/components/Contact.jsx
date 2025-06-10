import React from 'react';
import { useState } from 'react';
import axios from "axios"

function Contact() {
  const [formdata, setformdata] = useState({ name: "", email: "", msg: "" });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-backend-d4g4.onrender.com/send', formdata);
      console.log(formdata);
      setTimeout(() => {
        setformdata({ name: "", email: "", msg: "" });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-24 bg-base-200 dark:bg-gray-900 scroll-mt-1">
      <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Contact Me</h1>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg">
        <form onSubmit={handlesubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Name</label>
            <input
              name="name"
              value={formdata.name}
              onChange={handlechange}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Email</label>
            <input
              name="email"
              value={formdata.email}
              onChange={handlechange}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Message</label>
            <textarea
              name="msg"
              value={formdata.msg}
              onChange={handlechange}
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
