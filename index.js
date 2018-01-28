const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(m, inst)  {
  var l = m.length
  
  var rtn = [];
  var step
  for (step = 0; step < l; step++) {
    rtn.push((m[step] + ' plays ' + inst[step]))
    console.log(msg);
  }
  return rtn
}





// theBeatlesPlay(musicians, instruments)