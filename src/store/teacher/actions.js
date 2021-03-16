// export const addNewTeacher = () => ({})

// export const addNewTeacherWithoutObject = (name, email) => {
//   return {
//     type: "teacher/addNewTeacher",
//     payload: {
//       name,
//       email,
//     },
//   };
// };

export const addNewTeacher = ({ name, email }) => {
  return {
    type: "teacher/addNewTeacher",
    payload: {
      name,
      email,
    },
  };
};

// addNewTeacher({ name: "Jeroen", email: "jeroen@codaisseur.com" })

// returns -->

// { type: "teacher/addNewTeacher", payload: { name: "Jeroen", email: "jeroen@codaisseur.com" }}
