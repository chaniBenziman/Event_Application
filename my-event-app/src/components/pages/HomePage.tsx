import React from 'react';
import image1 from '../../assets/image1.png';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import RegistrationIcon from '@mui/icons-material/AppRegistration';

const HomePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      width: '100%', // שינוי ל-100% כדי למלא את רוחב הדף
    }}>
      <div style={{
        width: '1000%',
        height: '1000%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img
          src={image1}
          alt="Event"
          style={{
            maxWidth: '500%',
            maxHeight: '500%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column', // כדי שהכיתובים יהיו אחד מתחת לשני
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        
      </div>
    </div>
  );
};

export default HomePage;