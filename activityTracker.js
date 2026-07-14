const myWeek = [
  { day: "Monday", activity: "Wisdom Teeth Removal", category: "physical", hoursSpent: 1.5, enjoyment: 1, timeOfDay: "afternoon" },
  { day: "Tuesday", activity: "SMC HW", category: "creative", hoursSpent: 3, enjoyment: 5, timeOfDay: "afternoon" },
  { day: "Wednesday", activity: "Gaming with friends", category: "social", hoursSpent: 3, enjoyment: 10, timeOfDay: "evening" },
  { day: "Thursday", activity: "Cooking breakfast", category: "creative", hoursSpent: 1, enjoyment: 8, timeOfDay: "morning" },
  { day: "Friday", activity: "Afternoon walk", category: "physical", hoursSpent: 0.5, enjoyment: 7, timeOfDay: "afternoon" },
  
// PREDICTIONS (writing these before I actually run the code) 
// Highest enjoyment will be Gaming with friends with it being a 10/10. 
// The creative and physical categories will fight to dominate my week. I'm going to guess creative will be on top. 
// My peak enjoyment will be focused around evening time, because thats when I've completed all my work and have time to relax. 

function totalOutdoorHours(week) {
  const physicalActivities = week.filter(entry => entry.category === "physical");
  const total = physicalActivities.reduce((sum, entry) => sum + entry.hoursSpent, 0);

  return total; 

function lowEffortHighEnjoyment(week) {
  return week.filter(entry => entry.hoursSpent <= 1 && entry.enjoyment >= 8);
}
 

function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

console.log("Analyzing My Weekly Activities...");
console.log("");
console.log("Total hours spent on physical activity:", totalOutdoorHours(myWeek));
 
const lowEffortHigh = lowEffortHighEnjoyment(myWeek);
const lowEffortNames = lowEffortHigh.map(entry => entry.activity);
console.log("Low-effort, high-enjoyment activities:", lowEffortNames.join(", "));
 
const quickWins = filterByCondition(act => act.hoursSpent < 1 && act.enjoyment > 8);
const quickWinNames = quickWins.map(act => act.activity);
console.log("Quick wins (under 1 hour, enjoyment over 8):", quickWinNames.join(", "));
 
  
