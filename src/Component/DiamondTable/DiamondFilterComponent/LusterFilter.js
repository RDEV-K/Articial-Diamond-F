import React from 'react';
import {Col, Row} from "antd";
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";

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

const LusterFilter = ({label, constantData, selectedMilky, onChangeValue, selectedShade, setSelectedMilky, setSelectedShade, isCreateDiamond}) => {
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
                            <Col span={8} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel
                                        id="demo-multiple-checkbox-label">Milky</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple={!isCreateDiamond}
                                        value={selectedMilky}
                                        onChange={(event) => isCreateDiamond ? setSelectedMilky(event.target.value) : onChangeValue(event)}
                                        input={<OutlinedInput label="Milky"/>}
                                        renderValue={(selected) => isCreateDiamond ? selected : selected.join(", ")}
                                        MenuProps={MenuProps}
                                    >
                                        {Object.keys(constantData?.MILKY || {}).map((opt) => (
                                            isCreateDiamond ?
                                            <MenuItem className='' key={opt} value={opt}>
                                                <ListItemText primary={constantData?.MILKY[opt]}/>
                                            </MenuItem> :
                                            <MenuItem className='mui-menu-item' key={opt} value={opt}>
                                                <Checkbox checked={selectedMilky?.indexOf(opt) > -1}/>
                                                <ListItemText primary={constantData?.MILKY[opt]}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={8} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel
                                        id="demo-multiple-checkbox-label">Shade</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple={!isCreateDiamond}
                                        value={isCreateDiamond ? selectedShade : Array.isArray(selectedShade) ? selectedShade : []}
                                        onChange={(event) => isCreateDiamond ? setSelectedShade(event.target.value) : onChangeValue(event)}
                                        input={<OutlinedInput label="Shade"/>}
                                        renderValue={(selected) => isCreateDiamond ? selected : (Array.isArray(selected) ? selected.join(", ") : "")}
                                        MenuProps={MenuProps}
                                    >
                                        {Object.keys(constantData?.SHADE || {}).map((opt) => (
                                            isCreateDiamond ?
                                                <MenuItem className='' key={opt} value={opt}>
                                                    <ListItemText primary={constantData?.SHADE[opt]}/>
                                                </MenuItem> :
                                                <MenuItem className='mui-menu-item' key={opt} value={opt}>
                                                    <Checkbox checked={Array.isArray(selectedShade) && selectedShade?.indexOf(opt) > -1}/>
                                                    <ListItemText primary={constantData?.SHADE[opt]}/>
                                                </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LusterFilter;
