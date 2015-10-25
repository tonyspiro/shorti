# Shorti
Shorti helps you style your React components by rendering short-hand "class names" into inline styles.  Also works in React Native and as a separate file in the browser!  For browser support, include ```shorti-browser.js``` and add "shorti" as a class along with your other Shorti class names.

[Check out the API page](https://github.com/tonyspiro/shorti/blob/master/API.md) to get all the Shorties.

This is a work in progress, please fork and add to it!

### Getting started

#####Install
```
npm install shorti
```
and then include the package in your app:
```javascript
import Shorti from 'shorti';
let style = Shorti('w-500 h-500 p-20');
/* same as 
let style = {
		width: '500px',
		height: '500px',
		padding: '20px'
};
*/
```
###React Example
```
git clone https://github.com/tonyspiro/shorti
cd shorti/examples/react
npm install
```
#####Run webpack dev
```
npm run dev
```
Go to [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)<br>
Edit app.js for live reloading

This:
```javascript
let style = Shorti('w-500 h-210 p-40 font-50 relative t-100 l-50p ml-n205 solid bw-1 bc-444');
<div style={ style }>
	Hello world
</div>;
```
renders to:
```html
<div style="border-color:#444;border-style:solid;border-width:1px;font-size:50px;height:210px;left:50%;margin-left:-205px;padding:40px;position:relative;top:100px;width:500px;">
	Hello world
</div>
```
###Browser Example
This:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Shorti Browser Example</title>
</head>
<body>
	<div class="shorti w-100 h-100 solid bw-1 bc-000 center-block t-300 relative"></div>
	<script src="shorti-browser.js"></script>
</body>
</html>
```
renders to:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Shorti Browser Example</title>
</head>
<body>
	<div class="shorti w-100 h-100 solid bw-1 bc-000 center-block t-300 relative" style="border: 1px solid rgb(0, 0, 0); height: 100px; margin: 0px auto; position: relative; top: 300px; width: 100px;"></div>
	<script src="shorti-browser.js"></script>
</body>
</html>
```