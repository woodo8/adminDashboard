import React, { useContext } from 'react'
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

export default function HumoINside() {
  const { navStretch } = useContext(StateContext)
  var { id } = useParams()
  const filteredItem = tableDatas.filter(item => item.id === id)  

  console.log(filteredItem)
  return (
    <div className={navStretch ? "ml-285" : "ml-90"}>
      <Container className="humoinside px-0">
        <div className="header d-flex justify-content-between align-items-center">
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
        <h4 className='mt-4  mb-3 mainColor bolder'> <span className='bold text-dark'> Transaction Id: </span>{filteredItem[0].id}</h4>


        <Row className='mb-4'>
          <Col md="3">
            <div className="boxshadow bg-white p-3 inside-item">
              <div className='icon-box'>
                <CornerRightUp className='mainColor' />
              </div>
              <div>
                <p className='title'>Sender Phone:</p>
                <p className='mainDesc mainColor'>{filteredItem[0].sender}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].receiver.phone}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].receiver.card_number}</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className={`boxshadow p-3 inside-item ${filteredItem[0].status}`}>
              <div className='icon-box'>
                <EventAvailableIcon className='mainColor' />
              </div>
              <div>
                <p className='title text-white'>Status:</p>
                <p className='mainDesc text-white '>{filteredItem[0].status}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].debit}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].credit}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].created_at}</p>
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
                <p className='mainDesc mainColor'>{filteredItem[0].updated_at}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='roww justify-content-end'>
           <Col md="2">
            <button className='cheque w-100'>
                Get Cheque
            </button>
           </Col>
        </Row>
      </Container>
    </div>
  )
}
