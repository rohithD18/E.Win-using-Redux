const projectsState = {
  myProjects: [],
  viewProject: [],
};
export const myProjectReducer = (state = projectsState, action) => {
  switch (action.type) {
    case "GET_MY_PROJECTS":
      return {
        ...state,
        myProjects: action.payload,
      };
    case "PROJECT_DETAILS":
      return {
        ...state,
        viewProject: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        viewProject: null,
        myProjects: null,
      };
    default:
      return state;
  }
};
