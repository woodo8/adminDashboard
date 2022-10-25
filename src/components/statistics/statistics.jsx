import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap';
import { Table } from '../table/Table';
import TabsExample from '../tabsExample/TabsExample';
import './statistics.css'
export default function Statistics() {
  return (
    <Container fluid={true} className="statistics">
      <Row className='my-5'>
        <Col md="12">
          <TabsExample />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col md="12">
          <Card>
            <Table />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
