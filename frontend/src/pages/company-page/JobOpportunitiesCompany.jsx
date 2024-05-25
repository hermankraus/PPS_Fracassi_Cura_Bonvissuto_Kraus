import { useState } from "react";

export const JobOpportunitiesCompany = () => {
  const [jobOpportunities, setJobOpportunities] = useState([]);
  const [newJob, setNewJob] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [isEditingExpanded, setIsEditingExpanded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const addJobOpportunity = () => {
    setJobOpportunities([...jobOpportunities, newJob]);
    setNewJob({
      id: "",
      title: "",
      description: "",
    });
  };

  const deleteJobOpportunity = (id) => {
    setJobOpportunities(jobOpportunities.filter((job) => job.id !== id));
  };

  const startEditingJob = (id) => {
    const jobToEdit = jobOpportunities.find((job) => job.id === id);
    setNewJob(jobToEdit);
    setEditingJobId(id);
    setIsEditingExpanded(true);
  };

  const updateJobOpportunity = () => {
    setJobOpportunities(
      jobOpportunities.map((job) => {
        if (job.id === editingJobId) {
          return newJob;
        }
        return job;
      })
    );
    setNewJob({
      id: "",
      title: "",
      description: "",
    });
    setEditingJobId(null);
    setIsEditingExpanded(false);
  };

  return (
    <div>
      <h1>Ofertas Laborales</h1>
      <button onClick={() => setIsEditingExpanded(!isEditingExpanded)}>
        {isEditingExpanded ? "Contraer" : "Expandir"} Formulario de Edición
      </button>
      {isEditingExpanded && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editingJobId === null) {
              addJobOpportunity();
            } else {
              updateJobOpportunity();
            }
          }}
        >
          <label>
            id:
            <input
              type="number"
              name="id"
              value={newJob.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={newJob.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">
            {editingJobId === null ? "Agregar" : "Actualizar"}
          </button>
        </form>
      )}
      <ul>
        {jobOpportunities.map((job) => (
          <li key={job.id}>
            <div>
              <strong>{job.title}</strong>
              <p>{job.description}</p>
            </div>
            <div>
              <button onClick={() => startEditingJob(job.id)}>Editar</button>
              <button onClick={() => deleteJobOpportunity(job.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
