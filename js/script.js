$(document).ready(function(){
    
    // Display time using MomentJS
    var datetime = null,
        date = null;
    
    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('h:mm:ss a'));
    };
    
    datetime = $('#displayMoment')
    update();
    setInterval(update, 1000);


    // instantiate a JavaScript Date object
    var NowDate = new moment();
    // display value of Date object in #displayJsDate div
    var eDisplayDate = document.getElementById('displayJsDate');
    eDisplayDate.innerHTML = NowDate.format("MMMM DD, YYYY");
    update();
    setInterval(update, 1000);
    
    // Randomize the background gradient
    var colors = [
        "purple",
        "purpleSky",
        "kyeMeh",
        "orangeCoral",
        "roseColored",
        "fireWatch",
    ]
    
    // Write the class written on the document.
    var randomIndex = Math.floor(Math.random() * colors.length);
    $("main").addClass(colors[randomIndex]);
    //

    // Check if the attribute has a class
    
    // Purple Hue
    if ($("main").hasClass("purple")){
        $("#hex").append(
        "<span style='background: #6E48AA'></span>" +
        "<span style='background: #9D50BB'></span>" +
        "<span style='bac kground: #B176CC'></span"
        );
        $("#colorName").append("<p class='colorname'>Purple Hue</p>");
    }
    
    // Purple Sky
    if ($("main").hasClass("purpleSky")){
        $("#hex").append(
        "<span style='background: #4568DC'></span>" +
        "<span style='background: ##B06AB3'></span>" 
        );
        $("#colorName").append("<p class='colorname'>Purple Sky</p>");
    }
    
    // Kye Meh
    if ($("main").hasClass("kyeMeh")){
        $("#hex").append(
        "<span style='background: #11998e'></span>" +
        "<span style='background: #38ef7d'></span>" 
        );
        $("#colorName").append("<p class='colorname'>Kye Meh</p>");
    }
    
    // Orange Coral
    if ($("main").hasClass("orangeCoral")){
        $("#hex").append(
        "<span style='background: #ff9966'></span>" +
        "<span style='background: #ff5e62'></span>"
        );
        $("#colorName").append("<p class='colorname'>Orange Coral</p>");
    }
    
    // Rose Colored
    if ($("main").hasClass("roseColored")){
        $("#hex").append(
        "<span style='background: #E8CBC0'></span>" +
        "<span style='background: #636FA4'></span>"
        );
        $("#colorName").append("<p class='colorname'>Rose Colored</p>");
    }
    
    // Firewatch
    if ($("main").hasClass("fireWatch")){
        $("#hex").append(
        "<span style='background: #cb2d3e'></span>" +
        "<span style='background: #ef473a'></span>"
        );
        $("#colorName").append("<p class='colorname'>Firewatch</p>");
    }
});