/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint space-infix-ops: 0 */
/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [
        {
            "objectID": "0",
            "category": "young-prime",
            "meatCut": "Blade Roast",
            "price": "8.99",
            "cooking": "Roast"
        },
    {
        "objectID": "1",
        "category": "young-prime",
        "meatCut": "Blade Roast",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "2",
        "category": "young-prime",
        "meatCut": "Bolar Blade",
        "price": "7.3",
        "cooking": "Roast"
    },
    {
        "objectID": "3",
        "category": "young-prime",
        "meatCut": "Butt Fillets",
        "price": "16.5",
        "cooking": "Roast"
    },
    {
        "objectID": "4",
        "category": "young-prime",
        "meatCut": "Cheeks (Beef)",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "5",
        "category": "young-prime",
        "meatCut": "Chuck",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "6",
        "category": "young-prime",
        "meatCut": "Long Fillets",
        "price": "19.5",
        "cooking": "Roast"
    },
    {
        "objectID": "7",
        "category": "young-prime",
        "cooking": "Roast"
    },
    {
        "objectID": "8",
        "category": "young-prime",
        "meatCut": "Chuck Tender",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "9",
        "category": "young-prime",
        "meatCut": "Cube Roll",
        "price": "13.5",
        "cooking": "Roast"
    },
    {
        "objectID": "10",
        "category": "young-prime",
        "meatCut": "Dolphin Shin",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "11",
        "category": "young-prime",
        "meatCut": "Eyeround",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "12",
        "category": "young-prime",
        "meatCut": "Fingers",
        "price": "7.5",
        "cooking": "Roast"
    },
    {
        "objectID": "13",
        "category": "young-prime",
        "meatCut": "Flank Steak",
        "price": "11",
        "cooking": "Roast"
    },
    {
        "objectID": "14",
        "category": "young-prime",
        "meatCut": "Gravy Beef",
        "price": "7.1",
        "cooking": "Roast"
    },
    {
        "objectID": "15",
        "category": "young-prime",
        "meatCut": "Hearts (Beef)",
        "price": "$1.50each",
        "cooking": "Roast"
    },
    {
        "objectID": "16",
        "category": "young-prime",
        "meatCut": "Heel Shin",
        "price": "8.2",
        "cooking": "Roast"
    },
    {
        "objectID": "17",
        "category": "young-prime",
        "meatCut": "Heel Shin (sliced)",
        "price": "N/A",
        "cooking": "Roast"
    },
    {
        "objectID": "18",
        "category": "young-prime",
        "meatCut": "KobjectIDney (Beef)",
        "price": "$1.5 each",
        "cooking": "Roast"
    },
    {
        "objectID": "19",
        "category": "young-prime",
        "meatCut": "Knuckle\n(Round)",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "20",
        "category": "young-prime",
        "meatCut": "Liver (Beef)",
        "price": "$1.50each",
        "cooking": "Roast"
    },
    {
        "objectID": "21",
        "category": "young-prime",
        "meatCut": "Lungs (Beef)",
        "price": "$1.50each",
        "cooking": "Roast"
    },
    {
        "objectID": "22",
        "category": "young-prime",
        "meatCut": "Marrow Bone (cut)",
        "price": "$5.00 ea",
        "cooking": "Roast"
    },
    {
        "objectID": "23",
        "category": "young-prime",
        "meatCut": "Osso Bucco",
        "price": "6.99",
        "cooking": "Roast"
    },
    {
        "objectID": "24",
        "category": "young-prime",
        "meatCut": "Oyster blade",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "25",
        "category": "young-prime",
        "meatCut": "PE Brisket",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "26",
        "category": "young-prime",
        "meatCut": "Pocket Roast",
        "price": "9.5",
        "cooking": "Roast"
    },
    {
        "objectID": "27",
        "category": "young-prime",
        "meatCut": "Rib Eye",
        "price": "14.99",
        "cooking": "Roast"
    },
    {
        "objectID": "28",
        "category": "young-prime",
        "meatCut": "Rump",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "29",
        "category": "young-prime",
        "meatCut": "Rump Steak (Sliced)",
        "price": "10.99",
        "cooking": "Roast"
    },
    {
        "objectID": "30",
        "category": "young-prime",
        "meatCut": "SilversobjectIDe",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "31",
        "category": "young-prime",
        "meatCut": "Spare Ribs",
        "price": "6.8",
        "cooking": "Roast"
    },
    {
        "objectID": "32",
        "category": "young-prime",
        "meatCut": "Baby Back Ribs",
        "price": "6",
        "cooking": "Roast"
    },
    {
        "objectID": "33",
        "category": "young-prime",
        "meatCut": "Striploins",
        "price": "11.2",
        "cooking": "Roast"
    },
    {
        "objectID": "34",
        "category": "young-prime",
        "meatCut": "Denuded Striploin",
        "price": "12.99",
        "cooking": "Roast"
    },
    {
        "objectID": "35",
        "category": "young-prime",
        "meatCut": "Tail (Beef)",
        "price": "8.2",
        "cooking": "Roast"
    },
    {
        "objectID": "36",
        "category": "young-prime",
        "meatCut": "T-Bone",
        "price": "13.5",
        "cooking": "Roast"
    },
    {
        "objectID": "37",
        "category": "young-prime",
        "meatCut": "Tendons (Beef)",
        "price": "7",
        "cooking": "Roast"
    },
    {
        "objectID": "38",
        "category": "young-prime",
        "meatCut": "Thick Skirt",
        "price": "7.5",
        "cooking": "Roast"
    },
    {
        "objectID": "39",
        "category": "young-prime",
        "meatCut": "Tongues (Beef)",
        "price": "10.00 each",
        "cooking": "Roast"
    },
    {
        "objectID": "40",
        "category": "young-prime",
        "meatCut": "TopsobjectIDe ",
        "price": "7.49",
        "cooking": "Roast"
    },
    {
        "objectID": "41",
        "category": "young-prime",
        "meatCut": "TopsobjectIDe Clean",
        "price": "11.2",
        "cooking": "Roast"
    },
    {
        "objectID": "42",
        "category": "young-prime",
        "meatCut": "TopsobjectIDe Cap Off",
        "price": "10.5",
        "cooking": "Roast"
    },
    {
        "objectID": "43",
        "category": "young-prime",
        "meatCut": "NE Brisket ",
        "price": "6.99",
        "cooking": "Roast"
    },
    {
        "objectID": "44",
        "category": "young-beef",
        "meatCut": "Bolar Blade",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "45",
        "category": "young-beef",
        "meatCut": "Chuck",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "46",
        "category": "young-beef",
        "meatCut": "Chuck Tender",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "47",
        "category": "young-beef",
        "meatCut": "Cube Roll",
        "price": "22",
        "cooking": "Roast"
    },
    {
        "objectID": "48",
        "category": "young-beef",
        "meatCut": "Eyeround",
        "price": "9.5",
        "cooking": "Roast"
    },
    {
        "objectID": "49",
        "category": "young-beef",
        "meatCut": "Fillets",
        "price": "25",
        "cooking": "Roast"
    },
    {
        "objectID": "50",
        "category": "young-beef",
        "meatCut": "Knuckle\n(Round)",
        "price": "9.5",
        "cooking": "Roast"
    },
    {
        "objectID": "51",
        "category": "young-beef",
        "meatCut": "OP Ribs",
        "price": "18",
        "cooking": "Roast"
    },
    {
        "objectID": "52",
        "category": "young-beef",
        "meatCut": "Oyster blade",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "53",
        "category": "young-beef",
        "meatCut": "Rolled Roast",
        "price": "N/A",
        "cooking": "Roast"
    },
    {
        "objectID": "54",
        "category": "young-beef",
        "meatCut": "Rump",
        "price": "10.99",
        "cooking": "Roast"
    },
    {
        "objectID": "55",
        "category": "young-beef",
        "meatCut": "Rump (sliced)",
        "price": "11.99",
        "cooking": "Roast"
    },
    {
        "objectID": "56",
        "category": "young-beef",
        "meatCut": "SilversobjectIDe",
        "price": "9.2",
        "cooking": "Roast"
    },
    {
        "objectID": "57",
        "category": "young-beef",
        "meatCut": "Striploin",
        "price": "15",
        "cooking": "Roast"
    },
    {
        "objectID": "58",
        "category": "young-beef",
        "meatCut": "T-Bone Sliced",
        "price": "14.5",
        "cooking": "Roast"
    },
    {
        "objectID": "59",
        "category": "young-beef",
        "meatCut": "TopsobjectIDe ",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "60",
        "category": "misc",
        "meatCut": "Beef Burgers",
        "price": "$5.00/T",
        "cooking": "Roast"
    },
    {
        "objectID": "61",
        "category": "misc",
        "meatCut": "Beef Mince",
        "price": "6",
        "cooking": "Roast"
    },
    {
        "objectID": "62",
        "category": "misc",
        "meatCut": "Chicken Drums",
        "price": "5",
        "cooking": "Roast"
    },
    {
        "objectID": "63",
        "category": "misc",
        "meatCut": "Chicken Breast",
        "price": "8",
        "cooking": "Roast"
    },
    {
        "objectID": "64",
        "category": "misc",
        "meatCut": "Chicken Whole",
        "price": "$8 per bird",
        "cooking": "Roast"
    },
    {
        "objectID": "65",
        "category": "misc",
        "meatCut": "Chicken Wings",
        "price": "4",
        "cooking": "Roast"
    },
    {
        "objectID": "66",
        "category": "misc",
        "meatCut": "Chicken Thigh",
        "price": "10.5",
        "cooking": "Roast"
    },
    {
        "objectID": "67",
        "category": "misc",
        "meatCut": "Chicken Frames",
        "price": "$4 3 per bag",
        "cooking": "Roast"
    },
    {
        "objectID": "68",
        "category": "misc",
        "meatCut": "Chicken Maryland",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "69",
        "category": "misc",
        "meatCut": "Chicken Thigh",
        "price": "9.5",
        "cooking": "Roast"
    },
    {
        "objectID": "70",
        "category": "misc",
        "cooking": "Roast"
    },
    {
        "objectID": "71",
        "category": "misc",
        "meatCut": "Corned SilversobjectIDe",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "72",
        "category": "misc",
        "meatCut": "Pet Mince",
        "price": "2.5",
        "cooking": "Roast"
    },
    {
        "objectID": "73",
        "category": "misc",
        "meatCut": "Sausage Beef",
        "price": "5",
        "cooking": "Roast"
    },
    {
        "objectID": "74",
        "category": "misc",
        "meatCut": "Sausage Herb& Garlic",
        "price": "$3.50/T",
        "cooking": "Roast"
    },
    {
        "objectID": "75",
        "category": "misc",
        "meatCut": "Sausage category",
        "price": "4.5",
        "cooking": "Roast"
    },
    {
        "objectID": "76",
        "category": "misc",
        "meatCut": "Sausage Tomato& Onion ",
        "price": "$3.50/T",
        "cooking": "Roast"
    },
    {
        "objectID": "77",
        "category": "misc",
        "meatCut": "Stir Fry",
        "price": "11.49",
        "cooking": "Roast"
    },
    {
        "objectID": "78",
        "category": "misc",
        "meatCut": "Diced Beef",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "79",
        "category": "lamb",
        "meatCut": "Cutlets",
        "price": "10.2",
        "cooking": "Roast"
    },
    {
        "objectID": "80",
        "category": "lamb",
        "meatCut": "Diced (lamb)",
        "price": "14.99",
        "cooking": "Roast"
    },
    {
        "objectID": "81",
        "category": "lamb",
        "meatCut": "Flaps",
        "price": "5.50kg",
        "cooking": "Roast"
    },
    {
        "objectID": "82",
        "category": "lamb",
        "meatCut": "Knuckle",
        "price": "14.49",
        "cooking": "Roast"
    },
    {
        "objectID": "83",
        "category": "lamb",
        "meatCut": "Lamb Bone (cut)",
        "price": "1.99",
        "cooking": "Roast"
    },
    {
        "objectID": "84",
        "category": "lamb",
        "meatCut": "Lamb Pieces (curry)",
        "price": "8.5",
        "cooking": "Roast"
    },
    {
        "objectID": "85",
        "category": "lamb",
        "meatCut": "Lamb Trim",
        "price": "5.99",
        "cooking": "Roast"
    },
    {
        "objectID": "86",
        "category": "lamb",
        "meatCut": "Leg Chops",
        "price": "12",
        "cooking": "Roast"
    },
    {
        "objectID": "87",
        "category": "lamb",
        "meatCut": "Legs",
        "price": "9.5",
        "cooking": "Roast"
    },
    {
        "objectID": "88",
        "category": "lamb",
        "meatCut": "Leg Boned/Rolled",
        "price": "15.5",
        "cooking": "Roast"
    },
    {
        "objectID": "89",
        "category": "lamb",
        "meatCut": "Loin Chops",
        "price": "15",
        "cooking": "Roast"
    },
    {
        "objectID": "90",
        "category": "lamb",
        "meatCut": "French Cutlets",
        "price": "23",
        "cooking": "Roast"
    },
    {
        "objectID": "91",
        "category": "lamb",
        "meatCut": "Mince (lamb)",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "92",
        "category": "lamb",
        "meatCut": "Offal (lamb)",
        "price": "$2.50/p",
        "cooking": "Roast"
    },
    {
        "objectID": "93",
        "category": "lamb",
        "meatCut": "Racks",
        "price": "23",
        "cooking": "Roast"
    },
    {
        "objectID": "94",
        "category": "lamb",
        "meatCut": "Sausage (lamb)",
        "price": "$3.50/T",
        "cooking": "Roast"
    },
    {
        "objectID": "95",
        "category": "lamb",
        "meatCut": "Shanks",
        "price": "$7.50kg",
        "cooking": "Roast"
    },
    {
        "objectID": "96",
        "category": "lamb",
        "meatCut": "SobjectIDe of Lamb",
        "price": "10.99",
        "cooking": "Roast"
    },
    {
        "objectID": "97",
        "category": "lamb",
        "meatCut": "Whole Lamb",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "98",
        "category": "lamb",
        "meatCut": "Neck Chops",
        "price": "$5.00 tray",
        "cooking": "Roast"
    },
    {
        "objectID": "99",
        "category": "lamb",
        "meatCut": "Ribletts",
        "price": "8",
        "cooking": "Roast"
    },
    {
        "objectID": "100",
        "category": "frozen-goat",
        "meatCut": "Goat (whole)",
        "price": "9.2",
        "cooking": "Roast"
    },
    {
        "objectID": "101",
        "category": "frozen-goat",
        "meatCut": "Goat (frozen)",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "102",
        "category": "veal",
        "meatCut": "Chuck",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "103",
        "category": "veal",
        "meatCut": "Chuck Tender",
        "price": "7.99",
        "cooking": "Roast"
    },
    {
        "objectID": "104",
        "category": "veal",
        "meatCut": "Cube Roll",
        "price": "23.5",
        "cooking": "Roast"
    },
    {
        "objectID": "105",
        "category": "veal",
        "meatCut": "Eyeround",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "106",
        "category": "veal",
        "meatCut": "Fillets",
        "price": "24.5",
        "cooking": "Roast"
    },
    {
        "objectID": "107",
        "category": "veal",
        "meatCut": "Knuckle\n(Round)",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "108",
        "category": "veal",
        "meatCut": "Osso Bucco",
        "price": "6.99",
        "cooking": "Roast"
    },
    {
        "objectID": "109",
        "category": "veal",
        "meatCut": "Oyster blade",
        "price": "7.49",
        "cooking": "Roast"
    },
    {
        "objectID": "110",
        "category": "veal",
        "meatCut": "Rump",
        "price": "10.99",
        "cooking": "Roast"
    },
    {
        "objectID": "111",
        "category": "veal",
        "meatCut": "SilversobjectIDe",
        "price": "8.99",
        "cooking": "Roast"
    },
    {
        "objectID": "112",
        "category": "veal",
        "meatCut": "Striploin",
        "price": "19.99",
        "cooking": "Roast"
    },
    {
        "objectID": "113",
        "category": "veal",
        "meatCut": "T-Bone",
        "price": "15.99",
        "cooking": "Roast"
    },
    {
        "objectID": "114",
        "category": "veal",
        "meatCut": "TopsobjectIDe ",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "115",
        "category": "veal",
        "meatCut": "Veal Cutlets",
        "price": "15.99",
        "cooking": "Roast"
    },
    {
        "objectID": "116",
        "category": "veal",
        "meatCut": "Veal Diced",
        "price": "9.99",
        "cooking": "Roast"
    },
    {
        "objectID": "117",
        "category": "veal",
        "meatCut": "Veal Mince",
        "price": "6.99",
        "cooking": "Roast"
    },
    {
        "objectID": "118",
        "category": "veal",
        "meatCut": "Veal Racks",
        "price": "19.99",
        "cooking": "Roast"
    },
    {
        "objectID": "119",
        "category": "veal",
        "meatCut": "Veal Ribs",
        "price": "6.99",
        "cooking": "Roast"
    },
    {
        "objectID": "120",
        "category": "veal",
        "meatCut": "Veal Roast",
        "price": "9.99",
        "cooking": "Roast"
    }
];

const options = {
  paginationShowsTotal: true,
  sortName: 'objectID',  // default sort column name
  sortOrder: 'asc'  // default sort order
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
      <BootstrapTable data={ jobs }
        trClassName={ trClassNameFormat }
        options={ options }
        search
        hover
        pagination>
        <TableHeaderColumn dataField='objectID' dataSort isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='category' dataSort className='good'>Category</TableHeaderColumn>
        <TableHeaderColumn dataField='meatCut' dataSort className='good'>MeatCut</TableHeaderColumn>
        <TableHeaderColumn dataField='price'  dataSort dataFormat={ priceFormatter }>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='cooking' dataSort>Cooking</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}



