const installations = {
  proccessLines: [],
  equipments: [],
  proccessLineDetails: [],
  equipmentDetails: [],
  sparePart: [],
};

export const myInstallationsReducer = (state = installations, action) => {
  switch (action.type) {
    case "PROCCESS_LINES":
      return {
        ...state,
        proccessLines: action.payload,
      };
    case "EQUIPMENTS":
      return {
        ...state,
        equipments: action.payload,
      };
    case "PROCCESS_LINE_DETAILS":
      return {
        ...state,
        proccessLineDetails: action.payload,
      };
    case "EQUIPMENT_DETAILS":
      return {
        ...state,
        equipmentDetails: action.payload,
      };
    case "SPARE_PARTS":
      return {
        ...state,
        sparePart: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        proccessLines: null,
        equipments: null,
        proccessLineDetails: null,
        equipmentDetails: null,
        sparePart: null,
      };
    default:
      return state;
  }
};
