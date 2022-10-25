import React from 'react'
import { Heart } from 'react-feather';
import {
    CardBody,
    Row,
    Col,
    Card,
    CardHeader,
} from 'reactstrap';
import { ColumnChartSale } from '../columnChart/ColumnChart';
import { TotalSaleChart } from '../totalSaleChart/totalSaleChart';
import './TabsExample.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsExample() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Humo" {...a11yProps(0)} />
                        <Tab label="Uzcard" {...a11yProps(1)} />
                        <Tab label="Paynet" {...a11yProps(2)} />
                        <Tab label="Munis" {...a11yProps(3)} />
                        <Tab label="Zplat" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel 
                 value={value} index={0}
                 sx={{
                    "& .MuiBox-root":{
                        padding:"0 !important",
                    }
                 }}
                 >
                    <Row className='my-5'>
                        <Col md="6" sm="12">
                            <Card className='card'>
                                <CardHeader className='bg-white areachart'>
                                    <p className="statTitle">Today Total Sale <span className='statAmount mainColor'>89.21%</span></p>
                                    <h3>$32000</h3>
                                </CardHeader>
                                <CardBody className='p-0'>
                                    <TotalSaleChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" sm="12">
                            <Card className='card'>
                                <CardHeader className='bg-white areachart'>
                                    <p className="statTitle">Today Total Sale <span className='statAmount mainColor'>89.21%</span></p>
                                    <h3>$32000</h3>
                                </CardHeader>
                                <CardBody className='p-0'>
                                    <ColumnChartSale />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" sm="12">
                            <Card className='card p-4'>
                                <CardBody className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="statTitle">Today Total Sale <span className='statNew'>New</span></p>
                                        <h3>$745425</h3>
                                    </div>
                                    <div className='heart-box'>
                                        <Heart color='#3a0ca3' fill='#3a0ca3' />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" sm="12">
                            <Card className='card p-4'>
                                <CardBody className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="statTitle">Today Total Sale <span className='statNew'>Hot</span></p>
                                        <h3>$745425</h3>
                                    </div>
                                    <div>
                                        <h5 className='mainColor'>88%</h5>
                                        <div className='line-info'></div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p className="mb-0 m-t-30"><h1>Uzcard</h1></p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p className="mb-0 m-t-30"><h1>Paynet</h1></p>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <p className="mb-0 m-t-30"><h1>Munis</h1></p>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <p className="mb-0 m-t-30"><h1>Zplat</h1></p>
                </TabPanel>
        </>

    )
}
