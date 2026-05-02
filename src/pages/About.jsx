function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About [YOUR RESTAURANT NAME]</h1>
        <p className="subtitle">[A short subtitle about your restaurant]</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          [Paragraph 1: How did your restaurant begin? Who started it? Was
          there a special moment or inspiration? Tell the origin story.]
        </p>
        <p>
          [Paragraph 2: What happened next? How did it grow? What challenges
          were overcome? What is the restaurant known for today?]
        </p>
        <p>
          [Paragraph 3: What is the restaurant's mission? What do you want
          guests to feel when they visit? What keeps people coming back?]
        </p>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>[Team Member 1 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>[Team Member 2 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>[Team Member 3 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
