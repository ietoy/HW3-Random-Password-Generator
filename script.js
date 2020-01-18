// GENERATE PASSWORD BUTTON LISTENER
document.getElementById("generate").addEventListener("click",
    function charLength() {
        var pwLength = parseInt(
                prompt("How many characters long would you like your new password to be?")
            );
            // PW LENGTH VALIDATION
            if (pwLength < 8 || pwLength > 128) {
                alert("Passwords must be between 8 and 128 characters.");
                charLength();
            } else {
                generatePassword(pwLength);
            }  
    }
)

// COPY TO CLIPBOARD BUTTON LISTENER
document.getElementById("copy").addEventListener("click",
    function copyPw() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Your new password has been copied to the clipboard!");
    }
)

// GENERATION ARRAY
var genArray = [];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
            // add these special characters later, look up test-safe displays
            // "/", "[", "]", """,   

function generatePassword(pwLength) {
    // empties the genArray before creating a new password
    genArray = [];
    var addLowCase = confirm("Would you like to include lower-case letters?");
            if (addLowCase) {
                lowCase.forEach(function(element) {
                    genArray.push(element);
                });
            }
    var addUpCase = confirm("Would you like to include upper-case letters?");
            if (addUpCase) {
                upCase.forEach(function(element) {
                    genArray.push(element);
            });
        }
    var addNumeral = confirm("Would you like to include numerals?");
            if (addNumeral) {
                numeral.forEach(function(element) {
                    genArray.push(element);
            });
        }
    var addSpecial = confirm("Would you like to include special characters?");
            if (addSpecial) {
                special.forEach(function(element) {
                    genArray.push(element);
            });
        }
    // CHARSET VALIDATION
    if ((addLowCase === false) && (addUpCase === false) && (addNumeral === false) && (addSpecial === false)) {
        alert("You must choose at least one character set from which to generate your password.");
        generatePassword();
    } else {
        var newPassword = "";
        for (var i = 0; i < pwLength; i++) {
            var randChar;
            randChar = genArray[Math.floor(Math.random() * genArray.length)];
            newPassword += randChar;
        };
        // THROWS NEW PW TO TEXT AREA
        document.getElementById("password").textContent = newPassword;
        }
}

