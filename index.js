const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(m, inst)  {
  var l = m.length
  
  var step
  for (step = 0; step < l; step++) {
    console.log("${m[step]} plays ${inst[step]}");
  }
  
  console.log(m[0])
}

theBeatlesPlay(musicians, instruments)