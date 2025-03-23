import { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects') // Replace with your backend URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h1>Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text"><strong>Author:</strong> {project.author}</p> 
                <p className="card-text">{project.description}</p>
                <p><strong>Technologies:</strong> {project.languages.join(", ")}</p>
                <button className="btn btn-primary" disabled>
                    View Details (Coming Soon)
                    </button>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;