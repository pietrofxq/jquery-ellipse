# jQuery Ellipsi Text


## jQuery Ellipsi Text

Actual version: 1.1

A simple jQuery plugin to Elipse a text inside a html tag.
Ellipsing your text makes it not to overflow, and given the number of max caracters, take them and add "..." to the end of the word so the users can see there is more text somewhere.

## Usage

Since this is a very short plugin, the best way to use it is just copying the whole code and paste in your JavaScript file. But if you aren't familiar with JavaScript at all, just use the ```script``` tag with the  ```src``` attribute and link this file.

Then, in another script tag:

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

Take note that the length of the word *DOES* count the length of the ellipsi. When you use it, make sure to subtract the length of the ellipsi you chose, or subtract 3 when using the default. For example: if you set the length for 30, your text will have the length of 27 + 3 caracters of the ellipsi, using the default configuration.

### Avoiding the last word being cut off

If you dont want the last word of being cut off like: "My dog is very fun..." you can set the option ```dontCut``` to ```true```:

```js
$(document).ready(function(){
	
	$('.class').ellipsiText({
		length:18,
		ellipsi: "...",
		dontCut:true
	});
})

```

Turns "My dog is very funny" into "My dog is very...".

#### Note about this option
This option makes the length of the word **unpredictable**, though the max length of the word will be the length specified in the options. This option search for the last index of a blank space, and return all the words until this index. This means that a whole word can be cut off because is impossible to know if a word is actually being cut off. So, the script takes the length specified, cuts the word into this length, search for the last index of a blank space and ignore every letter after this.

Example:

```html
<p class="teste">Lorem ipsum dolor sit amet</p>
```

```js

<script>
$('.test').ellipsiText({
	length:20,
	dontCut:true
})

</script>

```

The text "Lorem ipsum dolor sit amet" turns into "Lorem ipsum..." though disabling the ```dontCut``` option, the text becomes "Lorem ipsum dolor...", which should be the correct assumption.

## Example


```js
$(document).ready(function(){

	$('.elipse a').ellipsiText({
		length:35
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
	<a href="">This text has more than 35 carac...</a>
</div>

```

## Coming Soon

A pure-javascript version.

	
