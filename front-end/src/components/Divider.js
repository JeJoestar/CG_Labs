import React from 'react';

const Divider = ({width, color, isHorizontal, style}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: isHorizontal ? width : '1px',
            height: !isHorizontal ? width : '1px',
            ...style
        }}/>
    )
}

export default Divider;