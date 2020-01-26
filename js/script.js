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
    var NowDate = new Date().format("M DD YYYY");
    // display value of Date object in #displayJsDate div
    var eDisplayDate = document.getElementById('displayJsDate');
    eDisplayDate.innerHTML = NowDate;

});