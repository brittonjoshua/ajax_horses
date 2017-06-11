# What is AJAX?
Ajax stands for Asynchronous Javascript and XML. It allows for data to be passed between a browser and server without having to reload a page. This is possible by browsers who can pass along XMLHttpRequest objects.


# How to Make an AJAX Call
Allow for the HTML doc to fully load. locate the item on the DOM that will be utilized. Set the Jquery "on" method that accepts event (submit, click,etc), optional child selector(for event delegation), additional data(passed w/function if needed), and a function that specifies to run when event occurs. Stop the default action of event. Make the Ajax Request (HTTP request) with Jquery's Ajax method. Then ultilize the Jquery done function and do some stuff to the DOM.


