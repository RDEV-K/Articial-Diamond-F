import React from 'react';
import {Col, Row} from "antd";
import { Box, TextField } from '@mui/material';

const PavilionFilter = ({label, handleFieldChange, setPavillionHeight, setPavillionAngle, isCreateDiamond}) => {
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
                                        label={isCreateDiamond ? "Height %" : "Height %(From)"}
                                        variant="outlined"
                                        name="pavilionHeightFrom"
                                        onChange={e => isCreateDiamond ? setPavillionHeight(e.target.value) : handleFieldChange('pavilionHeightFrom', e.target.value)}
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
                                                label="Height %(To)"
                                                variant="outlined"
                                                name="pavilionHeightTo"
                                                onChange={e => handleFieldChange('pavilionHeightTo', e.target.value)}
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
                                        label={isCreateDiamond ? "Angle" : "Angle(From)"}
                                        variant="outlined"
                                        name="pavilionAngleFrom"
                                        onChange={e => isCreateDiamond ? setPavillionAngle(e.target.value) : handleFieldChange('pavilionAngleFrom', e.target.value)}
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
                                                label="Angle(To)"
                                                variant="outlined"
                                                name="pavilionAngleTo"
                                                onChange={e => handleFieldChange('pavilionAngleTo', e.target.value)}
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

export default PavilionFilter;
