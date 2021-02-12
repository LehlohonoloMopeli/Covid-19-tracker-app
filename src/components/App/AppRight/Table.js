import React from 'react'
import { useTableDataStateValue } from '../AppLeft/StateProvider/TableDataStateProvider'
import './Table.css'

function Table() {

    const list = [];
    const[table__data__state, table__data__dispatch] = useTableDataStateValue();
    console.log("Testing testing: ", table__data__state)

    return (
        <div className="table">
            {
                table__data__state.map( country => (
                <tr>
                    <td>{ country.country }</td>
                    <td><strong>{ country.cases }</strong></td>
                </tr>  
                
                ))
            }
        </div>
    )
}

export default Table
