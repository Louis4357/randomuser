import React, { useState, useEffect } from 'react';
import DataGrid, { Column, Sorting, StateStoring } from 'devextreme-react/data-grid'

export default function Query({ value, country, selected }) {
    const [data, setData] = useState([]);
    var nat = country !== "" ? `&nat=${country}` : ""

    useEffect(() => {
        fetchData(value, nat)
    }, [value, nat])

    async function fetchData(value, nat) {
        if (value > 1) {
            await fetch(`https://randomuser.me/api/?results=${value}${nat}&seed=foobar`).then(res => {
                if (res.ok) return res.json()
                throw new Error('Request failed.')
            }).then(data => data.results.map(result => ({
                FirstName: result.name.first,
                LastName: result.name.last,
                age: result.dob.age,
                gender: result.gender,
                city: result.location.city,
                country: result.location.country,
                email: result.email,
                username: result.login.username,
                password: result.login.password
                })))
            .then(newData => setData(newData)).catch(error => alert(error))  
        }
    }

    return (
            <DataGrid
                id="gridContainer"
                dataSource={data}
                selection={{ mode: 'single' }}
                hoverStateEnabled={true}
                allowColumnReordering={true}
                columnAutoWidth={true}
                showBorders={true}
                onSelectionChanged={selected}
            >
                <Sorting mode="multiple" />
                <StateStoring enabled={true} type="localStorage" storageKey="storage" />
                <Column dataField="FirstName" />
                <Column dataField="LastName" />
                <Column dataField="age" />
                <Column dataField="gender" />
                <Column dataField="city" />
                <Column dataField="country" />
                <Column dataField="email" />
            </DataGrid>
    )
}