import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


var jsonData = require('./data.json');

const options = {
  paginationShowsTotal: true,
  sortName: 'objectID',  // default sort column name
  sortOrder: 'asc'  // default sort order
};

const categoryType = {
  'young-prime':'Young-prime',
  'veal':'Veal',
  'lamb':'Lamb',
  'frozen-goat':'Frozen-goat',
  'misc':'Misc'
};


function trClassNameFormat(rowData, rIndex) {
  return rIndex % 3 === 0 ? 'third-tr' : '';
}

function priceFormatter(cell, row) {
  return `${cell}`;
}

export default class App extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jsonData }
        trClassName={ trClassNameFormat }
        options={ options }
        search
        hover
        pagination>
        <TableHeaderColumn hidden dataField='objectID' dataSort isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='meatCut' dataSort className='good'>Cut</TableHeaderColumn>
        <TableHeaderColumn dataField='cooking' dataSort>Cooking</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataFormat={ priceFormatter }></TableHeaderColumn>
        <TableHeaderColumn dataField='category' filterFormatted 
          filter={ { type: 'SelectFilter', options: categoryType }} className='good'></TableHeaderColumn>
        
      </BootstrapTable>
    );
  }
}



