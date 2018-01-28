const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(m, inst)  {
  var l = m.length
  
  var rtn = [];
  var step
  for (step = 0; step < l; step++) {
    rtn.push((m[step] + ' plays ' + inst[step]))
  }
  return rtn
}


function johnLennonFacts (f) {
  var rtn = [];
  var i; 
  fruits.forEach(function(item) {
    i = item + "!!!"
    rtn.push(s)
  });
  return rtn 
}


// theBeatlesPlay(musicians, instruments)
johnLennonFacts(facts)