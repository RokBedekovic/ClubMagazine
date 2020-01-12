let formTheme = 
$("#theme2").click(function(){ 
    $("#myForm").css({"background-color":"black",
                      "border-width":"5px",
                      "border-color":"#61DE2A",
                      "color":"white"  
                    });

    $(".form-control").css({"background-color":"#d6c258"});

    $("button").css({"color":"white"});
    $(".btn-primary").css({"background":"green", "border-color":"#0cfd02"});
                        
});

$("#theme1").click(function(){
    $("#myForm").css({"background-color":"white",
                      "border-width":"5px",
                      "border-color":"#007bff",
                      "color":"black"  
                    });

$(".form-control").css({"background-color":"white"});

$("button").css({"color":"white"});
$(".btn-primary").css({"background":"#007bff", "border-color":"#007bff"});
    
});

$("#theme3").click(function(){
    $("#myForm").css({"background-color":"#f79fc3",
                      "border-width":"5px",
                      "border-color":"#f8098c",
                      "color":"white"  
                    });

$(".form-control").css({"background-color":"#ffd3fa"});

$("button").css({"color":"white"});
$(".btn-primary").css({"background":"#750067", "border-color":"#bd1be4"});                    
    
});

var Theme = function(){
	return {
		initTheme: function(){
			formTheme();
		}
	}
}();