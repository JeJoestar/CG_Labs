import React from 'react';
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';
import SaturnLogo from './SaturnLogo'

const NavBar = ({ activeTab }) => {
    const tabs = ['Головна', 'Фрактали', 'Колірна схема', 'Афінне перетворення']
    const navigation = useNavigate();
    const navigateTo = (event, str) => {
        event.preventDefault();
        let path = '';
        switch(str){
            case 'Головна': path = '/'; break;
            case 'Фрактали': path = '/fractals'; break;
            case 'Колірна схема': path = '/colors'; break;
            case 'Афінне перетворення': path = '/afinne'; break;
            default:
                break;
        }
        navigation(path);
    }
    return (
        <header className="flex bg-black h-[100px] py-8 font-body justify-between">
            <SaturnLogo />
            <Stack direction="row">
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        component="button"
                        underline='none'
                        sx={{
                            color: 'white',
                            backgroundColor: index === activeTab && '#EC5939',
                            paddingX: index === activeTab ? '8px' : '9px',
                            fontSize: '20px',
                            fontWeight: index === activeTab && '600',
                            lineHeight: '30px',
                            '&:hover': {
                                backgroundColor: index !== activeTab && 'rgba(182, 187, 190, 0.5)',
                            }
                        }}
                        onClick={(e) => navigateTo(e, tab)}
                    >
                        {tab}
                    </Link>
                ))}
            </Stack>
        </header>
    )
}

export default NavBar;