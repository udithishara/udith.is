import React, { Component } from 'react';
import Loading from './Loading';
import Error from './Error';

class FetchData extends Component {

  constructor(props) {
    super(props)
    // console.log(props)
    //Place the load in main app.js file to avoid onloadwff.js error
    window.google.load('visualization', '1', {'packages': ['table']});
    window.google.setOnLoadCallback(this._fetchData.bind(this));
    this.state = {
      FetchState: null
    }
  }

  componentDidMount() {
    this._fetchData(this.props)
  }

  // https://coderwall.com/p/pluhsg/google-spreadsheet-json-api-sql-filtering
  parseData(data) {
    let column_length = data.cols.length;
    if (!column_length || !data.rows.length) {
      return false;
    }
    let columns = [],
      result = [],
      row_length,
      value;
    for (let column_idx in data.cols){
      columns.push(data.cols[column_idx].label);
    }
    for (let rows_idx in data.rows){
      row_length = data.rows[rows_idx]['c'].length;
      if (column_length !== row_length) {
        // Houston, we have a problem!
        return false;
      }
      for (let row_idx in data.rows[rows_idx]['c']) {
        if (!result[rows_idx]) {
          result[rows_idx] = {};
        }
        value = !!data.rows[rows_idx]['c'][row_idx].v ? data.rows[rows_idx]['c'][row_idx].v : null;
        result[rows_idx][columns[row_idx]] = value;
      }
    }
    return result;
  }

  _fetchData = async () => {
    this.setState({
      FetchState: <Loading />
    });

    try {
      // console.log(this.props.gQuery)
      if (typeof window.google === 'object' && typeof window.google.visualization === 'object') {

        let query;
        const SpreadSheetKey = '1A1rj3kaUdwaKjqfIz8hE6UJHUruEIyT66QyCFUMB5V8';
        const URL = 'https://spreadsheets.google.com/tq?key='+SpreadSheetKey+'&gid=0';
        query = new window.google.visualization.Query(URL);

        // https://developers.google.com/chart/interactive/docs/querylanguage
        query.setQuery(this.props.gQuery);
        query.send((response) => {

          let dataTable = response.getDataTable();
          let jsonData = JSON.parse(dataTable.toJSON());
          let parsedData = this.parseData(jsonData);
          // console.log(parsedData);
          if (parsedData) {
            this.props.onFetch(parsedData, this.props.saveState)
          } else {
            this.setState({
              FetchState: <Error message="No such article"/>
            });
          }
        });
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  render() {
    return this.state.FetchState
  }


}

export default FetchData;
