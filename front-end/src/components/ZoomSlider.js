import * as React from 'react';
import Slider from '@mui/material/Slider';
import { BsZoomIn } from 'react-icons/bs'

const ZoomSlider = ({value, onChange, withIcon = true, width}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            {withIcon && (
                <BsZoomIn fill='white' size={32}/>
            )}
            <Slider step={10} defaultValue={30}
                value={value}
                onChange={onChange}
                sx={{
                    width: !!width ? width : '260px',
                    marginX: '13px',
                    '& 	.MuiSlider-track': {
                        color: '#EC5939'
                    },
                    '& 	.MuiSlider-rail': {
                        color: '#D9D9D9',
                        opacity: 1,
                    },
                    '& 	.MuiSlider-thumb': {
                        color: '#D9D9D9'
                    },
                }}
            />
        </div>
    )
}

export default ZoomSlider;