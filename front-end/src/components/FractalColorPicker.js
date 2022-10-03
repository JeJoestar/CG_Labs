import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { BsPaintBucket } from 'react-icons/bs';

const FractalColorPicker = ({scheme, handleChange}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <BsPaintBucket color='white' size={32}/>
            <Select
                value={scheme}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx = {{
                    width: '260px',
                    marginX: '13px',
                    '&	.MuiSelect-outlined': {
                        backgroundColor: 'white',
                        fontFamily: 'Montserrat',
                        paddingY: '5px',
                    },
                    '& .MuiSelect-icon' : {
                        fill: 'orange'
                    }
                }}
            >
                <MenuItem defaultValue={true} value={'Різнокольорова'}>Різнокольорова</MenuItem>
                <MenuItem value={'Чорно-біла'}>Чорно-біла</MenuItem>
                <MenuItem value={'Фіолетова'}>Фіолетова</MenuItem>
            </Select>
        </div>
    )
}

export default FractalColorPicker;