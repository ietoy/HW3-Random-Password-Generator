var pwLength
    document.getElementById("generate").addEventListener("click",
      function charLength() {
        // var pwLength;
        pwLength = 
          parseInt(
            prompt("How many characters long would you like your new password to be?")
          );
            if (pwLength < 8 || pwLength > 128) {
              alert("Passwords must be between 8 and 128 characters.");
              charLength();
            }
            else {
              generatePassword(pwLength);
            }  
      }
    )

    // This is the generation array
    var genArray;
    genArray = [];
    var lowCase;
    lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upCase;
    upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeral;
    numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special;
    special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
              // add these special characters later, look up test-safe displays
              // "/", "[", "]", """,   
        
// forEach (function)
// check link from Kerwin!
      function generatePassword() {
        var addLowCase;
        addLowCase = confirm("Would you like to include lower-case letters?");
          if (addLowCase) {
            lowCase.forEach(function(element) {
            genArray.push(element);
            });
          }
        var addUpCase;
        addUpCase = confirm("Would you like to include upper-case letters?");
          if (addUpCase) {
            upCase.forEach(function(element) {
            genArray.push(element);
            });
          }
        var addNumeral;
        addNumeral = confirm("Would you like to include numerals?");
          if (addNumeral) {
            numeral.forEach(function(element) {
            genArray.push(element);
            });
          }
        var addSpecial;
        addSpecial = confirm("Would you like to include special characters?");
          if (addSpecial) {
            special.forEach(function(element) {
            genArray.push(element);
            });
          }
        // this IF//ELSE alerts the user that they must choose one char set before proceeding
        if ((addLowCase === false) && (addUpCase === false) && (addNumeral === false) && (addSpecial === false)) {
          alert("You must choose at least one character set from which to generate your password.");
          generatePassword();
        }
        else {
          var newPassword = "";
            for (var i = 0; i < pwLength; i++) {
              var randChar;
                randChar = genArray[Math.floor(Math.random() * genArray.length)];
                // console.log(randChar);
                newPassword += randChar;
              // this is the code that puts the new password into the textarea
            };
          document.getElementById("password").textContent = newPassword;
          }
        }
    
    // copy to clipboard
        // function that copies to clipboard
        // starts when button clicked 