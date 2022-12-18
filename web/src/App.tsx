import { useEffect, useMemo } from "react";
import { AutoComplete } from "./components";
import { request } from "./utils/axios";

import "./App.css";
import Button from "@mui/material/Button";
import { useGlobalContext } from "./context";
import { useSelect } from "./hooks/useSelect";
import { useData } from "./hooks/useData";

const region_id_state = "105677d6-ae75-4fae-b71b-0c6a53f599c7";

function App() {
  const { state, dispatch } = useGlobalContext();
  const { data } = useData();
  const { current, handleSelect, setCurrent } = useSelect();

  const fetchFirstDropdown = async () => {
    const response = await request.get(`/${region_id_state}`);
    dispatch({ type: "GET_STATE_DATA", payload: response.data.data });
  };

  useEffect(() => {
    fetchFirstDropdown();
  }, []);

  const clearAll = () => {
    setCurrent({ access: "", level: "" });
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

      {data?.map((item) => {
        const { key, ...rest } = item;
        const props = { ...rest, ...inputProps };
        return <AutoComplete key={key} {...props} />;
      })}

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

export default App;
