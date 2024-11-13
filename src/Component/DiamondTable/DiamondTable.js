import React, {useEffect, useRef, useState} from 'react';
import {
    Button,
    Card,
    Dropdown,
    ConfigProvider,
    Menu,
    Spin,
    Table,
    Input,
    message,
    Modal,
    Tree, Tabs,
} from 'antd';
import { getInventoryDiamond, getParticularDiamond, serachDiamond, serachDiamondWithLogin, uploadFile, deleteParticularDiamond } from '../../APIs/api';
import './style.css';
import Certificate from "../../assets/Images/Certificate.png";
import Image from "../../assets/Images/Image.png";
import Video from "../../assets/Images/Video.png";
import Filter from "../../assets/Images/filter.png";
import blueFilter from "../../assets/Images/blue-filter.png";
import DiamondImage from "../../assets/Images/DiamondImage.svg";
import MeleeDiamond from "../../assets/Images/MeleeDiamond.svg";
import SizeAbove20 from "../../assets/Images/SizeAbove20.svg";
import MatchingPairs from "../../assets/Images/MatchingPairs.svg";
import ColoredDiamond from "../../assets/Images/ColoredDiamond.svg";
import Jewelry from "../../assets/Images/Jewelry.svg";
import './style.css';
import DiamondDetailModal from "../DiamondDetailModal/DiamondDetailModal";
import enUS from 'antd/lib/locale/en_US';
import { useDropzone } from "react-dropzone";
import {UploadOutlined, BarsOutlined} from "@ant-design/icons";
import ShapeFilter from "./DiamondFilterComponent/ShapeFilter";
import SizeFilter from "./DiamondFilterComponent/SizeFilter";
import ColorFilter from "./DiamondFilterComponent/ColorFilter";
import ClarityFilter from "./DiamondFilterComponent/ClarityFilter";
// import SpecialFilter from "./DiamondFilterComponent/SpecialFilter";
import CutFilter from "./DiamondFilterComponent/CutFilter";
import PolishFilter from "./DiamondFilterComponent/PolishFilter";
import SymmetryFilter from "./DiamondFilterComponent/SymmetryFilter";
import FluorescenceFilter from "./DiamondFilterComponent/FluorescenceFilter";
import LusterFilter from "./DiamondFilterComponent/LusterFilter";
import LabFilter from "./DiamondFilterComponent/LabFilter";
import LocationFilter from "./DiamondFilterComponent/LocationFilter";
import PricingFilter from "./DiamondFilterComponent/PricingFilter";
import PercentageFilter from "./DiamondFilterComponent/PercentageFilter";
import InclusionFilter from "./DiamondFilterComponent/InclusionFilter";
import CrownFilter from "./DiamondFilterComponent/CrownFilter";
import PavilionFilter from "./DiamondFilterComponent/PavilionFilter";
import MeasurementsFilter from "./DiamondFilterComponent/MeasurementsFilter";
import EditDiamondDetailModal from '../EditDiamondDetailModal/EditDiamondDetailModal';
import { SizeConstant, ShapeConstant } from '../../Constant/constant';
import UploadModal from "../UploadModal/UploadModal";
import {useNavigate} from "react-router-dom";

const { TabPane } = Tabs;

const DiamondTable = () => {
    const urlPath = window.location.pathname === '/privacy-policy' || window.location.pathname === '/terms-and-conditions' || window.location.pathname === '/need-help';
    const navigate = useNavigate();
    const { confirm } = Modal;
    const token = localStorage.getItem('token');
    const activeKey = localStorage.getItem('activeKey');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [pageSize, setPageSize] = useState(50);
    const [current, setCurrent] = useState();
    let constantData = localStorage.getItem('constantData');
    constantData = JSON.parse(constantData);
    const [diamondData, setDiamondData] = useState();
    const [totalCount, setTotalCount] = useState();
    const [selectedShape, setSelectedShape] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [startSizeRange, setStartSizeRange] = useState(null);
    const [selectedColors, setSelectedColors] = useState([]);
    const [startColorRange, setStartColorRange] = useState(null);
    const [selectedClarity, setSelectedClarity] = useState([]);
    const [startClarityRange, setStartClarityRange] = useState(null);
    // const [selectedSpecialData, setSelectedSpecialData] = useState([]);
    const [selectedCutData, setSelectedCutData] = useState([]);
    const [startCutRange, setStartCutRange] = useState(null);
    const [selectedPolishData, setSelectedPolishData] = useState([]);
    const [startPolishRange, setStartPolishRange] = useState(null);
    const [selectedSymmetryData, setSelectedSymmetryData] = useState([]);
    const [startSymmetryRange, setStartSymmetryRange] = useState(null);
    const [selectedFluorescenceData, setSelectedFluorescenceData] = useState([]);
    const [startFluorescenceRange, setStartFluorescenceRange] = useState(null);
    const [selectedLabData, setSelectedLabData] = useState([]);
    const [startLabRange, setStartLabRange] = useState(null);
    const [isShowAdvanceSearch, setIsShowAdvanceSearch] = useState(false);
    const [isHideAdvanceSearch, setIsHideAdvanceSearch] = useState(true);
    const [selectedShade, setSelectedShade] = useState([]);
    const [selectedMilky, setSelectedMilky] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [openInclusionTable, setOpenInclusionTable] = useState();
    const [openInclusionCrown, setOpenInclusionCrown] = useState();
    const [whiteInclusionTable, setWhiteInclusionTable] = useState();
    const [whiteInclusionCrown, setWhiteInclusionCrown] = useState();
    const [blackInclusionTable, setBlackInclusionTable] = useState();
    const [blackInclusionCrown, setBlackInclusionCrown] = useState();
    const [keyToSymbols, setKeyToSymbols] = useState([]);
    const [eyeClean, setEyeClean] = useState();
    const [otherParams, setOtherParams] = useState({});
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [particularDiamond, setParticularDiamond] = useState();
    const [isShowDiamondDetail, setIsShowDiamondDetail] = useState(false);
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [isShowEditDiamondModal, setIsShowEditDiamondModal] = useState(false);
    const [deleteDiamondsLength, setDeleteDiamondsLength] = useState([]);
    const [searchedCertificate, setSearchedCertificate] = useState('');
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');
    const [fromTotal, setFromTotal] = useState('');
    const [toTotal, setToTotal] = useState('');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [totalFrom, setTotalFrom] = useState('');
    const [totalTo, setTotalTo] = useState('');
    const [searchedUsername, setSearchedUsername] = useState('');
    const [allUsername, setAllUsername] = useState('');
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [sizeFilter, setSizeFilter] = useState([]);
    const treeSelectRef = useRef(null);
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
    const [activeTab, setActiveTab] = useState(urlPath ? '' : localStorage.getItem('activeKey') || 'ABOVE20')
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        setAllUsername('')
    }, [allUsername])

    const redirectToLogin = () => {
        navigate("/login");
    }

    const closeFilterModal = () => {
        setIsShowFilter(false)
    }

    const closeEditDiamondModal = () => {
        setIsShowEditDiamondModal(false)
    }

    const closeUploadModal = () => {
        setIsOpenUploadModal(false)
    }

    const [allColumnFilter, setAllColumnFilter] = useState({});

    const handleFieldChange = (fieldName, e) => {
        setOtherParams(prevValues => ({
            ...prevValues,
            [fieldName]: e.target.value
        }));
    };

    const fetchParticularDiamondDetail = async (record, detail) => {
        
        setIsLoaderVisible(true)
        await getParticularDiamond(record?.id).then((response) => {
            setParticularDiamond(response);
            if (detail === 'VIEW') {
                setIsShowDiamondDetail(true);
            } else {
                setIsShowEditDiamondModal(true);
            }
            setIsLoaderVisible(false)
        }).catch((e) => {
            if (e?.response?.data?.statusCode === 401) {
                localStorage.clear();
                window.location.reload();
            }
            message.error(e?.response?.data?.error);
            setIsLoaderVisible(false)
        })
        setIsLoaderVisible(false)
    }

    const closeDiamondModal = () => {
        setIsShowDiamondDetail(false);
    }

    const clearFilter = () => {
        setSelectedLocation([])
        setSelectedShape([])
        setSelectedSize([])
        setSelectedColors([])
        setSelectedClarity([])
        setSelectedCutData([])
        setSelectedPolishData([])
        setSelectedSymmetryData([])
        setSelectedFluorescenceData([])
        setSelectedLabData([])
        setAllColumnFilter({})
        setSearchedUsername('')
        setSearchedCertificate('')
        setIsFilterApplied(false)
        setSizeFilter([])
    }

    const hideShowFilter = () => {
        setIsShowFilter(!isShowFilter)
    }
    const handleChangeShape = (tag, checked) => {
        const nextSelectedShape = checked
            ? [...selectedShape, tag]
            : selectedShape.filter((t) => t !== tag);
        setSelectedShape(nextSelectedShape);
    };

    const handleChangeSize = (tag, checked) => {
        let nextSelectedTags;

        if (startSizeRange) {
            const startIndex = Object.keys(constantData?.SIZE || {}).indexOf(startSizeRange);
            const endIndex = Object.keys(constantData?.SIZE || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.SIZE || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedSize, ...rangeTags]))
                : selectedSize.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedSize, tag]
                : selectedSize.filter((t) => t !== tag);
            setStartSizeRange(tag);
        }
        setSelectedSize(nextSelectedTags);
    };

    const handleChangeColor = (tag, checked) => {
        let nextSelectedTags;

        if (startColorRange) {
            const startIndex = Object.keys(constantData?.COLOR?.CODES || {}).indexOf(startColorRange);
            const endIndex = Object.keys(constantData?.COLOR?.CODES || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.COLOR?.CODES || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedColors, ...rangeTags]))
                : selectedColors.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedColors, tag]
                : selectedColors.filter((t) => t !== tag);
            setStartColorRange(tag);
        }
        setSelectedColors(nextSelectedTags);
    };

    const handleChangeClarity = (tag, checked) => {
        let nextSelectedTags;

        if (startClarityRange) {
            const startIndex = Object.keys(constantData?.CLARITY || {}).indexOf(startClarityRange);
            const endIndex = Object.keys(constantData?.CLARITY || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.CLARITY || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedClarity, ...rangeTags]))
                : selectedClarity.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedClarity, tag]
                : selectedClarity.filter((t) => t !== tag);
            setStartClarityRange(tag);
        }
        setSelectedClarity(nextSelectedTags);
    };

    // const handleChangeSpecialData = (tag, checked) => {
    //     const nextSelectedSpecialData = checked
    //         ? [...selectedSpecialData, tag]
    //         : selectedSpecialData.filter((t) => t !== tag);
    //     setSelectedSpecialData(nextSelectedSpecialData);
    // };

    const handleChangeCutData = (tag, checked) => {
        let nextSelectedTags;

        if (startCutRange) {
            const startIndex = Object.keys(constantData?.CUT || {}).indexOf(startCutRange);
            const endIndex = Object.keys(constantData?.CUT || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.CUT || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedCutData, ...rangeTags]))
                : selectedCutData.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedCutData, tag]
                : selectedCutData.filter((t) => t !== tag);
            setStartCutRange(tag);
        }
        setSelectedCutData(nextSelectedTags);
    };

    const handleChangePolishData = (tag, checked) => {
        let nextSelectedTags;

        if (startPolishRange) {
            const startIndex = Object.keys(constantData?.POLISH || {}).indexOf(startPolishRange);
            const endIndex = Object.keys(constantData?.POLISH || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.POLISH || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedPolishData, ...rangeTags]))
                : selectedPolishData.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedPolishData, tag]
                : selectedPolishData.filter((t) => t !== tag);
            setStartPolishRange(tag);
        }
        setSelectedPolishData(nextSelectedTags);
    };

    const handleChangeSymmetryData = (tag, checked) => {
        let nextSelectedTags;

        if (startSymmetryRange) {
            const startIndex = Object.keys(constantData?.SYMMETRY || {}).indexOf(startSymmetryRange);
            const endIndex = Object.keys(constantData?.SYMMETRY || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.SYMMETRY || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedSymmetryData, ...rangeTags]))
                : selectedSymmetryData.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedSymmetryData, tag]
                : selectedSymmetryData.filter((t) => t !== tag);
            setStartSymmetryRange(tag);
        }
        setSelectedSymmetryData(nextSelectedTags);
    };

    const handleChangeFluorescenceData = (tag, checked) => {
        let nextSelectedTags;

        if (startFluorescenceRange) {
            const startIndex = Object.keys(constantData?.FL_INTENSITY || {}).indexOf(startFluorescenceRange);
            const endIndex = Object.keys(constantData?.FL_INTENSITY || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.FL_INTENSITY || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedFluorescenceData, ...rangeTags]))
                : selectedFluorescenceData.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedFluorescenceData, tag]
                : selectedFluorescenceData.filter((t) => t !== tag);
            setStartFluorescenceRange(tag);
        }
        setSelectedFluorescenceData(nextSelectedTags);
    };

    const handleChangeLabData = (tag, checked) => {
        let nextSelectedTags;

        if (startLabRange) {
            const startIndex = Object.keys(constantData?.LAB || {}).indexOf(startLabRange);
            const endIndex = Object.keys(constantData?.LAB || {}).indexOf(tag);
            const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);
            const rangeTags = Object.keys(constantData?.LAB || {}).slice(from, to + 1);

            nextSelectedTags = checked
                ? Array.from(new Set([...selectedLabData, ...rangeTags]))
                : selectedLabData.filter((t) => t !== tag);
        } else {
            nextSelectedTags = checked
                ? [...selectedLabData, tag]
                : selectedLabData.filter((t) => t !== tag);
            setStartLabRange(tag);
        }
        setSelectedLabData(nextSelectedTags);
    };

    const showSearchButton = () => {
        setIsShowAdvanceSearch(true)
        setIsHideAdvanceSearch(false)
    }

    const hideSearchButton = () => {
        setIsShowAdvanceSearch(false)
        setIsHideAdvanceSearch(true)
    }

    const handleReset = clearFilters => {
        clearFilters();
    };

    const renderMediaData = (diamond) => {
        return (
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {
                    diamond?.Sku?.certificateUrl ?
                        <a href={diamond?.Sku?.certificateUrl} target='_blank' rel='noopener noreferrer'>
                            <img alt='Certificate' title='Certificate' style={{ cursor: 'pointer' }} src={Certificate} height={15} width={15} />
                        </a> : null
                }
                {
                    diamond?.Sku?.imageUrl ?
                        <a href={diamond?.Sku?.imageUrl} target='_blank' rel='noopener noreferrer'>
                            <img alt='Image' title='Image' style={{ cursor: 'pointer' }} src={Image} height={15} width={15} />
                        </a> : null
                }
                {
                    diamond?.Sku?.videoUrl ?
                        <a href={diamond?.Sku?.videoUrl} target='_blank' rel='noopener noreferrer'>
                            <img alt='Video' title='Video' style={{ cursor: 'pointer' }} src={Video} height={15} width={15} />
                        </a> : null
                }
            </div>
        )
    }

    const handleHeaderClick = (column) => {
        // setColumnName(column.dataIndex);
        // setSortingOrder(sortingOrder * -1)
    };

    const onSizeSelect = (newValue, info) => {
        setSizeFilter(newValue);
    };

    const columns = [
        {
            title: 'Seller',
            dataIndex: 'username',
            align: 'center',
            filters: allUsername?.length > 0 && allUsername.map((user) => {
                return (
                    {
                        text: user,
                        value: user,
                    }
                )
            }),
            hidden: activeKey === 'MY_INVENTORY' || !token,
            sorter: false,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder={`Search Seller`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => confirm()}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Button disabled={!selectedKeys || selectedKeys?.length === 0} onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90, border: 'none', color: selectedKeys && selectedKeys?.length > 0 ? '#1677FF' : '#b1b1b1', boxShadow: 'none', background: 'none' }}>
                        Reset
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
                    </Button>

                </div>
            ),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.username || null,
            onFilter: (value, record) => record?.username?.toString().toLowerCase().includes(value.toLowerCase()),
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Location',
            dataIndex: 'location',
            align: 'center',
            filters: Object.keys(constantData?.COUNTRY?.CODES || {}).map((tag) => {
                return (
                    {
                        text: tag,
                        value: tag,
                    }
                )
            }),
            sorter: false,
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.location || null,
            onFilter: (value, record) => {
                return record.location.indexOf(value) === 0;
                // return record;
            },
            filterSearch: true,
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Shape',
            dataIndex: 'shape',
            align: 'center',
            filters: ShapeConstant.map((tag) => {
                return (
                    {
                        text: tag.diamondName,
                        value: tag.diamondValue,
                    }
                )
            }),
            sorter: false,
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.shape || null,
            onFilter: (value, record) => {
                return value.includes(record?.shape);
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            align: 'center',
            sorter: false,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8, width: '140px' }} ref={treeSelectRef} >
                    <Tree
                        checkable
                        onCheck={onSizeSelect}
                        treeData={SizeConstant}
                    />
                    <div style={{display: 'flex', justifyContent: 'end', marginTop: '5px'}}>
                        <Button size="small" style={{border: 'none'}} onClick={() => { confirm(); setSizeFilter([])}}>Reset</Button>
                    </div>
                </div>
            ),
            filterMode: 'tree',
            // filters: SizeConstant.map(parent => ({
            //     text: parent.title,
            //     value: parent.value,
            //     children: parent.children.map(child => ({
            //         text: child.text,
            //         value: child.value,
            //     })),
            // })),
            filterSearch: true,
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: sizeFilter || allColumnFilter.size || null,
            onFilter: (value, record) => {
                return record;
            },
            // onFilter: (value, record) => {
            //     const isParentValue = SizeConstant.some(parent => parent.value === value);
            //     if (isParentValue) {
            //         const parent = SizeConstant.find(parent => parent.value === value);
            //         const childValues = parent.children.map(child => child.value);
            //         return childValues.includes(record.size);
            //     } else {
            //         return record.size === value;
            //     }
            // },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Color',
            dataIndex: 'color',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.COLOR?.CODES || {}).map((tag) => {              
                return (
                    {
                        text: tag,
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.color || null,
            onFilter: (value, record) => {
                return record;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Clarity',
            dataIndex: 'clarity',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.CLARITY || {}).map((tag) => {
                return (
                    {
                        text: tag,
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.clarity || null,
            onFilter: (value, record) => {
                return record;       
                // return record.clarity.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Cut',
            dataIndex: 'cut',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.CUT || {}).map((tag) => {             
                return (
                    {
                        text: constantData?.CUT[tag],
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.cut || null,
            onFilter: (value, record) => {
                return record.cut.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'PL',
            dataIndex: 'polish',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.POLISH || {}).map((tag) => {
                return (
                    {
                        text: constantData?.POLISH[tag],
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.polish || null,
            onFilter: (value, record) => {
                return record.polish.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'SYM',
            dataIndex: 'symmetry',
            align: 'center',
            sorter: false,
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filters: Object.keys(constantData?.SYMMETRY || {}).map((tag) => {
                return (
                    {
                        text: constantData?.SYMMETRY[tag],
                        value: tag,
                    }
                )
            }),
            filteredValue: allColumnFilter.symmetry || null,
            onFilter: (value, record) => {
                return record.symmetry.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'FL',
            dataIndex: 'flIntensity',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.FL_INTENSITY || {}).map((tag) => {
                return (
                    {
                        text: tag,
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.flIntensity || null,
            onFilter: (value, record) => {
                return record.flIntensity.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Lab',
            dataIndex: 'lab',
            align: 'center',
            sorter: false,
            filters: Object.keys(constantData?.LAB || {}).map((tag) => {
                return (
                    {
                        text: tag,
                        value: tag,
                    }
                )
            }),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.lab || null,
            onFilter: (value, record) => {
                return record.lab.indexOf(value) === 0;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Certificate',
            dataIndex: 'certificateNumber',
            align: 'center',
            hidden: !token,
            sorter: false,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder={`Search Certificate`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => confirm()}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Button disabled={!selectedKeys || selectedKeys?.length === 0} onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90, border: 'none', color: selectedKeys && selectedKeys?.length > 0 ? '#1677FF' : '#b1b1b1', boxShadow: 'none', background: 'none' }}>
                        Reset
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
                    </Button>

                </div>
            ),
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            filteredValue: allColumnFilter.certificateNumber || null,
            // onFilter: (value, record) => record.certificateNumber.toString().toLowerCase().includes(value.toLowerCase()),
            onFilter: (value, record) => {
                return record
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: '$/CT',
            dataIndex: 'pricePerCarat',
            align: 'center',
            sorter: false,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return (
                    <div style={{ padding: 8 }}>
                        <Input
                            placeholder={`From`}
                            value={fromPrice}
                            onChange={e => setFromPrice(e.target.value)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Input
                            placeholder={`To`}
                            value={toPrice}
                            onChange={e => setToPrice(e.target.value)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Button
                            disabled={!selectedKeys || selectedKeys?.length === 0}
                            style={{ width: 90, border: 'none', color: selectedKeys && selectedKeys?.length > 0 ? '#1677FF' : '#b1b1b1', boxShadow: 'none', background: 'none' }}
                            onClick={() => {
                                clearFilters();
                                setFromPrice('');
                                setToPrice('');
                            }}
                            size="small"
                        >
                            Reset
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => {
                                setSelectedKeys([fromPrice, toPrice]);
                                confirm();
                            }}
                            size="small"
                            style={{ width: 90, marginRight: 8 }}
                        >
                            Search
                        </Button>
                    </div>
                );
            },
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            onFilter: (value, record) => {
                const [from, to] = value;
                if (from && to) {
                    return record.pricePerCarat >= from && record.pricePerCarat <= to;
                } else if (from) {
                    return record.pricePerCarat >= from;
                } else if (to) {
                    return record.pricePerCarat <= to;
                }
                return true;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Total',
            dataIndex: 'totalPrice',
            align: 'center',
            sorter: false,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        
                return (
                    <div style={{ padding: 8 }}>
                        <Input
                            placeholder={`From`}
                            value={fromTotal}
                            onChange={e => setFromTotal(e.target.value)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Input
                            placeholder={`To`}
                            value={toTotal}
                            onChange={e => setToTotal(e.target.value)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Button
                            disabled={!fromTotal && !toTotal}
                            onClick={() => {
                                console.log(selectedKeys);
                                
                                clearFilters();
                                setFromTotal('');
                                setToTotal('');
                            }}
                            size="small"
                            style={{ width: 90, border: 'none', color: '#b1b1b1', boxShadow: 'none', background: 'none' }}
                        >
                            Reset
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => {
                                setSelectedKeys([fromTotal, toTotal]);
                                confirm();
                            }}
                            size="small"
                            style={{ width: 90, marginRight: 8 }}
                        >
                            Search
                        </Button>
                    </div>
                );
            },
            filterIcon: filtered => <img src={filtered ? blueFilter : Filter} height={15} width={15} alt={'Filter'} />,
            onFilter: (value, record) => {
                const [from, to] = value;
                const total = record.total; // Assuming total is a number
        
                if (from && to) {
                    return total >= from && total <= to;
                } else if (from) {
                    return total >= from;
                } else if (to) {
                    return total <= to;
                }
                return true;
            },
            onHeaderCell: (column) => {
                return {
                    onClick: () => handleHeaderClick(column),
                };
            },
        },
        {
            title: 'Media',
            dataIndex: 'media',
            align: 'center',
            sorter: false,
            onCell: () => ({
                onClick: (e) => {
                    e.stopPropagation();
                }
            }),
            hidden: !token,
        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            align: 'center',
            sorter: false,
            render: () => {
                return (
                    <Button className={"contact-seller-button"}>Contact Seller</Button>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            sorter: false,
            hidden: !userData?.isSeller || activeKey !== 'MY_INVENTORY',
            render: (text, record) => {               
                return (
                    <div style={{ textAlign: 'center' }}>
                        <Dropdown overlay={(
                            <Menu>
                                <Menu.Item key="1"><a onClick={() => editDiamondDetail(record)}>Edit</a></Menu.Item>
                                <Menu.Item key="2"><a onClick={() => showConfirm(record?.id)}>Delete</a></Menu.Item>
                            </Menu>
                        )}
                            trigger={['click']}
                            placement={"bottomLeft"}
                        >
                            <BarsOutlined />
                        </Dropdown>
                    </div>
                )
            },
            onCell: () => ({
                onClick: (e) => {
                    e.stopPropagation();
                }
            })
        }
    ];

    const data = diamondData && diamondData?.length > 0 ? diamondData?.map((diamond, index) => {
        return (
            {
                id: diamond?.id,
                key: index,
                username: diamond?.Sku?.User?.username,
                location: diamond?.Sku?.city,
                shape: diamond?.shape,
                size: diamond?.size,
                color: diamond?.color,
                clarity: diamond?.clarity,
                cut: diamond?.cut,
                polish: diamond?.polish,
                symmetry: diamond?.symmetry,
                flIntensity: diamond?.flIntensity,
                lab: diamond?.lab,
                certificateNumber: diamond?.certificateNumber,
                pricePerCarat: diamond?.Sku?.pricePerCarat,
                totalPrice: diamond?.Sku?.totalPrice,
                media: renderMediaData(diamond)
            }
        )
    }) : []

    const onFilterChange = (pagination, filters, extra) => {
        const filterAppliedOrNot = Object.values(filters).some(filter => filter && filter.length > 0);
        setIsFilterApplied(filterAppliedOrNot)
        setAllColumnFilter(filters)
        setSelectedLocation(filters?.location ? filters.location : []);
        setSelectedShape(filters?.shape ? filters.shape : []);
        setSelectedSize(filters?.size ? filters.size : []);
        setSelectedColors(filters?.color ? filters.color : []);
        setSelectedClarity(filters?.clarity ? filters.clarity : []);
        setSelectedCutData(filters?.cut ? filters.cut : []);
        setSelectedPolishData(filters?.polish ? filters.polish : []);
        setSelectedSymmetryData(filters?.symmetry ? filters.symmetry : []);
        setSelectedFluorescenceData(filters?.flIntensity ? filters.flIntensity : []);
        setSelectedLabData(filters?.lab ? filters.lab : []);
        setSearchedCertificate(filters?.certificateNumber ? filters?.certificateNumber[0] : '')
        setPriceFrom(filters?.pricePerCarat ? filters?.pricePerCarat[0] : '')
        setPriceTo(filters?.pricePerCarat ? filters?.pricePerCarat[1] : '')
        setTotalFrom(filters?.totalPrice ? filters?.totalPrice[0] : '')
        setTotalTo(filters?.totalPrice ? filters?.totalPrice[1] : '')
        setSearchedUsername(filters?.username ? filters?.username[0] : '')
        setCurrent(pagination?.current || 1);
        setPageSize(pagination?.pageSize || 50);
        // getSearchedDiamond(current, pageSize);
    };

    useEffect(() => {
        getSearchedDiamond();
    }, [selectedLocation, selectedShape, selectedSize, selectedColors, selectedClarity, selectedCutData, selectedPolishData, selectedSymmetryData, selectedFluorescenceData, selectedLabData, searchedCertificate, priceFrom, priceTo, totalFrom, totalTo, searchedUsername, sizeFilter, token])

    const getSearchedDiamond = async () => {
        setIsLoaderVisible(true)
        // setIsShowFilter(false)
        const data = {
            shapes: selectedShape,
            sizes: sizeFilter ? sizeFilter : selectedSize,
            colors: selectedColors,
            clarities: selectedClarity,
            // Specials: selectedSpecialData,
            cuts: selectedCutData,
            polishes: selectedPolishData,
            symmetries: selectedSymmetryData,
            flIntensity: selectedFluorescenceData,
            labs: selectedLabData,
            otherFilters: otherParams,
            locations: selectedLocation,
            shade: selectedShade,
            milky: selectedMilky,
            openInclusionTables: openInclusionTable,
            openInclusionCrowns: openInclusionCrown,
            whiteInclusionTables: whiteInclusionTable,
            whiteInclusionCrowns: whiteInclusionCrown,
            blackInclusionTables: blackInclusionTable,
            blackInclusionCrowns: blackInclusionCrown,
            keyToSymbols: keyToSymbols,
            eyeClean: eyeClean,
            certificateNumber: searchedCertificate,
            pricePerCaret: {
                from: priceFrom,
                to: priceTo
            },
            totalPrice: {
                form: totalFrom,
                to: totalTo
            },
            userName: searchedUsername,
        }
        // if(columnName === 'username'){
        //     data.sort = {username : sortingOrder}
        // } else if(columnName === 'location') {
        //     data.sort = {location : sortingOrder}
        // } else if(columnName === 'shape') {
        //     data.sort = {shape : sortingOrder}
        // } else if(columnName === 'size') {
        //     data.sort = {size : sortingOrder}
        // } else if(columnName === 'color') {
        //     data.sort = {color : sortingOrder}
        // } else if(columnName === 'clarity') {
        //     data.sort = {clarity : sortingOrder}
        // } else if(columnName === 'cut') {
        //     data.sort = {cut : sortingOrder}
        // } else if(columnName === 'polish') {
        //     data.sort = {polish : sortingOrder}
        // } else if(columnName === 'symmetry') {
        //     data.sort = {symmetry : sortingOrder}
        // } else if(columnName === 'flIntensity') {
        //     data.sort = {flIntensity : sortingOrder}
        // } else if(columnName === 'lab') {
        //     data.sort = {lab : sortingOrder}
        // } else if(columnName === 'certificateNumber') {
        //     data.sort = {certificateNumber : sortingOrder}
        // } else if(columnName === 'pricePerCarat') {
        //     data.sort = {pricePerCarat : sortingOrder}
        // } else if(columnName === 'totalPrice') {
        //     data.sort = {totalPrice : sortingOrder}
        // }

        if (activeKey === 'MY_INVENTORY') {
            await getInventoryDiamond({ current, pageSize }, data, userData?.id, token).then((response) => {
                setTotalCount(response?.count)
                setDiamondData(response.data)
                setIsLoaderVisible(false)
            }).catch((e) => {
                if (e?.response?.data?.statusCode === 401) {
                    localStorage.clear();
                    window.location.reload();
                }
                message.error(e?.response?.data?.error);
                setIsLoaderVisible(false)
            })
        } else {
            if (token) {
                await serachDiamondWithLogin({ current, pageSize }, data, token).then((response) => {setTotalCount(response?.count)
                    setDiamondData(response.data)
                    setIsLoaderVisible(false)
                }).catch((e) => {
                    if (e?.response?.data?.statusCode === 401) {
                        localStorage.clear();
                        window.location.reload();
                    }
                    message.error(e?.response?.data?.error);
                    setIsLoaderVisible(false)
                })
            } else {
                await serachDiamond({ current, pageSize }, data).then((response) => {
                    setTotalCount(response?.count)
                    setDiamondData(response.data)
                    setIsLoaderVisible(false)
                }).catch((e) => {
                    message.error(e?.response?.data?.error);
                    setIsLoaderVisible(false)
                })
            }
        }
        setIsLoaderVisible(false)
    }

    const editDiamondDetail = async (record) => {
        setIsShowEditDiamondModal(true)
        fetchParticularDiamondDetail(record, "EDIT")
    }

    const showConfirm = (id) => {
        
        confirm({
            title: 'Do you Want to delete this record?',
            async onOk() {
                let deletedIds = [];
                if (deleteDiamondsLength?.length > 0) {
                    deleteDiamondsLength?.map((diamond) => {
                        deletedIds.push(diamond?.id);
                    })
                } else {
                    deletedIds.push(id);
                }
                await deleteParticularDiamond(deletedIds).then((response) => {
                    message.success(response.message)
                    getSearchedDiamond();
                }).catch((e) => {
                    message.error(e?.response?.data?.error);
                })
                setSelectedRowKeys([]);
                setSelectedRows([]);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const onChangeValue = (event, updatableState) => {
        const {
            target: { value },
        } = event;
        if(updatableState === 'openInclusionTable') setOpenInclusionTable(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'openInclusionCrown') setOpenInclusionCrown(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'whiteInclusionTable') setWhiteInclusionTable(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'whiteInclusionCrown') setWhiteInclusionCrown(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'blackInclusionTable') setBlackInclusionTable(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'blackInclusionCrown') setBlackInclusionCrown(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'eyeClean') setEyeClean(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'keyToSymbols') setKeyToSymbols(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'selectedMilky') setSelectedMilky(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'selectedShade') setSelectedShade(typeof value === "string" ? value.split(",") : value)
        if(updatableState === 'selectedLocation') setSelectedLocation(typeof value === "string" ? value.split(",") : value)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys, newSelectedRows) => {
            // console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', newSelectedRows);
            setSelectedRowKeys(newSelectedRowKeys);
            setSelectedRows(newSelectedRows);
            setDeleteDiamondsLength(newSelectedRows)
            console.log(newSelectedRows);
            console.log(deleteDiamondsLength?.length);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    const onDrop = async (acceptedFiles) => {
        let file = acceptedFiles[0];
        
        const formData = new FormData();
        formData.append('file', file);
        const buffer = await file.arrayBuffer();
        console.log("buffer", buffer)
        file._buf = buffer


        await uploadFile(formData).then((response) => {
            message.success("File Uploaded Successfully.")
            getSearchedDiamond();
        }).catch((e) => {
            console.log(e);
        })
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.ms-excel': ['.xls']
        }
    });

    const TableGrid = () => {
        return (
            <>
            <div className='diamond-table-header'>
                {/*<div>*/}
                {/*    <Search*/}
                {/*        placeholder="Search..."*/}
                {/*        onSearch={onSearch}*/}
                {/*        style={{*/}
                {/*            width: 300,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className='diamond-filter-button'>
                    {
                        token && activeKey === 'MY_INVENTORY' ?
                            <Button className='create-diamond-button'
                                    onClick={() => navigate('/create-diamond')}>Create Diamond</Button>
                            : null
                    }
                    {
                        token && activeKey === 'MY_INVENTORY' ?
                            <Button className='diamond-upload-button'
                                    onClick={() => setIsOpenUploadModal(true)}>
                                <UploadOutlined/> Upload</Button>
                            : null
                    }
                    {
                        token ?
                            <Button className='diamond-apply-filter'
                                // onClick={() => hideShowFilter()}>{isShowFilter ? 'Hide Traditional Search' : 'Traditional Search'}
                                    onClick={() => hideShowFilter()}>Traditional Search
                            </Button>
                            : null
                    }
                    {
                        isFilterApplied || sizeFilter?.length > 0 ?
                            <Button className='diamond-clear-filter' onClick={() => clearFilter()}>Clear
                                Filters</Button> : null
                    }
                    {
                        activeKey === 'MY_INVENTORY' && deleteDiamondsLength?.length > 0 ?
                            <Button className='diamond-clear-filter'
                                    onClick={() => showConfirm()}>Delete</Button>
                            : null
                    }
                </div>
            </div>
            <div className='daimond-header' style={{padding: '0 24px'}}>
                <div style={{marginBottom: '50px'}}>
                    <ConfigProvider>
                        <Table className='centered-table'
                           columns={columns}
                           dataSource={data}
                           onChange={onFilterChange}
                           showSorterTooltip={{target: 'sorter-icon',}}
                           pagination={{pageSize: pageSize, total: totalCount}}
                           size='small'
                           onRow={(record) => {
                               return {
                                   onClick: (event) => {
                                       token ? fetchParticularDiamondDetail(record, 'VIEW') : redirectToLogin()
                                   },
                                   style: {cursor: 'pointer'},
                               };
                           }}
                           loading={{
                               spinning: isLoaderVisible,
                               indicator: <Spin size="large"/>,
                           }}
                           rowSelection={userData?.isSeller && activeKey === 'MY_INVENTORY' ? {...rowSelection} : null}
                        />
                    </ConfigProvider>
                </div>
            </div>
            </>
        )
    }

    const url = 'https://melee-express.com/rounds?type=lab-grown';

    useEffect(() => {
        const handleStorageChange = () => {
          const storedActiveKey = localStorage.getItem('activeKey');
          if (storedActiveKey && storedActiveKey !== activeTab && storedActiveKey !== 'MELEE_EXPRESS') {
            setActiveTab(storedActiveKey);
          } else if(storedActiveKey === 'MELEE_EXPRESS') {
            window.open(url, '_blank');
          }
        };
    
        // Set the initial activeTab from localStorage
        handleStorageChange();
    
        // Polling to check for localStorage changes
        const interval = setInterval(handleStorageChange, 500); // Check every second
    
        // Cleanup function to clear the interval
        return () => {
          clearInterval(interval);
        };
      }, [activeTab]);

    const onTabChange = (val) => {
        localStorage.setItem('activeKey', val)
        if(val === 'MELEE_EXPRESS') {
            setActiveTab(activeTab)
            window.open(url, '_blank');
        } else {
            console.log("val2", val)
            setActiveTab(val);
        }
    }

    return (
        <>
            <ConfigProvider locale={enUS}>
                <div className='diamond-table-wrapper'>
                    <div className="diamond-image-container">
                        <img src={DiamondImage} alt={'Diamond Image'} className='diamond-image'/>
                        <Tabs
                            // defaultActiveKey={activeTab}
                            activeKey={activeTab}
                            type="card"
                            size={'large'}
                            className='diamond-tabs-component'
                            onChange={(val) => onTabChange(val)}
                        >
                            <TabPane tab={<div className={"tab-content-label"}><img src={MeleeDiamond} height={20} width={20} alt={"Melee Dimaond"}/>Melee Diamonds</div>} key="MELEE_EXPRESS">

                            </TabPane>
                            <TabPane tab={<div className={"tab-content-label"}><img src={SizeAbove20} height={20} width={20} alt={".20+"}/>.20+</div>} key="ABOVE20">
                                <TableGrid />
                            </TabPane>
                            <TabPane tab={<div className={"tab-content-label"}><img src={MatchingPairs} height={20} width={20} alt={"Matching Pairs"}/>Matching Pairs</div>} key="MATCHING_PAIRS">
                                {/*<TableGrid />*/}
                            </TabPane>
                            <TabPane tab={<div className={"tab-content-label"}><img src={ColoredDiamond} height={20} width={20} alt={"Colored Diamonds"}/>Colored Diamonds</div>} key="COLORED_DIAMONDS">
                                {/*<TableGrid />*/}
                            </TabPane>
                            <TabPane tab={<div className={"tab-content-label"}><img src={Jewelry} height={20} width={20} alt={"Jewelry & Watches"}/>Jewelry & Watches</div>} key="JEWELRY_WATCHES">
                                {/*<TableGrid />*/}
                            </TabPane>
                            {
                                token ?
                                    <TabPane tab={<div className={"tab-content-label"}>My Inventory</div>} key="MY_INVENTORY">
                                        <TableGrid />
                                    </TabPane> : null
                            }
                        </Tabs>
                    </div>
                    <DiamondDetailModal
                        particularDiamond={particularDiamond}
                        isShowDiamondDetail={isShowDiamondDetail}
                        closeDiamondModal={closeDiamondModal}
                        setIsShowEditDiamondModal={setIsShowEditDiamondModal}
                        fetchParticularDiamondDetail={fetchParticularDiamondDetail}
                    />
                    <EditDiamondDetailModal
                        isShowEditDiamondModal={isShowEditDiamondModal}
                        closeEditDiamondModal={closeEditDiamondModal}
                        constantData={constantData}
                        openInclusionTable={openInclusionTable}
                        keyToSymbols={keyToSymbols}
                        particularDiamond={particularDiamond}
                        shapeData={ShapeConstant}
                        setTotalCount={setTotalCount}
                        setDiamondData={setDiamondData}
                        setIsLoaderVisible={setIsLoaderVisible}
                        getSearchedDiamond={getSearchedDiamond}
                    />
                    <UploadModal
                        isOpenUploadModal={isOpenUploadModal}
                        closeUploadModal={closeUploadModal}
                        getRootProps={getRootProps}
                        isDragActive={isDragActive}
                        getInputProps={getInputProps}
                    />
                </div>

                <Modal className='search-detail' title="Search Diamond" open={isShowFilter} onCancel={closeFilterModal}
                       footer={null}>
                    <Card style={{overflow: "auto"}}>
                        <>
                            <ShapeFilter
                                label={'Shape'}
                                shapeData={ShapeConstant}
                                selectedShape={selectedShape}
                                handleChangeShape={handleChangeShape}
                            />
                            <SizeFilter
                                label={'Size'}
                                constantData={constantData}
                                selectedSize={selectedSize}
                                handleChangeSize={handleChangeSize}
                            />
                            <ColorFilter
                                label={'Color'}
                                constantData={constantData}
                                selectedColors={selectedColors}
                                handleChangeColor={handleChangeColor}
                            />
                            <ClarityFilter
                                label={'Clarity'}
                                constantData={constantData}
                                selectedClarity={selectedClarity}
                                handleChangeClarity={handleChangeClarity}
                            />
                            {/*<SpecialFilter*/}
                            {/*    label={'Special'}*/}
                            {/*    specialData={specialData}*/}
                            {/*    selectedSpecialData={selectedSpecialData}*/}
                            {/*    handleChangeSpecialData={handleChangeSpecialData}*/}
                            {/*/>*/}
                            <CutFilter
                                label={'Cut'}
                                constantData={constantData}
                                selectedCutData={selectedCutData}
                                handleChangeCutData={handleChangeCutData}
                            />
                            <PolishFilter
                                label={'Polish'}
                                constantData={constantData}
                                selectedPolishData={selectedPolishData}
                                handleChangePolishData={handleChangePolishData}
                            />
                            <SymmetryFilter
                                label={'Symmetry'}
                                constantData={constantData}
                                selectedSymmetryData={selectedSymmetryData}
                                handleChangeSymmetryData={handleChangeSymmetryData}
                            />
                            <FluorescenceFilter
                                label={'Fluorescence'}
                                constantData={constantData}
                                selectedFluorescenceData={selectedFluorescenceData}
                                handleChangeFluorescenceData={handleChangeFluorescenceData}
                            />
                            <LusterFilter
                                label={''}
                                constantData={constantData}
                                selectedMilky={selectedMilky}
                                selectedShade={selectedShade}
                                onChangeValue={onChangeValue}
                            />
                            <LabFilter
                                label={'Lab'}
                                constantData={constantData}
                                selectedLabData={selectedLabData}
                                handleChangeLabData={handleChangeLabData}
                            />
                            <LocationFilter
                                label={'Location'}
                                constantData={constantData}
                                selectedLocation={selectedLocation}
                                onChangeValue={onChangeValue}
                            />
                            <PricingFilter
                                label={'Pricing'}
                                setPriceFrom={setPriceFrom}
                                setPriceTo={setPriceTo}
                                setTotalFrom={setTotalFrom}
                                setTotalTo={setTotalTo}
                            />
                            {isHideAdvanceSearch ?
                                <div className='show-advance-search-button'>
                                    <a onClick={() => showSearchButton()}>Show Advance Parameters</a>
                                </div> : null}
                            {isShowAdvanceSearch ?
                                <>
                                    <PercentageFilter
                                        label={'Percentage%'}
                                        handleFieldChange={handleFieldChange}
                                    />
                                    <InclusionFilter
                                        label={'Inclusion'}
                                        constantData={constantData}
                                        onChangeValue={onChangeValue}
                                        openInclusionTable={openInclusionTable}
                                        openInclusionCrown={openInclusionCrown}
                                        whiteInclusionTable={whiteInclusionTable}
                                        whiteInclusionCrown={whiteInclusionCrown}
                                        blackInclusionTable={blackInclusionTable}
                                        blackInclusionCrown={blackInclusionCrown}
                                        keyToSymbols={keyToSymbols}
                                        eyeClean={eyeClean}
                                    />
                                    <CrownFilter
                                        label={'Crown'}
                                        handleFieldChange={handleFieldChange}
                                    />
                                    <PavilionFilter
                                        label={'Pavilion'}
                                        handleFieldChange={handleFieldChange}
                                    />
                                    <MeasurementsFilter
                                        label={'Measurements'}
                                        handleFieldChange={handleFieldChange}
                                    />
                                    <div className='show-advance-search-button'>
                                        <a onClick={() => hideSearchButton()}>Hide Advance Search</a>
                                    </div>
                                </>
                                : null
                            }
                            <div style={{textAlign: 'center'}}>
                                <Button style={{backgroundColor: '#000', color: '#fff'}}
                                        onClick={() => {
                                            setIsShowFilter(false);
                                            getSearchedDiamond()
                                        }}>Search Diamond</Button>
                            </div>
                        </>
                    </Card>
                </Modal>
            </ConfigProvider>
        </>
    );
};

export default DiamondTable;
