import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTeacherForm from "./components/AddTeacherForm";
import { deposit } from "./store/account/actions";
import { selectAccountValue } from "./store/account/selectors";

const TEACHERS = [
  {
    name: "David",
    email: "david@codaisseur.com",
  },
  {
    name: "Dom",
    email: "domenico@codaisseur.com",
  },
  {
    name: "Karla",
    email: "karla@codaisseur.com",
  },
  {
    name: "Matias",
    email: "matias@codaisseur.com",
  },
];

function App() {
  const dispatch = useDispatch();

  const balance = useSelector(selectAccountValue);
  console.log("Render in app.js", balance);

  const [teachers, setTeachers] = useState(TEACHERS);

  const addNewTeacher = teacher => {
    setTeachers([...teachers, teacher]);
  };

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          // dispatch(deposit(10));

          const action = deposit(10);
          console.log("action in App.js", action);
          dispatch(action);
        }}
      >
        Deposit 10$
      </button>
      <h3>Teachers:</h3>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.email}>
            <a href={`mailto:${teacher.email}`}>{teacher.name}</a>
          </li>
        ))}
      </ul>
      <AddTeacherForm onFormSubmit={addNewTeacher} />
    </div>
  );
}

export default App;
