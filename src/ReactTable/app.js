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

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: [], // default select on table
  hideSelectColumn: true,
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect
};

function trClassNameFormat(rowData, rIndex) {
  return rIndex % 3 === 0 ? 'third-tr' : '';
}

function priceFormatter(cell, row) {
  return `${cell}`;
}

function onRowSelect(row, isSelected) {
  console.log(row);
  console.log(`selected: ${isSelected}`);
  App.handleBtnClick(row.category);
}


export default class App extends React.Component {

  handleBtnClick = (e) => {
    this.refs.nameCol.applyFilter(e);
  }

  render() {
    return (
      <BootstrapTable data={ jsonData }
        trClassName={ trClassNameFormat }
        selectRow={ selectRowProp }
        options={ options }
        search
        hover
        pagination>
        <TableHeaderColumn hidden dataField='objectID' dataSort isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='meatCut' dataSort className='good'>Cut</TableHeaderColumn>
        <TableHeaderColumn dataField='cooking' dataSort>Cooking</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataFormat={ priceFormatter }></TableHeaderColumn>
        <TableHeaderColumn ref='nameCol' dataField='category' filterFormatted 
          filter={ { type: 'SelectFilter', options: categoryType }} className='good'></TableHeaderColumn>
        
      </BootstrapTable>
    );
  }
}



