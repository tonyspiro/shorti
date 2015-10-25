// shorti-browser.js 
(function(){

	var style_map__numeric = {
		// Numeric
		"w": "width",
		"minw": "minWidth",
		"maxw": "maxWidth",
		"h": "height",
		"minh": "minHeight",
		"maxh": "maxHeight",
		"m": "margin",
		"mt": "marginTop",
		"mr": "marginRight",
		"mb": "marginBottom",
		"ml": "marginLeft",
		"p": "padding",
		"pt": "paddingTop",
		"pr": "paddingRight",
		"pb": "paddingBottom",
		"pl": "paddingLeft",
		"t": "top",
		"r": "right",
		"l": "left",
		"b": "bottom",
		"br": "borderRadius",
		"font": "fontSize",
		"bw": "borderWidth",
		"bc": "borderColor",
	};

	var style_map__semantic = {
		// Semantic names
		"box": {
			"key": "boxSizing",
			"value": "border-box",
		},
		"block": {
			"key": "display",
			"value": "block",
		},
		"inline": {
			"key": "display",
			"value": "inline",
		},
		"inline-block": {
			"key": "display",
			"value": "inline-block",
		},
		"hidden": {
			"key": "display",
			"value": "none"
		},
		"flex": {
			"key": "display",
			"value": "flex"
		},
		"relative": {
			"key": "position",
			"value": "relative",
		},
		"absolute": {
			"key": "position",
			"value": "absolute",
		},
		"fixed": {
			"key": "position",
			"value": "fixed",
		},
		"pull-left": {
			"key": "float",
			"value": "left",
		},
		"pull-right": {
			"key": "float",
			"value": "right",
		},
		"pointer": {
			"key": "cursor",
			"value": "pointer",
		},
		"solid": {
			"key": "borderStyle",
			"value": "solid",
		},
		"text-center": {
			"key": "textAlign",
			"value": "center",
		},
		"text-left": {
			"key": "textAlign",
			"value": "left",
		},
		"text-right": {
			"key": "textAlign",
			"value": "right",
		},
		"center-block": {
			"key": "margin",
			"value": "0 auto"
		},
		"clearfix": {
			"key": "clear",
			"value": "both"
		}
	};

	var Shorti = {
		
		getElClasses: function(el){
			return el.className;
		},

		isNubmericShorti: function(prop_abrv){
			
			if(	style_map__numeric.hasOwnProperty(prop_abrv)){
				
				return true;

			} else {

				return false;
			
			}

		},

		getStyleObject: function(class_string){
			
			var _this = this;
			var class_list = class_string.split(' ');
			var style_object = {};
			
			class_list.forEach(function(el_class){
				
				var prop_abrv = el_class.split('-')[0];

				// Has a numberic value
				if(_this.isNubmericShorti(prop_abrv)){
					
					var value = el_class.split('-')[1];
					var property = style_map__numeric[prop_abrv];
					
					if (property) {
						
						// Get value	
						var new_value;

						// Default px
						new_value = value + 'px';	// default

						// Native support
						if(!window.document){
							new_value = parseInt(value.replace('px',''));
						}

						// Border color
						if (prop_abrv.indexOf('bc') !== -1) {
							new_value = '#' + value;
						}
						
						// Percent
						if (value.indexOf('p') !== -1) {
							new_value = value.replace('p','') + '%';
						}

						// Negative
						if (value.indexOf('n') !== -1) {
							new_value = '-' + value.replace('n','') + 'px';
						}

						style_object[property] = new_value;

					}
				
				} else { // END Numberic values

					var prop_abrv = el_class;

					// Style map semantic
					if (style_map__semantic.hasOwnProperty(prop_abrv)) {
						propery = style_map__semantic[prop_abrv].key;
						style_object[propery] = style_map__semantic[prop_abrv].value;
					}

				}

			});

			return this.sortObjectKeys(style_object);
		},

		sortObjectKeys: function(style_object){
		
			var keys = Object.keys(style_object),
		  i, len = keys.length;
		  keys.sort();
		  var new_obj = {};
		  for (i = 0; i < len; i++) {
			  var k = keys[i];
			  new_obj[k] = style_object[k];
			}
			return new_obj;

		},

		renderDomNodes: function(el){

			var style = this.getStyleObject(this.getElClasses(el));

			for(var property in style) {
			 	el.style[property] = style[property];
			}

			return;
		}

	};

	var shortis = document.getElementsByClassName('shorti');
	for(var i=0; i<shortis.length;i++){
		Shorti.renderDomNodes(shortis[i]);
	}
})();