# Shorti
Shorti helps you style your React components by rendering short-hand "class names" into inline styles.  Also works in React Native and as a separate file in the browser!  For browser support, include ```shorti-browser.js``` and add "shorti" as a class along with your other Shorti class names.

[Check out the API page](https://github.com/tonyspiro/shorti/blob/master/API.md) to get all the Shortis.

This is a work in progress, please fork and add to it!

### Getting started

#####Install
```
npm install shorti
```
and then include the package in your app:
```javascript
import S from 'shorti';
const style = S('w-500 h-500 p-20');
/* same as 
const style = {
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
const style = S('border-1-solid-444 w-500 h-210 p-40 font-50 relative t-100 l-50p ml-205n');
<div style={ style }>
  Hello world
</div>;
```
renders to:
```html
<div style="border: 1px solid #444;font-size:50px;height:210px;left:50%;margin-left:-205px;padding:40px;position:relative;top:100px;width:500px;">
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
  <style>
    /* So we don't get FOUC */
    .shorti{
      display: none;
    }
  </style>
</head>
<body>
  <div class="shorti p-40 w-100 h-100 solid bw-1 bc-000 center-block t-100 relative">
    Here is some text...
  </div>
  <div class="shorti p-40 w-100 h-100 solid bw-1 bc-000 br-100 l-60p t-107 absolute">
  	Here is some more text...
  </div>
  <script src="../../shorti-browser.js"></script>
  <script>
    Shorti({ showOnRender: true }, function(){
      // Do callback stuff here...
    });
  </script>
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
  <style>
    /* So we don't get FOUC */
    .shorti{
      display: none;
    }
  </style>
</head>
<body>
  <div class="shorti p-40 w-100 h-100 solid bw-1 bc-000 center-block t-100 relative" style="border: 1px solid rgb(0, 0, 0); height: 100px; margin: 0px auto; padding: 40px; position: relative; top: 100px; width: 100px; display: block;">
    Here is some text...
  </div>
  <div class="shorti p-40 w-100 h-100 solid bw-1 bc-000 br-100 l-60p t-107 absolute" style="border: 1px solid rgb(0, 0, 0); border-radius: 100px; height: 100px; left: 60%; padding: 40px; position: absolute; top: 107px; width: 100px; display: block;">
    Here is some more text...
  </div>
  <script src="../../shorti-browser.js"></script>
  <script>
    Shorti({ showOnRender: true }, function(){
      // Do callback stuff here...
    });
  </script>
</body>
</html>
```
