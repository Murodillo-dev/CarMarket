import React, { useRef } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { Camera } from "./style";

const CustomFileInput = () => {
    return (
        <TextField
            type='file'
            sx={{ m: 0, width: '400px', "& fieldset": { border: 'none' }, backgroundColor: '#F4F4F4', borderRadius: 2 }}
            size='small'
            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start"><Camera /></InputAdornment>,
                },
            }}
        />
    );
};

export default CustomFileInput;
