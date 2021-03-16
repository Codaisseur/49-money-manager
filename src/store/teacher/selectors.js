// export const selectAllTeachers = reduxState => reduxState.teacher.allTeachers;
export const selectAllTeachers = reduxState => {
  return reduxState.teacher.allTeachers;
};

// export const selectAllTeachersSortedBy = sortingMethod => reduxState => reduxState.teacher.allTeachers;

export const selectAllTeachersSortedBy = sortingMethod => {
  return reduxState => {
    const teachers = [...reduxState.teacher.allTeachers];

    return teachers.sort((teacherA, teacherB) => {
      if (sortingMethod === "name") {
        return teacherA.name.localeCompare(teacherB.name);
      }

      return teacherA.lastName.localeCompare(teacherB.lastName);
    });
  };
};
