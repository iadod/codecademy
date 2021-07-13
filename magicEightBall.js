let userName = '';

userName ? console.log('Hello, Jane!') : console.log('Hello!');

const userQuestion = 'What is the future?';

console.log('What is the future?');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
  eightBall = 'it is certain'
  break; 
  case 1:
  eightBall = 'it is decidedly so'
  break;
  case 2:
  eightBall = 'reply hazy try again'
  break;
  case 3:
  eightBall = 'cannot predict now'
  break;
  case 4:
  eightBall = 'do not count on it'
  break;
  case 5:
  eightBall = 'my sources say no'
  break;
  case 6:
  eightBall = 'outlook not so good'
  break;
  case 7:
  eightBall = 'signs point to yes'
  break;
  };
  
  console.log(`The eight ball answered: ${eightBall}`);
