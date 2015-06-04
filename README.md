stegosploit
===========

I got really bored and wanted to fiddle with some JavaScript.
Some basic javascript combined with steganography.js by [Peter Eigenschink](https://github.com/petereigenschink) resulted in exploitable images.

The original exploit was discovered by [Saumil Shah](https://twitter.com/therealsaumil) and used the HTML5 `<canvas>` element. More information can be found [here](https://conference.hitb.org/hitbsecconf2015ams/sessions/stegosploit-hacking-with-pictures/).

A harmless demonstration can be found [here](http://images-fireflies.c9.io/twitter.png).

### Notes
The demonstration provided cannot be embedded by means of an `<img>` tag, though it is fully possible to move the decoding script into a document that does embed the _potentially_ malicious image through and `<img>` tag. 
