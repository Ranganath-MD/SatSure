import { useMemo } from "react"
import { useGlobalContext } from "../context";

export const useData = () => {
  const { state } = useGlobalContext();

  const data = useMemo(() => {
    return [
      {
        key: "states",
        value: state.selectedState,
        hidden: false,
        options: state?.states?.regions || [],
        placeholder: state?.states?.currentLevel || "",
      },
      {
        key: "district",
        value: state.selectedDist,
        hidden: state?.district === null,
        options: state?.district?.regions || [],
        placeholder: state?.district?.currentLevel || "",
      },
      {
        key: "tehsil",
        value: state.selectedTehsil,
        hidden: state?.tehsil === null,
        options: state?.tehsil?.regions || [],
        placeholder: state?.tehsil?.currentLevel || "",
      },
      {
        key: "mandal",
        value: state.selectedMandal,
        hidden: state?.mandal === null,
        options: state?.mandal?.regions || [],
        placeholder: state?.mandal?.currentLevel || "",
      },
      {
        key: "villages",
        value: state.selectedVillage,
        hidden: state?.villages === null,
        options: state?.villages?.regions || [],
        placeholder: state?.villages?.currentLevel || "",
      },
      {
        key: "khewat",
        value: state.selectedKhewat,
        hidden: state?.khewat === null,
        options: state?.khewat?.regions || [],
        placeholder: state?.khewat?.currentLevel || "",
      },
      {
        key: "khata",
        value: state.selectedKhata,
        hidden: state?.khata === null,
        options: state?.khata?.regions || [],
        placeholder: state?.khata?.currentLevel || "",
      },
      {
        key: "survey",
        value: state.selectedSurvey,
        hidden: state?.survey === null,
        options: state?.survey?.regions || [],
        placeholder: state?.survey?.currentLevel || "",
      },
      {
        key: "murabba",
        value: state.selectedMurabba,
        hidden: state?.murabba === null,
        options: state?.murabba?.regions || [],
        placeholder: state?.murabba?.currentLevel || "",
      },
      {
        key: "khasra",
        value: state.selectedKhasra,
        hidden: state?.khasra === null,
        options: state?.khasra?.regions || [],
        placeholder: state?.khasra?.currentLevel || "",
      },
    ];
  }, [state]);

  return { data }
}