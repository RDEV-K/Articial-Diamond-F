import React from 'react';
import {Card, Col, Row, Tag} from "antd";

const ShapeFilter = ({label, shapeData, selectedShape, setSelectedShape, handleChangeShape, isCreateDiamond}) => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={3}>
                    <div style={{width: '150px'}}>
                        {label}
                    </div>
                </Col>
                <Col span={21}>
                    <div>
                        <Row gutter={[16, 16]}>
                            <Col className='diamond-col'>
                                {shapeData.map((tag) => {
                                    const rectangleShape = tag?.diamondName === 'Emerald' || tag?.diamondName === 'Radiant' || tag?.diamondName === 'Pear' || tag?.diamondName === 'Marquise' || tag?.diamondName === 'Baguette' || tag?.diamondName === 'Oval';
                                    return (
                                        <Tag.CheckableTag
                                            key={tag?.diamondName}
                                            checked={selectedShape?.includes(tag?.diamondName)}
                                            onChange={(checked) => isCreateDiamond ? setSelectedShape(tag?.diamondName) : handleChangeShape(tag?.diamondName, checked)}
                                            className={selectedShape?.includes(tag?.diamondName) ? 'diamond-shape diamond-checked' : 'diamond-shape diamond-unchecked'}
                                        >
                                            <Card
                                                className={selectedShape?.includes(tag?.diamondName) ? 'checked-diamond-card' : 'unchecked-diamond-card'}>
                                                <img
                                                    height={50}
                                                    width={rectangleShape ? 30 : 50}
                                                    src={tag?.diamondUrl}
                                                    alt={tag?.diamondName}/>
                                                <div>{tag?.diamondName}</div>
                                            </Card>
                                        </Tag.CheckableTag>
                                    )
                                })}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ShapeFilter;
