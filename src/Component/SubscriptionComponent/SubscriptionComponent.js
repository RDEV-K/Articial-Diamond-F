import React, {useState} from "react";
import './style.css';
import {Button, Radio} from "antd";
import {useNavigate} from "react-router-dom";
import Check from "../../assets/Images/check.png";
import Close from "../../assets/Images/closeIcon.png";
import VISA from "../../assets/Images/Visa.png";
import AmericanExpress from "../../assets/Images/AmericanExpress.png";
import Discover from "../../assets/Images/Discover.png";
import masterCard from "../../assets/Images/masterCard.png";
import Diamond from "../../assets/Images/DiamondForTable.png"

const SubscriptionComponent = () => {
    const navigate = useNavigate();
    const [currentPlan, setCurrentPlan] = useState("ANNUALLY")

    const onTabChange = (val) => {
        setCurrentPlan(val.target.value);
    }

    const planContent = (user) => {
        return (
            <div className='plan-detail'>
                <div className='plan-header' style={{color: user === 'BUYER' ? '#AF3D8E' : '#009ED3'}}>
                    <div style={{fontSize: '16px'}}>LABNET</div>
                    <div style={{fontSize: '30px'}}>{user === 'BUYER' ? 'BUYER' : 'SELLER'}</div>
                </div>
                {
                    currentPlan === "ANNUALLY" ?
                        <div className='plan-price-detail'>
                            <div className={'plan-price'}>{user === 'BUYER' ? '$729' : '$1399'}</div>
                            <Button className='plan-price-save-btn'>Save {user === 'BUYER' ? '$111' : '$221'}</Button>
                        </div> :
                        <div className='plan-price-detail'>
                            <div className={'plan-price'}>{user === 'BUYER' ? <div>$135 <span style={{fontSize: '28px'}}>/mo</span></div> :
                                <div>$70 <span style={{fontSize: '28px'}}>/mo</span></div>}</div>
                            <div>{user === 'BUYER' ? '$840 /year' : '$1,620 /year'}</div>
                        </div>
                }
                <div className='plan-desc-content'>
                    <div className='plan-desc'>
                        {user === 'BUYER' ?
                            <div>For members of the trade looking to <b>buy diamonds and jewelry</b>, and access diamond pricing information and tools.</div> :
                            <div>For diamond dealers who are looking to <b>buy and sell diamonds and jewelry</b>.</div>
                        }
                    </div>
                </div>
                <div className='plan-apply'>
                    <Button className='apply-btn' onClick={() => navigate("/login")}>Apply Now</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="subscription-component">
            <div className='subsciption-container'>
                <div className='subsciption-content'>
                    <div className='plans-price-component'>
                        <div className='plans-price-label'>Plans & Pricing</div>
                        <div className='plans-price-desc'>
                            Whether you're a jeweler, dealer or manufacturer, Labnet has a membership plan to suit your
                            needs. Choose the plan that's right for you.
                        </div>
                    </div>
                </div>
                <div className='subsciption-content'>
                    <div className='plans-table-component'>
                        <div className='plan-radio-group'>
                            <Radio.Group
                                onChange={onTabChange}
                                style={{
                                    marginBottom: 16,
                                }}
                                value={currentPlan}
                                className='radio-group'
                            >
                                <Radio.Button value="ANNUALLY">Billed Annually</Radio.Button>
                                <Radio.Button value="MONTHLY">Billed Monthly</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className='plan-table-content'>
                            <table>
                                <tbody>
                                <tr>
                                    <td><img src={Diamond} alt={"Diamond"} height={200} width={200}/></td>
                                    <td>{planContent('BUYER')}</td>
                                    <td>{planContent('SELLER')}</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{
                                        textAlign: 'left',
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        padding: '10px'
                                    }}>Core Features
                                    </td>
                                </tr>
                                <tr>
                                    <td>Diamond Search</td>
                                    <td><img src={Check} alt={"Check"} height={20} width={20}/></td>
                                    <td><img src={Check} alt={"Check"} height={20} width={20}/></td>
                                </tr>
                                <tr>
                                    <td>List Diamonds for Sale</td>
                                    <td><img src={Close} alt={"Close"} height={20} width={20}/></td>
                                    <td>Up to $ 7 million total value</td>
                                </tr>
                                <tr>
                                    <td>Priority Customer Support</td>
                                    <td><img src={Close} alt={"Close"} height={20} width={20}/></td>
                                    <td><img src={Close} alt={"Close"} height={20} width={20}/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='subsciption-content'>
                    <div className="plan-footer">
                        <div className="plan-footer-desc">All prices are in USD. Plans can be canceled at any time in
                            accordance with our terms and conditions. Accepting Visa, Master Card, American Express, and
                            Discover.
                        </div>
                        <div className="plan-footer-iamges">
                            <img src={VISA} alt={"Visa"} height={40} width={50}/>
                            <img src={AmericanExpress} alt={"Visa"} height={40} width={70}/>
                            <img src={Discover} alt={"Visa"} height={40} width={50}/>
                            <img src={masterCard} alt={"Visa"} height={40} width={50}/>
                        </div>
                    </div>
                </div>
                <div className='subsciption-content'>
                    <div className='subsciption-question-component'>
                        <div className='question-label'>Have any questions?</div>
                        <div className='question-desc'>
                            Our highly trained and friendly Customer Service representatives are always here
                            to answer your questions about our products, integrations, or any other queries you
                            have.
                        </div>
                        <div>
                            <Button onClick={() => navigate('/need-help')} className='contact-us-btn'>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionComponent;
