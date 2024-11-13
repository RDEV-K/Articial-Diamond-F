import React from "react";
import './style.css';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPolicyComponent = () => {

    return (
        <>
            <div className='privacy-policy-component'>
                <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Privacy Policy
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Labnet ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services (collectively, the "Services").
                            </Typography>

                            <Typography variant="h6" component="h2" gutterBottom>
                                1. Information We Collect
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Personal Information: We collect personal information you provide to us, such as your name, email address, phone number, business details, and contact preferences." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Usage Information: We collect information about your interactions with our Services, including IP address, browser type, pages visited, and the time and date of your visits." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information and improve your experience on our website. You can control the use of cookies through your browser settings." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                2. How We Use Your Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="To Provide Services: We use your information to operate and provide you with the Services, including facilitating transactions and managing your account." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="To Improve Services: We use the information to understand how our Services are used, to diagnose technical issues, and to enhance user experience." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="To Communicate with You: We use your information to send you updates, marketing materials, and other information related to our Services. You can opt-out of receiving marketing communications at any time." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="For Legal Reasons: We may use your information as required by law, to enforce our policies, to protect our rights and the rights of others, and in connection with legal proceedings." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                3. Sharing Your Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="With Your Consent: We may share your information with third parties if you consent to such sharing." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Service Providers: We may share your information with service providers who perform services on our behalf, such as payment processing and data analysis." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Legal Requirements: We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Business Transfers: In the event of a merger, acquisition, or sale of our assets, your information may be transferred to the new owner." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                4. Your Choices
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Account Information: You can update or delete your account information by contacting us. If you delete your account, some information may remain in our records as required by law." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cookies: You can manage cookies through your browser settings. Disabling cookies may affect your ability to use certain features of the Services." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Marketing Communications: You can opt-out of receiving marketing emails by following the unsubscribe link in those emails. Even if you opt-out, we may still send you non-marketing emails, such as those about your account or our ongoing business relations." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                5. Security
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                6. International Data Transfers
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                7. Children's Privacy
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                8. Changes to This Policy
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the effective date. Your continued use of the Services after the changes have been made will constitute your acceptance of the changes." />
                                </ListItem>
                            </List>

                            <Typography variant="h6" component="h2" gutterBottom>
                                9. Contact Us
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`If you have any questions about this Privacy Policy, please contact us at info@labnet.diamonds.`} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default PrivacyPolicyComponent;
