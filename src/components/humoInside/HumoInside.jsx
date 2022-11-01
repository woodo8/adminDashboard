import React, { useContext, useEffect, useRef, useState } from 'react'
import StateContext from '../../context/useContext'
import { useParams } from 'react-router-dom';
import { tableDatas } from '../../data/tableDatas';
import './HumoInside.css'
import { Container, Col, Row } from 'react-bootstrap';
import { Home } from '@mui/icons-material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CornerLeftDown, CornerRightUp, CreditCard, FilePlus } from 'react-feather';
import PaidIcon from '@mui/icons-material/Paid';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import UpdateIcon from '@mui/icons-material/Update';
import axios from 'axios';
import jsPDF from 'jspdf';
import moment from "moment"

export default function HumoINside() {
  const { navStretch } = useContext(StateContext)
  var { id } = useParams()
  const [filteredItem, setFilteredItem] = useState({})
  // const filteredItem = tableDatas.filter(item => item.id === id)  

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_KEY}/transactions/${id}`).then(res => {
        console.log(res.data.data)
        setFilteredItem(res.data.data)
      }).catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }

  }, [id])

  const pdfFile = useRef();
  const generatePDF = () => {
    try {
      var doc = new jsPDF("p", "pt", "a4")
      doc.html(pdfFile.current, {
        callback: function (pdf) {
          pdf.save("transaction.pdf")
        }
      })
    } catch (error) {
      console.log(error)
    }
    console.log(pdfFile.current)
  }

  console.log(filteredItem)
  return (
    <div className={navStretch ? "ml-285" : "ml-90"}>
      <Container className="humoinside px-0">
        <div className="header flex-column flex-lg-row d-flex justify-content-between align-items-left align-items-lg-center">
          <h3 className="title mainColor">
            Transfers
          </h3>
          <div className="breadcrumbs d-flex align-items-center mainColor">
            <p className='pointer d-flex align-items-center'><Home /></p>
            <p className='bold'>/Humo</p>
            <p>/Cards</p>
            <p>/Transaction</p>
          </div>
        </div>
        <h4 className='mt-4  mb-3 mainColor bolder'> <span className='bold text-dark'> Transaction Id: </span>{filteredItem._id}</h4>

        <div className='zindexx-0' ref={pdfFile}>
          <h1 className='my-2 text-primary text-center'>Sender: {filteredItem.sender}</h1>
          <h1 className='my-2 text-primary text-center'>Receiver: {filteredItem.receiver}</h1>
          <h1 className='my-2 text-primary text-center'>Credit: {filteredItem.credit}</h1>
          <h1 className='my-2 text-primary text-center'>CreatedAt: {moment(filteredItem.createdAt).format("MMM Do YY")}<br /></h1>
          <h1 className='my-2 text-primary text-center'>Status: {filteredItem.status}</h1>
        </div>
        <Row className='mb-4'>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <CornerRightUp className='mainColor' />
              </div>
              <div>
                <p className='title'>Sender Phone:</p>
                <p className='mainDesc mainColor'>{filteredItem.sender}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <CornerLeftDown className='mainColor' />
              </div>
              <div>
                <p className='title'>Receiver Phone:</p>
                <p className='mainDesc mainColor'>{filteredItem.receiver}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <CreditCard className='mainColor' />
              </div>
              <div>
                <p className='title'>Receiver card:</p>
                <p className='mainDesc mainColor'>{filteredItem.receiver}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className={`boxshadow p-3 inside-item ${filteredItem.status}`}>
              <div className='icon-box'>
                <EventAvailableIcon className='mainColor' />
              </div>
              <div>
                <p className='title text-white'>Status:</p>
                <p className='mainDesc text-white '>{filteredItem.status}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <PaidIcon className='mainColor' />
              </div>
              <div>
                <p className='title'>Debit:</p>
                <p className='mainDesc mainColor'>{filteredItem.debit}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <CreditScoreIcon className='mainColor' />
              </div>
              <div>
                <p className='title'>Credit:</p>
                <p className='mainDesc mainColor'>{filteredItem.credit}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <FilePlus className='mainColor' />
              </div>
              <div>
                <p className='title'>Created at:</p>
                <p className='mainDesc mainColor'>{moment(filteredItem.createdAt).format("MMM Do YY")}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="boxshadow p-3 inside-item bg-white">
              <div className='icon-box'>
                <UpdateIcon className='mainColor' />
              </div>
              <div>
                <p className='title '>Updated at:</p>
                <p className='mainDesc mainColor'>{moment(filteredItem.createdAt).format("MMM Do YY")}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='roww justify-content-end'>
          <Col md="2">
            <button onClick={generatePDF} className='cheque w-100'>
              Get Cheque
            </button>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
