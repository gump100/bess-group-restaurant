import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>The Bess Group LLC</h1>
        <p className="tagline">Serving soul, one plate at a time.</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Welcome to The Bess Group LLC, where every meal is made with love and rooted in Southern tradition. We specialize in authentic soul food that brings families and communities together, one plate at a time. From crispy fried chicken to creamy baked mac & cheese, every dish is prepared with the same care and passion that has defined our kitchen from day one.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Whether you're joining us for a homestyle meal or booking our catering services for your next event, we are committed to delivering warmth, flavor, and hospitality to every table. The Bess Group LLC is more than a restaurant — it's a gathering place for the community.
          </p>
        </div>
        <div className="welcome-image">
          📸 Add your restaurant photo here
        </div>
      </section>

      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍗</div>
            <h3>Homestyle Cooking</h3>
            <p>Every dish is made from scratch using traditional Southern recipes passed down through generations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Catering Services</h3>
            <p>We bring the soul food experience to your event — perfect for church gatherings, parties, and corporate events.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Community Focus</h3>
            <p>We are proud to serve our neighbors and build lasting relationships through good food and great service.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;