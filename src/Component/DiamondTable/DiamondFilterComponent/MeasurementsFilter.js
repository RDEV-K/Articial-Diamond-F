import React from 'react';
import {Col, Row} from "antd";
import { Box, TextField } from '@mui/material';

const MeasurementsFilter = ({label, handleFieldChange, setLength, setWidth, setDepth, isCreateDiamond}) => {
    return (
        <div style={{marginTop: '20px'}}>
            <Row gutter={16}>
                <Col span={3}>
                    <div style={{width: '150px', margin: isCreateDiamond ? '10px' : 0}}>
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
                                        label={isCreateDiamond ? "Length" : "Length(From)"}
                                        variant="outlined"
                                        name="lengthFrom"
                                        onChange={e => isCreateDiamond ? setLength(e.target.value) : handleFieldChange('lengthFrom', e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                    />
                                </Box>
                            </Col>
                            {
                                !isCreateDiamond ?
                                    <Col span={4}>
                                        <Box component="form"
                                             sx={{ minWidth: 120 }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label="Length(To)"
                                                variant="outlined"
                                                name="lengthTo"
                                                onChange={e => handleFieldChange('lengthTo', e.target.value)}
                                                size='small'
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                            />
                                        </Box>
                                    </Col> : null
                            }
                            <Col span={4}>
                                <Box component="form"
                                    sx={{ minWidth: 120 }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        label={isCreateDiamond ? "Width" : "Width(From)"}
                                        variant="outlined"
                                        name="widthFrom"
                                        onChange={e => isCreateDiamond ? setWidth(e.target.value) : handleFieldChange('widthFrom', e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                    />
                                </Box>
                            </Col>
                            {
                                !isCreateDiamond ?
                                    <Col span={4}>
                                        <Box component="form"
                                             sx={{ minWidth: 120 }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label="Width(To)"
                                                variant="outlined"
                                                name="widthTo"
                                                onChange={e => handleFieldChange('widthTo', e.target.value)}
                                                size='small'
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                            />
                                        </Box>
                                    </Col> : null
                            }
                            <Col span={4}>
                                <Box component="form"
                                    sx={{ minWidth: 120 }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        label={isCreateDiamond ? "Depth" : "Depth(From)"}
                                        variant="outlined"
                                        name="depthFrom"
                                        onChange={e => isCreateDiamond ? setDepth(e.target.value) : handleFieldChange('depthFrom', e.target.value)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                    />
                                </Box>
                            </Col>
                            {
                                !isCreateDiamond ?
                                    <Col span={4}>
                                        <Box component="form"
                                             sx={{ minWidth: 120 }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label="Depth(To)"
                                                variant="outlined"
                                                name="depthTo"
                                                onChange={e => handleFieldChange('depthTo', e.target.value)}
                                                size='small'
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                            />
                                        </Box>
                                    </Col> : null
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MeasurementsFilter;
