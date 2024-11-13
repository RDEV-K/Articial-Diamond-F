import React from 'react';
import {Button, Col, Divider, Modal, Row} from 'antd';
import './style.css';
import {EditOutlined} from "@mui/icons-material";
import rightArrow from "../../assets/Images/rightArrow.png";
import closeIcon from "../../assets/Images/closeIcon.png";

const DiamondDetailModal = ({particularDiamond, isShowDiamondDetail, closeDiamondModal, setIsShowEditDiamondModal, fetchParticularDiamondDetail}) => {

    const editDiamondDetail = async (record) => {
        setIsShowEditDiamondModal(true)
        await fetchParticularDiamondDetail(record, "EDIT")
        closeDiamondModal()
    }

    const customTitle = (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: '100%',
                marginBottom: '10px'
            }}
        >
            <div style={{fontSize: '20px'}} className="title">{'Diamond Details'}</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <Button onClick={() => editDiamondDetail(particularDiamond)} className={'diamond-detail-edit-button'} ><EditOutlined style={{fontSize: '18px', color: '#fff'}}/> Edit</Button>
                <div style={{cursor: 'pointer', fontSize: '20px'}} onClick={() => closeDiamondModal()}>X</div>
            </div>
        </div>
    );

    return (
        <div>
            <Modal className={'dimond-detail-modal'} title={customTitle} open={isShowDiamondDetail}
                   onCancel={closeDiamondModal} closable={false}>
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <div className='seller-detail-container'>
                                <div className='seller-detail-header-container'>
                                    <div className='seller-detail-header-title'>Seller Details</div>
                                </div>
                                <div className='seller-detail-vendor-container'>
                                    <div className='seller-detail-vendor-name'>{particularDiamond?.Sku?.User?.companyName}</div>
                                    <Divider />
                                    <div className='seller-detail-vendor-detail'>
                                        <Row gutter={16}>
                                            <Col className='diamond-detail-label' span={8}>Vendor:</Col>
                                            <Col className='diamond-detail-value' span={16}>{particularDiamond?.Sku?.User?.accountID}</Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col className='diamond-detail-label' span={8}>Contact:</Col>
                                            <Col span={16}>
                                                <div className='diamond-detail-value'>{particularDiamond?.Sku?.User?.contactPrimaryName}</div>
                                                <div className='diamond-detail-value'>{particularDiamond?.Sku?.User?.email}</div>
                                                <div className='diamond-detail-value'>{particularDiamond?.Sku?.User?.whatsapp}</div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='price-detail-container'>
                                <div className='price-detail-header-container'>
                                    <div className='price-detail-header-title'>Media</div>
                                </div>
                                <div className='price-detail-value-content'>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='price-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={8}>Image</Col>
                                                    <Col className='media-image' span={16}>
                                                        {
                                                            particularDiamond?.Sku?.imageUrl ?
                                                                <a href={particularDiamond?.Sku?.imageUrl} target='_blank' rel='noopener noreferrer'>
                                                                    <img style={{cursor: 'pointer'}} src={particularDiamond?.Sku?.imageUrl} alt={"Images"} height={18} width={30}/>
                                                                </a> :
                                                                <img src={closeIcon} alt={"Close Icon"} height={20} width={20}/>
                                                        }
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='price-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={8}>Video</Col>
                                                    <Col className='media-image' span={16}>
                                                        {
                                                            particularDiamond?.Sku?.videoUrl ?
                                                                <a href={particularDiamond?.Sku?.videoUrl} target='_blank' rel='noopener noreferrer'>
                                                                    <img style={{cursor: 'pointer'}} src={rightArrow} alt={"Video"} height={18} width={30}/>
                                                                </a> :
                                                                <img src={closeIcon} alt={"Close Icon"} height={20} width={20}/>
                                                        }
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='price-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={8}>Certificate</Col>
                                                    <Col className='media-image' span={16}>
                                                        {
                                                            particularDiamond?.Sku?.certificateUrl ?
                                                                <a href={particularDiamond?.Sku?.certificateUrl} target='_blank' rel='noopener noreferrer'>
                                                                    <img style={{cursor: 'pointer'}} src={rightArrow} alt={"Ceritificate"} height={18} width={30}/>
                                                                </a> :
                                                                <img src={closeIcon} alt={"Close Icon"} height={20}/>
                                                        }
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='price-detail-container'>
                                <div className='price-detail-header-container'>
                                    <div className='price-detail-header-title'>Price & Other Details</div>
                                </div>
                                <div className='price-detail-value-content'>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='price-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={10}>Certificate#</Col>
                                                    <Col className='diamond-detail-label' span={7}>$/CT</Col>
                                                    <Col className='diamond-detail-label' span={7}>Total</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={10}>{particularDiamond?.certificateNumber ?particularDiamond.certificateNumber : '-' }</Col>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.Sku?.pricePerCarat ? particularDiamond.Sku.pricePerCarat : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.Sku?.totalPrice ? particularDiamond.Sku.totalPrice : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='price-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={8}>Lab</Col>
                                                    <Col className='diamond-detail-label' span={8}>Stock#</Col>
                                                    <Col className='diamond-detail-label' span={8}>Location</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.lab ? particularDiamond.lab : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.Sku?.userStockNumber ? particularDiamond.Sku.userStockNumber : '-' }</Col>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.Sku?.city ? particularDiamond.Sku.city : '-' }</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div className='diamond-other-detail-container'>
                                <div className='diamond-other-detail-header-container'>
                                    <div className='diamond-other-detail-header-title'>Diamond Details</div>
                                </div>
                                <div className='diamond-other-detail-desc-container'>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={6}>Shape</Col>
                                                    <Col className='diamond-detail-label' span={6}>Size</Col>
                                                    <Col className='diamond-detail-label' span={6}>Color</Col>
                                                    <Col className='diamond-detail-label' span={6}>Clarity</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.shape ? particularDiamond.shape : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.size ? particularDiamond.size : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.color ? particularDiamond.color : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.clarity ? particularDiamond.clarity : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={6}>Cut</Col>
                                                    <Col className='diamond-detail-label' span={8}>Polish</Col>
                                                    <Col className='diamond-detail-label' span={10}>Symmetry</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.cut ? particularDiamond.cut : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.polish ? particularDiamond.polish : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={10}>{particularDiamond?.symmetry ? particularDiamond.symmetry : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={10}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={8}>Fluorescence</Col>
                                                    <Col className='diamond-detail-label' span={5}>Shade</Col>
                                                    <Col className='diamond-detail-label' span={5}>Milky</Col>
                                                    <Col className='diamond-detail-label' span={6}>Eyeclean</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.flIntensity ? particularDiamond.flIntensity : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={5}>{particularDiamond?.shade ? particularDiamond.shade : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={5}>{particularDiamond?.Sku?.milky ? particularDiamond.Sku.milky : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.eyeClean ? particularDiamond.eyeClean : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={7}>Depth%</Col>
                                                    <Col className='diamond-detail-label' span={7}>Table%</Col>
                                                    <Col className='diamond-detail-label' span={10}>Measurements</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.depth ? particularDiamond.depth : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.tablePercent ? particularDiamond.tablePercent : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={10}>
                                                        {particularDiamond?.length && particularDiamond?.width && particularDiamond?.depth ? `${particularDiamond?.length}-${particularDiamond?.width}x${particularDiamond?.depth}` : '-'}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={12}>Crown Height</Col>
                                                    <Col className='diamond-detail-label' span={12}>Crown Angle</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={12}>{particularDiamond?.crownHeight ? particularDiamond.crownHeight : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={12}>{particularDiamond?.crownAngle ? particularDiamond.crownAngle : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={10}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={4}>Ratio</Col>
                                                    <Col className='diamond-detail-label' span={7}>Culet Cond.</Col>
                                                    <Col className='diamond-detail-label' span={6}>Culet Size</Col>
                                                    <Col className='diamond-detail-label' span={7}>Star Length</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={4}>{particularDiamond?.ratio ? particularDiamond.ratio : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.culetCondition ? particularDiamond.culetCondition : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.culetSize ? particularDiamond.culetSize : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={7}>{particularDiamond?.starLength ? particularDiamond.starLength : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={6}>HNA</Col>
                                                    <Col className='diamond-detail-label' span={10}>Rough Origin</Col>
                                                    <Col className='diamond-detail-label' span={8}>Brand</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.hna ? particularDiamond.hna : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={10}>{particularDiamond?.roughOrigin ? particularDiamond.roughOrigin : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={8}>{particularDiamond?.brand ? particularDiamond.brand : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={12}>Pavilion Depth</Col>
                                                    <Col className='diamond-detail-label' span={12}>Pavilion Angle</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={12}>{particularDiamond?.pavilionDepth ? particularDiamond.pavilionDepth : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={12}>{particularDiamond?.pavilionAngle ? particularDiamond.pavilionAngle : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col span={10}>
                                            <div className='diamond-other-detail-first-sec'>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-label' span={9}>Girdle(Min/Max)</Col>
                                                    <Col className='diamond-detail-label' span={6}>Girdle%</Col>
                                                    <Col className='diamond-detail-label' span={9}>Girdle(Cond.)</Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col className='diamond-detail-value' span={9}>{particularDiamond?.girdleMin && particularDiamond?.girdleMax ? `${particularDiamond?.girdleMin} / ${particularDiamond?.girdleMax}` : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={6}>{particularDiamond?.girdlePercent ? particularDiamond.girdlePercent : '-'}</Col>
                                                    <Col className='diamond-detail-value' span={9}>{particularDiamond?.girdleCondition ? particularDiamond.girdleCondition : '-'}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    );
};

export default DiamondDetailModal;
