import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function MultipleSelect({ names }) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl focused={false} sx={{
                m: 0, width: 400, border: "none",
                "& fieldset": { border: "none" }, backgroundColor: '#F4F4F4', borderRadius: 2
            }}>
                <Select
                    size='small'
                    value={personName}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    displayEmpty
                    selected={names[0].title}
                >
                    <MenuItem value="" disabled>
                        {/* {names[0]?.title} */}
                        Tanlang
                    </MenuItem>
                    {names?.map((item) => (
                        <MenuItem
                            selected={names[0].title}
                            key={item.value}
                            value={item.value}
                            style={getStyles(item.title, personName, theme)}
                        >
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
