// function showValue() {
//     console.log("I'm here");
//     console.log(inp.value);
// }

function gradeChecker(){
    var score = inp.value
    if(score>=70 && score<=100){
        // bodyTag.style.backgroundColor = 'red'
        result.innerHTML = 'A - Excellent'
        result.style.color = 'green'
        // console.log('A')
        // console.log(score)
    }else if(score>=60 && score<70 ){
        // console.log('B');
        result.innerHTML = 'B - Very good '
        result.style.color = 'yellow'
        // bodyTag.style.backgroundColor = 'black'
    }else if(score>=55 && score<60 ){
        // console.log('C');
        result.innerHTML = 'C - Good'
        // bodyTag.style.backgroundColor = 'red'
        result.style.color = 'blue'
    } else if(score>=50 && score<55 ){
        // console.log('D');
        result.innerHTML = 'D - fair'
    } else if(score>=40 && score<50 ){
        // console.log('E');
        result.style.color = 'orange'
        result.innerHTML = 'E - Hmmm you can do better'
    } else if(score>=1 && score<40 ){
        // console.log('F');
        result.innerHTML = 'F - Failed'
        result.style.color = 'red'
    }

    else{
        // console.log(score)
        // console.log("inalid input");
        result.innerHTML = 'Invalid input! Please enter a score between 0 and 100.'
        result.style.color = 'red'
    }
    inp.value = ''
}