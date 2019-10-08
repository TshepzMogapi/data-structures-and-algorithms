function convertToRoman(num) {

    // let strNum = num + "";
    let romanStr = "";

    if (num / 1000 > 0) {

        romanStr += "M".repeat(parseInt(num / 1000));

        num -= parseInt(num / 1000) * 1000;
    }

    if (num / 100 >= 9 ) {

        romanStr += "CM".repeat(parseInt(num / 999));

        num -= parseInt(num / 100) * 100;
    } 

    if (num / 100 > 1 ) {


        if (num / 100 > 5) {

            romanStr = "D" + "C".repeat(parseInt(num / 100) - 5);
        }

        if(num / 100 == 5) {
            romanStr += "D";
        }


        if ((num / 100 >= 4) && (num / 100 < 5)) {


            romanStr = "C" + "D";

        }

        if (num / 100 < 4) {

            romanStr += "C".repeat(parseInt(num / 100));

        }


        num -= parseInt(num / 100) * 100;
    } 
    

    if (num / 10 >= 9 ) {

        romanStr += "XC";

        num -= parseInt(num / 10) * 10;
    } 

    if (num / 10 > 1 ) {


        if (num / 10 > 5) {

            romanStr = "L" + "X".repeat(parseInt(num / 10) - 5);
        }


        if ((num / 10 >= 4) && (num / 10 < 5)) {



            romanStr += "X" + "L";

        }



        if (num / 10 < 4) {

            romanStr += "X".repeat(parseInt(num / 10));

        }


        num -= parseInt(num / 10) * 10;


    } 


    if (num > 3 ) {

        if (num == 9) {
            romanStr += "IX";

        } else if (num > 5) {
            romanStr += "V" + "I".repeat(parseInt(num - 5));
        } else if(num == 5) {
            romanStr += "V";

        }
        else if(num == 4) {
            romanStr +=  "I" + "V";
        } 

    }  else {
        romanStr += "I".repeat(parseInt(num));

    }

    num -= parseInt(num / 100) * 100;

    



  let romanNumerals = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };
  return romanStr;
}



