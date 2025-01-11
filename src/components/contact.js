// import React from 'react'

// const contact = () => {
//   return (
//     <div className="contact-main" id="Contact">
//       <div className="contact">
//         <div className="contact-heading">
//           <h1>Contact Info</h1>
//         </div>
//         <div className="location">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="map-marker">
//             {/* ... SVG path ... */}
//           </svg>
//           <p>Flavorsome Delights, Sitabardi Nagpur, Mahrashtra 440017</p>
//         </div>
//         <div className="email">
//           <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="envelope-open">
//             {/* ... SVG path ... */}
//           </svg>
//           <p>flavorsomedelights@gmail.com</p>
//         </div>
//         <div className="number">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outgoing-call">
//             {/* ... SVG path ... */}
//           </svg>
//           <p>+91 9021569158</p>
//         </div>
//         <div className="social-media">
//           <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram">
//             {/* ... SVG path ... */}
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook-f">
//             {/* ... SVG path ... */}
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin-alt">
//             {/* ... SVG path ... */}
//           </svg>
//         </div>
//       </div>
//       <div className="contact-section">
//         <div className="contact-sub-section">
//           <div className="heading-contact-see">
//             <h2>Send a Message</h2>
//           </div>
//           <div className="input-of-contact">
//             <form action="">
//               <input type="text" name="" id="" placeholder="First Name" required className="" />
//               <input type="text" name="" id="" placeholder="Last Name" required /><br />
//               <input type="email" name="" id="" placeholder="flavorsomedelights@gmail.com" className="mail" />
//               <textarea name="" id="" cols="30" rows="1" placeholder="Your Message"></textarea>
//             </form>
//             <button className="contact-btn">Send</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default contact;



import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 mt-28 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Info</h1>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
              <p className="text-gray-600">Flavorsome Delights, Sitabardi Nagpur, Maharashtra 440017</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-600" />
              <p className="text-gray-600">flavorsomedelights@gmail.com</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-600">+91 9021569158</p>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-6">
            <FaInstagram className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <FaFacebookF className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <FaLinkedinIn className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                         focus:outline-none transition-colors"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                         focus:outline-none transition-colors"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="flavorsomedelights@gmail.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                       focus:outline-none transition-colors"
            />
            
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                       focus:outline-none transition-colors resize-none"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                       transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact