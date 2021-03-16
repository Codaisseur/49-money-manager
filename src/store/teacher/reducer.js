// src/store/teacher/reducer.js
const initialState = {
  allTeachers: [
    {
      name: "David",
      email: "david@codaisseur.com",
    },
    {
      name: "Domenico",
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
