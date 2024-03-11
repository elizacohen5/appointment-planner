import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  
  const [currentName, setCurrentName] = useState('');
  const [contact, setContact] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(currentName, contact, date, time);
    setCurrentName('')
    setContact('')
    setDate('');
    setTime('');
  };

  console.log(appointments);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          currentName={currentName}
          setCurrentName={setCurrentName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}    
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileInfo={appointments} />
      </section>
    </div>
  );
};