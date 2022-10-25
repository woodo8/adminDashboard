import ReactTable from 'react-data-table-component';
import { Fragment } from 'react';

export const Table = () => {
    const Data = [
        { id: "1", name: "Product Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "2", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-warning f-12" />, creat_on: "2018-04-18T00:00:11", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "3", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "4", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-danger f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "5", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-danger f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "6", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-warning f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "7", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "8", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "9", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "10", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "11", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "12", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "13", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
        { id: "14", name: "Category Menu", check:<input type="checkbox"/> ,status: <i className="fa fa-circle font-success f-12" />, creat_on: "2018-04-18T00:00:00", hello:"hdjkslkdjnfhjdksldkf", jhi:"12345432345675432456", },
    ]
    const Columns = [
        { name: 'ID', selector: 'check', sortable: true, center: false, },
        { name: 'Name', selector: 'name', sortable: true, center: false, },
        { name: 'Status', selector: 'status', sortable: true, center: false },
        { name: 'Creat_on', selector: 'creat_on', sortable: true, center: false },
        { name: 'Creat_on', selector: 'hello', sortable: true, center: false },
        { name: 'Creat_on', selector: 'jhi', sortable: true, center: false },
    ];
    return (
        <Fragment>
            <ReactTable
                columns={Columns}
                data={Data}
                noHeader
                pagination
            />
        </Fragment>
    )
}