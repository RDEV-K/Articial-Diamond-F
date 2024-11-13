import React from 'react';
import {Col, Row, Tag} from "antd";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

const SizeFilter = ({label, constantData, selectedSize, setSelectedSize, handleChangeSize, isCreateDiamond}) => {
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
                        <Row gutter={[16, 16]} style={{marginLeft: '0px'}}>
                            {
                                isCreateDiamond ?
                                    <Box component="form"
                                         sx={{ minWidth: 120 }}
                                         noValidate
                                         autoComplete="off"
                                    >
                                        <TextField
                                            label={'Size'}
                                            variant="outlined"
                                            name="size"
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            size='small'
                                            style={{ width: '100%' }}
                                            placeholder='Size'
                                        />
                                    </Box>:
                                Object.keys(constantData?.SIZE || {}).map((tag) => {
                                    return (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedSize?.includes(tag)}
                                            onChange={(checked) => handleChangeSize(tag, checked)}
                                            className={selectedSize?.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                        >
                                            {constantData?.SIZE[tag]}
                                        </Tag.CheckableTag>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SizeFilter;
