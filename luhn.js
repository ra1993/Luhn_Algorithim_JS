document.getElementById("input").addEventListener("change", myFunction);

function myFunction() {

    //error messages
  const error1 = "Invalid card entry!";
  const error2 = "Invalid card number. Did not pass test!";
  const success = "Valid card number!"

  //inputs
  let num = document.getElementById("input");
  let card_num = num.value.toString();  //passing in card number as a string
  lenCard = card_num.length             //length of card number
  const check_num = parseInt(card_num); //int of card number
  let card_arr = card_num = (""+card_num).split(""); //creates an array from card number input

    if (lenCard < 16 || lenCard > 16){
        num.value = error1;
    }else {
       //num.value = success;
    
    const num_arr = []; //empty array

        for (let i = 0; i < check_num.length; i++) {
          if (i % 2 == 0){                      //gives you position of every other number
            if (card_arr[i] * 2 < 10){          //if position in card number array * 2 is less than 10
                num_arr.push(card_arr[i]* 2)       //push position number * 2 into empty array
            }else{
                num_arr.push(card_arr[i]* 2 - 9)  //else positoin at card number * 2 - 9 pushed into empty array
            }
          }
        }

        //return sum of array and mod 10 to === 0
        let array_sum =0; 
        for (j = 0; j < num_arr.length; j++){
            array_sum += j;
        }
        if (array_sum % 10 === 0){

            num.value = success;
        }else{
            num.value = error2;
        }
       
    }
    
    }//end of function