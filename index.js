function jediName (firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0,2)
}
jediName('Beyonce', 'Knowles');
    

function beyond(num) {
   if (num === Infinity) {
       console.log('And beyond');
   } else if (isFinite(num) === true && num > 0) {
       console.log('To infinity');
   } else if (isFinite(num) === true && num < 0) {
       console.log('To negative infinity');
   } else {
       console.log('Staying home');
   }
}

function decode(word) {
    if (word[0] === 'a') {
        return word[1];
    } else if (word[0] === 'b') {
        return word[2];
    } else if (word[0] === 'c') {
        return word[3];
    } else if (word[0] === 'd') {
        return word[4];
    } else {
        return " ";
    }
} //Answer = for loop!!!!

function daysInMonth(month, leapYear) {

switch (month) {
    
    case 'January':
    case 'March':
    case 'May':
    case 'July' :
    case 'August' :
    case 'October' :
    case 'December' :
       console.log(`${month} has 31 days`) ;
       break;
    case 'April' :
    case 'June' :
    case 'September' :
    case 'November' :
        console.log(`${month} has 30 days`);
        break;
    case 'February' :
        console.log(`${month} has 28 days`);
        break;
    default:
      throw new Error('Must provide a valid month.');
      break; 
    }
}