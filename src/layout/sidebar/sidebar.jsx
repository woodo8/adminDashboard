import React, { useContext } from 'react'
import './sidebar.css'
import Logo from '../../assets/logos/logo.png'
import LogoIcon from '../../assets/logos/logo-icon.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Home } from '@mui/icons-material';
import { Accordion } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LinkIcon from '@mui/icons-material/Link';
import { Divider } from '@mui/material';
import StateContext from '../../context/useContext';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

    const { navStretch, setnavStretch } = useContext(StateContext)

    const navigate = useNavigate()

    return (
        <>
            <div className={navStretch ? "sidebar w-90 l-100per" : "sidebar w-90"}>
                <div className='sidebarHeader d-flex justify-content-center align-items-center'>
                    <img
                        src={LogoIcon} alt="...."
                        onClick={() => navigate("/")}
                        className='logo-icon pointer' />
                </div>
                <div className='bodyNostretch  d-flex flex-column align-items-center'>
                    <Home className='nostrecthIcons' />
                    <CreditCardIcon className='nostrecthIcons' />
                    <CreditCardIcon className='nostrecthIcons' />
                    <CreditCardIcon className='nostrecthIcons' />
                    <CreditCardIcon className='nostrecthIcons' />
                    <CreditCardIcon className='nostrecthIcons' />
                    <Divider />
                    <LinkIcon className='nostrecthIcons' />
                </div>
            </div>

            <div className={navStretch ? 'sidebar w-285' : "sidebar w-285 l-100per"}>

                <div className='sidebarHeader d-flex justify-content-between align-items-center'>
                    <img onClick={() => navigate("/")} src={Logo} alt="...." className='logo pointer' />
                    <MenuIcon onClick={() => setnavStretch(!navStretch)} className="pointer" />
                </div>

                <div className="sidebarBody">
                    <div className="instruction-box">
                        <h5 className='title'>Statistics</h5>
                        <p className="desc">Analytics of total actions</p>
                    </div>
                    <div className='body-item d-flex align-items-center pointer' onClick={() => navigate('/')}><Home /><p className='mx-1'>Dashboard</p></div>
                    <div className="instruction-box">
                        <h5 className='title'>Cards</h5>
                        <p className="desc">Individual card infos</p>
                    </div>

                    <Accordion className='bg-main'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <CreditCardIcon />
                                    <p className='mx-1'>Humo</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main '>
                                <ul>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Card</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Payment</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Transfer(p2p)</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>To card</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Terminal</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <CreditCardIcon />
                                    <p className='mx-1'>Uzcard</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main  '>
                                <ul>
                                    <li onClick={() => navigate("/uzcard")} className='py-2 d-flex align-items-center text-white' ><span>-</span><p>Card</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Payment</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Transfer(p2p)</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>To card</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Terminal</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <CreditCardIcon />
                                    <p className='mx-1'>Paynet</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main  '>
                                <ul>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Payment</p></li>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Terminal</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <CreditCardIcon />
                                    <p className='mx-1'>Munis</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main  '>
                                <ul>
                                    <li onClick={() => navigate("/munis")} className='py-2 d-flex align-items-center text-white'><span>-</span><p>Payments</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <CreditCardIcon />
                                    <p className='mx-1'>Zplat</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main  '>
                                <ul>
                                    <li className='py-2 d-flex align-items-center text-white' onClick={() => navigate('/humo')}><span>-</span><p>Payments</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <div className="instruction-box">
                        <h5 className='title'>Link</h5>
                        <p className="desc">Quick links to other platforms</p>
                    </div>
                    <Accordion className='bg-main mb-5 forLinks'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='bg-main d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center'>
                                    <LinkIcon />
                                    <p className='mx-1'>Directions</p>
                                </div>
                                <ArrowForwardIosIcon className="arrowIcon" />
                            </Accordion.Header>
                            <Accordion.Body className='bg-main '>
                                <ul>
                                    <li className='py-2 d-flex align-items-center text-white'><span>-</span><p>Unired</p></li>
                                    <li className='py-2 d-flex align-items-center text-white'><span>-</span><p>FintechHub</p></li>
                                    <li className='py-2 d-flex align-items-center text-white'><span>-</span><p>Unisoft</p></li>
                                    <li className='py-2 d-flex align-items-center text-white'><span>-</span><p>lorem</p></li>
                                    <li className='py-2 d-flex align-items-center text-white'><span>-</span><p>lorem</p></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}
