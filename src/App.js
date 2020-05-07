import React, { Component } from 'react'
import Search from './Search'
import Query from './Table'
import { Grid, Paper } from '@material-ui/core'
import Table2 from './Table2'

let input
let selectedCountry
let selectedDatasource

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      country: "",
      showSelected: false,
      username: "",
      password: "",
      datasource: ""
    }
  }

  handleSubmit = e => {
    input = this.state.value
    selectedCountry = this.state.country
    selectedDatasource = this.state.datasource
    e.preventDefault();
    this.setState({value: ""})
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  keyPress = e => {
    if(e.keyCode === 13) this.handleSubmit(e)
  }

  handleSelected = ({ selectedRowsData }) => {
    const selectedData = selectedRowsData[0]

    this.setState({
      showSelected: !!selectedData,
      username: selectedData && selectedData.username,
      password: selectedData && selectedData.password
    })
  }

  handleCountrySelect = e => {
    this.setState({country: e.target.value})
  }

  handleDatasourceSelect = e => {
    this.setState({datasource: e.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <Grid container >
          <Grid item xs={12} sm={6} >
            <Paper style={{padding: 10}}>
              <Search
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                keyPress={this.keyPress} 
                handleCountrySelect={this.handleCountrySelect}
                handleDatasourceSelect={this.handleDatasourceSelect}
                input={this.state.value}
                country={this.state.country}
                datasource={this.state.datasource}
              />
            </Paper>
            <Paper style={{marginTop: 10, padding: 10}}>
              <Query value={input} country={selectedCountry} selected={this.handleSelected} datasource={selectedDatasource} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Paper style={{padding: 10}}>
              <Table2 uname={this.state.username} pw={this.state.password} />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}