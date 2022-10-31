import { Typography } from '@mui/material';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Divider from '../components/Divider';
import ZoomSlider from '../components/ZoomSlider';
import Download from '../download.png'
import Upload from '../upload.png'

let ctx1 = null;
let ctx2 = null;
let curCtx;
const RGBtoHSL= (r, g, b) => {
  r /= 255; g /= 255; b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = max;
  l = 0.5 * (max + min);
  var d = max - min;
  s = max === 0 || l === 0 ? 0 : d / max;
  if (max === 0 || l === 0){
    s = 0;
  } else if (l < 0.5 && l > 0) {
    s = (max - min) / (max + min);
  } else if (l > 0.5) {
    s = (max - min) / (2 - max + min);
  }

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }
  h = Math.floor(h * 360);
  s = Math.floor(s * 100);
  l = Math.floor(l * 100);

  return [ h, s, l ];
}

const HSLtoRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

const RGBtoCMYK = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  var c1 = 1 - r, m1 = 1 - g, y1 = 1 - b; 
  var k = Math.min(c1, m1, y1);
  if (k === 1){
    return [0, 0, 0, 1];
  }

  return [((c1 - k)/(1 - k)).toFixed(1), ((m1 - k)/(1 - k)).toFixed(1), ((y1 - k)/(1 - k)).toFixed(1), (k).toFixed(1)];
}


const ColorsPage = () => {
  const canvasRef1 = useRef(null)
  const canvasRef2 = useRef(null)
  const [lightness, setLightness] = useState(0);
  const [file, setFile] = useState();
  const [hsl, setHsl] = useState([0, 0, 0]);
  const [cmyk, setCmyk] = useState([0, 0, 0, 0]);

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setFile(URL.createObjectURL(fileObj));
    event.target.value = null;
  };

  const changeLightnessHandler = (event) => {
      setLightness(event.target.value)

  }

  const download = (event) =>{
    event.preventDefault();
    if(canvasRef2 != null){
        const url = canvasRef2.current.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'result.png';
        link.href = url;
        link.click();
    }
  };

  const handleMouseMove = (event) => {
    let canvas
    let bounding
    if (event.target === canvasRef1.current){
        canvas = canvasRef1.current
        bounding = canvas.getBoundingClientRect();
        curCtx = ctx1
    } else if (event.target === canvasRef2.current){
        canvas = canvasRef2.current
        bounding = canvas.getBoundingClientRect();
        curCtx = ctx2
    } else {
      console.log("out")
        return
    }
    
    const x = event.clientX - bounding.left;
    const y = event.clientY - bounding.top;
    const pixel = curCtx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    console.log(RGBtoCMYK(data[0], data[1], data[2]))
    setCmyk(RGBtoCMYK(data[0], data[1], data[2]))
    setHsl(RGBtoHSL(data[0], data[1], data[2]))
  }

  useEffect(() => {
    if (ctx1) applyChange();
  }, [lightness]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = file ||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd9p1ahb6U2rCcTKEt3fNeEBz-q7QpBko2y7Zq-1H4tg4BAJroaEG86RPqvSRNUTzzRU&usqp=CAU'
    //img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35302887-bf5b-4c46-a9e0-fc72c65ffb50/d2zaii3-22e60a2b-a164-44bd-a487-cb16589a4799.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MzAyODg3LWJmNWItNGM0Ni1hOWUwLWZjNzJjNjVmZmI1MFwvZDJ6YWlpMy0yMmU2MGEyYi1hMTY0LTQ0YmQtYTQ4Ny1jYjE2NTg5YTQ3OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hm2OTe9W756fttOuga2kQ5lWBIWQcTyfHkS8qvTygyQ'

    img.onload = () => {
      const canvas1 = canvasRef1.current
      ctx1 = canvas1.getContext('2d')
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
      ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
      const canvas2 = canvasRef2.current
      ctx2 = canvas2.getContext('2d')
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    };
  },[file])

  const applyChange = () => {
    const imgData = ctx1.getImageData(
      0,
      0,
      canvasRef2.current.width,
      canvasRef2.current.height
    );
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const hsl = RGBtoHSL(
        imgData.data[i],
        imgData.data[i + 1],
        imgData.data[i + 2]
      );
      if (hsl[2] <= 60 && hsl[2] >= 40 && hsl[1] >= 0 && hsl[1] <= 15) {
        hsl[2] += lightness / 10;
        if (hsl[2] > 100) {
          hsl[2] = 100;
        } else if (hsl[2] < 0) {
          hsl[2] = 0;
        }
      }
      const rgb = HSLtoRGB(hsl[0], hsl[1], hsl[2]);
      imgData.data[i] = rgb[0];
      imgData.data[i + 1] = rgb[1];
      imgData.data[i + 2] = rgb[2];
    }
    console.log(imgData)
    ctx2.clearRect(0, 0, canvasRef2.current.width, canvasRef2.current.height);
    ctx2.putImageData(imgData,  0, 0);
  }

  return (
    <>
      <NavBar activeTab={2} />
      <div className='bg-black'
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          alignItems: 'center',
        }}
      >
        <Typography
          color={'#FFFFFF'}
          fontSize={'30px'}
          fontWeight={700}
          fontFamily={'Montserrat'}
          lineHeight={'37px'}
          style={{
            marginTop: '160px'
          }}
        >
          КОЛІРНІ МОДЕЛІ
        </Typography>
        <div className='flex'
          style={{
            minHeight: '478px',
            minWidth: '100%',
            justifyContent:'center',
            marginTop: '28px'
          }}
        >
          <div>
            <canvas ref={canvasRef1} width={680} height={480} onMouseMove={handleMouseMove} />
            <div className='flex'>
            <input
              style={{display: 'none'}}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            <img alt="upload" src={Upload} onClick={handleClick} style={{marginRight: '134px'}}/>
              <div className='flex' style={{
                gap: '38px',
                justifyContent: 'center'
              }}>
                <TextInput 
                  label='H.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'}
                  value={hsl[0]}
                  readOnly
                />
                <TextInput 
                  label='S.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                  value={hsl[1]}
                  readOnly
                />
                <TextInput 
                  label='L.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                  value={hsl[2]}
                  readOnly
                />
              </div>
            </div>
          </div>
          <Divider width={'480px'} isHorizontal={false} color="#EC5939" style={{margin: "0 10px"}}/>
          <div>
            <canvas ref={canvasRef2} width={680} height={480} onMouseMove={handleMouseMove}/>
            <div className='flex' 
              style={{
                justifyContent: 'flex-end'
              }}
            >
              <div className='flex' 
                style={{
                  gap: '38px',
                  justifyContent: 'center'
                }}
              >
                <TextInput 
                  label='C.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'}
                  value={cmyk[0]}
                  readOnly
                />
                <TextInput 
                  label='M.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'}
                  value={cmyk[1]}
                  readOnly
                />
                <TextInput 
                  label='Y.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'}
                  value={cmyk[2]}
                  readOnly
                />
                <TextInput 
                  label='K.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'}
                  value={cmyk[3]}
                  readOnly
                />
              </div>
              <img alt="download" onClick={download} src={Download} style={{marginLeft: '66px'}}/>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <Typography 
            color={'white'} 
            fontFamily={'Montserrat'} 
            style={{
                fontFamily: 'Montserrat',
                fontSize: '24px',
                lineHeight: '30px',
                fontWeight: '500',
                marginBottom: '22px'
            }}
          >
              Світлота по сірому
          </Typography>
          <ZoomSlider withIcon={false} width={'284px'} onChange={changeLightnessHandler}/>
        </div>
      </div>
    </>
  )
}

export default ColorsPage;