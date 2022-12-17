const data = {
  states: null,
  district: null,
  tehsil: null,
  villages: null,
  khewat: null,
  murabba: null,
  khasra: null,
  mandal: null,
  khata: null,
  servey: null,
};

const selectedStates = {
  selectedState: null,
  selectedDist: null,
  selectedTehsil: null,
  selectedVillage: null,
  selectedKhewat: null,
  selectedMurabba: null,
  selectedKhasra: null,
  selectedMandal: null,
  selectedKhata: null,
  selectedServey: null,
};

export const initialState = {
  clearAll: false,
  ...data,
  ...selectedStates,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_STATE_DATA":
      return { ...state, states: payload };

    case "GET_DISTRICT_DATA":
      state = {
        ...state,
        ...selectedStates,
        district: payload,
        selectedState: state.selectedState,
      };
      return state;

    case "GET_TEHSIL_DATA":
      state = {
        ...state,
        ...selectedStates,
        tehsil: payload,
        selectedDist: state.selectedDist,
        selectedState: state.selectedState,
      };
      return state;

    case "GET_MANDAL_DATA":
      state = {
        ...state,
        ...selectedStates,
        mandal: payload,
        selectedDist: state.selectedDist,
        selectedState: state.selectedState,
      };
      console.log({ state });
      return state;

    case "GET_VILLAGE_DATA":
      state = {
        ...state,
        ...selectedStates,
        villages: payload,
        selectedMandal: state.selectedMandal,
        selectedTehsil: state.selectedTehsil,
        selectedDist: state.selectedDist,
        selectedState: state.selectedState,
      };
      return state;

    case "GET_KHEWAT_DATA":
      state = {
        ...state,
        ...selectedStates,
        khewat: payload,
        selectedVillage: state.selectedVillage,
        selectedMandal: state.selectedMandal,
        selectedTehsil: state.selectedTehsil,
        selectedDist: state.selectedDist,
        selectedState: state.selectedState,
      };
      return state;

    case "GET_KHATA_DATA":
      state = {
        ...state,
        ...selectedStates,
        khata: payload,
        selectedVillage: state.selectedVillage,
        selectedMandal: state.selectedMandal,
        selectedTehsil: state.selectedTehsil,
        selectedDist: state.selectedDist,
        selectedState: state.selectedState,
      };
      return state;

    case "GET_SERVEY_DATA":
      state = {
        ...state,
        servey: payload,
        selectedServey: "",
      };
      return state;

    case "GET_MURABBA_DATA":
      state = {
        ...state,
        murabba: payload,
        selectedKhasra: "",
      };
      return state;

    case "GET_KHASRA_DATA":
      return { ...state, khasra: payload };

    case "CLEAR_ALL":
      state = { ...initialState, states: state.states, clearAll: true };
      setTimeout(() => state = { ...state, clearAll: false }, 0)
      return { ...state };

    case "REFRESH_STATE":
      state = {
        ...data,
        states: state.states,
        ...selectedStates,
        selectedState: state.selectedState,
      };
      return { ...state };

    case "SET_VALUES":
      console.log({ payload })
      return { ...state, [payload.key]: payload.value };

    default:
      return state;
  }
};
