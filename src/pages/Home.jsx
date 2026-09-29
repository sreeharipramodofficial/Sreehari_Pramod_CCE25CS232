import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";


/* =========================================
   REUSABLE SKILL CARD
   Demonstrates Props
========================================= */

function SkillCard({ name }) {
  return (
    <div className="skill-card">
      {name}
    </div>
  );
}


/* =========================================
   REUSABLE PROJECT CARD
   Demonstrates Props
========================================= */

function ProjectCard({
  number,
  title,
  description,
  type
}) {
  return (
    <article className="project-card">

      <div>

        <span className="project-number">
          {number}
        </span>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

      <span className="project-type">
        {type}
      </span>

    </article>
  );
}


/* =========================================
   HOME COMPONENT
========================================= */

function Home() {
  return (
    <main className="home">


      {/* ==============================
          HERO SECTION
      ============================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="greeting">
            Hi, I'm
          </p>

          <h1>
            Sreehari Pramod
          </h1>

          <h2>
            Computer Science Engineering Student
          </h2>

          <p className="intro">
            I am a Computer Science Engineering student who enjoys
            programming, software development and building web
            applications. I like learning through practical projects
            and exploring how technology can be used to create useful
            digital solutions.
          </p>

          <div className="hero-buttons">

            <Link
              to="/about"
              className="btn primary-btn"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="btn secondary-btn"
            >
              Contact Me
            </Link>

          </div>

        </div>


        {/* Profile */}

        <div className="hero-image">

          <img
            src={profile}
            alt="Sreehari Pramod"
            className="profile-image"
          />

        </div>

      </section>


      {/* ==============================
          TECHNICAL SKILLS
      ============================== */}

      <section className="skills-section">

        <p className="section-label">
          WHAT I WORK WITH
        </p>

        <h2>
          Technical Skills
        </h2>

        <div className="skills-grid">

          <SkillCard name="C" />

          <SkillCard name="Python" />

          <SkillCard name="Java" />

          <SkillCard name="JavaScript" />

          <SkillCard name="HTML" />

          <SkillCard name="CSS" />

          <SkillCard name="React" />

          <SkillCard name="Django" />

          <SkillCard name="SQL" />

          <SkillCard name="Git & GitHub" />

        </div>

      </section>


      {/* ==============================
          FEATURED PROJECTS
      ============================== */}

      <section className="projects-section">

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured Projects
        </h2>

        <div className="projects-grid">


          {/* BulkSmart */}

          <ProjectCard
            number="01"
            title="BulkSmart"
            description="A web application designed to help users plan bulk purchases while tracking quantities, packaging savings and environmental impact."
            type="Web Application"
          />


          {/* Road Guard AI */}

          <ProjectCard
            number="02"
            title="Road Guard AI"
            description="A smart road safety project concept focused on traffic monitoring, accident detection and location-based safety alerts."
            type="Smart Technology"
          />

        </div>

      </section>

    </main>
  );
}

export default Home;