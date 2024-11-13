import React, {useState} from 'react';
import {Form, Input, Button, message, Divider, Row, Col} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, HomeOutlined} from '@ant-design/icons';
import './style.css';
import {login, signInWithGoogle, signUp} from "../../APIs/api";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import LoginImage from "../../assets/Images/loginImage.svg"
import GoogleIcon from "../../assets/Images/GoogleIcon.svg"
import {useNavigate} from "react-router-dom";
// import Facebook from "../../assets/Images/facebook.png"

const LoginComponent = ({isLoginModal, closeLoginModal}) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isLogin, setIsLogin] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleOnChange = (value) => {
        setPhoneNumber(value);
    };

    const onFinish = async (data) => {
        if(isLogin) {
            await login(data).then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userData', JSON.stringify(response.data.user));
                localStorage.setItem('activeKey', 'ABOVE20')
                message.success(response.message);
                navigate('/search');
                window.location.reload();
            }).catch((e) => {
                message.error(e?.response?.data?.error);
                console.log(e)
            })
        } else {
            const payload = {
                username: data?.name,
                email: data?.email,
                password: data?.password,
                companyName: data?.companyName,
                telephone: '+' + phoneNumber,
            }
            await signUp(payload).then((response) => {
                form.resetFields();
                setPhoneNumber("");
                setIsLogin(true);
                message.success('User created successfully!!!');
                navigate('/search');
            }).catch((e) => {
                message.error(e?.response?.data?.error);
                console.log(e)
            })
        }

    };

    const googleLogin =  async () => {
        await signInWithGoogle().then((response) => {
           window.location.href = response;
        }).catch((e) => {
           console.log("e",e);
        })
    }

    return (
        <div className={'login-container'} >
            <Row className={'login-container-row-wrapper'} >
                <Col span={10}>
                    <div
                        style={{
                            width: '100%',
                            padding: '0px',
                        }}
                    >
                        <div className='login-form'>
                            <Form
                                form={form}
                                name="normal_login"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <div style={{marginBottom: '30px'}}>
                                    <div className='login-page-header'>
                                        <div className="header-title">{isLogin ? 'Log In' : 'Sign Up'}</div>
                                    </div>
                                </div>
                                {
                                    isLogin ?
                                        <>
                                            <div>Email</div>
                                            <Form.Item
                                                className='input-field antd-input-field'
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Email!',
                                                    },
                                                ]}
                                            >
                                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                                       placeholder="Email"/>
                                            </Form.Item>
                                            <div>Password</div>
                                            <Form.Item
                                                className='input-field antd-input-field'
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Password!',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button">
                                                    Log in
                                                </Button>
                                                <div style={{marginTop: '5px', textAlign: 'right'}}>
                                                    <div style={{cursor: 'pointer'}}>Forgot Password?</div>
                                                </div>
                                                <Divider>OR</Divider>
                                                <div style={{display: 'flex', flexFlow: 'column', gap: '10px'}}>
                                                    <Button onClick={() => googleLogin()}
                                                            className='sign-in-with-google-button'>
                                                        <div><img src={GoogleIcon} alt={"Google"} height={20} width={20}
                                                                  style={{display: 'flex'}}/></div>
                                                        <div>Sign in with Google</div>
                                                    </Button>
                                                </div>
                                            </Form.Item>
                                            <div>
                                                <div style={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
                                                    Don't have an account?
                                                    <div style={{cursor: 'pointer', color: '#C59476', fontWeight: 600}}
                                                        onClick={() => {navigate('/register');}}>Create a new account</div>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <>
                                                <div>Full Name</div>
                                                <Form.Item
                                                    className='input-field antd-input-field'
                                                    name="name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={<UserOutlined className="site-form-item-icon"/>}
                                                        placeholder="Name"/>
                                                </Form.Item>
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <div>Email</div>
                                                        <Form.Item
                                                            className='input-field antd-input-field'
                                                            name="email"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your Email!',
                                                                },
                                                            ]}
                                                        >
                                                            <Input
                                                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                                                placeholder="Email"/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div>Phone Number</div>
                                                        <div className='react-phone-input'>
                                                            <PhoneInput
                                                                country={'us'}
                                                                value={phoneNumber}
                                                                onChange={handleOnChange}
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div>Password</div>
                                                <Form.Item
                                                    className='input-field antd-input-field'
                                                    name="password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Password!',
                                                        },
                                                    ]}
                                                >
                                                <Input
                                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                </Form.Item>
                                                <div>Company Name</div>
                                                <Form.Item
                                                    className='input-field antd-input-field'
                                                    name="companyName"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Company Name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={<HomeOutlined className="site-form-item-icon"/>}
                                                        placeholder="Company Name"/>
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit"
                                                            className="login-form-button">
                                                        Sign Up
                                                    </Button>
                                                </Form.Item>
                                            </>
                                            <Divider>OR</Divider>
                                            <div style={{display: 'flex', flexFlow: 'column', gap: '10px'}}>
                                                <Button onClick={() => googleLogin()}
                                                        className='sign-in-with-google-button'>
                                                    <div><img src={GoogleIcon} alt={"Google"} height={20} width={20}
                                                              style={{display: 'flex'}}/></div>
                                                    <div>Sign up with Google</div>
                                                </Button>
                                            </div>
                                            <div>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    gap: '5px',
                                                    cursor: 'pointer',
                                                    color: '#C59476',
                                                    fontWeight: 600,
                                                    marginTop: '10px'
                                                }} onClick={() => setIsLogin(true)}>
                                                    Back to Login
                                                </div>
                                            </div>
                                        </>
                                }
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col span={14} style={{backgroundColor: '#110B0B'}}>
                    <div>
                        <img src={LoginImage} alt={"Diamond Image"} style={{width: '100%'}}/>
                    </div>
                </Col>
            </Row>
        </div>
        // <div style={{backgroundColor: '#110B0B', height: '100vh'}}>
        //     <div className={'login-container'}>
        //         <Row >
        //         {/*<Col span={12} style={{ textAlign: 'center', backgroundColor: '#fff' }}>*/}
        //         {/*    <img alt={"Diamond"} src={Diamond} />*/}
        //         {/*</Col>*/}
        //         <Col span={12} style={{backgroundColor: '#fff'}}>
        //             <div>Hello</div>
        //         </Col>
        //         <Col span={12} style={{display: 'flex', alignItems: 'center'}}>
        //             <div
        //                 style={{
        //                     width: '100%',
        //                     display: 'flex',
        //                     justifyContent: 'center',
        //                     padding: '0px',
        //                 }}
        //             >
        //                 <div className='login-form'>
        //                     <Form
        //                         form={form}
        //                         name="normal_login"
        //                         initialValues={{
        //                             remember: true,
        //                         }}
        //                         onFinish={onFinish}
        //                     >
        //                         <div style={{marginBottom: '30px'}}>
        //                             <div className='login-page-header'>
        //                                 <div className="header-title">Labnet</div>
        //                             </div>
        //                             <div className='header-login-desc'>Global Lab-grown diamond inventory
        //                             </div>
        //                         </div>
        //                         {
        //                             isLogin ?
        //                                 <>
        //                                     <div>Email</div>
        //                                     <Form.Item
        //                                         className='input-field'
        //                                         name="email"
        //                                         rules={[
        //                                             {
        //                                                 required: true,
        //                                                 message: 'Please input your Email!',
        //                                             },
        //                                         ]}
        //                                     >
        //                                         <Input prefix={<UserOutlined className="site-form-item-icon"/>}
        //                                                placeholder="Email"/>
        //                                     </Form.Item>
        //                                     <div>Password</div>
        //                                     <Form.Item
        //                                         className='input-field'
        //                                         name="password"
        //                                         rules={[
        //                                             {
        //                                                 required: true,
        //                                                 message: 'Please input your Password!',
        //                                             },
        //                                         ]}
        //                                     >
        //                                         <Input
        //                                             prefix={<LockOutlined className="site-form-item-icon"/>}
        //                                             type="password"
        //                                             placeholder="Password"
        //                                         />
        //                                     </Form.Item>
        //                                     <Form.Item>
        //                                         <Button type="primary" htmlType="submit" className="login-form-button">
        //                                             Log in
        //                                         </Button>
        //                                         <div style={{marginTop: '5px', textAlign: 'right'}}>
        //                                             <a href="#">Forgot Password?</a>
        //                                         </div>
        //                                         <Divider>OR</Divider>
        //                                         <div style={{display: 'flex', flexFlow: 'column', gap: '10px'}}>
        //                                             {/*<Button onClick={() => googleLogin()} className='sign-in-with-facebook-button'>*/}
        //                                             {/*    <div><img src={Facebook} alt={"Facebook"} height={20} width={20} style={{display: 'flex'}}/></div>*/}
        //                                             {/*    <div style={{width: '100%'}}>Sign in with Facebook</div>*/}
        //                                             {/*</Button>*/}
        //                                             <Button onClick={() => googleLogin()}
        //                                                     className='sign-in-with-google-button'>
        //                                                 <div><img src={Google} alt={"Google"} height={20} width={20}
        //                                                           style={{display: 'flex'}}/></div>
        //                                                 <div style={{width: '100%'}}>Sign in with Google</div>
        //                                             </Button>
        //                                         </div>
        //                                     </Form.Item>
        //                                     <div>
        //                                         <div style={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
        //                                             Don't have an account?
        //                                             <div style={{cursor: 'pointer', color: '#2481FF'}}
        //                                                  onClick={() => setIsLogin(false)}>Create a new account</div>
        //                                         </div>
        //                                     </div>
        //                                 </> :
        //                                 <>
        //                                     <>
        //                                         <div>Full Name</div>
        //                                         <Form.Item
        //                                             className='input-field'
        //                                             name="name"
        //                                             rules={[
        //                                                 {
        //                                                     required: true,
        //                                                     message: 'Please input your Name!',
        //                                                 },
        //                                             ]}
        //                                         >
        //                                             <Input
        //                                                 prefix={<UserOutlined className="site-form-item-icon"/>}
        //                                                 placeholder="Name"/>
        //                                         </Form.Item>
        //                                         <div>Email</div>
        //                                         <Form.Item
        //                                             className='input-field'
        //                                             name="email"
        //                                             rules={[
        //                                                 {
        //                                                     required: true,
        //                                                     message: 'Please input your Email!',
        //                                                 },
        //                                             ]}
        //                                         >
        //                                             <Input
        //                                                 prefix={<MailOutlined className="site-form-item-icon"/>}
        //                                                 placeholder="Email"/>
        //                                         </Form.Item>
        //                                         <div>Password</div>
        //                                         <Form.Item
        //                                             className='input-field'
        //                                             name="password"
        //                                             rules={[
        //                                                 {
        //                                                     required: true,
        //                                                     message: 'Please input your Password!',
        //                                                 },
        //                                             ]}
        //                                         >
        //                                             <Input
        //                                                 prefix={<LockOutlined className="site-form-item-icon"/>}
        //                                                 type="password"
        //                                                 placeholder="Password"
        //                                             />
        //                                         </Form.Item>
        //                                         <div>Phone Number</div>
        //                                         <div className='react-phone-input'>
        //                                             <PhoneInput
        //                                                 country={'us'}
        //                                                 value={phoneNumber}
        //                                                 onChange={handleOnChange}
        //                                             />
        //                                         </div>
        //                                         <div>Company Name</div>
        //                                         <Form.Item
        //                                             className='input-field'
        //                                             name="companyName"
        //                                             rules={[
        //                                                 {
        //                                                     required: true,
        //                                                     message: 'Please input your Company Name!',
        //                                                 },
        //                                             ]}
        //                                         >
        //                                             <Input
        //                                                 prefix={<HomeOutlined className="site-form-item-icon"/>}
        //                                                 placeholder="Company Name"/>
        //                                         </Form.Item>
        //                                         <Form.Item>
        //                                             <Button type="primary" htmlType="submit"
        //                                                     className="login-form-button">
        //                                                 Sign Up
        //                                             </Button>
        //                                         </Form.Item>
        //                                     </>
        //                                     <Divider>OR</Divider>
        //                                     <div style={{display: 'flex', flexFlow: 'column', gap: '10px'}}>
        //                                         {/*<Button onClick={() => googleLogin()}*/}
        //                                         {/*        className='sign-in-with-facebook-button'>*/}
        //                                         {/*    <div><img src={Facebook} alt={"Facebook"} height={20} width={20} style={{display: 'flex'}}/></div>*/}
        //                                         {/*    <div style={{width: '100%'}}>Sign up with Facebook</div>*/}
        //                                         {/*</Button>*/}
        //                                         <Button onClick={() => googleLogin()}
        //                                                 className='sign-in-with-google-button'>
        //                                             <div><img src={Google} alt={"Google"} height={20} width={20}
        //                                                       style={{display: 'flex'}}/></div>
        //                                             <div style={{width: '100%'}}>Sign up with Google</div>
        //                                         </Button>
        //                                     </div>
        //                                     <div>
        //                                         <div style={{
        //                                             display: 'flex',
        //                                             justifyContent: 'center',
        //                                             gap: '5px',
        //                                             cursor: 'pointer',
        //                                             color: '#2481FF',
        //                                             marginTop: '10px'
        //                                         }} onClick={() => setIsLogin(true)}>
        //                                             Back to Login
        //                                         </div>
        //                                     </div>
        //                                 </>
        //                         }
        //
        //                     </Form>
        //                 </div>
        //             </div>
        //         </Col>
        //     </Row>
        //     </div>
        // </div>
    );
};

export default LoginComponent;
