import React, { useState } from 'react';
import './App.css';

function App() {
  const[values, setValues] = useState({
    Company: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleCompanyInputChange = (event) => {
    setValues({...values, Company: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.Company) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Slogify</h1>
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success!</div>: null}
        <input
          onChange={handleCompanyInputChange}
          value={values.Company}
          className="form-field"
          placeholder="Company Name"
          name="Company"/>
          {submitted && !values.Company ? <span>Please enter a company name</span>: null}
          <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
    <h2>Advertising Made Easy</h2>
    </div>
  );
}

export default App;
