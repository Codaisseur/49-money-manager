// src/store/teacher/reducer.js
const initialState = {
  allTeachers: [
    {
      name: "David",
      lastName: "Stephenson",
      email: "david@codaisseur.com",
    },
    {
      name: "Domenico",
      lastName: "Gemoli",
      email: "domenico@codaisseur.com",
    },
    {
      name: "Karla",
      lastName: "Evelize",
      email: "karla@codaisseur.com",
    },
    {
      name: "Matias",
      lastName: "Garcia",
      email: "matias@codaisseur.com",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "teacher/addNewTeacher": {
      return {
        ...state,
        allTeachers: [...state.allTeachers, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
