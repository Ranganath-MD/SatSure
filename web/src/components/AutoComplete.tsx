import { Autocomplete as MuiAutoComplete, TextField } from "@mui/material";

export const AutoComplete: React.FC<IAutoCompleteProps> = ({
  options,
  placeholder,
  getOptionLabel,
  onChange,
  hidden,
  value,
}) => {
  return (
    <MuiAutoComplete
      id={placeholder}
      value={value}
      hidden={hidden}
      disablePortal
      disableClearable
      options={options}
      sx={{ width: 350 }}
      onChange={onChange}
      getOptionLabel={(option) => getOptionLabel(option)}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          size="small"
          margin="normal"
          color="success"
          focused={!!value}
          label={placeholder}
        />
      )}
    />
  );
};
