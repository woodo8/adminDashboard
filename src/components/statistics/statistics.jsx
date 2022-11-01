import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap';
import { Table } from '../table/Table';
import TabsExample from '../tabsExample/TabsExample';
import './statistics.css'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
export default function Statistics() {
  return (
    <Container fluid={true} className="statistics">
      <Row className='mx-0'>
        <Col className='px-2 card-colored-item' xs="12" sm="6" lg="3">
          <div className='card-colored p-2 p-lg-5  text-white d-flex align-items-center'>
            <PriceCheckIcon className="left-svg" />
            <div>
              <h5>Earnings</h5>
              <h3>6659</h3>
            </div>
            <PriceCheckIcon className="right-svg" />
          </div>
        </Col>
        <Col className='px-2 card-colored-item' xs="12" sm="6" lg="3">
          <div className='card-colored p-2 p-lg-5  text-white d-flex align-items-center'>
            <ShoppingBagIcon className="left-svg" />
            <div>
              <h5>Products</h5>
              <h3>9856</h3>
            </div>
            <ShoppingBagIcon className="right-svg" />
          </div>
        </Col>
        <Col className='px-2 card-colored-item' xs="12" sm="6" lg="3">
          <div className='card-colored p-2 p-lg-5  text-white d-flex align-items-center'>
            <ChatBubbleOutlineOutlinedIcon className="left-svg" />
            <div>
              <h5>Messages</h5>
              <h3>893</h3>
            </div>
            <ChatBubbleOutlineOutlinedIcon className="right-svg" />
          </div>
        </Col>
        <Col className='px-2 card-colored-item' xs="12" sm="6" lg="3">
          <div className='card-colored p-2 p-lg-5  text-white d-flex align-items-center'>
            <PersonAddAltOutlinedIcon className="left-svg" />
            <div>
              <h5>New user</h5>
              <h3>45651</h3>
            </div>
            <PersonAddAltOutlinedIcon className="right-svg" />
          </div>
        </Col>
      </Row>
      <Row className='my-2 my-lg-5'>
        <Col md="12">
          <TabsExample />
        </Col>
      </Row>

      <Row className='my-2 my-lg-5 mx-0 numbers'>
        <Col className='card p-4' xs="12">
          <Row>
            <Col className="numbersItem" xs="12" sm="6" lg="3">
              <div className="d-flex align-items-center">
                <StackedBarChartIcon className='numbersIcon' />
                <div>
                  <h3>1003</h3>
                  <p className='numbersText'>Purchase</p>
                </div>
              </div>
            </Col>
            <Col className="numbersItem" xs="12" sm="6" lg="3">
              <div className="d-flex align-items-center">
                <StackedBarChartIcon className='numbersIcon' />
                <div>
                  <h3>1005</h3>
                  <p className='numbersText'>Sales</p>
                </div>
              </div>
            </Col>
            <Col className="numbersItem" xs="12" sm="6" lg="3">
              <div className="d-flex align-items-center">
                <StackedBarChartIcon className='numbersIcon' />
                <div>
                  <h3>100</h3>
                  <p className='numbersText'>Sales return</p>
                </div>
              </div>
            </Col>
            <Col className="numbersItem" xs="12" sm="6" lg="3">
              <div className="d-flex align-items-center">
                <StackedBarChartIcon className='numbersIcon' />
                <div>
                  <h3>101</h3>
                  <p className='numbersText'>Purchase Ret</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='my-2 my-lg-5'>
        <Col md="12">
          <Card>
            <Table />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
