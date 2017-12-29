var execSync = require('child_process').execSync

var baseUrl = "http://lexicon.ff.cuni.cz/png/goth_wright/"

var pageCounts = {
  a: 9,
  b: 366
} 

function zeropad(n) {
  n = '' + n
  if (n.length >= 4) return n
  return zeropad('0' + n)
}

function curl(url, file) {
  execSync('curl "' + url + '" > ' + file)
}

var unique = 1
for (var key in pageCounts) {
  for (var i = 1; i <= pageCounts[key]; i++) {
    curl(baseUrl + key + zeropad(i) + '.png', zeropad(unique) + '.png')
    unique++
  }
}
