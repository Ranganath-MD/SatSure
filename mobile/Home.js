import { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { AutoComplete } from "./components/AutoComplete";
import { Button } from "./components/Button";
import { request } from "./utils/axios";
import { useGlobalContext } from "./context";
import { useSelect } from "./hooks/useSelect";

const region_id_state = "105677d6-ae75-4fae-b71b-0c6a53f599c7";

export const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { current, handleSelect, setCurrent } = useSelect();

  const fetchFirstDropdown = async () => {
    const response = await request.get(`/${region_id_state}`);
    dispatch({ type: "GET_STATE_DATA", payload: response.data.data });
  };

  useEffect(() => {
    fetchFirstDropdown();
  }, []);

  const onSelectItem = (id, item) => {
    handleSelect(id, item);
  };

  const handleClearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
    setCurrent("");
  };

  const options = {
    onSelectItem: onSelectItem,
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="#f2f2f2" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          nestedScrollEnabled
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.grow}
        >
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.text}>FILTERS</Text>
              <Button title="CLEAR ALL" onPress={handleClearAll} />
            </View>
            <AutoComplete
              {...options}
              value={state.selectedState}
              data={state.states}
              visible={true}
            />
            <AutoComplete
              {...options}
              value={state.selectedDist}
              data={state.district}
              visible={state?.district !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedTehsil}
              data={state.tehsil}
              visible={state?.tehsil !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedMandal}
              data={state.mandal}
              visible={state?.mandal !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedVillage}
              data={state.villages}
              visible={state?.villages !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedKhewat}
              data={state.khewat}
              visible={state?.khewat !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedKhata}
              data={state.khata}
              visible={state?.khata !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedServey}
              data={state.servey}
              visible={state?.servey !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedMurabba}
              data={state.murabba}
              visible={state?.murabba !== null}
            />
            <AutoComplete
              {...options}
              value={state.selectedKhasra}
              data={state.khasra}
              visible={state?.khasra !== null}
            />
            <Button title="Search" primary disabled={!current.access} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 300,
    marginTop: 50,
  },
  text: {
    fontSize: 15
  },
  // grow: { flexGrow: 0, justifyContent: "flex-end" },
  heading: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
