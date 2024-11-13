import React from 'react';
import {Col, Row} from "antd";
import {
    Box,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";

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

const LocationFilter = ({label, constantData, selectedLocation, onChangeValue, country, setCity, setCountry, isCreateDiamond}) => {
    return (
        <div style={{marginTop: '10px'}}>
            <Row gutter={16}>
                <Col span={3}>
                    <div style={{width: '150px', margin: isCreateDiamond ? '10px' : 0}}>
                        {label}
                    </div>
                </Col>
                <Col span={21}>
                    <div>
                        <Row gutter={16} style={{display: 'flex', alignItems: 'center'}}>
                            <Col span={8} className={''} style={{display: 'flex', gap: '15px', marginLeft: '-8px'}}>
                                {
                                    isCreateDiamond ?
                                        <Box component="form"
                                             sx={{ minWidth: 200, marginTop: '8px' }}
                                             noValidate
                                             autoComplete="off"
                                        >
                                            <TextField
                                                label={'City'}
                                                variant="outlined"
                                                name="city"
                                                onChange={(e) => setCity(e.target.value)}
                                                size='small'
                                                style={{ width: '100%' }}
                                                placeholder='City'
                                            />
                                        </Box> : null
                                }
                                <FormControl sx={{m: 1, width: 200}} size={"small"}>
                                    <InputLabel
                                        id="demo-multiple-checkbox-label">Location</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple={!isCreateDiamond}
                                        value={isCreateDiamond ? country : selectedLocation}
                                        onChange={(event) => isCreateDiamond ? setCountry(event.target.value) : onChangeValue(event, 'selectedLocation')}
                                        input={<OutlinedInput label="Location"/>}
                                        renderValue={(selected) => isCreateDiamond ? selected : selected.join(", ")}
                                        MenuProps={MenuProps}
                                        style={{width: '200px'}}
                                    >
                                        {Object.keys(constantData?.COUNTRY?.CODES || {}).map((opt) => (
                                            isCreateDiamond ?
                                                <MenuItem className='' key={opt} value={constantData?.COUNTRY?.CODES[opt]}>
                                                    <ListItemText primary={constantData?.COUNTRY?.CODES[opt]}/>
                                                </MenuItem> :
                                                <MenuItem className='mui-menu-item' key={opt} value={constantData?.COUNTRY?.CODES[opt]}>
                                                    <Checkbox checked={selectedLocation.indexOf(constantData?.COUNTRY?.CODES[opt]) > -1}/>
                                                    <ListItemText primary={constantData?.COUNTRY?.CODES[opt]}/>
                                                </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Col>
                            {/* <Col span={4}><AntdCheckbox style={{display: 'flex'}}>Only Bid Stones</AntdCheckbox></Col>
                                                    <Col span={4}><AntdCheckbox style={{display: 'flex'}}>Latest Only</AntdCheckbox></Col> */}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LocationFilter;
