# Random Password Generator

## Description
This application is a random password generator that can create secure passwords between 8 and 128 characters generated from between 1 and 4 different character sets.

## Why this App?
There are several security needs that this application serves to fill.

Users with access to sensitive data will want to protect their confidential information. Instead of having to come up with their own secure passwords, users can implement the Random Password Generator to create a secure key that can be calibrated to meet any form-specific needs (if special characters are allowed, if the form is case-sensitive, etc.). 

## How it Works
Clicking the "Generate Password" button initiates a series of prompts. The user is asked how long they would like their new password to be in character length, followed by individual prompts for which character-sets they would like to generate their password from. These options include uppercase letters, lowercase letters, numerals, and special characters. Users must select between 8 and 128 characters when choosing password length, and much choose at least one character set in order to proceed.

Once the user has finished replying to the above prompts, their new randomly generated password will generate in the text area in the center of the page.

## Under the Hood

The code snippet below demonstrates how the application concatenates random characters from up to four character sets to generate a secure password:

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

These arrays include lowercase letters, uppercase letters, numerals, and special characters respectively. The empty genArray at the top of the snippet serves as the staging area which holds the contents of these four arrays.

The next snippet illustrates how the adds arrays to the genArray based on user responses.

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

If the user responds "okay" to the inclusion of a particular character set, each item in that array is added to the genArray via the javascript forEach() function.

Through this process, the Random Password Generator can create passwords with almost one-hundred points of entropy for each character up to 128 characters!
