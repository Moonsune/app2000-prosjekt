//Laget av Markus Moen Magnussen

import { FormControl, InputLabel, Select, Button, MenuItem, TextField} from "@mui/material";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { nyBooking } from "@/app/lib/actions";
import dayjs from "dayjs"; // Ensure dayjs is imported
import "dayjs/locale/en-gb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {Label} from "@mui/icons-material";

export const BookingForm = () => {
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [amount, setAmount] = useState("");
    const curDate = dayjs();
    const minTime = dayjs("2023-01-01T13:00:00");
    const maxTime = dayjs("2023-01-01T22:00:00");

    const handleButtonClick = (e) => {
        const regex = /.+[@].+[.]\w+/;
        const booking = {epost: email, dato: date.toISOString(), tid: time.toISOString(), antall: amount}
        if (regex.test(email)) {
            nyBooking(booking) // Ensure dates are passed in a standard format
            console.log("Melding sendt!", e);
        } else {
            alert("feil med epost");
        }
    };

    return (
        <FormControl fullWidth margin="normal" sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
            <TextField
                id="email-label"
                label="Din Epost"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="amount-booking"
                label="Antall"
                type="number"
                value={amount}
                inputProps={{ min: 1, max: 30 }}
                onChange={(e) => {
                    if (30 >= e.target.value && 0 < e.target.value && e.target.value !== null) {
                        setAmount(e.target.value)
                    }
                }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <DatePicker
                    label="Velg dato"
                    value={date}
                    minDate={curDate}
                    maxDate={curDate.add(1, "year")}
                    onChange={(newValue) => setDate(newValue)}
                    //gpt satt linja under inn, usikker på hva den gjør
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    label="Velg tid"
                    value={time}
                    minTime={minTime}
                    maxTime={maxTime}
                    onChange={(newValue) => setTime(newValue)}
                    //samme her
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Button onClick={handleButtonClick} variant="contained">
                Send!
            </Button>
        </FormControl>
    );
};

export default BookingForm;
