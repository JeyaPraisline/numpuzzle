var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
var no_of_guess=0;
var guessed_num=[];

var result=Math.floor(Math.random()*10);
console.log(result); //secret number

function play()
{
    var user_guess=document.getElementById('guess').value;

    if(user_guess < 1 || user_guess > 10)
    {
        alert("Please Enter the number from 1 to 10");
    }
    else
    {
        guessed_num.push(user_guess);
        no_of_guess=no_of_guess+1;

        if(user_guess > result)
        {
            msg1.textContent="Your Guess is high";
            msg2.textContent="Number of Guesses:"+ no_of_guess;
            msg3.textContent="Previous Guessed Number"+guessed_num;
        }
        else if(user_guess < result)
        {
            msg1.textContent="Your Guess is low";
            msg2.textContent="Number of Guesses:"+ no_of_guess;
            msg3.textContent="Previous Guessed Number"+guessed_num;
        }
        
        else if(user_guess == result)
        {
            msg1.textContent="Your are the Winner";
            msg2.textContent="The Lucky number is:"+ result;
            msg3.textContent="No of Guesses:"+no_of_guess;
        }
    }
}