import { useState } from "react";
import { useGlobalContext } from "../context";
import { request } from "../utils/axios";
import { selects, actions } from "../utils/constants";

export const useSelect = () => {
  const [current, setCurrent] = useState({
    level: "",
    access: "",
  });

  const { dispatch } = useGlobalContext();

  const handleSetSelected = (id, newValue) => {
    const currentLevel = id;
    if (!currentLevel) return;

    if (currentLevel === "State") {
      dispatch({
        type: "REFRESH_STATE",
      });
    }
    dispatch({
      type: "SET_VALUES",
      payload: { key: selects[currentLevel], value: newValue },
    });
  };

  const setText = (id, text) => {
    const currentLevel = id;
    if (!currentLevel) return;

    dispatch({
      type: "SET_VALUES",
      payload: { key: selects[currentLevel], value: text },
    });
  };

  const handleSelect = async (id, newValue) => {
    handleSetSelected(id, newValue);
    if(!newValue) return;

    try {
      const { data: response } = await request.get(`/${newValue.id}`);
      const currentLevel = response.data.currentLevel;
      setCurrent({
        level: currentLevel,
        access: response.data.currentLevelAccess,
      });

      dispatch({ type: actions[currentLevel], payload: response.data });
    } catch {
      throw new Error("Not able to fetch");
    }
  };

  return { current, handleSelect, setText, setCurrent };
};
