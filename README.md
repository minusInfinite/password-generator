# Password Generator

## Project Details

For week 3 the task was to complete the development of a password generator with the following User Story

The completed project can be found at - https://minusinfinite.github.io/password-generator/

> AS AN employee with access to sensitive data
>
> I WANT to randomly generate a password that meets certain criteria
>
> SO THAT I can create a strong password that provides greater security

The following starting point was provided.

```javascript
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
```

![Project Screenshot](/mdassets/project-template.png)

## Acceptance Criteria and Examples

The project has the the following Acceptance Criteria and

> GIVEN I need a new, secure password
>
> WHEN I click the button to generate a password
>
> THEN I am presented with a series of prompts for password criteria
>
> WHEN prompted for password criteria
>
> THEN I select which criteria to include in the password
>
> WHEN prompted for the length of the password
>
> THEN I choose a length of at least 8 characters and no more than 128 characters

Using the Window Prompt, Alert and Confirm API the following sequence is demonstrated

```javascript
var lengthPrompt = prompt("Enter a number between 8 and 128")
lengthPrompt = parseInt(lengthPrompt)

if (isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Enter a valid number between 8 and 128")
    return (result = "Error, try again")
} else {
    //set the password length property
    passwordProps.length = lengthPrompt
}
```

The above code is used to ask the user for a value between 8 and 128 characters.
As a prompt is a String, I've used the parseInt method to convert it to a number.
If it is not a number, less then 8 or greater than 128 and error alert and return is generated.

If the prompt is a validated it will be saved to an object for later use

> WHEN asked for character types to include in the password
>
> THEN I confirm whether or not to include lowercase, uppercase, numeric, and or special characters
>
> WHEN I answer each prompt
>
> THEN my input should be validated and at least one character type should be selected

This is demostrated in the following code.

```javascript
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

passwordProps.includeChar()
```

The above IF ELSE statements set the objects values and triggers the object method that will generate the required character list for the password.

> WHEN all prompts are answered
>
> THEN a password is generated that matches the selected criteria

The following code provides these requirements.

```javascript
passwordProps.includeChar()

if (passwordProps.charList == "") {
    alert("No Character types selected, press the button again")
    return (result = "Error, try again")
} else {
    for (var i = 0; i < passwordProps.length; i++) {
        result += passwordProps.charList.charAt(
            Math.floor(Math.random() * (passwordProps.charList.length - 1))
        )
    }
}

return result
```

This will check that at least one of the character type settings above has been confirmed.
If it has not an error is triggered. If at least one character type is confirmed a For loop will create the password required.

As commented in the code this was attempted from an answer found on Stack Overflow - https://stackoverflow.com/a/1349426

> WHEN the password is generated
>
> THEN the password is either displayed in an alert or written to the page

Below is an example of a generated password with a length of 12 and all character types selected.

![Password Generation Complete](/mdassets/text-generated.png)
