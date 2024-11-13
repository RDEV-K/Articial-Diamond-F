import React from 'react';
import {Button, Layout, Avatar, Dropdown, Menu} from 'antd';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';
import {UserOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {logout} from "../../APIs/api";
import {useNavigate} from "react-router-dom";
const { Header } = Layout;

function HeaderComponent() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const currentUrl = window.location.pathname;

  const handleMenuClick = async (e) => {
      if(e.key === 'LOGOUT') {
          await logout(userData?.id).then((response) => {
              localStorage.removeItem('token');
              localStorage.removeItem('userData');
              localStorage.removeItem('activeKey')
              // window.location.reload();
              navigate('/search');
          }).catch((e) => {
              console.log(e)
          })
      } else if(e.key === 'PROFILE') {
          navigate(`/profile/${userData?.id}`)
      }
  };

  const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="PROFILE">Profile</Menu.Item>
        <Menu.Item key="LOGOUT">Logout</Menu.Item>
      </Menu>
  );

  const setActiveKey = (val) => {
    localStorage.setItem('activeKey', val);
    navigate('/');
  }

  return (
    <>
      <Header className="site-page-header">
        <div className='header-content'>
            <div className='header-logo-content'>
                <div className='header-title'>Labnet</div>
                {/*<img height={40} width={40} alt="logo" src={LabnetLogo}/>*/}
                {/*{*/}
                {/*    token ?*/}
                {/*        <div>*/}
                {/*            <TabsComponent/>*/}
                {/*        </div> : null*/}
                {/*}*/}
                <div style={{color: 'gray'}}>Global Lab-grown diamond inventory</div>
            </div>
            {
                currentUrl === '/login' && !token ?
                    // <div className='header-login-button'>
                    //     <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    //         <div className='account-text' >Don't have an account yet?</div>
                    //         <Button className='choose-plan-btn' onClick={() => navigate('/subscription-plan')}>Choose a Plan</Button>
                    //     </div>
                    // </div> 
                    null :
                    currentUrl === '/subscription-plan' && !token ?
                        <div className='header-login-button'>
                            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                                <Button className='login-button' onClick={() => navigate('/login')}>Login</Button>
                            </div>
                        </div> :
                        <div className='header-login-button'>
                            {/* <Navbar expand="lg" className='header-menu'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className='drop-down'>
                                    <Nav className="me-auto">
                                        <Nav className='header-navItem' onClick={() => setActiveKey("MELEE_EXPRESS")}>Melee Diamonds</Nav>
                                        <Nav className='header-navItem' onClick={() => setActiveKey("ABOVE20")}>20 Point Up</Nav>
                                        <Nav className='header-navItem' onClick={() => setActiveKey("MATCHING_PAIRS")}>Matching Pairs</Nav>
                                        <Nav className='header-navItem' onClick={() => setActiveKey("COLORED_DIAMONDS")}>Colored Diamonds</Nav>
                                        <Nav className='header-navItem' onClick={() => setActiveKey("JEWELRY_WATCHES")}>Jewelry Watches</Nav>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar> */}
                            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                                <div style={{color: 'grey', cursor: 'pointer'}}
                                    onClick={() => navigate('/need-help')}>Need
                                    Help <QuestionCircleOutlined/></div>
                                {
                                    token ?
                                        <div
                                            style={{display: 'flex', alignItems: 'center', gap: '10px', color: '#fff'}}>
                                            Hello, {userData?.username}
                                            <Dropdown
                                                overlay={menu}
                                                trigger={['click']}
                                                placement="bottomRight"
                                                onChange={(value) => console.log("value", value)}
                                            >
                                                <Avatar style={{backgroundColor: '#87d068', cursor: 'pointer'}}
                                                        icon={<UserOutlined/>}/>
                                            </Dropdown>
                                        </div> :
                                        <Button className='login-button' onClick={() => navigate('/login')}>Login</Button>
                                }
                            </div>
                        </div>
            }
        </div>
      </Header>
    </>
  );
}

export default HeaderComponent;
