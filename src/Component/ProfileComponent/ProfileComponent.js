import React, {useState, useEffect} from 'react';
import {Avatar, Button, Col, Divider, Input, message, Modal, Row, Checkbox} from 'antd';
import './style.css';
import {UserOutlined} from "@ant-design/icons";
import {EditOutlined} from "@mui/icons-material";
import {editUserProfile} from "../../APIs/api";
import {useDropzone} from "react-dropzone";

const ProfileComponent = ({isOpenProfileModal, closeProfileModal}) => {
    const [userProfile, setUserProfile] = useState();
    const [isProfileEdit, setIsProfileEdit] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [isSeller, setIsSeller] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));

    const options = [
        {
            label: 'isBuyer',
            value: 'isBuyer',
            disabled: true,
            checked: true
        },
        {
            label: `isSeller (Promotional offer, it's free for now)`,
            value: 'isSeller',
            disabled: !isProfileEdit,
        },
    ];

    useEffect(() => {
        setUserProfile(JSON.parse(localStorage.getItem('userData')));
    }, [])

    const editProfile = () => {
        setIsProfileEdit(!isProfileEdit)
    }

    const updateProfile = async () => {
        const data = {
            username: userProfile?.username ? userProfile.username : '-',
            companyName: userProfile?.companyName ? userProfile.companyName : '-',
            profileImage: imageURL,
            isBuyer: true,
            isSeller: isSeller
        }
        await editUserProfile(data, userProfile?.id).then((response) => {
            setUserProfile(response);
            localStorage.setItem('userData', JSON.stringify(response));
            setIsProfileEdit(false);
            window.location.reload();
        }).catch((e) => {
            message.error(e?.response?.data?.error);
        })
    }

    const onDrop = async (acceptedFiles) => {
        let file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result; // Extract base64 string
            setImageURL(base64String);
        };

        reader.readAsDataURL(file);
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/bmp': ['.bmp'],
            'image/webp': ['.webp']
        }
    });

    const onChange = (checkedValues) => {
        setIsSeller(checkedValues.includes('isSeller'))
    };

    return (
        <div className='profile-container'>
            <div className="profile-content">
                <div className="profile-edit-btn">
                    <Button onClick={() => editProfile()} className="profile-edit-btn"><EditOutlined
                        style={{fontSize: '18px', color: '#fff'}}/> Edit</Button>
                </div>
                <div className="profile-image-content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <div className="profile-image">
                            {
                                isProfileEdit ?
                                    <div {...getRootProps({isDragActive})}>
                                        <input {...getInputProps()} />
                                        <EditOutlined/>
                                    </div>
                                    : null
                            }
                            {
                                userProfile?.profileImage ?
                                    <img src={imageURL ? imageURL : userProfile.profileImage} alt="profileImage" height={70} width={70}/> :
                                    imageURL ?
                                        <img src={imageURL} alt="profileImage"
                                             height={70} width={70}/> : <Avatar size={100} icon={<UserOutlined/>}/>
                            }
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <Checkbox.Group options={options}
                                        defaultValue={userData?.isSeller ? ['isBuyer', 'isSeller'] : ['isBuyer']}
                                        onChange={onChange}/>
                    </div>
                </div>
                <Divider/>
                <div className="profile-detail-content">
                    <Row gutter={16}>
                        <Col span={8} className="profile-label">Name: </Col>
                        <Col span={16} className="profile-value">
                            {
                                isProfileEdit ?
                                    <Input
                                        placeholder={`Enter Name`}
                                        value={userProfile?.username ? userProfile.username : '-'}
                                        onChange={e => setUserProfile({...userProfile, username: e.target.value})}
                                        style={{width: '300px'}}
                                    /> :
                                    userProfile?.username ? userProfile.username : '-'
                            }
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8} className="profile-label">Email: </Col>
                        <Col span={16} className="profile-value">{userProfile?.email ? userProfile.email : '-'}</Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8} className="profile-label">Phone: </Col>
                        <Col span={16} className="profile-value">{userProfile?.whatsapp ? userProfile.whatsapp : '-'}</Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8} className="profile-label">Business Name: </Col>
                        <Col span={16} className="profile-value">
                            {
                                isProfileEdit ?
                                    <Input
                                        placeholder={`Enter Business Name`}
                                        value={userProfile?.companyName ? userProfile.companyName : ''}
                                        onChange={e => setUserProfile({...userProfile, companyName: e.target.value})}
                                        style={{width: '300px'}}
                                    /> :
                                    userProfile?.companyName ? userProfile.companyName : '-'
                            }
                        </Col>
                    </Row>
                </div>
                {
                    isProfileEdit ?
                        <div className="profile-update">
                            <Button onClick={() => {
                                setImageURL(userProfile.profileImage)
                                setIsProfileEdit(false)
                            }} className="cancel-btn">Cancel</Button>
                            <Button onClick={() => updateProfile()} className="update-profile-btn">Update
                                Profile</Button>
                        </div> : null
                }

            </div>


            <Modal className={'profile-modal'} title="User Profile" open={isOpenProfileModal}
                   onCancel={closeProfileModal} footer={null}>
                <div className='profile-detail-wrapper'>
                <div className='profile-iamge'>
                        <Avatar size={100}></Avatar>
                    </div>
                    <div className='profile-detail-info'>
                        <Row gutter={16}>
                            <Col span={8}>Name: </Col>
                            <Col span={16}>{userData?.username ? userData.username : '-'}</Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>Email: </Col>
                            <Col span={16}>{userData?.email ? userData.email : '-'}</Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>Phone: </Col>
                            <Col span={16}>{userData?.whatsapp ? userData.whatsapp : '-'}</Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>Business Name: </Col>
                            <Col span={16}>{userData?.companyName ? userData.companyName : '-'}</Col>
                        </Row>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileComponent;
