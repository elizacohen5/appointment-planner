import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
  duplicateName
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {duplicateName && <p>Name already exists in contacts list!</p>}
      
      <input 
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        pattern="\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$"
        title="Please enter a valid US phone number"
      />
      
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button 
        type="submit"
        style={{ marginBottom: '20px' }}
      >
        Add Contact
      </button>

    </form>
  );
};

