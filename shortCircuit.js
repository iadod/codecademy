let tool = 'marker';

//when marker is present, writing utensil evaluates to marker bc it is the variable tool./
//when var tool is '' then it is falsy, leaving writing utensil as pen/
  
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
