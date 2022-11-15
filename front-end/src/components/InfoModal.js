import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'white',
    display: 'flex',
    alignItems: 'center',
    outline: 'none'
};

const CloseButton = () => {
    return (
        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.12134" width="40" height="3" transform="rotate(45 2.12134 0)" fill="#0B0000"/>
            <rect x="30.4055" y="2.85376" width="40" height="3" transform="rotate(135 30.4055 2.85376)" fill="#0B0000"/>
        </svg>
    )
}

const Circles = () => {
    return (
        <svg width="160" height="407" viewBox="0 0 160 407" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="79.5" fill="white" stroke="black"/>
            <circle cx="80" cy="328" r="29.5" fill="#F7F7F7" stroke="black"/>
            <circle cx="80" cy="392" r="14.5" fill="black" stroke="black"/>
            <circle cx="80" cy="229" r="50" fill="#EC5939"/>
        </svg>
    )
}

const Triangles = () => {
    return (
        <svg width="430" height="415" viewBox="0 0 430 415" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M173.54 220.769L228.393 75.6296L326.661 195.704L173.54 220.769Z" fill="white" stroke="black"/>
            <path d="M133.03 263.989L229.994 169.271L263.541 300.603L133.03 263.989Z" fill="#EC5939" stroke="black"/>
            <path d="M90.2405 263.23L187.36 247.682L152.266 339.564L90.2405 263.23Z" fill="white" stroke="black"/>
        </svg>
    )
}

const InfoModal = ({header, text, open, handleClose}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <div onClick={handleClose} style={{position: 'absolute', right: 20, top: 20}}>
                    <CloseButton />
                </div>
                <div style={{position: 'absolute', left: -20}}>
                    <Circles />
                </div>
                <div style={{marginLeft: '165px', marginRight: '85px'}}>
                    <Typography 
                        style={{
                            fontFamily: 'Montserrat',
                            fontSize: '32px',
                            lineHeight: '40px',
                            fontWeight: '700',
                            marginBottom: '18px'
                        }} 
                    >
                        {header}
                    </Typography>
                    {text}
                </div>
                <div style={{position: 'absolute', right: -180, bottom: -130}}>
                    <Triangles />
                </div>
            </Box>
        </Modal>
    )
}

export default InfoModal;