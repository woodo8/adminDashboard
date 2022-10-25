import React, { useEffect, useState } from 'react'
import './PaginationExample.css'
import axios from 'axios';
// import { Container } from 'react-bootstrap';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import img from '../../assets/images/uzbekistan'


// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });

export default function PaginationExample() {

    return (
        <div className='pagination'>

            <div className='spinner'>
                <div className="circle"></div>
            </div>
           
        </div>
    )
}