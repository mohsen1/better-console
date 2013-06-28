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
  
  var table = new Table({
    head: thead,
    colWidths: thead.map(function(){return 15;}) //TODO: find colwidths
  });

  Object.keys(data).forEach(function(rowKey){
    var row = data[rowKey];
    var rowValues = Object.keys(row).map(function(k){
      return row[k];
    });
    table.push([rowKey].concat(rowValues));
  });

  console.log(table.toString());
};