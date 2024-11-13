import React from 'react';
import {Col, Row, Tag} from "antd";
import FormControl from "@mui/material/FormControl";
import {InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};

const LabFilter = ({label, constantData, selectedLabData, certificateNumber, stockNumber, setSelectedLabData, setCertificateNumber, setStockNumber, handleChangeLabData, isCreateDiamond}) => {
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
                        <Row gutter={[16, 16]}>
                            {
                                isCreateDiamond ?
                                    <div style={{display: 'flex', gap: '15px'}}>
                                        <TextField
                                            label="Cerificate Number"
                                            id="outlined-size-small"
                                            size="small"
                                            style={{marginTop: '8px'}}
                                            value={certificateNumber}
                                            onChange={(e) => setCertificateNumber(e.target.value)}
                                        />
                                        <TextField
                                            label="Stock Number"
                                            id="outlined-size-small"
                                            size="small"
                                            style={{marginTop: '8px'}}
                                            value={stockNumber}
                                            onChange={(e) => setStockNumber(e.target.value)}
                                        />
                                        <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                            <InputLabel id="demo-multiple-checkbox-label">Lab</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedLabData}
                                                onChange={(e) => setSelectedLabData(e.target.value)}
                                                input={<OutlinedInput label="Lab"/>}
                                                MenuProps={MenuProps}
                                            >
                                                {Object.keys(constantData?.FL_INTENSITY || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={constantData?.FL_INTENSITY[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    :
                                    Object.keys(constantData?.LAB || {}).map((tag) => (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedLabData?.includes(tag)}
                                            onChange={(checked) => handleChangeLabData(tag, checked)}
                                            className={selectedLabData?.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                        >
                                            {constantData?.LAB[tag]}
                                        </Tag.CheckableTag>
                                    ))
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LabFilter;
