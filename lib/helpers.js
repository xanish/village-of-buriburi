var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
var UNIQUE_RETRIES = 9999;
var ID_LENGTH = 8;

var generate = function() {
  var uid = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    uid += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return uid;
}

module.exports.generateUnique = (previous) => {
  previous = previous || [];
  var retries = 0;
  var id;
  
  // Try to generate a unique ID,
  // i.e. one that isn't in the previous.
  while(!id && retries < UNIQUE_RETRIES) {
    id = generate();
    if(previous.indexOf(id) !== -1) {
      id = null;
      retries++;
    }
  }

  return id;
};