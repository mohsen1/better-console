var Table = require('cli-table');

module.exports = exports = function logTable(data){
  if(typeof data !== 'object'){
    console.log('');
    return;
  }

  var keys = Object.keys(data);

  var table = new Table({
    head: keys,
    colWidths: keys.map(function (el) { return data[el].toString().length; })
  });

  keys.forEach(function (el) {
    table.push(data[el]);
  });

  console.log(table.toString());

};