import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Angle from '../angle.png'
import AfinneCanvas from '../components/AfinneCanvas';
import InfoButton from '../components/InfoButton';
import InfoModal from '../components/InfoModal';

const coords = [[0, 0], [0, 1], [1, 1], [1, 0]];

const CoordInput = ({label, index, handlePointCoords}) => {
  const [x, setX] = useState(coords[index][0]);
  const [y, setY] = useState(coords[index][1]);

  useEffect(() => {
    handlePointCoords(index, x, y);
  }, [x, y]);

  return (
  <div 
    style={{display: 'flex', justifyContent: 'center'}}
  >
    <TextInput 
        label={label}
        labelColor='white'
        value={x}
        onChange={(e) => setX(Number(e.target.value))}
        color='#EC5939'
        width={'45px'}
        type='number'
    />
    <Typography 
      color={'white'} 
      fontFamily={'Montserrat'} 
      style={{
        fontFamily: 'Montserrat',
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '600',
        margin: '0 5px'
      }}
    >
      ;
    </Typography>
    <TextInput 
        labelColor='white'
        value={y}
        onChange={(e) => setY(Number(e.target.value))}
        color='#EC5939'
        width={'45px'}
        type='number'
    />
  </div>
  )
} 

let executing = false;
const modalHeader = "АФІННІ ПЕРЕТВОРЕННЯ";
const ModalContent = () => {
  return (
    <Typography 
      color={'black'}
      style={{
        fontFamily: 'Montserrat',
        fontSize: '24px',
        lineHeight: '30px',
        fontWeight: '500',
      }}
    >
        Афінним називається перетворення, що має такі властивості:
        <br/><span style={{ marginLeft: '20px'}}>• Може бути представлене як послідовність операцій з числа найпростіших: зсув, розтягнення/стиснення, поворот;</span>
        <br/><span style={{ marginLeft: '20px'}}>• Під час перетворень зберігаються прямі лінії, паралельність прямих, відношення довжин відрізків, що лежать на одній прямій,</span>
        і відношення площ фігур.
    </Typography>
  )
}
const AfinnePage = () => {

  const [updated, setUpdated] = useState(false);
  const [angle, setAngle] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (updated) {
      setUpdated(false);
    }
  }, [updated])

  const execute = async () => {
    executing = true;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    
    while(executing) {
      const center = {
        x: (coords[0][0] + coords[2][0]) / 2.0,
        y: (coords[0][1] + coords[2][1]) / 2.0,
      }
      rotate(angle, center);
      move(1, 0)
      
      setUpdated(true)
      await delay(1000);
    }
  }

  const stop = () => {
    executing = false;
    coords[0] = [0, 0];
    coords[1] = [0, 1];
    coords[2] = [1, 1];
    coords[3] = [1, 0];
    setUpdated(true)
  }

  const rotate = (angle, center) => {

    let sin = Math.sin(toRadians(angle));
    let cos  = Math.cos(toRadians(angle));
    console.log('before', coords)
    for (let i = 0; i < 4; i++){
      const x1 = coords[i][0];
      const y1 = coords[i][1];
      let firstMatrix = [[x1, y1, 1]];
      let secondMatrix = [[1, 0, 0], [0, 1, 0], [-center.x, -center.y, 1]];
      let thirdMatrix = [[cos, sin, 0], [-sin, cos, 0], [0, 0, 1]];
      let fourthMatrix = [[1, 0, 0], [0, 1, 0], [center.x, center.y, 1]];
      let subresult = multiply(firstMatrix, secondMatrix);
      subresult = multiply(subresult, thirdMatrix);
      subresult = multiply(subresult, fourthMatrix);
      coords[i][0] = Math.floor(subresult[0][0] * 100) / 100;
      coords[i][1] = Math.floor(subresult[0][1] * 100) / 100;
    }
    
    console.log(coords)
  }

  const move = (yoffset, xoffset) => {
    const moveMatrix = [[1, 0, 0], [0, 1, 0], [-xoffset, -yoffset, 1]];
    for (let i = 0; i < 4; i++){
      const x1 = coords[i][0];
      const y1 = coords[i][1];
      console.log(x1, y1)
      let firstMatrix = [[x1, y1, 1]];
      let subresult = multiply(firstMatrix, moveMatrix);
      coords[i][0] = Math.floor(subresult[0][0] * 100) / 100;
      coords[i][1] = Math.floor(subresult[0][1] * 100) / 100;
    }
  }

  const toRadians =  (angle) => {
    return angle * (Math.PI / 180);
  }

  const handlePointCoords = (index, coordX, coordY) => {
    console.log(index, coordX, coordY)
    if (index === 0){
      coords[0][0] = coordX;
      coords[0][1] = coordY;
    } else {
      coords[2][0] = coordX;
      coords[2][1] = coordY;
    }

    coords[1][0] = coords[0][0];
    coords[3][1] = coords[0][1];
    coords[1][1] = coords[2][1];
    coords[3][0] = coords[2][0];

    console.log(coords)
    setUpdated(true);
  }

  const multiply = (a, b) => {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows

    for (var r = 0; r < aNumRows; r++) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; c++) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; i++) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }

    return m;
  }

  return (
    <>
      <NavBar activeTab={3} />
      <div 
        className='bg-black'
          style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100%',
          minWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '140px'
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
            <div style={{ marginBottom: '60px', display: 'flex'}}>
              <Typography 
                color={'white'} 
                fontFamily={'Montserrat'} 
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '30px',
                  lineHeight: '36px',
                  fontWeight: '700',
                  marginRight: '10px'
                }}
              >
                    АФІННІ ПЕРЕТВОРЕННЯ
              </Typography>
              <InfoButton size1={36} onClick={() => setModalOpen(true)}/>
            </div>
            <div 
                style={{
                    marginTop: '35px',
                    marginBottom: '66px',
                }
            }>
                <Typography color={'white'} fontFamily={'Montserrat'} style={{
                        fontFamily: 'Montserrat',
                        fontSize: '25px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        marginBottom: '25px'
                    }}
                >
                    Координати
                </Typography>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                  <CoordInput label='A: ' index={0} handlePointCoords={handlePointCoords} />
                  <CoordInput label='C: ' index={2} handlePointCoords={handlePointCoords} />
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
                        fontSize: '25px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        marginBottom: '25px'
                    }}
                >
                    Поворот відносно центру
                </Typography>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={Angle} width={32} height={32} style={{ marginRight: '13px'}}/>
                  <TextInput 
                    labelColor='white'
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    color='#EC5939'
                    width={'90px'}
                  />
                  <Typography 
                    color={'white'} 
                    fontFamily={'Montserrat'} 
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '15px',
                        lineHeight: '5px',
                        fontWeight: '600',
                        paddingBottom: '30px'
                    }}
                >
                  o
                </Typography>
                </div>
            </div>
            <div 
                style={{
                    marginTop: '110px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
              <button 
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  backgroundColor: '#D9D9D9',
                  fontSize: '20px',
                  padding: '4px 55px',
                }}
                onClick={stop}
              >
                Скинути
              </button>
              <button 
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  backgroundColor: '#EC5939',
                  fontSize: '24px',
                  padding: '3px 15px',
                  color: 'white'
                }}
                onClick={execute}
              >
                ВІДТВОРИТИ
              </button>
          </div>
        </div>
        <div>
          <AfinneCanvas squareCoords={coords} key={coords} needValidation={!executing} />
        </div>
        <InfoModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          header={modalHeader}
          text={<ModalContent />}
        />
      </div>
    </>
  )
}

export default AfinnePage;