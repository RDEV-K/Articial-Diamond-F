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

const CutFilter = ({label, constantData, selectedCutData, setSelectedCutData, handleChangeCutData, isCreateDiamond}) => {
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
                                        <InputLabel id="demo-multiple-checkbox-label">Cut</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            value={selectedCutData}
                                            onChange={(e) => setSelectedCutData(e.target.value)}
                                            input={<OutlinedInput label="Cut"/>}
                                            MenuProps={MenuProps}
                                        >
                                            {Object.keys(constantData?.CUT || {}).map((opt) => (
                                                <MenuItem className=''
                                                          key={opt} value={constantData?.CUT[opt]}>
                                                    <ListItemText primary={opt}/>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> :
                                    Object.keys(constantData?.CUT || {}).map((tag) => (
                                        <Tag.CheckableTag
                                            key={tag}
                                            checked={selectedCutData?.includes(tag)}
                                            onChange={(checked) => handleChangeCutData(tag, checked)}
                                            className={selectedCutData?.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                        >
                                            {constantData?.CUT[tag]}
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

export default CutFilter;
