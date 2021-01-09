# JavaScript Form Validation – How to Check User Input on HTML Forms with JS Example Code

Forms are ubiquitous in internet world. Some apps such as Gmail use forms to collect data to sign up users and give an email address, whereas some apps such as PayPal use forms to do online shopping and process payment from a buyer to a merchant. Some web forms are used to apply for a new car loan whereas some forms are used to order pizza for dinner. It is therefore important that when forms are developed, the data that is collected is cleansed and removed of any malicious data. This is called form validation.

## What are the different types of form validations?
Form validation can happen on - 
1. Client side and 
2. server side. 
   
You may have noticed that in some forms, as soon as you enter an invalid email address, the form gives an error "Please enter a valid email". This "immediate" type of validation is usually done via client-side code using JavaScript. 

In other cases, you may have noticed that sometimes when you fill out a form and enter details such as a credit card, a form may show a loading screen and then show an error "This credit card is invalid". Here, the form made a call to its server side code, and returned a validation error. This validation case where a call to the server was made is called server side validation. 

## TODO insert form validation snapshot here <gif> 

## Common use cases of form validation

Form validation is needed anytime you accept data from a user. This may include - 
1. Format validation such as format of email address, phone number etc.
2. Required value validation
3. Checking the type of data such as string vs number
4. Valid data checks such as correct postal code, country, etc. 
   
## Why do we need to validate form data?
1. Malicious data could be entered that could lead to SQL injections, malformed data


<!-- <<
You will need form validation when data is entered in a form. A user will enter data, which could be email, phone number. To be sure that the data entered by the user is what it is expected to, you will need to validate the data. 
not only is this good for your API, but is also a way of ensuring security. 
- security attacks like SQL injection
- ensuring all data is entered 
- ensuring data is what it expected to be
>> -->


## How to validate form data
On client side, validation can be done in two ways - 
 ### Using built in HTML5 functionality
 - Making fields required using `required`
 - Constraining the length of data: 
   - `minlength`, `maxlength`: for text data
   - `min` and `max` for max value of num type
 - Restricting the type of data using `type` :
   - `<input type="email" name="multiple>`
 - Specifying data pattern using `pattern`: 
   - specifies a regex pattern that entered form data needs to match
 
When data entered matches the above client validation, it gets assigned a psuedo-class `:valid` and `:invalid` if it doesn't.


 ### Javascript 
- Inline validation using JS
- Constraint validation API

For older browsers that do not support HTML5, we will need to use JavaScript for form validation. When implementing form validation, there are a few things to consider - 
1. What is defined as "valid" data? 
   1. This helps you answer questions such as the format, length, required fields and type of data. 
2. What happens when invalid data is entered?
   1. This will help you define the user experience of the validation - whether to show an error message inline or top of the form, how detailed should the error message be, should the form be sumitted anyways? Should there be analytics to track invalid format of data? 


**Inline validation using JS**
```HTML 
<form method="post" onSubmit="return validateForm()">
<label for="firstname"> First Name: </label>
<input type="text" name="firstname" id="firstname" required maxlength="45">
<button>Submit</button>
</form>
```
```JS
function validateform() {
  let valid = true;
  const firstNameField = document.getElementById("firstname");
  if(!firstNameField.value || firstNameField.value.length > 45){
    valid = false;
  }
  

return valid;
}

```


**Constraint validation API**
`required` and `pattern` can help perform basic validation, but if you want more complex validation and provide detailed error messaging, you can use Constraint Validation API. Some methods provided by this API are - 

1. `checkValidity`
2. `setCustomValidity`
3. `reportValidity`
   
The following properties are useful - 
   1. `validity`
   2. `validationMessage`
   3. `willValidate`


## Examples: 
Check out this following example inspired from Mozilla docs on how to validate using HTML5 inbuilt methods such as `required`, `length` in conjunction with Constraint Validation API to provide detailed error messages.

```HTML
<form>
<label for="firstname"> First Name: </label>
<input type="text" name="firstname" id="firstname" required length="45">
<button>Submit</button>
</form>
```

**Validation using Constraint Validation API**

```JS
const nameField = document.querySelector('input');
const form = document.querySelector('form');

nameField.addEventListener('input', () => {
  nameField.setCustomValidity('');
  nameField.checkValidity();
});

nameField.addEventListener('invald', () => {
  if(nameField.value === '') {
nameField.setCustomValidity('Please fill in your First Name.);
  } else  {
    nameField.setCustomValidity('First Name can only have uppercase and lowercase letters')
  }
})

```

Server side:

Remember: client side validation is not the only security measure you should do. You must also validate the data received from your client on server side code to ensure that the data matches what you expect it to be. 

## Resources
- https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549
- https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security
- https://www.smashingmagazine.com/2009/07/web-form-validation-best-practices-and-tutorials/
- https://css-tricks.com/form-validation-part-1-constraint-validation-html/

### TODO:
1. ~Client side JS code~  
2. ~Constraint validation API code~ 
3. Best practices (NEXT)
4. Server side validation
5. Gyf of validation in practice
6. Show images of all validations / codesandbox links
7. Test all code