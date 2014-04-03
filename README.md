# jQuery Ellipsi Text


## jQuery Ellipsi Text

A simple jQuery plugin to Elipse a text inside a html tag.
Ellipsing your text makes it not to overflow, and given the number of max caracters, take them and add "..." to the end of the word so the users can se there is more text somewhere.

## Usage

Since this is a very short plugin, the best way to use it is just copying the whole code and paste in your JavaScript file. But if you aren't familiar with JavaScript at all, just use the ```script``` tag with the  ```src``` attribute and link this file.

Then, in another script tag, you will use the function:

```javascript
$(document).ready(function(){

	$('.class').ellipsiText();

})
```

## Notes and Options

By default, the plugin will ellipsi in 30 caracters and will add "..." (no quotes) in the end of the word.

You can easily override this by changing the options:

```js
$(document).ready(function(){
	
	$('.class').ellipsiText({
		length:50,
		ellipsi: "......"
	});
})

```

Take note that the length of the word *DOESNT* count the length of the ellipsi. When you use it, make sure to add the length of the ellipsi you chose, or add 3 when using the default. For example: if you set the length for 30, your text will have the length of 33.

## Example


```js
$(document).ready(function(){

	$('.elipse a').ellipsiText({
		length:40
	});

})
```

The following:

```html
<div class="elipse">
	<a href="">This text has more than 35 caracteres</a>
</div>
```

Turns into:

```html
<div class="elipse">
	<a href="">This text has more than 35 caracter...</a>
</div>

```

## Coming Soon

A pure-javascript version.

	
