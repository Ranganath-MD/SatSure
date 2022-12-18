import { createRef, useEffect, useMemo, useRef } from "react";
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
import { useData } from "./hooks/useData";

const region_id_state = "105677d6-ae75-4fae-b71b-0c6a53f599c7";

export const Home = () => {
  const { dispatch } = useGlobalContext();
  const { current, handleSelect, setCurrent } = useSelect();
  const { data } = useData();
  const currentRef = useRef(data?.map(() => createRef()))

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

  const handleClear = (_level, index) => {
    for (let i = index + 1; i < 10; i++) {
      if (currentRef?.current[i]?.current === null) continue;
      else {
        currentRef?.current[i]?.clear();
      };
    }
  }

  const options = {
    onSelectItem: onSelectItem,
    onClear: handleClear,
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
          
            {data?.map((item, i) => {
              const { key, ...rest } = item;
              const props = { ...options, ...rest };
              return (
                <AutoComplete ref={(el) => currentRef.current[i] = el} key={key} {...props} />
              );
            })}

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
    fontSize: 15,
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
