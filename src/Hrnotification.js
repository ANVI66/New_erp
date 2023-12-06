import React, { useState } from 'react';

const InterviewTable = ({ data }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const handleButtonClick = (index) => {
    // Set the selected candidate based on the index
    setSelectedCandidate(data[index]);
    // Open the form
    setShowForm(true);
  };

  return (
    <div>
      <button type="button" onClick={() => handleButtonClick(0)}>Open Form </button>

      {showForm && selectedCandidate && (
        <div>
          {/* Your form to display candidate and interview information */}
          <h2>Candidate Information</h2>
          <p>First Name: {selectedCandidate.firstname}</p>
          <p>Last Name: {selectedCandidate.lastname}</p>
          {/* Include other details as needed */}
          
          <h2>Interview Schedule Information</h2>
          {/* Add interview schedule information here */}
          
          <button type="button" onClick={() => setShowForm(false)}>
            Close Form
          </button>
        </div>
      )}
    </div>
  );
};

export default InterviewTable;
