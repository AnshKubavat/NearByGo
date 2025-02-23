import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8EFE5] p-4 md:p-10">
      <div className="flex flex-col md:flex-row bg-white p-6 md:p-10 border-t border-blue-500 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Left Side - Form */}
        <div className="flex-1 p-4 md:p-6 border border-blue-500 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">CONTACT US</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Phone No."
              className="w-full p-3 border border-black rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-black rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-black rounded-md"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full p-3 bg-orange-300 text-white font-semibold rounded-md shadow-md hover:bg-orange-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>
        </div>

        {/* Right Side - Map & Address */}
        <div className="flex-1 relative p-4 md:p-6 border border-blue-500 rounded-md mt-6 md:mt-0 md:ml-6">
          <div className="w-full h-48 md:h-64 bg-gray-200">
            {/* Replace with an embedded map or image */}
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95373631550465!3d-37.816279742021886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772d5df6e4383c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611631807883!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="absolute bottom-4 left-4 bg-[#F8EFE5] p-2 md:p-4 shadow-md rounded-md">
            <h3 className="font-semibold text-sm md:text-base">Address</h3>
            <p className="text-xs md:text-sm">NearByGo</p>
            <p className="text-xs md:text-sm">00-0012 Warsaw</p>
            <p className="text-xs md:text-sm">+86 987654321</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;