import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  useEffect(() => {
    const isNameDuplicate = contacts.some(contact => contact.name === name);
    setDuplicateName(isNameDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicateName) {
    addContact(name, phoneNumber, email);
    setName('');
    setPhoneNumber('');
    setEmail('');
   }
  };
  console.log(contacts);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicateName={duplicateName}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileInfo={contacts} />
      </section>
    </div>
  );
};
