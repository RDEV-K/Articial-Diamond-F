import React, {useState} from 'react';
import {Menu, Layout} from 'antd';
import './style.css';
const { Header } = Layout;

const TabsComponent = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const items1 = userData?.isSeller === 1 || userData?.isSeller === true ?
        [
            { key: 'SEARCH', label: 'See and Search' },
            { key: 'MY_INVENTORY', label: 'My Inventory' }
        ] :
        [
            { key: 'SEARCH', label: 'See and Search' },
        ];

    const urlPath = window.location.pathname === '/privacy-policy' || window.location.pathname === '/terms-and-conditions' || window.location.pathname === '/need-help';

    const [selectedKey, setSelectedKey] = useState(urlPath ? '' : localStorage.getItem('activeKey') || 'SEARCH');

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
        localStorage.setItem('activeKey', e.key)
        if (e.key === 'SEARCH' || e.key === 'MY_INVENTORY') {
            window.location.href = '/search';
        }
    };

    return (
        <>
            <Layout>
                <Header
                    className='header-tab-content'
                >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[selectedKey]}
                        items={items1}
                        style={{
                            flex: 1,
                            minWidth: 200
                        }}
                        onClick={handleMenuClick}
                    />
                </Header>
            </Layout>
        </>
    );
};

export default TabsComponent;
