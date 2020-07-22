Outline - 
# Why do we need to use encodeURIcomponent()

# The syntax

# Are all characters escaped?
No, the characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 

# Difference between encodeURIComponent and encodeURI
EncodeURIComponent should be used when a URI component needs to be encoded. A component is a part of URI such as the hostname.
