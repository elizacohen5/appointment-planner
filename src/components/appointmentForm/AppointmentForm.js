import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentName,
  setCurrentName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  console.log(currentName);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        placeholder="Name"
      />
      <label>
        <ContactPicker
          name="contact"
          contacts={contacts}
          value={contact}
          onChange={(e) => { 
            console.log(e.target)
            setContact(e.target.value)
          }} 
        />
      </label>
      
      <input 
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <br />
      <br />
      <input 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Time"
      />
      <br />
      <button 
        type="submit"
        style={{ marginBottom: '20px' }}
      >
        Add Appointment
      </button>

    </form>
  );
};
