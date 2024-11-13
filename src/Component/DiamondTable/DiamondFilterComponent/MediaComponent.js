import React from 'react';
import {Col, Row} from "antd";
import { Box, TextField } from '@mui/material';

const MediaComponent = ({label, setImageURL, setVideoURL, setCertificateURL}) => {
    return (
        <div style={{marginTop: '20px'}}>
            <Row gutter={16}>
                <Col span={3}>
                    <div style={{width: '150px', margin: '10px'}}>
                        {label}
                    </div>
                </Col>
                <Col span={21}>
                    <div>
                        <Row gutter={[16, 16]} style={{marginLeft: '-16px'}}>
                            <Col span={4}>
                                <Box component="form"
                                     sx={{ minWidth: 120 }}
                                     noValidate
                                     autoComplete="off"
                                >
                                    <TextField
                                        label={'Image URL'}
                                        variant="outlined"
                                        name="imageURL"
                                        onChange={e => setImageURL(e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder='Image URL'
                                    />
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box component="form"
                                     sx={{ minWidth: 120 }}
                                     noValidate
                                     autoComplete="off"
                                >
                                    <TextField
                                        label={'Video URL'}
                                        variant="outlined"
                                        name="videoURL"
                                        onChange={e => setVideoURL(e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder='Video URL'
                                    />
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box component="form"
                                     sx={{ minWidth: 120 }}
                                     noValidate
                                     autoComplete="off"
                                >
                                    <TextField
                                        label={'Certificate URL'}
                                        variant="outlined"
                                        name="certificateURL"
                                        onChange={e => setCertificateURL(e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder='Certificate URL'
                                    />
                                </Box>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MediaComponent;
