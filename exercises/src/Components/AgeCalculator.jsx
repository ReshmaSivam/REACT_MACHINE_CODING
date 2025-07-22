import React, { useState } from 'react';

function AgeCalculator() {

  const [birthDate, setbirthDate] = useState("");
  
  const [age, setage] = useState(null);

  const [error, seterror] = useState("");

  const calculateAge = () => {
    seterror("");
    if (!birthDate) {
      seterror("Please select a date");
      setage(null);
      return;
    }

    const today = new Date();
    const Birth = new Date(birthDate);

    if (Birth > today) {
      seterror("Date can't be in Future");
      setage(null);
      return;
    }

    let years = today.getFullYear() - Birth.getFullYear();
    let months = today.getMonth() - Birth.getMonth();
    let days = today.getDate() - Birth.getDate();

    if (days < 0) {
      months = months - 1;
      days = days + new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years = years - 1;
      months = months + 12;
    }

    setage({ years, months, days });
  }
  
  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator </h2>
      <label className="label"> Enter / Select a Birthdate </label>
      <input id="birthdate"
             type="date"
             className="input-date"
             value={birthDate}
            onChange = {(e) => setbirthDate(e.target.value) }
      />
      <button className="btn-calc"
              onClick = {calculateAge}
      >
        Calculate Age
      </button>

       {
        error && (<p className="error-msg"> {error} </p>)
      }
      
      {
        age && !error && (
        <p className="age-result">
              {age.years} years, {age.months} months, {age.days} days
        </p>)
      }
    </div>
  );
}

export default AgeCalculator;
