let voidToggle = 
    $('#voidToggler').hide();

    $('#voidButton').on('click', function(e){
    e.preventDefault();

    $("#voidToggler").animate({
        height: 'toggle'
      }, 2000);
    });

  var Toggler = function(){
	return {
		initToggler: function(){
			voidToggle();
		}
	}
}();