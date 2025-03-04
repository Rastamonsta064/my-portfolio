import React from 'react';
import '../styles/CV.css'; // We'll create this CSS file for styling

const CV = () => {
  return (
    <div className="cv-container">
      <header>
        <h1>Mikhail Lapshin</h1>
        <p>
          <a href="mailto:mikhail.lapsh@gmail.com">mikhail.lapsh@gmail.com</a> | Phone: (058) 408-0694
        </p>
        <p>
          <a href="https://linkedin.com/in/mikhail-lapshin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> | 
          <a href="https://yandex.ru/games/developer?name=Mikhail%20Lapshin" target="_blank" rel="noopener noreferrer">
            Yandex Games
          </a>
        </p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am an enthusiastic game developer and gaming aficionado driven by a passion for innovation and creativity.
          With a strong dedication to delivering top-tier entertainment experiences to players worldwide, I am eager to excel in the Unity developer position,
          leveraging my skills to contribute to the industry's advancement and achieve personal growth.
        </p>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>Unity Developer | Solo Gamedev</h3>
          <p>Apr 2023 - Present</p>
          <ul>
            <li>Embarked on an independent journey as a Solo Game Developer, passionately crafting captivating gaming experiences from inception to completion.</li>
            <li>Solely responsible for ideation, design, development, and deployment of engaging games.</li>
            <li>Meticulously balanced creative vision with technical execution to deliver immersive and innovative gameplay.</li>
            <li>Proficiently navigated the challenges of solo game development, showcasing adaptability and problem-solving prowess.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Unity Developer | Gamedev Camp</h3>
          <p>Jan 2023 - Apr 2023 (4 months)</p>
          <ul>
            <li>Architected efficient and reusable features, in-game systems, and UI, driving complex game logics.</li>
            <li>Delivered a tool for easy game configuration and balancing.</li>
            <li>Wrote high-performance code, debugged complex problems, and ensured high efficiency and quality.</li>
            <li>Actively learned and dived into new areas with unfamiliar technologies.</li>
          </ul>
        </div>
        {/* Add more job sections as needed */}
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="degree">
          <h3>Tel-Ran, Educational Center</h3>
          <p>2020 - 2021</p>
          <p>Software Developers Integration with Israel IT Technologies by MOIA.</p>
        </div>
        <div className="degree">
          <h3>Saratov State Socio-Economic University</h3>
          <p>2004 - 2009</p>
          <p>Bachelor’s Degree in Finance and Credit, Banking (Graduated with honors).</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Unity, C#, iOS and Android development in Unity</li>
          <li>Game Development, Game Programming</li>
          <li>Web Technologies, Full-Stack Development</li>
          <li>Excellent Problem-Solving Skills</li>
          <li>Written and Verbal English Communication</li>
        </ul>
      </section>

      <section className="additional-info">
        <h2>Additional Information</h2>
        <ul>
          <li>Passionate about creating captivating games that push boundaries.</li>
          <li>Team player who thrives in diverse environments.</li>
          <li>Familiar with await and async tasks.</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;