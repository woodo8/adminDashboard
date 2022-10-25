import React from 'react'
import './HumoTable.css'
import { tableDatas } from '../../data/tableDatas'
import { useNavigate } from 'react-router-dom';
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


export default function HumoTable() {
    const navigate = useNavigate()

    const transactionInside = (e, id) => {
        e.preventDefault();
        navigate(`/humo/${id}`);
    }
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
                    {tableDatas.map((item) => (
                        <tr key={item.id} className={`py-3 ${item.status}light`} >
                            <th onClick={(e) => transactionInside(e, item.id)} scope="row">{item.id}</th>
                            <td>{item.sender}</td>
                            <td>{item.receiver.phone} <br />{item.receiver.card_number}</td>
                            <td>{item.debit}</td>
                            <td>{item.credit}</td>
                            <td><p className={`status ${item.status}`}>{item.status}</p></td>
                            <td>{item.created_at}</td>
                            <td>{item.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
