import React from "react";
import './style.css';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const TermsAndConditions = () => {

    return (
        <>
            <div className='privacy-policy-component'>
                <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Terms and Conditions
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Welcome to Labnet! These Terms and Conditions ("Terms") govern your use of our website and services (collectively, the "Services"). By using our Services, you agree to these Terms.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                1. Use of Services
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Eligibility: You must be at least 18 years old and have the legal capacity to enter into these Terms." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Account Registration: You must provide accurate and complete information when creating an account and keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Prohibited Activities: You agree not to use the Services for any unlawful or prohibited activities, including but not limited to:" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Violating any applicable laws or regulations." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Infringing upon or misusing intellectual property rights." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Distributing harmful, misleading, or false content." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Engaging in fraudulent or deceptive practices." />
                                </ListItem>
                            </List>

                            <Typography variant="h5" component="h2" gutterBottom>
                                2. User Content
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Ownership: You retain ownership of any content you submit to the Services. However, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content in connection with the operation of the Services." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Responsibility: You are responsible for any content you submit and for ensuring it complies with these Terms. We do not endorse, support, represent, or guarantee the completeness, truthfulness, accuracy, or reliability of any content submitted by users." />
                                </ListItem>
                            </List>

                            <Typography variant="h5" component="h2" gutterBottom>
                                3. Transactions
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Facilitation of Transactions: Labnet facilitates transactions between buyers and sellers but is not a party to those transactions. We do not guarantee the quality, legality, or safety of the products listed, nor do we endorse the accuracy of the listings, including but not limited to the prices, color, clarity, or other specifications of the stones." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Payments: Payments are processed through third-party payment providers. You agree to comply with the terms and conditions of those providers. Labnet is not responsible for any issues related to payment processing, including but not limited to payment disputes, refunds, or chargebacks." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="No Responsibility for Prices: We take no responsibility for the prices mentioned by the sellers. Buyers and sellers are responsible for negotiating and agreeing on the prices and other terms of the transactions." />
                                </ListItem>
                            </List>

                            <Typography variant="h5" component="h2" gutterBottom>
                                4. Intellectual Property
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Ownership: All content and materials on the Services, including logos, text, graphics, and software, are the property of Labnet or its licensors and are protected by intellectual property laws. Unauthorized use of these materials is prohibited." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="License: You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal or business purposes, subject to these Terms." />
                                </ListItem>
                            </List>

                            <Typography variant="h5" component="h2" gutterBottom>
                                5. Disclaimers and Limitation of Liability
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="No Warranty: The Services are provided 'as is' without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted or error-free, nor do we make any warranty as to the accuracy, completeness, or reliability of any information obtained through the Services." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Limitation of Liability: To the maximum extent permitted by law, Labnet is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services, even if we have been advised of the possibility of such damages. Our total liability to you for any claims arising from your use of the Services is limited to the amount you have paid to us for the use of the Services." />
                                </ListItem>
                            </List>

                            <Typography variant="h5" component="h2" gutterBottom>
                                6. Indemnification
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You agree to indemnify and hold Labnet harmless from any claims, damages, or expenses (including reasonable attorneys' fees) arising from your use of the Services, your violation of these Terms, or your infringement of any third-party rights.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                7. Termination
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We may terminate or suspend your access to the Services at any time, without notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                8. Governing Law
                            </Typography>
                            <Typography variant="body1" paragraph>
                                These Terms are governed by and construed in accordance with the laws of New York, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in New York to resolve any disputes arising from these Terms or your use of the Services.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                9. Changes to Terms
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website and updating the effective date. Your continued use of the Services after the changes have been made will constitute your acceptance of the changes.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                10. Contact Us
                            </Typography>
                            <Typography variant="body1" paragraph>
                                If you have any questions about these Terms, please contact us at info@labnet.diamonds.
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default TermsAndConditions;
