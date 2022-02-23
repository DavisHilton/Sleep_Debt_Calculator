const getSleepHours = day => {
  if (day === 'monday' || day === "wednesday" || day === "friday") {
    return 6;
  }
  else if(day === 'saturday' || day === 'sunday'){
return 8
  }
  else {
    return 5
  }
}

const getActualSleepHours = () => {
  let totalSleepHours = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
  return totalSleepHours;
}

const getIdealSleepHours = () => {
  let totalIdealSleepHours = 8 * 7;
  return totalIdealSleepHours;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You are getting perfect sleep.")
  }
  else if (actualSleepHours < idealSleepHours) {
		console.log("You are not getting enough sleep.");
  }
  else{
console.log("You are getting  more sleep than needed.");

  }
}

calculateSleepDebt();