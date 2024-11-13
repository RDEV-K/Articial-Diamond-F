import React from 'react';
import {Button, Modal} from 'antd';
import './style.css';
import {CloudUploadOutlined} from "@ant-design/icons";

const UploadModal = ({isOpenUploadModal, closeUploadModal, getRootProps, isDragActive, getInputProps}) => {

    return (
        <div>
            <Modal className={'upload-modal'} title="Upload File" open={isOpenUploadModal} onCancel={closeUploadModal}
                   footer={null}>
                <div {...getRootProps({isDragActive})}>
                    <input {...getInputProps()} />
                    <div className='upload-box'>
                        <div><CloudUploadOutlined style={{fontSize: '36px'}}/></div>
                        <div style={{fontSize: '20px'}}>Drag & Drop files here</div>
                        <div style={{fontSize: '20px'}}>OR</div>
                        <div style={{marginTop: '10px'}}>
                            <Button>Browse File</Button>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '10px', textAlign: 'right'}}>
                    <a href={'labnetDefaultTemplate.xlsx'} target="_blank" rel="noopener noreferrer">Download Sample Template</a>
                </div>
            </Modal>
        </div>
    );
};

export default UploadModal;
