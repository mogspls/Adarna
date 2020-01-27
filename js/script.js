$(document).ready(function(){
    // Once the whole document has loaded, load the rest of the script
    
    /*
    =================== TIME ======================
    */
    // Display time using MomentJS
    var datetime = null,
        date = null;
    var update = function(){
        date = moment(new Date());
        datetime.html(date.format('h:mm:ss a'));
    }
    
    // Append the variable to #displayMoment
    datetime = $("#displayMoment")
    update();
    setInterval(update, 1000);
    
    // instantiate a JavaScript Date object
    var today = new moment();
    // display value of Date object in #displayJsDate div
    var eDisplayDate = document.getElementById('displayJsDate');
    eDisplayDate.innerHTML = today.format("MMMM DD, YYYY");
    update();
    setInterval(update, 1000);
    
    /*
    ================= GRADIENTS ===================
    */
    
    // Pull random gradients from gradients.json
    $.getJSON("gradients.json", function(data){
        var kulay = data[Math.floor(Math.random() * data.length)];
        $("main").addClass(kulay.name);
        $("#colorName").append(kulay.name);
        $("main").attr('style', "background: linear-gradient(45deg," + kulay.colors + ")");
        
        
        var hex = '';
        $.each( kulay.colors, function( key, val ) {
            hex += '<span style="background:' + val + '">' + '</span>';
        });
        $("#hex").append(hex);
    });
    
    //Pull random spit facts YO
    $.getJSON("https://uselessfacts.jsph.pl/random.json?language=en", function(datum){
        var spitfact = datum.text;
        var src_url = datum.source_url;
        var src = datum.source;
        
        $("q em").append(spitfact);
        $("p#source").append("<a href='" + src_url +"'>" + src + "</a>");
    });
    
    
    
});