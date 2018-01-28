const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(m, inst)  {
  var l = m.length
  
  var rtn 
  var step
  for (step = 0; step < l; step++) {
    m_ = m[step];
    i_ = inst[step];
    msg = m_ + ' plays ' + i_;
    
    
    console.log("${m_} plays ${i_}");
  }
  
  console.log(m[0])
}

theBeatlesPlay(musicians, instruments)