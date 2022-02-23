import React from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { isSameDay } from "date-fns";

function App() {
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label="Deploy & Go Live"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        disablePast
        minTime={isSameDay(new Date(), new Date(value)) ? new Date() : null}
      />
    </LocalizationProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
