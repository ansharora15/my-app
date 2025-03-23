import { useState } from 'react';

function About() {
  const skills = ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Node.js', 'Git'];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>About Me</h1>
      <p>
        I have a degree in Computer Science and experience in React, JavaScript, and Bootstrap.
      </p>
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Search skills..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Education</h2>
      <p>
        Bachelor of Computer Science, Dalhousie University (2021-2025)
      </p>
      <h2>Career Goals</h2>
      <p>
        I aim to become a full-stack developer, specializing in building scalable and user-friendly web applications.
      </p>
    </div>
  );
}

export default About;