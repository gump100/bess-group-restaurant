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
          <div className="map-placeholder">
            <p>
              📍 Google Maps embed goes here
              <br />
              <small>(Coming in Week 4)</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;