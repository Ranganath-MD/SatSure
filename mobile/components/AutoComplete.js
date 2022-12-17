import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { Chevron } from "./Chevron";
import { useGlobalContext } from "../context";

export const AutoComplete = memo(({ data, onSelectItem, visible = false }) => {
  const [focused, setFocus] = useState(false);
  const { state } = useGlobalContext();
  const inputRef = useRef(null);

  const dataset = useMemo(() => {
    if (!data) return [];
    return data?.regions?.map((item) => ({
      id: item?.id,
      title: item?.name,
    }));
  }, [data]);

  const handleSelect = (item) => {
    onSelectItem(data?.currentLevel, item);
  };

  useEffect(() => {
    if (state.clearAll) {
      if(!inputRef.current) return;
      inputRef?.current.setItem(null)
    }
  }, [state.clearAll]);

  useEffect(() => {

  }, [])

  return (
    <View>
      {visible && (
        <AutocompleteDropdown
          dataSet={dataset}
          closeOnBlur={true}
          clearOnFocus={false}
          onSelectItem={handleSelect}
          ChevronIconComponent={<Chevron />}
          controller={(controller) => {
            inputRef.current = controller
          }}
          textInputProps={{
            required: true,
            placeholder: `${data?.currentLevel} *`,
          }}
          inputContainerStyle={[
            styles.inputContainer,
            { borderColor: focused ? "#006D5B" : "" },
          ]}
          containerStyle={{
            marginBottom: 20,
          }}
          onFocus={() => setFocus(true)}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#222",
  },
});
