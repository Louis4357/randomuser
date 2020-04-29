import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'


export default ({handleSubmit, handleChange, handleCountrySelect, keyPress, input, country }) => {
    const countryPairs = [
        {label: "Australia", value: "AU"},
        {label: "Brazil", value: "BR"},
        {label: "Canada", value: "CA"},
        {label: "Switzerland", value: "CH"},
        {label: "Germany", value: "DE"},
        {label: "Denmark", value: "DK"},
        {label: "Spain", value: "ES"},
        {label: "Finland", value: "FI"},
        {label: "France", value: "FR"},
        {label: "United Kingdom", value: "GB"},
        {label: "Ireland", value: "IE"},
        {label: "Iran", value: "IR"},
        {label: "Norway", value: "NO"},
        {label: "Netherlands", value: "NL"},
        {label: "New Zealand", value: "NZ"},
        {label: "Turkey", value: "TR"},
        {label: "United States", value: "US"},
    ]
    countryPairs.sort((a, b) => a.label > b.label ? 1 : -1)

    return (
        <form onSubmit={handleSubmit} >
            <TextField required id="standard-basic" label="Total Results" type="number" min="0" onChange={handleChange} onKeyDown={keyPress} value={input} />
            <FormControl style={{display: 'block', marginTop: 5}}>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                    labelId="country-label"
                    id="country-label-select"
                    value={country}
                    onChange={handleCountrySelect}
                >
                {
                    countryPairs.map(cp => <MenuItem key={cp.value} value={cp.value}>{cp.label}</MenuItem>)
                }
                </Select>
            </FormControl>
            <Button variant="contained" style={{display: 'block', marginTop: 5}} type="submit" >Search</Button>
        </form>
    );
}