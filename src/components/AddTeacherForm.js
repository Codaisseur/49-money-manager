import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewTeacher } from "../store/teacher/actions";

export default function AddTeacherForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  // dispatch()

  // axios.get()

  const onSubmitCallback = e => {
    e.preventDefault();
    // dispatch action
    const action = addNewTeacher({ name, lastName, email });
    console.log(action);
    dispatch(action);
    // dispatch(addNewTeacher({ name, email }));

    setName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <h3>Add new teacher:</h3>
      <form onSubmit={onSubmitCallback}>
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
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
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
