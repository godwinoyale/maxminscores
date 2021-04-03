// A JavaScript Program to determine the maximum score from a given scores of seven students

// the scores are: 30, 25, 94, 70, 90, 49, 66

var scores = [30,25,94,70,90,49,66];
maxVal = -Number.MAX_VALUE; // setting the most minimum value

for (let i = 0; i< scores.length; i=i+1){
    var item = scores[i];
    if(item > maxVal){
        maxVal = item;
    }
}
console.log("The maximum number is: " +maxVal);