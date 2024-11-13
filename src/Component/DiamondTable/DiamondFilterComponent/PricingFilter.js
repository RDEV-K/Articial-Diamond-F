import React from 'react';
import { Col, Row } from "antd";
import { Box, TextField } from '@mui/material';

const PricingFilter = ({ label, setPriceFrom, setPriceTo, setTotalFrom, setTotalTo, setPrice, setTotalPrice, isCreateDiamond }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Row gutter={16}>
                <Col span={3}>
                    <div style={{ width: '150px', margin: isCreateDiamond ? '10px' : 0 }}>
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
                                        label={isCreateDiamond ? "Price($)/CRT" : "Price($)/CRT(From)"}
                                        variant="outlined"
                                        name="pricePerCarat"
                                        onChange={e => isCreateDiamond ? setPrice(e.target.value) : setPriceFrom(e.target.value)}
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
                                                label="Price($)/CRT(To)"
                                                variant="outlined"
                                                name="pricePerCaratTo"
                                                onChange={e => setPriceTo(e.target.value)}
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
                                        label={isCreateDiamond ? "Total Price($)" : "Total Price($)(From)"}
                                        variant="outlined"
                                        name="totalPriceFrom"
                                        onChange={e => isCreateDiamond ? setTotalPrice(e.target.value) : setTotalFrom(e.target.value)}
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
                                                label="Total Price($)(To)"
                                                variant="outlined"
                                                name="totalPriceTo"
                                                onChange={e => setTotalTo(e.target.value)}
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

export default PricingFilter;
