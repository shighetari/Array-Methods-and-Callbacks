import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


// a)
// function homeTeam(data) {

const finals2014 = fifaData.filter(function(item){
    // console.log(item['Year']);
// return item.Year === 2014 ;
return item.Year === 2014 && item['Stage']==='Final';
});
// console.log(finals2014[0]['Home Team Name']);


// b)

// console.log(finals2014[0]['Away Team Name']);

// c)

// console.log(finals2014[0]['Home Team Goals']);

// d)

// console.log(finals2014[0]['Away Team Goals']);

// e) 

// const winner2014 = arrayHomeTeam.filter(function(item){

//     return item['Stage']==='Final';
// });
function winner2014(){
if( finals2014[0]['Away Team Goals']>finals2014[0]['Home Team Goals']){
   return finals2014[0]['Away Team Name'];
}else {
    return finals2014[0]['Home Team Name'];
}
}
// console.log(winner2014());

/* Task 2: Create a function called  getFinals that takes data as 
an argument and returns an array of objects with only finals data */

function getFinals(data/* code here */) {
    /* code here */
const newArray= data.filter(function(item){
    return item['Stage'] === 'Final';
});

return newArray;
};


console.log(getFinals(fifaData));


/* Task 3: Impliment a higher-order function called getYears that accepts the callback function
 getFinals, and returns an array called years containing all of the years in the dataset */

function getYears(callback/* code here */) {
    /* code here */
    const years= callback.map(function(item){
 return item['Year'];
    });

return years;
};

// console.log(getYears(getFinals(fifaData)));
// getYears();

/* Task 5: Impliment a higher-order function called getWinners, 
that accepts the callback function getFinals() and determine the winner 
(home or away) of each finals game. Return the name of all winning countries in
rray called winners */ 

function getWinners(callback/* code here */) {
    /* code here */
    // use .map and if/else statement
    // can use forEach()
   
   const winners= callback.map(function(item){
if(item['Home Team Goals'] > item['Away Team Goals'] || item['Win conditions'].includes(item['Home Team Name'])){
    return item['Home Team Name'];
}else {
return item['Away Team Name'];
}

    });
    return winners;
 }

// console.log(getWinners(getFinals(fifaData)));

// function getAllWinners(finals, winners, years, arr) {
//     let winningTeams = winners(finals, arr);
//     let theYears = years(finals, arr);
//     for (let i = 0; i < winningTeams.length; i++) {
//       console.log(In ${theYears[i]}, ${winningTeams[i]} won the world cup!);
//     }
//   }
//   getAllWinners(getFinals, getWinners, getYears, fifaData);

/* Task 6: Implement a higher-order function called getWinnersByYear that 
accepts the following parameters and returns a set of strings "In {year}, 
{country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(cbGetWinners, cbGetYears/* code here */) {

for(let i=0; i<cbGetYears.length; i++){
   console.log(In ${cbGetYears[i]}, ${cbGetWinners[i]} won the world cup!);
} 
};

// console.log(getAllWinners(getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));

/* Task 7: Create a function called getCountryWins that takes the parameters
 data and team initials and returns the number of world cup wins that country
  has had. 

Hint: Investigate your data to find "team initials"!
Hint: use .reduce */

// ***dont worry about the win conditions!
// try not to use a forloop

// maybe .map with if/else statements
// map return 1 or 0 then .reduce to sum those up!

function getCountryWins(data, initials/* code here */) {
    /* code here */

    
const wins= data.map(function(item){
    if(item['Home Team Initials']===initials && item['Home Team Goals'] > item['Away Team Goals'] || item['Away Team Initials']===initials && item['Away Team Goals'] > item['Home Team Goals']){
        return 1;
    }else {
        return 0;}
})

// use reduce to get a total land area 
// const totalLandArea = cityData.reduce(function(accumulator, item){
//   // console.log(I am the accumulator ${accumulator});
//   // console.log(I am the current value ${item.land_area});
//   return accumulator + item.land_area;
// },0);

// console.log(I am the total land area ${totalLandArea});
// console.log(cityData);

// arr.reduce(callback( accumulator, currentValue){
           //return       
//            },initialValue);


const totalWins= wins.reduce(function(accumulator, currentValue){
    return currentValue + accumulator;},0);

return totalWins;
        
}

// console.log(getCountryWins(getFinals(fifaData), 'BRA'));


/* Task 8: Write a function called getGoals() that accepts a parameter data and returns the
 team with the most goals score per appearance (average goals for) in the World Cup finals */
//8&9 rather than calculate which team had highest goals;pass in data and team initials parameters and find 
//THAT specific team avrg. goals
///* Task 8: Write a function called getGoals() that accepts two parameters data and teamInitials and returns the average goals scored per appearance (average goals for) for that team in all World Cup games played */
function getGoals(data, initials/* code here */) {
    /* code here */

const teamGoalsfiltered = data.filter(function(item){
 return item['Home Team Initials']===initials || item['Away Team Initials']===initials;
});

// return teamGoalsfiltered;
const teamsGoals = teamGoalsfiltered.map(function(item){
if(item['Home Team Initials']===initials){
    return item['Home Team Goals'];
}else if(item['Away Team Initials']===initials){
    return item['Away Team Goals'];
}
});

const avgTeamGoals = teamsGoals.reduce(function(accumulator, currentValue){
    return currentValue + accumulator;},0)/teamsGoals.length;

return avgTeamGoals;


}

// console.log(getGoals(getFinals(fifaData), 'BRA'));


/* Task 9: Write a function called badDefense() that accepts a parameter data and calculates the team with the most goals 
scored against them per appearance (average goals against) in the World Cup finals */
//8&9 rather than calculate which team had highest goals;pass in data and team initials parameters and find 
//THAT specific team avrg. goals

// //* Task 9: Write a function called badDefense() that accepts two parameters data and teamInitials
// and returns the average goals conceded per appearance (average goals against) for that team in all World Cup games played */
function badDefense(data, initials/* code here */) {
    /* code here */
const goalsAgainstFiltered = data.filter(function(item){
return item['Home Team Initials']===initials || item['Away Team Initials']===initials;
});

// return goalsAgainstFiltered;

const goalsAgainst = goalsAgainstFiltered.map(function(item){
if(item['Home Team Intials']===initials){
    return item['Away Team Goals'];
}else{
    return item['Home Team Goals'];
}
});

// return goalsAgainst;

const avgGoalsAgainst = goalsAgainst.reduce(function(accumulator, currentValue){
return accumulator+currentValue;
},0)/goalsAgainst.length;

return avgGoalsAgainst;
};

console.log(badDefense(getFinals(fifaData),'BRA'));


/* Task 10: Write a function called getAverageGoals that accepts a parameter data and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getAverageGoals(data/* code here */) {
    /* code here */

const homeGoals=data.map(function(item){
    return item['Home Team Goals'];
})

const awayGoals=data.map(function(item){
    return item['Away Team Goals'];
})

const avgHomeGoals=homeGoals.reduce(function(accumulator, currentValue){
    return currentValue + accumulator;},0)/homeGoals.length;

const avgAwayGoals=awayGoals.reduce(function(accumulator, currentValue){
    return currentValue + accumulator;},0)/awayGoals.length;

console.log(avgHomeGoals);
console.log(avgAwayGoals);
};

// console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */