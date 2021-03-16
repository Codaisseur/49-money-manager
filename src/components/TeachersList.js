import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllTeachersSortedBy } from "../store/teacher/selectors";

export default function TeachersList() {
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("name");
  const teachers = useSelector(
    selectAllTeachersSortedBy(selectedSortingMethod)
  );

  return (
    <>
      <h3>Teachers:</h3>
      <select
        value={selectedSortingMethod}
        onChange={e => setSelectedSortingMethod(e.target.value)}
      >
        <option value="name">First name</option>
        <option value="lastName">Last name</option>
      </select>
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
