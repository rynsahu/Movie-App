import React from 'react';
import TableBody from './tableBody'; 
import TableHeader from './tableHeader';

const Table = ({ columns, onSort, sortColumn, data }) => {
    return ( 
        <div className="table-style">
            <table className="table">
                <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
                />
                <TableBody
                columns={columns}
                data={data}
                />
            </table>
        </div>      
     );
}
 
export default Table;