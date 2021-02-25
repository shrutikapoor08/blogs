*I will be sharing bite sized learnings about JavaScript regularly in this series. Follow along with me as I re-learn JavaScript. This series will cover JS fundamentals, browsers, DOM, system design, domain architecture and frameworks.*



`clientWidth`: The width of the element **inside** the element. 

`clientHeight`: The height of the element **inside** the element. 

`offsetWidth`: The width of the element including the border.

`offsetHeight`: The height of the element including the border. 

`pageXOffset`: horizontal scroll position

`pageYOffset`: vertical scroll position

`getBoundingClientRect`: A function to get the most precise position of an element on the screen. It returns an object with properties indicating the pixel positions of the sides of the element relative to the top left of the screen. Word of caution - calling getBoundingClientRect causes reflow. [More details here ] (https://gist.github.com/paulirish/5d52fb081b3570c81e3a)

JSFiddle link: https://jsfiddle.net/af9sdt0h/21/ 
