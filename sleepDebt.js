const getSleepHours = day => {
 switch(day) {
   case 'monday':
   return 8
   break;
   case 'tuesday':
   return 7
   break; 
   case 'wednesday':
   return 6
   break;
   case 'thursday':
   return 5
   break;
   default:
   return "Error!"
   }
};
//console.log(getSleepHours('thursday'))/

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday');


const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 4;
}

//console.log(getIdealSleepHours())/

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('0')
} else if (actualSleepHours < idealSleepHours) {
  console.log('-')
} else if (actualSleepHours > idealSleepHours) {
  console.log('+')
}
else {
  console.log("error")
}
};

//error code like actual sleep hours undefined, edited everything to find that the error appears to have been based on not putting the if else statement inside of calculate sleep debt. and closing with curly.//

calculateSleepDebt();



