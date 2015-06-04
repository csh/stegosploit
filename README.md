stegosploit
===========

### What is steganography?
> The art and science of hiding information by embedding messages within other, seemingly harmless messages. Steganography works by replacing bits of useless or unused data in regular computer files with bits of different, invisible information.

In this example we hide JavaScript code in the alpha channel of a PNG file then execute it when the image finishes loading.

### Why?
The original exploit was discovered by [Saumil Shah][saumil] and used an HTML5 `<canvas>` element to execute malicious code when the image was rendered. I decided to write a simple example of the same process but using an `<img>` element and [Peter Eigenschink](https://github.com/petereigenschink)'s steganography.js library.

A harmless demonstration can be found [here](http://images-fireflies.c9.io/twitter.png).
More information about the original exploit using the `<canvas>` element can be found [here](https://conference.hitb.org/hitbsecconf2015ams/sessions/stegosploit-hacking-with-pictures/).

### Notes
The demonstration provided cannot be embedded by means of an `<img>` tag, though it is fully possible to move the decoding script into a document that does embed the _potentially_ malicious image through an `<img>` tag. 

[saumil]: https://twitter.com/therealsaumil
