import { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my-app-g7fz.onrender.com/api/projects')
      .then(response => {
        console.log('Response status:', response.status); // Debugging
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => {
        console.log('Data received:', data); // Debugging
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error); // Debugging
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
