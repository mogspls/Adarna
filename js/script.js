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
        var hexCode = '';
        $.each( kulay.colors, function( key, val ) {
            
            // Creates the swatches and appends them to the DOM
            hex += '<span style="background:' + val + '">' + '<input type="text" readonly class="tooltip" value="' + val + '">'+ '<p>'+ val +'</p>'+ '</span>';
        });
        
        // Append loop to #hex <div>
        $("#hex").append(hex);
        
        // Copy to clipboard function
        $("#hex span").click(function(){
            $(this).closest("#hex span").children("input.tooltip").select();
            document.execCommand("copy");

            // Change back after 1 second
            var $this = $(this).closest("#hex span").children("p");
            var originalText = $this.text();
            $this.text('Copied!');
            setTimeout(function() {
            $this.text(originalText)
            }, 1000);
        });
        
        // Copy to clipboard function
        $("#hex span").click(function(){
            $(this).closest("#hex span").children("input.tooltip").select();
            document.execCommand("copy");

            // Change back after 1 second
            var $this = $(this).closest("#hex span").children("p");
            var originalText = $this.text();
            $this.text('Copied!');
            setTimeout(function() {
            $this.text(originalText)
            }, 1000);
        });
    });
    
    
    /*
    ================= SPIT FACTS ===================
    */
    
    // Pull random spit facts YO
//    $.getJSON("randomfacts.json", function(fact){
//        var spitfact = fact.fact;
//        $("q").append(spitfact);
//    });
    $.getJSON("randomfacts.json", function(datum){
        var fact = datum[Math.floor(Math.random() * datum.length)];
        
        var spitfact = fact.fact;
        var id = fact.id;
        var src = fact.src_url;
        
        $("em").append(spitfact);
        $("#link").append("<a href='" + src +"' target='_blank'>" + "<img src='images/link-button.svg' id='src'>" + "</a>");
    });

    
    /*
    ================= 8 BALL ===================
    */
    

});