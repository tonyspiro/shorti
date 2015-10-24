// index.js
module.exports = function(class_string){
	
	var style_map__numberic = {

		// Layout
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
		"font": "fontSize"
	};

	var style_map__semantic = {
		
		// Semantic names
		"border-box": "boxSizing",
		"block": "display",
		"inline": "display",
		"inline-block": "display",
		"relative": "position",
		"absolute": "position",
		"fixed": "position",
		"left": "float",
		"right": "float",
		"pointer": "cursor"
	};

	var Shorty = {
		
		getElClasses: function(el){
			return el.className;
		},

		isNubmeric(prop_abrv){
			
			if(	style_map__numberic.hasOwnProperty(prop_abrv)){
				
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
				if(_this.isNubmeric(prop_abrv)){
					
					var value = el_class.split('-')[1];
					var property;

					// Style map numberic
					if(style_map__numberic.hasOwnProperty(prop_abrv)){
						property = style_map__numberic[prop_abrv];
					}

					if (property) {
						
						// Get value	
						var new_value;

						// Default px
						new_value = value + 'px';	// default
						
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
					if(style_map__semantic.hasOwnProperty(prop_abrv)){
						value = style_map__semantic[prop_abrv];
						style_object[value] = prop_abrv;
					}

				}

			});

			return this.sortObjectKeys(style_object);
		},

		renderDomNode: function(el){

			var style = this.getStyleObject(this.getElClasses(el));

			for(var property in style) {
			 	el.style[property] = style[property];
			}

			return;
		},

		// Helpers
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

		render: function(class_string){
			return this.getStyleObject(class_string);
		}

	};

	return Shorty.render(class_string);

};