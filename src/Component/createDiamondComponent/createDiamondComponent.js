import React, {useState} from "react";
import './style.css';
import ShapeFilter from "../DiamondTable/DiamondFilterComponent/ShapeFilter";
import {ShapeConstant} from "../../Constant/constant";
import SizeFilter from "../DiamondTable/DiamondFilterComponent/SizeFilter";
import ColorFilter from "../DiamondTable/DiamondFilterComponent/ColorFilter";
import ClarityFilter from "../DiamondTable/DiamondFilterComponent/ClarityFilter";
import CutFilter from "../DiamondTable/DiamondFilterComponent/CutFilter";
import PolishFilter from "../DiamondTable/DiamondFilterComponent/PolishFilter";
import SymmetryFilter from "../DiamondTable/DiamondFilterComponent/SymmetryFilter";
import FluorescenceFilter from "../DiamondTable/DiamondFilterComponent/FluorescenceFilter";
import LusterFilter from "../DiamondTable/DiamondFilterComponent/LusterFilter";
import LabFilter from "../DiamondTable/DiamondFilterComponent/LabFilter";
import PricingFilter from "../DiamondTable/DiamondFilterComponent/PricingFilter";
import PercentageFilter from "../DiamondTable/DiamondFilterComponent/PercentageFilter";
import CrownFilter from "../DiamondTable/DiamondFilterComponent/CrownFilter";
import PavilionFilter from "../DiamondTable/DiamondFilterComponent/PavilionFilter";
import MeasurementsFilter from "../DiamondTable/DiamondFilterComponent/MeasurementsFilter";
import InclusionFilter from "../DiamondTable/DiamondFilterComponent/InclusionFilter";
import {Button, message} from "antd";
import {createDiamond} from "../../APIs/api";
import MediaComponent from "../DiamondTable/DiamondFilterComponent/MediaComponent";
import {useNavigate} from "react-router-dom";
import LocationFilter from "../DiamondTable/DiamondFilterComponent/LocationFilter";

const CreateDiamondComponent = () => {
    const navigate = useNavigate();
    let constantData = localStorage.getItem('constantData');
    constantData = JSON.parse(constantData);
    const [selectedShape, setSelectedShape] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [selectedColors, setSelectedColors] = useState();
    const [selectedClarity, setSelectedClarity] = useState();
    const [selectedCutData, setSelectedCutData] = useState();
    const [selectedPolishData, setSelectedPolishData] = useState();
    const [selectedSymmetryData, setSelectedSymmetryData] = useState();
    const [selectedFluorescenceData, setSelectedFluorescenceData] = useState();
    const [selectedMilky, setSelectedMilky] = useState();
    const [selectedShade, setSelectedShade] = useState();
    const [selectedLabData, setSelectedLabData] = useState();
    const [certificateNumber, setCertificateNumber] = useState();
    const [stockNumber, setStockNumber] = useState();
    const [price, setPrice] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [tablePer, setTablePer] = useState();
    const [depthPer, setDepthPer] = useState();
    const [girdleDepthPer, setGirdleDepthPer] = useState();
    const [crownHeight, setCrownHeight] = useState();
    const [crownAngle, setCrownAngle] = useState();
    const [pavillionHeight, setPavillionHeight] = useState();
    const [pavillionAngle, setPavillionAngle] = useState();
    const [length, setLength] = useState();
    const [width, setWidth] = useState();
    const [depth, setDepth] = useState();
    const [openInclusionTable, setOpenInclusionTable] = useState();
    const [openInclusionCrown , setOpenInclusionCrown] = useState();
    const [whiteInclusionTable, setWhiteInclusionTable] = useState();
    const [whiteInclusionCrown, setWhiteInclusionCrown] = useState();
    const [blackInclusionTable, setBlackInclusionTable] = useState();
    const [blackInclusionCrown, setBlackInclusionCrown] = useState();
    const [keyToSymbols, setKeyToSymbols] = useState();
    const [eyeClean, setEyeClean] = useState();
    const [imageURL, setImageURL] = useState();
    const [videoURL, setVideoURL] = useState();
    const [certificateURL, setCertificateURL] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();

    const addDiamond = async () => {
        const data = {
            shape: selectedShape,
            size: selectedSize,
            color: selectedColors,
            clarity: selectedClarity,
            cut: selectedCutData,
            polish: selectedPolishData,
            symmetry: selectedSymmetryData,
            flIntensity: selectedFluorescenceData,
            milky: selectedMilky,
            shade: selectedShade,
            lab: selectedLabData,
            city: city,
            country: country,
            certificateNumber: certificateNumber,
            userStockNumber: stockNumber,
            pricePerCarat: price,
            totalPrice: totalPrice,
            tablePercent: tablePer,
            depthPercent: depthPer,
            girdlePercent: girdleDepthPer,
            crownHeight: crownHeight,
            crownAngle: crownAngle,
            pavilionDepth: pavillionHeight,
            pavilionAngle: pavillionAngle,
            length: length,
            width: width,
            depth: depth,
            openInclusionTable: openInclusionTable,
            openInclusionCrown: openInclusionCrown,
            whiteInclusionTable: whiteInclusionTable,
            whiteInclusionCrown: whiteInclusionCrown,
            blackInclusionTable: blackInclusionTable,
            blackInclusionCrown: blackInclusionCrown,
            keyToSymbols: keyToSymbols,
            eyeClean: eyeClean,
            imageUrl: imageURL,
            videoUrl: videoURL,
            certificateUrl: certificateURL
        }
        await createDiamond(data).then((response) => {
            message.success(response.message)
            navigate('/search');
        }).catch((e) => {
            message.error(e?.response?.data?.error);
        })
    }

    return (
        <div className='create-diamond-container'>
            <div className='create-diamond-content'>
                <h3>Create Diamond</h3>
                <div className='create-diamond-wrapper'>
                    <ShapeFilter
                        label={'Shape'}
                        shapeData={ShapeConstant}
                        selectedShape={selectedShape}
                        setSelectedShape={setSelectedShape}
                        isCreateDiamond={true}
                    />
                    <SizeFilter
                        label={'Size'}
                        constantData={constantData}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        isCreateDiamond={true}
                    />
                    <ColorFilter
                        label={'Color'}
                        constantData={constantData}
                        selectedColors={selectedColors}
                        setSelectedColors={setSelectedColors}
                        isCreateDiamond={true}
                    />
                    <ClarityFilter
                        label={'Clarity'}
                        constantData={constantData}
                        selectedClarity={selectedClarity}
                        setSelectedClarity={setSelectedClarity}
                        isCreateDiamond={true}
                    />
                    <CutFilter
                        label={'Cut'}
                        constantData={constantData}
                        selectedCutData={selectedCutData}
                        setSelectedCutData={setSelectedCutData}
                        isCreateDiamond={true}
                    />
                    <PolishFilter
                        label={'Polish'}
                        constantData={constantData}
                        selectedPolishData={selectedPolishData}
                        setSelectedPolishData={setSelectedPolishData}
                        isCreateDiamond={true}
                    />
                    <SymmetryFilter
                        label={'Symmetry'}
                        constantData={constantData}
                        selectedSymmetryData={selectedSymmetryData}
                        setSelectedSymmetryData={setSelectedSymmetryData}
                        isCreateDiamond={true}
                    />
                    <FluorescenceFilter
                        label={'Fluorescence'}
                        constantData={constantData}
                        selectedFluorescenceData={selectedFluorescenceData}
                        setSelectedFluorescenceData={setSelectedFluorescenceData}
                        isCreateDiamond={true}
                    />
                    <LusterFilter
                        label={''}
                        constantData={constantData}
                        selectedMilky={selectedMilky}
                        selectedShade={selectedShade}
                        setSelectedMilky={setSelectedMilky}
                        setSelectedShade={setSelectedShade}
                        isCreateDiamond={true}
                    />
                    <LabFilter
                        label={'Lab'}
                        constantData={constantData}
                        selectedLabData={selectedLabData}
                        certificateNumber={certificateNumber}
                        stockNumber={stockNumber}
                        setSelectedLabData={setSelectedLabData}
                        setCertificateNumber={setCertificateNumber}
                        setStockNumber={setStockNumber}
                        isCreateDiamond={true}
                    />
                    <LocationFilter
                        label={'Location'}
                        constantData={constantData}
                        country={country}
                        setCity={setCity}
                        setCountry={setCountry}
                        isCreateDiamond={true}
                    />
                    <PricingFilter
                        label={'Pricing'}
                        setPrice={setPrice}
                        setTotalPrice={setTotalPrice}
                        isCreateDiamond={true}
                    />
                    <PercentageFilter
                        label={'Percentage%'}
                        setTablePer={setTablePer}
                        setDepthPer={setDepthPer}
                        setGirdleDepthPer={setGirdleDepthPer}
                        isCreateDiamond={true}
                    />
                    <InclusionFilter
                        label={'Inclusion'}
                        constantData={constantData}
                        openInclusionTable={openInclusionTable}
                        openInclusionCrown={openInclusionCrown}
                        whiteInclusionTable={whiteInclusionTable}
                        whiteInclusionCrown={whiteInclusionCrown}
                        blackInclusionTable={blackInclusionTable}
                        blackInclusionCrown={blackInclusionCrown}
                        keyToSymbols={keyToSymbols}
                        eyeClean={eyeClean}
                        setOpenInclusionTable={setOpenInclusionTable}
                        setOpenInclusionCrown={setOpenInclusionCrown}
                        setWhiteInclusionTable={setWhiteInclusionTable}
                        setWhiteInclusionCrown={setWhiteInclusionCrown}
                        setBlackInclusionTable={setBlackInclusionTable}
                        setBlackInclusionCrown={setBlackInclusionCrown}
                        setKeyToSymbols={setKeyToSymbols}
                        setEyeClean={setEyeClean}
                        isCreateDiamond={true}
                    />
                    <CrownFilter
                        label={'Crown'}
                        setCrownHeight={setCrownHeight}
                        setCrownAngle={setCrownAngle}
                        isCreateDiamond={true}
                    />
                    <PavilionFilter
                        label={'Pavilion'}
                        setPavillionHeight={setPavillionHeight}
                        setPavillionAngle={setPavillionAngle}
                        isCreateDiamond={true}
                    />
                    <MeasurementsFilter
                        label={'Measurements'}
                        setLength={setLength}
                        setWidth={setWidth}
                        setDepth={setDepth}
                        isCreateDiamond={true}
                    />
                    <MediaComponent
                        label={'Media'}
                        setImageURL={setImageURL}
                        setVideoURL={setVideoURL}
                        setCertificateURL={setCertificateURL}
                    />
                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <Button style={{backgroundColor: '#000', color: '#fff'}}
                                onClick={addDiamond}>Create Diamond</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateDiamondComponent;
