import React from 'react'
import { InputAdornment, TextField } from '@mui/material'

const GenericInput = (props) => {
    return (
        <div>
            <TextField
                onChange={props.typing}
                focused='false'
                type={props.type ? props.type : 'text'}
                size='small'
                placeholder='Kiriting'
                sx={{
                    m: 0, width: '400px', backgroundColor: '#F4F4F4', borderRadius: 2,
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