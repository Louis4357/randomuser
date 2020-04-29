import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid'

export default function Table2({ uname, pw }) {
    const data = [{
        UserName: uname,
        password: pw
    }]
    return (
        <React.Fragment>
            {data[0].UserName !== "" &&
            <DataGrid
                dataSource={data}
            >
                <Column dataField="UserName" />
                <Column dataField="password" />
            </DataGrid>}
        </React.Fragment>
    )
}