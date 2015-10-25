# Shorti
Shorti helps you style your React components by rendering short-hand "class names" into inline styles.  Also works in React Native.  Check out the API section below to get all the shorties.  This is a work in progress, please fork and add to it!

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
###Play With The Example
```
git clone https://github.com/tonyspiro/shorti
cd shorti/example
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
	return <div style={ style }>
		Hello world
	</div>;
}
```
renders to:
```html
<div style="border-color:#444;border-style:solid;border-width:1px;font-size:50px;height:210px;left:50%;margin-left:-205px;padding:40px;position:relative;top:100px;width:500px;">
	Hello world
</div>
```
###API
####Numeric
p = percent<br>
n = negative<br>

Property | Shorti
--- | --- | ---
width | w-number(p)
minWidth | minw-number(p)
maxWidth | maxw-number(p)
height | h-number(p)
minHeight | minh-number(p)
maxHeight | maxh-number(p)
margin | m-number(p)
marginTop | mt-number(p,n)
marginRight | mr-number(p,n)
marginBottom | mb-number(p,n)
marginLeft | ml-number(p,n)
padding | p-number(p)
paddingTop | pt-number(p)
paddingRight | pr-number(p)
paddingBottom | pb-number(p)
paddingLeft | pl-number(p)
top | t-number(p,n)
right | r-number(p,n)
left | l-number(p,n)
bottom | b-number(p,n)
borderWidth | bw-number
borderColor | bc-(hex value)
borderRadius | br-number(p)
fontSize | font-number(p)

####Semantic
Property | Shorti
--- | --- | ---
boxSizing:border-box | box
display:block | block
display:inline | inline
display:inline-block | inline-block
position:relative | relative
position:absolute | absolute
position:fixed | fixed
float:left | pull-left
float:right | pull-right
cursor:pointer | pointer
borderStyle:solid | solid
textAlign:center | text-center
textAlign:left | text-left
textAlign:right | text-right
