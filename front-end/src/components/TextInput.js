import React from 'react';
import './TextInput.css'

const TextInput = ({label, labelColor, color, width, onChange, value, marginTop, marginBottom, marginLeft, marginRight}) => {
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
                type={'text'}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextInput;