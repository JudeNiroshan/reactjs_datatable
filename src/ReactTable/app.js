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

function priorityFormatter(cell, row) {
  if (cell === 'A') return '<font color="red">' + cell + '</font>';
  else if (cell === 'B') return '<font color="orange">' + cell + '</font>';
  else return cell;
}

function trClassNameFormat(rowData, rIndex) {
  return rIndex % 3 === 0 ? 'third-tr' : '';
}

function priceFormatter(cell, row) {
  return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
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
        <TableHeaderColumn dataField='objectID' dataSort isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='category' dataSort filterFormatted 
          filter={ { type: 'SelectFilter', options: categoryType }} className='good'>Category</TableHeaderColumn>
        <TableHeaderColumn dataField='meatCut' dataSort className='good'>MeatCut</TableHeaderColumn>
        <TableHeaderColumn dataField='price'  dataSort dataFormat={ priceFormatter }>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='cooking' dataSort>Cooking</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}



