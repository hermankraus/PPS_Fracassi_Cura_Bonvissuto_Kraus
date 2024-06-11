import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobOffers, setJobOffers] = useState([]);

  const addJobOffer = (job) => {
    setJobOffers((prevOffers) => [...prevOffers, job]);
  };

  return (
    <JobContext.Provider value={{ jobOffers, addJobOffer }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
