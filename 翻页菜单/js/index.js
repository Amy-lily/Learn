$(document).ready(function() {
    $(".on").click(function() {
        $(".box3,.box4,.box5,.box6").addClass("active")
    })
    $(".off").click(function() {
        $(".box3,.box4,.box5,.box6").removeClass("active")
    })
    $(".box7").hover(function() {
        $(".box3,.box4,.box5,.box6").addClass("active")
    }, function() {
        $(".box3,.box4,.box5,.box6").removeClass("active")
    })

})
