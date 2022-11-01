import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StateContext from '../../context/useContext'
import './HumoCard.css'
import { Home } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HumoTable from '../humoTable/HumoTable';
import axios from 'axios';

export default function HumoCard() {
  const { navStretch, getToggle, setGetToggle } = useContext(StateContext)
  const [age, setAge] = useState('');

  const [openAdd, setopenAdd] = useState(false)

  const [sender, setSender] = useState("")
  const [receiver, setReceiver] = useState("")
  const [credit, setCredit] = useState("")


  const [error, setError] = useState(false)
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const sendNewTransaction = () => {
    try {
      credit && sender && receiver ? axios.post(`${process.env.REACT_APP_API_KEY}/transactions/post`, {
        sender: sender,
        receiver: receiver,
        credit: credit
      }).then(res => {
        setGetToggle(!getToggle)
        alert("Added")
        setopenAdd(false)
        setCredit("")
        setSender("")
        setReceiver("")
      }).catch(err => {
        console.log(err)
      }) : setError(true)
    } catch (error) {
      console.log(error)
    }
  }
  const searchHandle = () => {


  }
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
              <p className='bold'>/Humo</p>
              <p>/Cards</p>
            </div>
          </div>

          <Row className='row-layout'>
            <Col className='boxshadow' md="12 bg-white p-3 p-lg-5 my-5">
              <Row>
                <Col md="2" className='mb-lg-0 mb-3'>
                  <h6>Reference</h6>
                  <input type="text" className='searchInputt' placeholder='Ref Number UUID' />
                </Col>
                {/* <Col md="2" className='mb-lg-0 mb-3'>
                  <h6>Sender</h6>
                  <input type="text" className='searchInputt' placeholder='Sender Phone' />
                </Col>
                <Col md="2" className='mb-lg-0 mb-3'>
                  <h6>Receiver</h6>
                  <input type="text" className='searchInputt' placeholder='Receiver Phone' />
                </Col>
                <Col md="2" className='mb-lg-0 mb-3'>
                  <h6>Date</h6>
                  <input type="text" className='searchInputt' placeholder='Select Date' />
                </Col> */}
                {/* <Col md="2" className='mb-lg-0 mb-3'>
                  <h6>Status</h6>
                  <FormControl className='w-100'>
                    <Select
                      value={age}
                      onChange={handleChange}
                      className='searchInputt'
                      inputProps={{ 'aria-label': 'Without label' }}
                    >

                      <MenuItem value={10}>Checked</MenuItem>
                      <MenuItem value={20}>Confirmed</MenuItem>
                      <MenuItem value={30}>Invalid</MenuItem>
                    </Select>
                  </FormControl>
                </Col> */}
                <Col md="2 d-flex align-items-end">
                  <Button onClick={() => {
                    searchHandle()
                  }} className='w-100' variant="contained">Search</Button>
                </Col>
                <Col md="2 d-flex align-items-end" >
                  <Button onClick={() => {
                    setopenAdd(true)
                  }}
                    className='w-100'
                    variant="contained">
                    Add new transaction
                  </Button>
                </Col>
              </Row>
              {

                openAdd &&
                <Row className="my-3">
                  <Col md="2" className='mb-lg-0 mb-3'>
                    <h6>Credit</h6>
                    <input onChange={(e) => setCredit(e.target.value)} type="number" className='searchInputt' placeholder='Amount in numbers' />
                  </Col>
                  <Col md="2" className='mb-lg-0 mb-3'>
                    <h6>Sender</h6>
                    <input onChange={(e) => setSender(e.target.value)} type="text" className='searchInputt' placeholder='Sender Phone' />
                  </Col>
                  <Col md="2" className='mb-lg-0 mb-3'>
                    <h6>Receiver</h6>
                    <input onChange={(e) => setReceiver(e.target.value)} type="text" className='searchInputt' placeholder='Receiver Phone' />
                  </Col>
                  <Col md="2 d-flex align-items-end">
                    <Button
                      onClick={() => {
                        sendNewTransaction()
                      }}
                      className='w-100'
                      variant="contained"
                    >Add</Button>
                  </Col>
                  {error && <p className='text-danger mt-3 bold'>All the fields must be filled !</p>}
                </Row>
              }
              <Row className='my-5'>
                <Col md="12">
                  {/* <Table/> */}
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
