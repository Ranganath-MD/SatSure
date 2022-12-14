import { useEffect } from "react";
import { AutoComplete } from "./components";
import { request } from "./utils/axios";

import "./App.css";
import Button from "@mui/material/Button";
import { useGlobalContext } from "./context";
import { useSelect } from "./hooks/useSelect";

const region_id_state = "105677d6-ae75-4fae-b71b-0c6a53f599c7";

export default function App() {
  const { state, dispatch } = useGlobalContext();
  const { current, handleSelect } = useSelect();

  const fetchFirstDropdown = async () => {
    const response = await request.get(`/${region_id_state}`);
    dispatch({ type: "GET_STATE_DATA", payload: response.data.data });
  };

  useEffect(() => {
    fetchFirstDropdown();
  }, []);

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const inputProps = {
    onChange: handleSelect,
    getOptionLabel: (option: Region) => option?.name?.toString() || "",
  };

  return (
    <div className="App">
      <div className="heading">
        <p>FILTERS</p>
        <Button onClick={clearAll}>CLEAR ALL</Button>
      </div>

      <AutoComplete
        {...inputProps}
        value={state.selectedState}
        options={state?.states?.regions || []}
        placeholder={state?.states?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedDist}
        hidden={state?.district === null}
        options={state?.district?.regions || []}
        placeholder={state?.district?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedTehsil}
        hidden={state?.tehsil === null}
        options={state?.tehsil?.regions || []}
        placeholder={state?.tehsil?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedMandal}
        hidden={state?.mandal === null}
        options={state?.mandal?.regions || []}
        placeholder={state?.mandal?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedVillage}
        hidden={state?.villages === null}
        options={state?.villages?.regions || []}
        placeholder={state?.villages?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedKhewat}
        hidden={state?.khewat === null}
        options={state?.khewat?.regions || []}
        placeholder={state?.khewat?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedKhata}
        hidden={state?.khata === null}
        options={state?.khata?.regions || []}
        placeholder={state?.khata?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedServey}
        hidden={state?.servey === null}
        options={state?.servey?.regions || []}
        placeholder={state?.servey?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedMurabba}
        hidden={state?.murabba === null}
        options={state?.murabba?.regions || []}
        placeholder={state?.murabba?.currentLevel || ""}
      />

      <AutoComplete
        {...inputProps}
        value={state.selectedKhasra}
        hidden={state?.khasra === null}
        options={state?.khasra?.regions || []}
        placeholder={state?.khasra?.currentLevel || ""}
      />

      <Button
        variant="contained"
        color="primary"
        disabled={!current.access}
        fullWidth
      >
        Search
      </Button>
    </div>
  );
}
