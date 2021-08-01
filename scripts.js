const target = document.getElementById('target');
const dateToday = new Date();
const startDate = new Date(2021, 06, 18);
const dateDifference = (dateToday.getTime() - startDate.getTime()) / (1000*60*60*24);
const targetDecimal = dateDifference / 365.25 * 100;
target.textContent = "Target: " + (targetDecimal).toFixed(2) + "%";

const milage = document.getElementById('milage');
const miles = 129;
const maxMiles = 3000;
const milesDecimal = miles/maxMiles * 100;
milage.textContent = "Milage: " + milesDecimal.toFixed(2) + "%";

const milesDifference = document.getElementById('difference');
const differenceDecimal = milesDecimal - targetDecimal;
milesDifference.textContent = "You are currently " + (differenceDecimal * 100 / dateDifference).toFixed(2) + " miles over par";
