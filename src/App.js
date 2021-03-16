import AddTeacherForm from "./components/AddTeacherForm";
import Balance from "./components/Balance";
import TeachersList from "./components/TeachersList";

function App() {
  return (
    <div className="App">
      <Balance />
      <TeachersList />
      <AddTeacherForm />
    </div>
  );
}

export default App;
