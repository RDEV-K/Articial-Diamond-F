import React from 'react';
import {Col, Row, Tag} from "antd";

const SpecialFilter = ({label, specialData, selectedSpecialData, handleChangeSpecialData}) => {
    return (
        <div style={{marginTop: '20px'}}>
            <Row gutter={16}>
                <Col span={3}>
                    <div>
                        {label}
                    </div>
                </Col>
                <Col span={21}>
                    <div>
                        <Row gutter={[16, 16]}>
                            {specialData.map((tag) => (
                                <Tag.CheckableTag
                                    key={tag}
                                    checked={selectedSpecialData.includes(tag)}
                                    onChange={(checked) => handleChangeSpecialData(tag, checked)}
                                    className={selectedSpecialData.includes(tag) ? 'tag-checked' : 'tag-unchecked'}
                                >
                                    {tag}
                                </Tag.CheckableTag>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SpecialFilter;
