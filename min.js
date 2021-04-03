var scores = [30,25,95,70,90,49,66];
minVal = Number.MAX_VALUE; //setting the highest value possible

for(let i = 0; i < scores.length; i = i + 1){
    var item = scores[i];
    if(item < minVal){
        minVal = item;
    }
}
console.log("The Minimum score is: " +minVal);