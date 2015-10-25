# Shorti
Shorti helps you style your React components by rendering short-hand "class names" into inline styles.  Also works in React Native.  Check out the API section below to get all the shorties.

Also available for the browser with shorti-browser.  Just add "shorti" as a class along with your other shorti class names.

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

###API
####Numeric
p = percent<br>
n = negative<br>

Shorti | Property
--- | --- | ---
w-number(p) | width
minw-number(p) | minWidth
maxw-number(p) | maxWidth
h-number(p) | height
minh-number(p) | minHeight
maxh-number(p) | maxHeight
m-number(p) | margin
mt-number(p,n) | marginTop
mr-number(p,n) | marginRight
mb-number(p,n) | marginBottom
ml-number(p,n) | marginLeft
p-number(p) | padding
pt-number(p) | paddingTop
pr-number(p) | paddingRight
pb-number(p) | paddingBottom
pl-number(p) | paddingLeft
t-number(p,n) | top
r-number(p,n) | right
l-number(p,n) | left
b-number(p,n) | bottom
bw-number | borderWidth
bc-(hex value) | borderColor
br-number(p) | borderRadius
font-number(p) | fontSize

####Semantic
Shorti | Property
--- | --- | ---
box | boxSizing:border-box 
block | display:block 
inline | display:inline 
inline-block | display:inline-block
hidden | display:none
relative | position:relative 
absolute | position:absolute 
fixed | position:fixed 
pull-left | float:left 
pull-right | float:right 
pointer | cursor:pointer 
solid | borderStyle:solid 
text-center | textAlign:center 
text-left | textAlign:left 
text-right | textAlign:right
center-block | margin:0 auto
clearfix | clear:both
