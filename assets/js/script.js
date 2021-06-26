// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password")

    passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

var generatePassword = function () {
    //varialbe initialisation
    var result = "" //empty string to capture the generated password
    /*
    Below is the base password properties object. 
    This assists with generating the list of characters to build the password.
    Some special characters, such as quotation makes need to be escaped first with \. 
    */
    var passwordProps = {
        length: 0,
        lowercase: false,
        uppercase: false,
        numbers: false,
        special: false,
        charList: "",
        includeChar: function () {
            if (this.lowercase) {
                this.charList += "abcdefghijklmnopqrstuvwxyz"
            }
            if (this.uppercase) {
                this.charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }
            if (this.numbers) {
                this.charList += "0123456789"
            }
            if (this.special) {
                this.charList += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\"
            }
            return this.charList
        },
    }
    //below will trigger the prompt for the length of the password
    var lengthPrompt = prompt("Enter a number between 8 and 128")
    //The below assignment will attempt convert the entered string to a number.
    lengthPrompt = parseInt(lengthPrompt)

    //This will check to confirm if the prompt is a Number and between 8 and 128, if not it will soft fail
    if (isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128) {
        alert("Enter a valid number between 8 and 128")
        return (result = "Error, try again")
    } else {
        //set the password length property
        passwordProps.length = lengthPrompt
    }

    //The following set of IF statements will configure they type of character sets to include
    if (confirm("Include Lowercase Characters?")) {
        passwordProps.lowercase = true
    } else {
        passwordProps.lowercase = false
    }

    if (confirm("Include Uppercase Characters?")) {
        passwordProps.uppercase = true
    } else {
        passwordProps.uppercase = false
    }

    if (confirm("Include Numbers?")) {
        passwordProps.numbers = true
    } else {
        passwordProps.numbers = false
    }

    if (confirm("Include Special Characters?")) {
        passwordProps.special = true
    } else {
        passwordProps.special = false
    }

    //generate the objects charlist property
    passwordProps.includeChar()
    console.log(passwordProps.charList)

    //Check if no character types have been selected and return an error.
    if (passwordProps.charList == "") {
        alert("No Character types selected, press the button again")
        return (result = "Error, try again")
    } else {
        /*
        A for loop is used against the provided length property. 
        While looping it will Randomly select a characters from the charList property.
        This has been adapted from examples found at https://stackoverflow.com/a/1349426
        */
        for (var i = 0; i < passwordProps.length; i++) {
            result += passwordProps.charList.charAt(
                Math.floor(Math.random() * (passwordProps.charList.length - 1))
            )
        }
    }

    return result
}
