function About() {
  return (
    <div className="page">
      <div className="about-header">
        <h1>About The Bess Group LLC</h1>
        <p className="subtitle">A family-owned tradition rooted in Southern soul food.</p>
      </div>

      <div className="about-story">
        <p>
          The Bess Group LLC was founded by Joreka Bess, a passionate cook with a deep love for Southern cuisine and community. Growing up surrounded by the aromas of homestyle cooking, Joreka dreamed of one day sharing those flavors with the world. That dream became a reality when she turned her family kitchen into a thriving soul food business right here in Shelby, NC.
        </p>
        <p>
          As a proud family-owned company, The Bess Group LLC has grown from intimate family gatherings to serving hundreds of satisfied customers through DoorDash, catering events, and walk-in orders. Joreka leads every aspect of the kitchen herself, ensuring that every plate meets her personal standard of excellence. From crispy fried chicken to creamy baked mac & cheese, every dish carries her signature touch.
        </p>
        <p>
          Our mission is simple — to serve soul, one plate at a time. Joreka and her team believe that food is more than just a meal — it is a way to connect, celebrate, and care for one another. When you order from The Bess Group LLC, you are not just a customer. You are family.
        </p>
      </div>

      <div className="about-divider"></div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👩‍🍳</div>
            <h3>Joreka Bess</h3>
            <p className="role">Founder, Owner & Head Cook</p>
            <p>Joreka founded The Bess Group LLC with a passion for Southern cooking and a commitment to her community. She leads the kitchen personally, making sure every dish is made with love and care.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Joreka Bess</h3>
            <p className="role">Catering Manager</p>
            <p>Joreka oversees all catering operations and ensures every event runs smoothly. Her warm personality and attention to detail make every client feel taken care of.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Jaden Pierce </h3>
            <p className="role">Kitchen Assistant</p>
            <p>Jaden supports Joreka in the kitchen and helps keep operations running efficiently. He brings energy and dedication to every shift.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;