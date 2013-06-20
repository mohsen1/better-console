var colors = require('colors');
var Table = require('cli-table');
var _console = {};

_console.log = console.log;
_console.info = function(){
  var args = arguments;
  for(var i=0; i<args.length; i++){
    if(typeof args[i] === 'string'){
      args[i] = args[i].blue;
    }
  }
  console.log.apply(this, args);
}


exports = {console: _console};
