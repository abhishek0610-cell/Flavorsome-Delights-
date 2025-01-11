import React from 'react'

const contact = () => {
  return (
    <div className="contact-main" id="Contact">
      <div className="contact">
        <div className="contact-heading">
          <h1>Contact Info</h1>
        </div>
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="map-marker">
            {/* ... SVG path ... */}
          </svg>
          <p>Flavorsome Delights, Sitabardi Nagpur, Mahrashtra 440017</p>
        </div>
        <div className="email">
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="envelope-open">
            {/* ... SVG path ... */}
          </svg>
          <p>flavorsomedelights@gmail.com</p>
        </div>
        <div className="number">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="outgoing-call">
            {/* ... SVG path ... */}
          </svg>
          <p>+91 9021569158</p>
        </div>
        <div className="social-media">
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram">
            {/* ... SVG path ... */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook-f">
            {/* ... SVG path ... */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin-alt">
            {/* ... SVG path ... */}
          </svg>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-sub-section">
          <div className="heading-contact-see">
            <h2>Send a Message</h2>
          </div>
          <div className="input-of-contact">
            <form action="">
              <input type="text" name="" id="" placeholder="First Name" required className="" />
              <input type="text" name="" id="" placeholder="Last Name" required /><br />
              <input type="email" name="" id="" placeholder="flavorsomedelights@gmail.com" className="mail" />
              <textarea name="" id="" cols="30" rows="1" placeholder="Your Message"></textarea>
            </form>
            <button className="contact-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact;