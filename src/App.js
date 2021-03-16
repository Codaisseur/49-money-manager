import { useDispatch, useSelector } from "react-redux";
import AddTeacherForm from "./components/AddTeacherForm";
import { deposit } from "./store/account/actions";
import { selectAccountValue } from "./store/account/selectors";
import { selectAllTeachers } from "./store/teacher/selectors";

function App() {
  const dispatch = useDispatch();

  const balance = useSelector(selectAccountValue);
  console.log("Render in app.js", balance);

  const teachers = useSelector(selectAllTeachers);

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
      <AddTeacherForm />
    </div>
  );
}

export default App;
