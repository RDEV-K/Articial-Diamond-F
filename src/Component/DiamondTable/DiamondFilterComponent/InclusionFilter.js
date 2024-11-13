import React from 'react';
import {Col, Row} from "antd";
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import {OPEN_INCLUSION_TABLE, BLACK_INCLUSION_CROWN,BLACK_INCLUSION_TABLE,WHITE_INCLUSION_CROWN,OPEN_INCLUSION_CROWN,WHITE_INCLUSION_TABLE,EYECLEAN} from "../../../Constant/constant";

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

const InclusionFilter = ({
    label,
    constantData,
    onChangeValue,
    openInclusionTable,
    openInclusionCrown,
    whiteInclusionTable,
    whiteInclusionCrown,
    blackInclusionTable,
    blackInclusionCrown,
    keyToSymbols,
    eyeClean,
    setOpenInclusionTable,
    setOpenInclusionCrown,
    setWhiteInclusionTable,
    setWhiteInclusionCrown,
    setBlackInclusionTable,
    setBlackInclusionCrown,
    setKeyToSymbols,
    setEyeClean,
    isCreateDiamond
}) => {
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
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Open Inclusion Table</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={openInclusionTable}
                                        onChange={(event) => isCreateDiamond ? setOpenInclusionTable(event.target.value) : onChangeValue(event, 'openInclusionTable')}
                                        input={<OutlinedInput label="Open Inclusion Table"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(OPEN_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={OPEN_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.OPEN_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={constantData?.OPEN_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Open
                                        Inclusion Crown</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={openInclusionCrown}
                                        onChange={(event) => isCreateDiamond ? setOpenInclusionCrown(event.target.value) : onChangeValue(event, 'openInclusionCrown')}
                                        input={<OutlinedInput
                                            label="Open Inclusion Crown"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(OPEN_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={OPEN_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.OPEN_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={constantData?.OPEN_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">White
                                        Inclusion Table</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={whiteInclusionTable}
                                        onChange={(event) => isCreateDiamond ? setWhiteInclusionTable(event.target.value) : onChangeValue(event, 'whiteInclusionTable')}
                                        input={<OutlinedInput
                                            label="White Inclusion Table"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(WHITE_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={WHITE_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.WHITE_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={constantData?.WHITE_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">White
                                        Inclusion Crown</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={whiteInclusionCrown}
                                        onChange={(event) => isCreateDiamond ? setWhiteInclusionCrown(event.target.value) : onChangeValue(event, 'whiteInclusionCrown')}
                                        input={<OutlinedInput
                                            label="White Inclusion Crown"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(WHITE_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={WHITE_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.WHITE_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={constantData?.WHITE_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Black
                                        Inclusion Table</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={blackInclusionTable}
                                        onChange={(event) => isCreateDiamond ? setBlackInclusionTable(event.target.value) : onChangeValue(event, 'blackInclusionTable')}
                                        input={<OutlinedInput
                                            label="Black Inclusion Table"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(BLACK_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={BLACK_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.BLACK_INCLUSION_TABLE || {}).map((opt) => (
                                                    <MenuItem className=''
                                                              key={opt} value={constantData?.BLACK_INCLUSION_TABLE[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Black
                                        Inclusion Crown</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={blackInclusionCrown}
                                        onChange={(event) => isCreateDiamond ? setBlackInclusionCrown(event.target.value) : onChangeValue(event, 'blackInclusionCrown')}
                                        input={<OutlinedInput
                                            label="Black Inclusion Crown"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(BLACK_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={BLACK_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.BLACK_INCLUSION_CROWN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={constantData?.BLACK_INCLUSION_CROWN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Key
                                        To Symbols</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple={!isCreateDiamond}
                                        value={keyToSymbols}
                                        onChange={(event) => isCreateDiamond ? setKeyToSymbols(event.target.value) : onChangeValue(event, 'keyToSymbols')}
                                        input={<OutlinedInput
                                            label="Key To Symbols"/>}
                                        MenuProps={MenuProps}
                                        renderValue={(selected) => isCreateDiamond ? selected : selected.join(", ")}
                                    >
                                        {Object.keys(constantData?.KEY_TO_SYMBOLS || {}).map((opt) => (
                                            isCreateDiamond ?
                                                <MenuItem className='' key={opt} value={opt}>
                                                    <ListItemText primary={constantData?.KEY_TO_SYMBOLS[opt]}/>
                                                </MenuItem> :
                                                <MenuItem className='mui-menu-item' key={opt} value={opt}>
                                                    <Checkbox checked={keyToSymbols.indexOf(opt) > -1}/>
                                                    <ListItemText primary={constantData?.KEY_TO_SYMBOLS[opt]}/>
                                                </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col span={6} className={'mui-form-control'}>
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel id="demo-multiple-checkbox-label">Eye
                                        Clean</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={eyeClean}
                                        onChange={(event) => isCreateDiamond ? setEyeClean(event.target.value) : onChangeValue(event, 'eyeClean')}
                                        input={<OutlinedInput label="Eye Clean"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {
                                            isCreateDiamond ?
                                                Object.keys(EYECLEAN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={EYECLEAN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                )) :
                                                Object.keys(constantData?.EYECLEAN || {}).map((opt) => (
                                                    <MenuItem className='' key={opt} value={constantData?.EYECLEAN[opt]}>
                                                        <ListItemText primary={opt}/>
                                                    </MenuItem>
                                                ))
                                        }
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

export default InclusionFilter;
