import { useMemo, useRef } from "react";
import { useGlobalContext } from "../context";

export const useData = () => {
  const { state } = useGlobalContext();
  
  const data = useMemo(
    () => [
      {
        index: 0,
        key: "states",
        value: state.selectedState,
        data: state.states,
        visible: true,
      },
      {
        index: 1,
        key: "district",
        value: state.selectedDist,
        data: state.district,
        visible: state?.district !== null,
      },
      {
        index: 2,
        key: "tehsil",
        value: state.selectedTehsil,
        data: state.tehsil,
        visible: state?.tehsil !== null,
      },
      {
        index: 3,
        key: "mandal",
        value: state.selectedMandal,
        data: state.mandal,
        visible: state?.mandal !== null,
      },
      {
        index: 4,
        key: "villages",
        value: state.selectedvillage,
        data: state.villages,
        visible: state?.villages !== null,
      },
      {
        index: 5,
        key: "khewat",
        value: state.selectedKhewat,
        data: state.khewat,
        visible: state?.khewat !== null,
      },
      {
        index: 6,
        key: "khata",
        value: state.selectedKhata,
        data: state.khata,
        visible: state?.khata !== null,
      },
      {
        index: 7,
        key: "survey",
        value: state.selectedSurvey,
        data: state.survey,
        visible: state?.survey !== null,
      },
      {
        index: 8,
        key: "murabba",
        value: state.selectedMurabba,
        data: state.murabba,
        visible: state?.murabba !== null,
      },
      {
        index: 9,
        key: "khasra",
        value: state.selectedKhasra,
        data: state.khasra,
        visible: state?.khasra !== null,
      },
    ],
    [state]
    );
    
  return { data };
};
