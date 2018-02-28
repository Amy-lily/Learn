$(document).ready(function() {
    var num = 0;
    fn();

    function fn() {
        timer = setInterval(function() {
            num++;

            $(".list").stop().animate({ left: "-" + 10 * num });
            console.log(num)
            var aa = $(".list").position().left;
            console.log(aa)

        }, 100)
    }

})
