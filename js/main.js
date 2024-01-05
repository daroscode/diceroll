//Making it pwa
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function(){
        console.log('ServiceWorker registered');
    });
}

function diceRoller(roller) {
    let _self = $(roller).find("button");
    let rollerType = _self.attr("data-id");
    let roll = 1;

    if (rollerType == 6) {
        roll = Math.floor(Math.random() * 6) + 1;
    }

    if (rollerType == 20) {
        roll = Math.floor(Math.random() * 20) + 1;
        if (roll === 1) {
            _self.removeClass("btn-info");  
            _self.addClass("btn-danger");  
        } else if (roll === 20) {
            _self.removeClass("btn-info");  
            _self.addClass("btn-success");  
        } else {
            _self.removeClass("btn-danger");  
            _self.removeClass("btn-success");  
            _self.addClass("btn-info"); 
        }
    }
    
    _self.fadeOut("slow").html("");
    _self.fadeIn("slow");
    _self.html(roll);
}

// Making sure 6 and 20 numbers is rolled on page ready to let the user know which one rolls what numbers.
$(document).ready(function() {
    $("#d6roll").find("button").html(6);
    $("#d20roll").find("button").removeClass("btn-info");  
    $("#d20roll").find("button").addClass("btn-success");  
    $("#d20roll").find("button").html(20);
   
});

// Dice roll callback
$("#d6roll, #d20roll").click(function() {
    diceRoller($(this));
});
