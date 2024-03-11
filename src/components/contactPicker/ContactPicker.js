import React from "react";

export const ContactPicker = ({ name, contacts, value, onChange }) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
