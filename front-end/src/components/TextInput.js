import React from 'react';
import './TextInput.css'

const TextInput = ({
    label,
    labelColor,
    color,
    width,
    onChange,
    value,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    type = 'text',
    readOnly = false
}) => {
    return (
        <div>
            <label 
                style={{
                    color: labelColor,
                    fontFamily: 'Montserrat',
                    fontSize: '24px',
                    lineHeight: '30px',
                    fontWeight: '500',
                }}
            >
                {label}
            </label>
            <input
                style={{
                    borderBottom: `3px solid ${color}`,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: 'white',
                    marginTop: !!marginTop || 0,
                    marginBottom: !!marginBottom || 0,
                    marginLeft: !!marginLeft || 0,
                    marginRight: !!marginRight || 0,
                    textAlign: 'center',
                    fontFamily: 'Montserrat',
                    fontSize: '24px',
                    lineHeight: '30px',
                    fontWeight: '500',
                    width: width || '260px' 
                }}
                type={type}
                onChange={onChange}
                value={value}
                readOnly={readOnly}
            />
        </div>
    )
}

export default TextInput;