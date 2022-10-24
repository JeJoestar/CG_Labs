import { Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Divider from '../components/Divider';
import ZoomSlider from '../components/ZoomSlider';

const ColorsPage = () => {
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
              <img width={680} height={480} />
              <div className='flex' style={{
                gap: '38px',
                justifyContent: 'center'
              }}>
                <TextInput 
                  label='H.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
                <TextInput 
                  label='S.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
                <TextInput 
                  label='L.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
              </div>
            </div>
            <Divider width={'480px'} isHorizontal={false} color="#EC5939" style={{margin: "0 10px"}}/>
            <div>
              <img width={680} height={480} />
              <div className='flex' style={{
                gap: '38px',
                justifyContent: 'center'
              }}>
                <TextInput 
                  label='C.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
                <TextInput 
                  label='M.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
                <TextInput 
                  label='Y.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
                <TextInput 
                  label='K.'
                  labelColor='white'
                  color='#EC5939'
                  width={'55px'} 
                />
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
                Яскравість по сірому
            </Typography>
            <ZoomSlider withIcon={false} width={'284px'}/>
          </div>
        </div>
      </>
    )
}

export default ColorsPage;