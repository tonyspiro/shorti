// shorti-browser.js 
function Shorti(options, callback){
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
    "op": "opacity",
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
    "fw": "fontWeight",
    "color": "color",
    "bw": "borderWidth",
    "bc": "borderColor",
    "z": "zIndex"
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
		},
		"no-repeat": {
			"key": "backgroundRepeat",
			"value": "no-repeat"
		}
	};

	var style_map__custom = {
		// Custom names
		"bg": "custom"
	};

	var Shorti = {
		
		getElClasses: function(el){
			return el.className;
		},

		isNubmeric: function(prop_abrv){
			
			return style_map__numeric.hasOwnProperty(prop_abrv);

		},

		isSemantic: function(prop_abrv){
			
			return style_map__semantic.hasOwnProperty(prop_abrv);

		},

		isCustom: function(prop_abrv){
			
			return style_map__custom.hasOwnProperty(prop_abrv);

		},

		getStyleObject: function(class_string){
      var _this = this;
      var class_list = class_string.split(' ');
      var style_object = {};
      class_list.forEach(function(el_class){
        var prop_abrv = el_class.split('-')[0];
        // Numberic shortis
        if(_this.isNubmeric(prop_abrv)){
          var value = el_class.split('-')[1];
          var property = style_map__numeric[prop_abrv];
          if (property) {
            // Get value  
            var new_value;
            // Default px
            new_value = value + 'px'; // default
            // Special cases
            if (property === 'opacity')
              new_value = value
            // Native support
            if(!_this.isNode){
              if(window){
                new_value = parseInt(value.replace('px',''));
              }
            }
            // Color
            if (_this.isHex(value) && prop_abrv.indexOf('color') !== -1) {
              new_value = '#' + value;
            }
            // Border color
            if (_this.isHex(value) && prop_abrv.indexOf('bc') !== -1) {
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
            // Font Weight
            if (property == 'fontWeight') {
              new_value = value.replace('px','');
            }
            // Z Index
            if (property == 'zIndex') {
              new_value = value.replace('px','');
            }
            style_object[property] = new_value;
          }
        }  // END Numberic names
        // Semantic shortis
        if(_this.isSemantic(el_class)){
          var prop_abrv = el_class;
          // Style map semantic
          if (style_map__semantic.hasOwnProperty(prop_abrv)) {
            propery = style_map__semantic[prop_abrv].key;
            style_object[propery] = style_map__semantic[prop_abrv].value;
          }
        }  // END Semantic names
        // Custom shortis
        if(_this.isCustom(prop_abrv)){
          var prop_block = el_class.split('-')[0];
          var prop_element = el_class.split(prop_block)[1].slice( 1 );
          // Style map semantic
          if (style_map__custom.hasOwnProperty(prop_block)) {
            // Background
            if (prop_block == 'bg') {
              if (prop_element.indexOf('url(') !== -1) {
                var property = 'backgroundImage';
                var value = prop_element;
              }
              if (prop_element == 'cover') {
                var property = 'backgroundSize';
                var value = prop_element;
              }
              if (prop_element == 'contain') {
                var property = 'backgroundSize';
                var value = prop_element;
              }
              if (prop_element == 'center') {
                var property = 'backgroundPosition';
                var value = prop_element;
              }
              if (_this.isHex(prop_element)) {
                var property = 'backgroundColor';
                var value = '#' + prop_element;
              }
            }
            // Borders
            if (prop_block.indexOf('border') !== -1) {
              var full_split = el_class.split('-');
              // Check for Directions
              if (full_split.length === 5) {
                var property = 'border' + full_split[1].charAt(0).toUpperCase() + full_split[1].slice(1);
                var value = full_split[2] + 'px ' + full_split[3] + ' #' + full_split[4];
              } else {
                var property = 'border';
                var value = full_split[1] + 'px ' + full_split[2] + ' #' + full_split[3];
              }
              if (full_split[1] === 'none')
                var value = 'none';
              
            }
          }
          style_object[property] = value;
        }  // END Custom names
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

		isHex: function(value){
			var isHex  = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(value);
			return isHex;
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

	if(options && options.targetClass){
		shortis = document.getElementsByClassName(options.targetClass);
	}
	for(var i=0; i<shortis.length;i++){
		Shorti.renderDomNodes(shortis[i]);
		if(options && options.showOnRender){
			shortis[i].style.display = 'block';
		}
	}

	if(callback) callback();

}