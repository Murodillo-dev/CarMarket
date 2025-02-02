import React from 'react'
import {  InputAdornment, TextField } from '@mui/material'

const GenericInput = (props) => {
    return (
        <div>
            <TextField
                focused='false'
                size='small'
                placeholder='Kiriting'
                sx={{
                    m: 0, width: '400px', backgroundColor: '#F4F4F4', borderRadius: 2, border: "none",
                    "& fieldset": { border: "none" },
                }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    },
                }}
            />
        </div>
    )
}

export default GenericInput