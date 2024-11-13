import React from 'react';
import {Col, Row} from "antd";
import { Box, TextField } from '@mui/material';

const PercentageFilter = ({label, handleFieldChange, setTablePer, setDepthPer, setGirdleDepthPer, isCreateDiamond}) => {
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
                                        label={isCreateDiamond ? "Table%" : "Table%(From)"}
                                        variant="outlined"
                                        name="tablePercentFrom"
                                        onChange={e => isCreateDiamond ? setTablePer(e.target.value) : handleFieldChange("tablePercentFrom", e)}
                                        size='small'
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? "" : "From"}
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
                                                label="Table%(To)"
                                                variant="outlined"
                                                name="tablePercentTo"
                                                onChange={e => handleFieldChange("tablePercentTo", e)}
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
                                        label={isCreateDiamond ? "Depth%" : "Depth%(From)"}
                                        variant="outlined"
                                        name="depthPercentFrom"
                                        onChange={e => isCreateDiamond ? setDepthPer(e.target.value) : handleFieldChange("depthPercentFrom", e)}
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
                                                label="Depth%(To)"
                                                variant="outlined"
                                                name="depthPercentTo"
                                                onChange={e => handleFieldChange("depthPercentTo", e)}
                                                style={{ width: '100%' }}
                                                placeholder='To'
                                                size='small'
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
                                        label={isCreateDiamond ? "GirdleDepth%" : "GirdleDepth%(From)"}
                                        variant="outlined"
                                        name="gridlePercentFrom"
                                        onChange={e => isCreateDiamond ? setGirdleDepthPer(e.target.value) : handleFieldChange("gridlePercentFrom", e)}
                                        style={{ width: '100%' }}
                                        placeholder={isCreateDiamond ? '' : 'From'}
                                        size='small'
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
                                                label="GirdleDepth%(To)"
                                                variant="outlined"
                                                name="gridlePercentTo"
                                                onChange={e => handleFieldChange("gridlePercentTo", e)}
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

export default PercentageFilter;
