# jQuery Ellipsi Text


## jQuery Ellipsi Text

A simple jQuery plugin to Elipse a text inside a html tag.
Ellipsing your text makes it not to overflow, and given the number of max caracters, take them and add "..." to the end of the word so the users can se there is more text somewhere.

## Usage

<<<<<<< HEAD
Since this is a very short plugin, the best way to use it is just copying the whole code and paste in your JavaScript file.
But if you aren't familiar with JavaScript at all, just use the ```<script>``` tag with ```src``` attribute and link this file.

=======
Since this is a very short plugin, the best way to use it is just copying the whole code and paste in your JavaScript file. But if you aren't familiar with JavaScript at all, just use the script tag with the  src attribute and link this file.
>>>>>>> cd343f56c78e23dcd6c3e704bd3d10026077e02e
Then, in another script tag, you will use the function:

```javascript
$(document).ready(function(){

	elipsiText('selector',length);

})
```

## Example

<<<<<<< HEAD
Make all ```<a>``` inside a div with the class "elipse" ellipsis the text when it reaches more than 35 caracters:
=======
Make all ``` <a> ``` tags inside a div with the class "elipse" ellipsis the text when it reaches more than 35 caracters:
>>>>>>> cd343f56c78e23dcd6c3e704bd3d10026077e02e

```js
$(document).ready(function(){

	elipsiText('.elipse a',35);

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

	
