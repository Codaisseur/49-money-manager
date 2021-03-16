import { useState } from "react";

export default function AddTeacherForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h3>Add new teacher:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          onFormSubmit({
            name,
            email,
          });
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
