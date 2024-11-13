import WhatsApp from "../../assets/Images/whatsapp.jpg";
import Email from "../../assets/Images/email.jpg";
import React from "react";
import './style.css';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

const NeedHelp = () => {

    const styles = {
        card: {
            backgroundColor: '#fff',
            color: '#fff',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        header: {
            color: '#000',
            textAlign: 'center',
            marginBottom: '20px',
        },
        contactBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px 0',
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
        },
        text: {
            color: '#000',
            marginLeft: '10px',
            fontSize: '18px',
            cursor: 'pointer'
        },
        subtext: {
            color: '#000',
            fontSize: '16px',
            marginLeft: '10px',
        },
    };

    const openWhatsapp = (number) => {
        const encodedPhoneNumber = encodeURIComponent(number);
        const url = `https://wa.me/${encodedPhoneNumber}`;
        window.open(url, '_blank');
    }

    return (
        <>
            <div className='need-help-component'>
                <Container maxWidth="sm" style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Card style={styles.card}>
                        <CardContent>
                            <Typography variant="h4" component="h2" style={styles.header}>
                                Need Help?
                            </Typography>
                            <Typography variant="h4" component="h2" style={styles.header}>
                                We are always ready to help!!!
                            </Typography>
                            <Box style={styles.contactBox}>
                                <Box style={styles.icon}>
                                    <img src={Email} height={20} width={25} alt='WhatsApp'/>
                                    <div style={styles.text}>info@labnet.diamonds</div>
                                </Box>
                            </Box>
                            <Box style={styles.contactBox}>
                                <Box style={styles.icon}>
                                    <img src={WhatsApp} height={25} width={25} alt='WhatsApp'/>
                                    <div>
                                        <div onClick={() => openWhatsapp('+18454006020')} style={styles.text}>+18454006020</div>
                                        <div style={styles.subtext}>(US & Canada)</div>
                                    </div>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default NeedHelp;
