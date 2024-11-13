import React, { useState } from 'react';
import { Modal, Row, Col, Checkbox, Divider, message } from 'antd';
import './style.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ListItemText, OutlinedInput, TextField } from '@mui/material';
import { editDiamond } from '../../APIs/api';
import './style.css';

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

const EditDiamondDetailModal = ({ isShowEditDiamondModal, closeEditDiamondModal, constantData, keyToSymbols, shapeData, particularDiamond, setTotalCount, setDiamondData, setIsLoaderVisible, getSearchedDiamond }) => {
    const [diamondShape, setDiamondShape] = useState('');
    const [dimaondSize, setDimaondSize] = useState('');
    const [dimaondColor, setDimaondColor] = useState('');
    const [dimaondClirity, setDimaondClirity] = useState('');
    const [dimaondCut, setDimaondCut] = useState('');
    const [dimaondPolish, setDimaondPolish] = useState('');
    const [dimaondSymmetry, setDimaondSymmetry] = useState(''); //Fluorescence
    const [dimaondFluorescence, setDimaondFluorescence] = useState('');
    const [dimaondMilky, setDimaondMilky] = useState('');
    const [dimaondShade, setDimaondShade] = useState('');
    const [dimaondLab, setDimaondLab] = useState('');
    const [dimaondLocation, setDimaondLocation] = useState('');
    const [dimaondPricePerCarat, setDimaondPricePerCarat] = useState('');
    const [dimaondTotalPrice, setDimaondTotalPrice] = useState('');
    const [dimaondTablePercentage, setDimaondTablePercentage] = useState('');
    const [dimaondTableDepth, setDimaondTableDepth] = useState('');
    const [dimaondTableGirdle, setDimaondTableGirdle] = useState('');
    const [dimaondOpenInclusionTable, setDimaondOpenInclusionTable] = useState('');
    const [dimaondOpenInclusionCrown, setDimaondOpenInclusionCrown] = useState('');
    const [dimaondWhiteInclusionTable, setDimaondWhiteInclusionTable] = useState('');
    const [dimaondWhiteInclusionCrown, setDimaondWhiteInclusionCrown] = useState('');
    const [dimaondBlackInclusionTable, setDimaondBlackInclusionTable] = useState('');
    const [dimaondBlackInclusionCrown, setDimaondBlackInclusionCrown] = useState('');
    const [dimaondKeyToSymbol, setDimaondKeyToSymbol] = useState('');
    const [dimaondEyeClean, setDimaondEyeClean] = useState('');
    const [dimaondCrownHeight, setDimaondCrownHeight] = useState('');
    const [dimaondCrownAngle, setDimaondCrownAngle] = useState('');
    const [dimaondPavilionDepth, setDimaondPavilionDepth] = useState('');
    const [dimaondPavilionAngle, setDimaondPavilionAngle] = useState('');
    const [dimaondLength, setDimaondLength] = useState('');
    const [dimaondWidth, setDimaondWidth] = useState('');
    const [dimaondDepth, setDimaondDepth] = useState('');
    const [labCertificateNumber, setLabCertificateNumber] = useState('');
    const [userStockNumber, setUserStockNumber] = useState('');
    const [userStockNumber2, setUserStockNumber2] = useState('');
    const [dimaondRatio, setDimaondRatio] = useState('');
    const [dimaondFlColor, setDimaondFlColor] = useState('');
    const [dimaondCuletCondition, setDimaondCuletCondition] = useState('');
    const [dimaondCuletSize, setDimaondCuletSize] = useState('');
    const [dimaondGirdleMin, setDimaondGirdleMin] = useState('');
    const [dimaondGirdleMax, setDimaondGirdleMax] = useState('');
    const [dimaondGirdleCondition, setDimaondGirdleCondition] = useState('');
    const [dimaondStarLength, setDimaondStarLength] = useState('');
    const [dimaondHNA, setDimaondHNA] = useState('');
    const [dimaondRoughOrigin, setDimaondRoughOrigin] = useState('');
    const [dimaondComment, setDimaondComment] = useState('');
    const [dimaondCity, setDimaondCity] = useState('');
    const [dimaondState, setDimaondState] = useState('');
    const [certificateURL, setCertificateURL] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [videoURL, setVideoURL] = useState('');

    function removeNullValue(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
                delete obj[propName];
            }
        }
        return obj
    }

    const onValueChange = (value, updatebaleState) => {
        updatebaleState(value)
    }

    const editParticularDiamond = async () => {
        const data = {
            shape: diamondShape,
            size: dimaondSize,
            color: dimaondColor,
            clirity: dimaondClirity,
            cut: dimaondCut,
            polish: dimaondPolish,
            symmetry: dimaondSymmetry,
            flIntensity: dimaondFluorescence,
            milky: dimaondMilky, //Skus table
            shade: dimaondShade,
            lab: dimaondLab,
            country: dimaondLocation, //Skus table
            pricePerCarat: dimaondPricePerCarat, // Skus table
            totalPrice: dimaondTotalPrice, // Skus table
            tablePercent: dimaondTablePercentage,
            tableDepth: dimaondTableDepth,
            tableGirdle: dimaondTableGirdle,
            openInclusionTable: dimaondOpenInclusionTable,
            openInclusionCrown: dimaondOpenInclusionCrown,
            whiteInclusionTable: dimaondWhiteInclusionTable,
            whiteInclusionCrown: dimaondWhiteInclusionCrown,
            blackInclusionTable: dimaondBlackInclusionTable,
            blackInclusionCrown: dimaondBlackInclusionCrown,
            keyToSymbols: dimaondKeyToSymbol,
            eyeClean: dimaondEyeClean,
            crownHeight: dimaondCrownHeight,
            crownAngle: dimaondCrownAngle,
            pavilionDepth: dimaondPavilionDepth,
            pavilionAngle: dimaondPavilionAngle,
            length: dimaondLength,
            width: dimaondWidth,
            depth: dimaondDepth,
            certificateURL: certificateURL,
            imageURL: imageURL,
            videoURL: videoURL
        }
        const newData = removeNullValue(data)
        await editDiamond(newData, particularDiamond?.id).then((response) => {
            setTotalCount(response?.count)
            setDiamondData(response.data)
            setIsLoaderVisible(false)
            closeEditDiamondModal();
            getSearchedDiamond();
        }).catch((e) => {
            message.error(e?.response?.data?.error);
            setIsLoaderVisible(false)
        })
    }

    return (
        <div>
            <Modal
                className={'dimond-detail-modal'}
                title={'Edit Diamond Detail'}
                open={isShowEditDiamondModal}
                onCancel={closeEditDiamondModal}
                okText={'Edit'}
                onOk={editParticularDiamond}
            >
                {
                    particularDiamond ?
                        <div style={{ display: 'flex', flexFlow: 'column', gap: '20px', margin: '30px 0' }}>
                            <div style={{ fontSize: '16px', fontWeight: 500 }}>Basic Information</div>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Certificate Number"
                                            variant="outlined"
                                            name="certificateNumber"
                                            value={labCertificateNumber ? labCertificateNumber : particularDiamond?.certificateNumber}
                                            onChange={(e) => onValueChange(e.target.value, setLabCertificateNumber)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="User Stock Number"
                                            variant="outlined"
                                            name="userStockNumber"
                                            value={userStockNumber ? userStockNumber : particularDiamond?.Sku?.userStockNumber}
                                            onChange={(e) => onValueChange(e.target.value, setUserStockNumber)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="User Stock Number2"
                                            variant="outlined"
                                            name="userStockNumber2"
                                            value={userStockNumber2 ? userStockNumber2 : particularDiamond?.Sku?.userStockNumber2}
                                            onChange={(e) => onValueChange(e.target.value, setUserStockNumber2)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Shape</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={diamondShape ? diamondShape : particularDiamond?.shape}
                                                label="Shape"
                                                // onChange={(e) => onShapeChange(e)}
                                                onChange={(e) => onValueChange(e.target.value, setDiamondShape)}
                                            >
                                                {
                                                    shapeData.map((opt) => {
                                                        return (
                                                            <MenuItem
                                                                value={opt.diamondValue}>{opt.diamondName}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Size"
                                            variant="outlined"
                                            name="pricePerCarat"
                                            value={dimaondSize ? dimaondSize : particularDiamond?.size}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondSize)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                        {/* </FormControl> */}
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondColor ? dimaondColor : particularDiamond?.color}
                                                label="Color"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondColor)}
                                            >
                                                {
                                                    Object.keys(constantData?.COLOR.CODES || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Clarity</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondClirity ? dimaondClirity : particularDiamond?.clarity}
                                                label="Clarity"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondClirity)}
                                            >
                                                {
                                                    Object.keys(constantData?.CLARITY || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Cut</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondCut ? dimaondCut : particularDiamond?.cut}
                                                label="Cut"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondCut)}
                                            >
                                                {
                                                    Object.keys(constantData?.CUT || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Lab</InputLabel>
                                            <Select
                                                id="demo-simple-select"
                                                value={dimaondLab ? dimaondLab : particularDiamond?.lab}
                                                label="Lab"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondLab)}
                                            >
                                                {
                                                    Object.keys(constantData?.LAB || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondLocation ? dimaondLocation : particularDiamond?.Sku?.country}
                                                label="Location"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondLocation)}
                                            >
                                                {
                                                    Object.keys(constantData?.COUNTRY.CODES || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Fl Color</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondFlColor ? dimaondFlColor : particularDiamond?.flColor}
                                                label="flColor"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondFlColor)}
                                            >
                                                {
                                                    Object.keys(constantData?.FANCY_COLOR || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Rough Origin"
                                            variant="outlined"
                                            name="roughOrigin"
                                            value={dimaondRoughOrigin ? dimaondRoughOrigin : particularDiamond?.roughOrigin}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondRoughOrigin)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Comment"
                                            variant="outlined"
                                            name="comment"
                                            value={dimaondComment ? dimaondComment : particularDiamond?.Sku?.comment}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondComment)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="City"
                                            variant="outlined"
                                            name="city"
                                            value={dimaondCity ? dimaondCity : particularDiamond?.Sku?.city}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondCity)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={4}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="State"
                                            variant="outlined"
                                            name="state"
                                            value={dimaondState ? dimaondState : particularDiamond?.Sku?.state}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondState)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />

                            <div style={{ fontSize: '16px', fontWeight: 500 }}>Cut Quality</div>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Table Percentage"
                                                    variant="outlined"
                                                    name="tablePercentage"
                                                    value={dimaondTablePercentage ? dimaondTablePercentage : particularDiamond?.tablePercent}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondTablePercentage)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={8}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Table Depth"
                                                    variant="outlined"
                                                    name="tableDepth"
                                                    value={dimaondTableDepth ? dimaondTableDepth : particularDiamond?.depthPercent}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondTableDepth)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={8}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Table Girdle"
                                                    variant="outlined"
                                                    name="tableGirdle"
                                                    value={dimaondTableGirdle ? dimaondTableGirdle : particularDiamond?.girdlePercent}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondTableGirdle)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Crown Height"
                                                    variant="outlined"
                                                    name="crownHeight"
                                                    value={dimaondCrownHeight ? dimaondCrownHeight : particularDiamond?.crownHeight}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondCrownHeight)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Crown Angle"
                                                    variant="outlined"
                                                    name="crownAngle"
                                                    value={dimaondCrownAngle ? dimaondCrownAngle : particularDiamond?.crownAngle}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondCrownAngle)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Pavilion Depth"
                                                    variant="outlined"
                                                    name="pavilionDepth"
                                                    value={dimaondPavilionDepth ? dimaondPavilionDepth : particularDiamond?.pavilionDepth}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondPavilionDepth)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Pavilion Angle"
                                                    variant="outlined"
                                                    name="pavilionAngle"
                                                    value={dimaondPavilionAngle ? dimaondPavilionAngle : particularDiamond?.pavilionAngle}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondPavilionAngle)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Polish</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondPolish ? dimaondPolish : particularDiamond?.polish}
                                                label="Polish"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondPolish)}
                                            >
                                                {
                                                    Object.keys(constantData?.POLISH || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Symmetry</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondSymmetry ? dimaondSymmetry : particularDiamond?.symmetry}
                                                label="Symmetry"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondSymmetry)}
                                            >
                                                {
                                                    Object.keys(constantData?.SYMMETRY || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Star Length"
                                            variant="outlined"
                                            name="starLength"
                                            value={dimaondStarLength ? dimaondStarLength : particularDiamond?.starLength}
                                            onChange={(e) => onValueChange(e.target.value, setDimaondStarLength)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">HNA</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondHNA ? dimaondHNA : particularDiamond?.hna}
                                                label="hna"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondHNA)}
                                            >
                                                {
                                                    Object.keys(constantData?.HNA || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />


                            <Row gutter={16}>
                                <Col span={12}>
                                    <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Measurements</div>
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Length"
                                                    variant="outlined"
                                                    name="length"
                                                    value={dimaondLength ? dimaondLength : particularDiamond?.length}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondLength)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={6}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Width"
                                                    variant="outlined"
                                                    name="width"
                                                    value={dimaondWidth ? dimaondWidth : particularDiamond?.width}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondWidth)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={6}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Depth"
                                                    variant="outlined"
                                                    name="depth"
                                                    value={dimaondDepth ? dimaondDepth : particularDiamond?.depth}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondDepth)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={6}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Ratio"
                                                    variant="outlined"
                                                    name="ratio"
                                                    value={dimaondRatio ? dimaondRatio : particularDiamond?.ratio}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondRatio)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Price Details</div>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Price($)/CRT"
                                                    variant="outlined"
                                                    name="pricePerCarat"
                                                    value={dimaondPricePerCarat ? dimaondPricePerCarat : particularDiamond?.Sku?.pricePerCarat}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondPricePerCarat)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Total Price($)"
                                                    variant="outlined"
                                                    name="totalPrice"
                                                    value={dimaondTotalPrice ? dimaondTotalPrice : particularDiamond?.Sku?.totalPrice}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondTotalPrice)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />

                            <Row gutter={16}>
                                <Col span={12}>
                                    <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Girdle Details</div>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth size='small'>
                                                    <InputLabel id="demo-simple-select-label">Girdle Min</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={dimaondGirdleMin ? dimaondGirdleMin : particularDiamond?.girdleMin}
                                                        label="girdleMin"
                                                        onChange={(e) => onValueChange(e.target.value, setDimaondGirdleMin)}
                                                    >
                                                        {
                                                            Object.keys(constantData?.GIRDLE_MINMAX || {}).map((opt) => {
                                                                return (
                                                                    <MenuItem value={opt}>{opt}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Col>
                                        <Col span={8}>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth size='small'>
                                                    <InputLabel id="demo-simple-select-label">Girdle Max</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={dimaondGirdleMax ? dimaondGirdleMax : particularDiamond?.girdleMax}
                                                        label="girdleMax"
                                                        onChange={(e) => onValueChange(e.target.value, setDimaondGirdleMax)}
                                                    >
                                                        {
                                                            Object.keys(constantData?.GIRDLE_MINMAX || {}).map((opt) => {
                                                                return (
                                                                    <MenuItem value={opt}>{opt}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Col>
                                        <Col span={8}>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth size='small'>
                                                    <InputLabel id="demo-simple-select-label">Girdle Condition</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={dimaondGirdleCondition ? dimaondGirdleCondition : particularDiamond?.girdleCondition}
                                                        label="girdleCondition"
                                                        onChange={(e) => onValueChange(e.target.value, setDimaondGirdleCondition)}
                                                    >
                                                        {
                                                            Object.keys(constantData?.GIRDLE_CONDITION || {}).map((opt) => {
                                                                return (
                                                                    <MenuItem value={opt}>{opt}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Culet Details</div>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth size='small'>
                                                    <InputLabel id="demo-simple-select-label">Culet Condition</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={dimaondCuletCondition ? dimaondCuletCondition : particularDiamond?.culetCondition}
                                                        label="culetCondition"
                                                        onChange={(e) => onValueChange(e.target.value, setDimaondCuletCondition)}
                                                    >
                                                        {
                                                            Object.keys(constantData?.FANCY_COLOR || {}).map((opt) => {
                                                                return (
                                                                    <MenuItem value={opt}>{opt}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Col>
                                        <Col span={12}>
                                            <Box component="form"
                                                sx={{ minWidth: 120 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    label="Culet Size"
                                                    variant="outlined"
                                                    name="culetSize"
                                                    value={dimaondCuletSize ? dimaondCuletSize : particularDiamond?.culetSize}
                                                    onChange={(e) => onValueChange(e.target.value, setDimaondCuletSize)}
                                                    size='small'
                                                    style={{ width: '100%' }}
                                                />
                                            </Box>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />

                            <div style={{ fontSize: '16px', fontWeight: 500 }}>Inclusions and Blemishes</div>
                            <Row gutter={16}>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Open Table</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondOpenInclusionTable ? dimaondOpenInclusionTable : particularDiamond?.openInclusionTable}
                                                label="Open Table"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondOpenInclusionTable)}
                                            >
                                                {
                                                    Object.keys(constantData?.OPEN_INCLUSION_TABLE || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Open Crown</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondOpenInclusionCrown ? dimaondOpenInclusionCrown : particularDiamond?.openInclusionCrown}
                                                label="Open Crown"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondOpenInclusionCrown)}
                                            >
                                                {
                                                    Object.keys(constantData?.OPEN_INCLUSION_CROWN || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">White Table</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondWhiteInclusionTable ? dimaondWhiteInclusionTable : particularDiamond?.whiteInclusionTable}
                                                label="White Table"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondWhiteInclusionTable)}
                                            >
                                                {
                                                    Object.keys(constantData?.WHITE_INCLUSION_TABLE || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">White Crown</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondWhiteInclusionCrown ? dimaondWhiteInclusionCrown : particularDiamond?.whiteInclusionCrown}
                                                label="White Crown"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondWhiteInclusionCrown)}
                                            >
                                                {
                                                    Object.keys(constantData?.WHITE_INCLUSION_CROWN || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Black Table</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondBlackInclusionTable ? dimaondBlackInclusionTable : particularDiamond?.blackInclusionTable}
                                                label="Black Table"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondBlackInclusionTable)}
                                            >
                                                {
                                                    Object.keys(constantData?.BLACK_INCLUSION_TABLE || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Black Crown</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondBlackInclusionCrown ? dimaondBlackInclusionCrown : particularDiamond?.blackInclusionCrown}
                                                label="Black Crown"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondBlackInclusionCrown)}
                                            >
                                                {
                                                    Object.keys(constantData?.BLACK_INCLUSION_CROWN || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={6}>
                                    <Box sx={{ minWidth: 120 }} className='edit-key-to-symbols'>
                                        <FormControl sx={{ m: 1, width: 200 }} size={"small"}>
                                            <InputLabel id="demo-multiple-checkbox-label">Key To Symbols</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={dimaondKeyToSymbol ? dimaondKeyToSymbol : particularDiamond?.keyToSymbols ? JSON.parse(particularDiamond.keyToSymbols) : []}
                                                onChange={(e) => onValueChange(e.target.value, setDimaondKeyToSymbol)}
                                                input={<OutlinedInput label="Key To Symbols" />}
                                                renderValue={(selected) => selected.join(", ")}
                                                MenuProps={MenuProps}
                                                style={{ width: '100%' }}
                                            >
                                                {Object.keys(constantData?.KEY_TO_SYMBOLS || {}).map((opt) => (
                                                    <MenuItem className='mui-menu-item'
                                                        key={opt} value={opt}>
                                                        <Checkbox
                                                            checked={dimaondKeyToSymbol ? dimaondKeyToSymbol?.indexOf(opt) > -1 : particularDiamond.keyToSymbols ? JSON.parse(particularDiamond.keyToSymbols)?.indexOf(constantData?.KEY_TO_SYMBOLS[opt]) > -1 : false} />
                                                        <ListItemText
                                                            primary={constantData?.KEY_TO_SYMBOLS[opt]} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />

                            <div style={{ fontSize: '16px', fontWeight: 500 }}>Other Characteristics</div>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Fluorescence</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondFluorescence ? dimaondFluorescence : particularDiamond?.flIntensity}
                                                label="Fluorescence"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondFluorescence)}
                                            >
                                                {
                                                    Object.keys(constantData?.FL_INTENSITY || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={6}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Milky</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondMilky ? dimaondMilky : particularDiamond?.Sku?.milky}
                                                label="Milky"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondMilky)}
                                            >
                                                {
                                                    Object.keys(constantData?.MILKY || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={6}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Shade</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondShade ? dimaondShade : particularDiamond?.shade}
                                                label="Shade"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondShade)}
                                            >
                                                {
                                                    Object.keys(constantData?.SHADE || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                                <Col span={6}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="demo-simple-select-label">Eye Clean</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dimaondEyeClean ? dimaondEyeClean : particularDiamond?.eyeClean}
                                                label="Eye Clean"
                                                onChange={(e) => onValueChange(e.target.value, setDimaondEyeClean)}
                                            >
                                                {
                                                    Object.keys(constantData?.EYE_CLEAN || {}).map((opt) => {
                                                        return (
                                                            <MenuItem value={opt}>{opt}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                            </Row>

                            <Divider style={{ margin: '10px 0' }} />

                            <div style={{ fontSize: '16px', fontWeight: 500 }}>Media</div>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Certificate URL"
                                            variant="outlined"
                                            name="certificateURL"
                                            value={certificateURL ? certificateURL : particularDiamond?.Sku?.certificateUrl}
                                            onChange={(e) => onValueChange(e.target.value, setCertificateURL)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Image URL"
                                            variant="outlined"
                                            name="imageURL"
                                            value={imageURL ? imageURL : particularDiamond?.Sku?.imageUrl}
                                            onChange={(e) => onValueChange(e.target.value, setImageURL)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                                <Col span={8}>
                                    <Box component="form"
                                        sx={{ minWidth: 120 }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Video URL"
                                            variant="outlined"
                                            name="videoURL"
                                            value={videoURL ? videoURL : particularDiamond?.Sku?.videoUrl}
                                            onChange={(e) => onValueChange(e.target.value, setVideoURL)}
                                            size='small'
                                            style={{ width: '100%' }}
                                        />
                                    </Box>
                                </Col>
                            </Row>
                        </div> : null
                }
            </Modal>
        </div>
    );
};

export default EditDiamondDetailModal;
