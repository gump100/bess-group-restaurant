function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        <div className="location-info">
          <h2>Address</h2>
          <p>722 Earl Rd</p>
          <p>Shelby, NC 28150</p>
          <p className="phone">(704) 555-0192</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">11:00 AM – 8:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">11:00 AM – 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">10:00 AM – 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">12:00 PM – 6:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            We are located on Earl Rd in Shelby, NC with plenty of free parking available on site. Look for our sign out front — we are easy to spot!
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.389579181838!2d-81.53005092440442!3d35.27143905237663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8857201d27cd8d81%3A0xefa4e4023fcc5e43!2s722%20Earl%20Rd%2C%20Shelby%2C%20NC%2028152!5e0!3m2!1sen!2sus!4v1777753741663!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;