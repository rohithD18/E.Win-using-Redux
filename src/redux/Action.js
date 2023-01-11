export const loginInfo = (data) => {
  return {
    type: "LOGIN_INFO",
    payload: data,
  };
};
export const logoutUser = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
export const getProjects = (data) => {
  return {
    type: "GET_MY_PROJECTS",
    payload: data,
  };
};
export const projectDetails = (data) => {
  return {
    type: "PROJECT_DETAILS",
    payload: data,
  };
};
export const viewProccessLines = (data) => {
  return {
    type: "PROCCESS_LINES",
    payload: data,
  };
};
export const viewEquipments = (data) => {
  return {
    type: "EQUIPMENTS",
    payload: data,
  };
};
export const proccessLineDetails = (data) => {
  return {
    type: "PROCCESS_LINE_DETAILS",
    payload: data,
  };
};
export const equipmetDetails = (data) => {
  return {
    type: "EQUIPMENT_DETAILS",
    payload: data,
  };
};
export const spareParts = (data) => {
  return {
    type: "SPARE_PARTS",
    payload: data,
  };
};
