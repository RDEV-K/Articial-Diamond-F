import React from 'react';
import {Col, Row} from "antd";
import { Box, TextField } from '@mui/material';

const CrownFilter = ({label, handleFieldChange, setCrownHeight, setCrownAngle, isCreateDiamond}) => {
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
                                <Box component="from"
                                    sx={{ minWidth: 120 }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        label={isCreateDiamond ? "Height%" : "Height%(From)"}
                                        variant="outlined"
                                        name="crownHeightFrom"
                                        onChange={e => isCreateDiamond ? setCrownHeight(e.target.value) : handleFieldChange("crownHeightFrom", e)}
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                        size='small'
                                    />
                                </Box>
                            </Col>
                            {
                                !isCreateDiamond ?
                                    <Col span={4}>
                                        <Box component="to"
                                             sx={{ minWidth: 120 }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label="Height%(To)"
                                                variant="outlined"
                                                name="crownHeightTo"
                                                onChange={e => handleFieldChange("crownHeightTo", e)}
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                                size='small'
                                            />
                                        </Box>
                                    </Col> : null
                            }
                            <Col span={4}>
                                <Box component="from"
                                    sx={{ minWidth: 120 }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        label={isCreateDiamond ? "Angle%" : "Angle%(From)" }
                                        variant="outlined"
                                        name="crownAngleFrom"
                                        onChange={e => isCreateDiamond ? setCrownAngle(e.target.value) : handleFieldChange("crownAngleFrom", e)}
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                        size='small'
                                    />
                                </Box>
                            </Col>
                            {
                                !isCreateDiamond ?
                                    <Col span={4}>
                                        <Box component="to"
                                             sx={{ minWidth: 120 }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label="Angle%(To)"
                                                variant="outlined"
                                                name="crownAngleTo"
                                                onChange={e => handleFieldChange("crownAngleTo", e)}
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                                size='small'
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

export default CrownFilter;
