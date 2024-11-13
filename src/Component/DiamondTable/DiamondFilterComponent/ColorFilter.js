import React from 'react';
import {Col, Row, Tag} from "antd";
import {InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import FormControl from "@mui/material/FormControl";

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

const ColorFilter = ({label, constantData, selectedColors, setSelectedColors, handleChangeColor, isCreateDiamond}) => {
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
                                    <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                        <InputLabel id="demo-multiple-checkbox-label">Color</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            value={selectedColors}
                                            onChange={(e) => setSelectedColors(e.target.value)}
                                            input={<OutlinedInput label="Color"/>}
                                            MenuProps={MenuProps}
                                        >
                                            {Object.keys(constantData?.COLOR?.CODES || {}).map((opt) => (
                                                <MenuItem className=''
                                                          key={opt} value={constantData?.COLOR?.CODES[opt]}>
                                                    <ListItemText primary={opt}/>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> :
                                    Object.keys(constantData?.COLOR?.CODES || {}).map((tag) => (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedColors?.includes(tag)}
                                            onChange={(checked) => handleChangeColor(tag, checked)}
                                            className={selectedColors?.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                        >
                                            {constantData?.COLOR?.CODES[tag]}
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

export default ColorFilter;
