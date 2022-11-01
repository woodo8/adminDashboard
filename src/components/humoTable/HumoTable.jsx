import React, { useContext, useEffect, useState } from 'react'
import './HumoTable.css'
// import { tableDatas } from '../../data/tableDatas'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from "moment"
import StateContext from '../../context/useContext';

export default function HumoTable() {
    const navigate = useNavigate()

    const [tableDatas, setTableDatas] = useState([])

    const { getToggle, setGetToggle } = useContext(StateContext)

    const transactionInside = (e, id) => {
        e.preventDefault();
        navigate(`/humo/${id}`);
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/transactions`).then(res => {
            setTableDatas(res.data.data)
            console.log(res.data.data[0].status)
        }).catch(err => console.log(err))
    }, [getToggle])

    return (
        <div className='humoTable'>
            {/* <DataGrid rows={rows} columns={columns} /> */}
            <table className="table">
                <thead>
                    <tr className='py-5 bg-primary text-white'>
                        <th scope="col">#</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Receiver</th>
                        <th scope="col">Debit</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Updated at</th>
                    </tr>
                </thead>
                <tbody>
                    {tableDatas.length != 0 && tableDatas.map((item) => (
                        <tr key={item._id} className={`py-3 ${item.status}light`} >
                            <th onClick={(e) => transactionInside(e, item._id)} scope="row">{item._id}</th>
                            <td>{item.sender}</td>
                            <td>{item.receiver}</td>
                            <td>{item.debit}</td>
                            <td>{item.credit}</td>
                            <td><p className={`status ${item.status}`}>{item.status}</p></td>
                            <td>{moment(item.createdAt).format("MMM Do YY")}</td>
                            <td>{moment(item.createdAt).format("MMM Do YY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
