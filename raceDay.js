let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;
if (registeredEarly && runnerAge > 18){
  raceNumber += 1000
  }
  if (registeredEarly && runnerAge > 18){
    console.log(`race at 9:30, number ${raceNumber}`)
  }
  else if(!registeredEarly && runnerAge > 18){
    console.log(`race at 11, number ${raceNumber}`)
  }
  else if(runnerAge < 18){
    console.log(`race at 1230, number ${raceNumber}`)
  }
  else {
    console.log('see admin')
  }
