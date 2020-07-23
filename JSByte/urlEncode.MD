# what is the difference between encodeURI and encodeURIComponent

## Why do we need to use encodeURIcomponent()
EncodeUrIcomponent is used to replace each instance of a character by one, two, three or four characters. 
encodeURIComponent should be used on any data that is accepted from a user. For eg: the data received from POST 
# Are all characters escaped?
No, the characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 

# Difference between encodeURIComponent and encodeURI
EncodeURIComponent should be used when a URI component needs to be encoded. A component is a part of URI such as the hostname.
