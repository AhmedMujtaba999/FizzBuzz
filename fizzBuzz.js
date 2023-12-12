/*
Welcome to FizBuzz Game!

🚀 Get ready for a fun-filled coding challenge with FizBuzz! 🎮

Imagine a circle of enthusiastic children, eagerly waiting to play FizBuzz. In this coding extravaganza, each child takes their turn to shout out a number. But here's the twist – if the number is divisible by 3, they joyfully exclaim 'Fizz'. If it's divisible by 5, they shout 'Buzz'. And for those special numbers divisible by both 3 and 5, get ready to hear the magical 'FizzBuzz' chant!

It's a simple yet brain-teasing game that will keep you on your toes. So, dive into the world of numbers, laughter, and coding camaraderie. Let the FizBuzz challenge begin! 🌟

#FizzBuzz #CodingFun #ChallengeAccepted
*/

//here's the code below
var output=[];
var count=1;
function fizzbuzz() {
    
    while(count <= 100)
    {
    if(count%3===0&&count%5===0){
        output.push("fizzbuzz");
    }
    else if(count%3==0){
        output.push("fizz");
    }
    
    else if(count%5==0){
        output.push("buzz");
    }
    
    else{
         output.push(count);
    } 
        
    count++;

}
    console.log(output);
}
fizzbuzz();
