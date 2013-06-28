var Table = require('cli-table');

module.exports = exports = function logTable(data){
  if(typeof data !== 'object'){
    console.log('');
    return;
  }

  if(typeof data[Object.keys(data)[0]] !== 'object'){
    console.log('');
    return;
  }


  var firstKey = Object.keys(data)[0];
  var firstObject = data[firstKey];
  var thead = Object.keys(firstObject);
  thead.unshift('(index)');
  var colWidths = thead.map(function(item){return calculateColWidth(item);});


  var table = new Table({
    head: thead,
    colWidths: colWidths
  });

  Object.keys(data).forEach(function(rowKey){
    var row = data[rowKey];
    var rowValues = [];

    if(typeof row == 'object'){
      rowValues = Object.keys(row).map(function(k){
        return row[k];
      });
    }
    table.push([rowKey].concat(rowValues));
  });

  console.log(table.toString());

  function calculateColWidth (item) {
    var MAX_COL_WIDTH = 30;
    var MIN_COL_WIDTH = 8;
    var width = MIN_COL_WIDTH;

    if(item.toString){
     if(item.toString().length > MAX_COL_WIDTH)
      width = MAX_COL_WIDTH;
     if(item.toString().length < MIN_COL_WIDTH)
      width = MIN_COL_WIDTH;
     else
      width = item.toString().length;
    }else{
      width = MAX_COL_WIDTH;
    }

    return width + 2;
  }
};