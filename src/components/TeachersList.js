import { useSelector } from "react-redux";
import { selectAllTeachers } from "../store/teacher/selectors";

export default function TeachersList() {
  const teachers = useSelector(selectAllTeachers);
  return (
    <>
      <h3>Teachers:</h3>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.email}>
            <a href={`mailto:${teacher.email}`}>
              {teacher.name} {teacher.lastName}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
