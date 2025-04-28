/* Chapter 2 | Arrays
Q3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
 data using a two-dimensional array. Create functions to display the monthly aver
age, a specific week’s average, and all the weeks’ averages. */

const weeklyTemps = {
  data: [],

  //Add weekly data
  addWeek: function (weekTemps) {
    this.data.push(weekTemps);
  },

  //Monthly average
  monthlyAverage: function () {
    let total = 0;
    let days = 0;

    for (const week of this.data) {
      for (const temp of week) {
        total += temp; //total of full month temp.
        days++; //it count the days in the week.
      }
    }
    return days > 0 ? total / days : 0;
  },

  //specific Week's average
  specificWeekAverage: function (weekNumber) {
    let weekIndex = weekNumber - 1;
    if (weekIndex < 0 || weekIndex >= this.data.length) return null;
    const week = this.data[weekIndex];
    return week.reduce((sum, temp) => sum + temp, 0) / week.length; //it sum up specific week temp
  },

  //All weeks Averages
  allWeeksAverages: function () {
    return this.data.map((week, index) => ({
      week: index + 1,
      average: week.reduce((sum, temp) => sum + temp, 0) / week.length,
    }));
  },
};

weeklyTemps.addWeek([72, 75, 70, 68, 71, 70, 71]); //week1
weeklyTemps.addWeek([69, 67, 70, 72, 68, 70, 71]); //week2
weeklyTemps.addWeek([73, 76, 74, 71, 75, 70, 73]); //week3
weeklyTemps.addWeek([72, 69, 70, 68, 71, 70, 71]); //week4

console.log("Monthly Average:" + weeklyTemps.monthlyAverage().toFixed(1));
console.log("week 2 Average: " + weeklyTemps.specificWeekAverage(2).toFixed(1));
console.log("All weeks Averages:");

/*It iterate each week array in multidimension array.
Multidimensional array be like week X days array.
[
[72, 75, 70, 68, 71, 70, 71],
[69, 67, 70, 72, 68, 70, 71],
[73, 76, 74, 71, 75, 70, 73],
[72, 69, 70, 68, 71, 70, 71]
]

*/

weeklyTemps
  .allWeeksAverages()
  .forEach((week) =>
    console.log(`week ${week.week}: ${week.average.toFixed(1)}`)
  );
