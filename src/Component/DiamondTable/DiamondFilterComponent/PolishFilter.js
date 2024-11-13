import React from 'react';
import {Col, Row, Tag} from "antd";
import FormControl from "@mui/material/FormControl";
import {InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";

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

const PolishFilter = ({label, constantData, selectedPolishData, setSelectedPolishData, handleChangePolishData, isCreateDiamond}) => {
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
                                        <InputLabel id="demo-multiple-checkbox-label">Polish</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            value={selectedPolishData}
                                            onChange={(e) => setSelectedPolishData(e.target.value)}
                                            input={<OutlinedInput label="Polish"/>}
                                            MenuProps={MenuProps}
                                        >
                                            {Object.keys(constantData?.POLISH || {}).map((opt) => (
                                                <MenuItem className=''
                                                          key={opt} value={constantData?.POLISH[opt]}>
                                                    <ListItemText primary={opt}/>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> :
                                    Object.keys(constantData?.POLISH || {}).map((tag) => (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedPolishData?.includes(tag)}
                                            onChange={(checked) => handleChangePolishData(tag, checked)}
                                            className={selectedPolishData?.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                        >
                                            {constantData?.POLISH[tag]}
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

export default PolishFilter;
