/*
 * Created with Sublime Text (buidl 3054).
 * User: soncy
 * Date: 2013-10-26
 * Time: 12:21:43
 * Contact: soncy1986@gmail.com
 */

var rd = require('rd'),
    reader = require('./lib/reader.js');

var query = process.argv[2];
var key = 'name';
if (/\d+/.test(query)) {
    key = 'ctfid';
}

var files = rd.readSync('data');
files.shift();

/*
 * row[Object], csv title lowercase
 * index[Number]
 */
reader.read(files, function(row, index, file) {
    // every row info
    if (row[key] === query) {
        console.log(name, row.ctfid, file);
    }
}).on('end', function() {
    console.log('data end');
});
