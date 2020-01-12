/* Application Controller */
let App = function(){
    "use strict"

    return {
        init: function(options){
            this.initBase(options);
        },
        initBase: function(options){
            handleLogin(options);
        },
        initGeolocation: function(){
			handleGeolocation();
        },
        initTheme: function(){
			formTheme();
        },
        initAdvert: function(){
			advertForm();
        },
        initToggler: function(){
			voidToggle();
		}
    };
}();