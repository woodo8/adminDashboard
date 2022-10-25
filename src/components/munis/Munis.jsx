import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StateContext from '../../context/useContext'
import { Home } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Munis.css'
import HumoTable from '../humoTable/HumoTable';


export default function Munis() {
    const { navStretch } = useContext(StateContext)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    useEffect(() => {
      
    }, [])
    

    return (
        <div className={navStretch ? "ml-285" : "ml-90"}>
            <Container className="px-0">
                <div className={navStretch ? 'humocard px-20' : "humocard"}>
                    <div className="header d-flex justify-content-between align-items-center">
                        <h3 className="title mainColor">
                            Transfers
                        </h3>
                        <div className="breadcrumbs d-flex align-items-center mainColor">
                            <p className='pointer d-flex align-items-center'><Home /></p>
                            <p className='bold'>/Munis</p>
                            <p>/Payments</p>
                        </div>
                    </div>
                    <Row className='row-layout'>
                        <Col className='boxshadow' md="12 bg-white p-5 my-5">
                            <Row>
                                <Col md="2">
                                    <h6>Reference</h6>
                                    <input type="text" className='searchInputt' placeholder='Ref Number UUID' />
                                </Col>
                                <Col md="2">
                                    <h6>Sender</h6>
                                    <input type="text" className='searchInputt' placeholder='Sender Phone' />
                                </Col>
                                <Col md="2">
                                    <h6>Receiver</h6>
                                    <input type="text" className='searchInputt' placeholder='Receiver Phone' />
                                </Col>
                                <Col md="2">
                                    <h6>Date</h6>
                                    <input type="text" className='searchInputt' placeholder='Select Date' />
                                </Col>
                                <Col md="2">
                                    <h6>Status</h6>
                                    <FormControl className='w-100'>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            // displayEmpty
                                            className='searchInputt'
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >

                                            <MenuItem value={10}>Checked</MenuItem>
                                            <MenuItem value={20}>Confirmed</MenuItem>
                                            <MenuItem value={30}>Invalid</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Col>
                                <Col md="2 d-flex align-items-end">
                                    <Button className='w-100' variant="contained">Search</Button>
                                </Col>
                            </Row>
                            <Row className='my-5'>
                                <Col md="12">
                                    <HumoTable />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </div>
    )
}
