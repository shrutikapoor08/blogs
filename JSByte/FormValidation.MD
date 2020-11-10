# JavaScript Form Validation – How to Check User Input on HTML Forms with JS Example Code

Forms are ubiquitous in internet world. Some apps such as Gmail use forms to collect data to sign up users and give an email address, whereas some apps such as PayPal use forms to do online shopping and process payment from a buyer to a merchant. Some web forms are used to apply for a new car loan whereas some forms are used to order pizza for dinner. It is therefore important that when forms are developed, the data that is collected is cleansed and removed of any malicious data. This is called form validation.

Form validation works both on client side and server side. You may have noticed that in some forms, as soon as you enter an invalid email address, the form gives an error "Please enter a valid email". This "immediate" type of validation is usually done via client-side code using JavaScript. In other cases, you may have noticed that when you enter a credit card, a form will show a loader and sometimes show an error "This credit card is invalid". In this kind of validation, the form made a call to its server side code, and returned a validation error. This validation case where a call to the server was made is called server side validation. 

### TODO insert form validation snapshot here <gif> 

## Common use cases of form validation

https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549
You will need form validation when data is entered in a form. A user will enter data, which could be email, phone number. To be sure that the data entered by the user is what it is expected to, you will need to validate the data. 
not only is this good for your API, but is also a way of ensuring security. 
- security attacks like SQL injection
- ensuring all data is entered 
- ensuring data is what it expected to be

## Types of form validation 
- Server side

- Client side
- data type 
    - email 
      - phone number
      - string only
      - url
- valid data 
    - date
    - name 
    - email format
- required fields

## how to do form validation
 1. built in HTML5 functionality
 - `required` (code)
 - `minlength`, `maxlength`
 - `type`
 
 1. with JavaScript 
- format checks (code)
- required checks


Remember: client side validation is not the only security measure you should do. You must also validate the data received from your client on server side code. 
