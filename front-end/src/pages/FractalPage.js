import { Typography } from '@mui/material';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import FractalColorPicker from '../components/FractalColorPicker';
import ZoomSlider from '../components/ZoomSlider';
import FractalCanvas from '../components/FractalCanvas';

const FractalPage = () => {
    const [scheme, setScheme] = useState('Різнокольорова');
    const [realC1, setRealC1] = useState(-1);
    const [imgC1, setImgC1] = useState(-1);
    const [realC2, setRealC2] = useState(2);
    const [imgC2, setImgC2] = useState(1);
    const [zoom, setZoom] = useState(0);
    const handleSchemeChange = (event) => {
        setScheme(event.target.value);
    }

    const handleZoomChange = (event) => {
        setZoom(event.target.value);
    }
   

    const handleRealC1Change = (event) => {
        setRealC1(event.target.value);
    }

    const handleImgC1Change = (event) => {
        setImgC1(event.target.value);
    }

    const handleRealC2Change = (event) => {
        setRealC2(event.target.value);
    }

    const handleImgC2Change = (event) => {
        setImgC2(event.target.value);
    }

    return (
        <div className='bg-black' style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <NavBar activeTab={1} />
            <div 
                className='bg-black' 
                style={{
                    fontFamily: 'Montserrat',
                    fontSize: '28px',
                    lineHeight: '30px',
                    fontWeight: '700',
                    marginTop: '78px',
                    marginLeft: '35px',
                    textAlign: 'center',
                    justifyContent: 'space-around',
                    display: 'flex'
                }}
            >
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: '0 100px 40px 100px',
                    }}
                >
                    <div>
                        <span className="text-white text-bold font-body">
                            ФРАКТАЛ МАНДЕЛЬБРОТА
                        </span>
                    </div>
                    <div 
                        style={{
                            marginTop: '35px'
                        }
                    }>
                        <Typography color={'white'} fontFamily={'Montserrat'} style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            Константа С
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <TextInput 
                            label='C1:'
                            labelColor='white'
                            color='#EC5939'
                            onChange={handleRealC1Change}
                            value={realC1}
                            width={'120px'}
                        />
                        <Typography color={'white'} fontFamily={'Montserrat'} style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            +
                        </Typography>
                        <TextInput 
                            labelColor='white'
                            color='#EC5939'
                            onChange={handleImgC1Change}
                            value={imgC1}
                            width={'120px'}
                        />
                        <Typography color={'white'} fontFamily={'Montserrat'} style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            i
                        </Typography>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <TextInput 
                            label='C2:'
                            labelColor='white'
                            color='#EC5939'
                            onChange={handleRealC2Change}
                            value={realC2}
                            width={'120px'}
                        />
                        <Typography color={'white'} fontFamily={'Montserrat'} style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            +
                        </Typography>
                        <TextInput 
                            labelColor='white'
                            color='#EC5939'
                            onChange={handleImgC2Change}
                            value={imgC2}
                            width={'120px'}
                        />
                        <Typography color={'white'} fontFamily={'Montserrat'} style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            i
                        </Typography>
                        </div>
                    </div>
                    <div 
                        style={{
                            marginTop: '35px'
                        }}
                    >
                        <Typography 
                            color={'white'} 
                            fontFamily={'Montserrat'} 
                            style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            Колірна схема
                        </Typography>
                        <FractalColorPicker 
                            handleChange={handleSchemeChange}
                            scheme={scheme}
                        />
                    </div>
                    <div 
                        style={{
                            marginTop: '35px'
                        }}
                    >
                        <Typography 
                            color={'white'} 
                            fontFamily={'Montserrat'} 
                            style={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                lineHeight: '30px',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}
                        >
                            Масштабування
                        </Typography>
                        <ZoomSlider value={zoom} onChange={handleZoomChange}/>
                    </div>
                </div>
                <div>
                    <FractalCanvas 
                        key={realC1 + realC2 + imgC1 + imgC2 + scheme} 
                        realValue1={realC1} 
                        imgValue1={imgC1}
                        realValue2={realC2} 
                        imgValue2={imgC2}
                        scale={zoom}
                        schemeName={scheme}
                    />
                </div>
            </div>
        </div>
    )
}

export default FractalPage;