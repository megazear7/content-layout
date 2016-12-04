$(document).ready(function() {
    var $editor = $(".editor");
    var $exit = $(".editor .exit");
    $exit.click(function() {
        $editor.removeClass("show");
    });
});
