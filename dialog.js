var Dialog = (function() {
    $(document).ready(function() {
        var $editor = $(".editor");
        var $exit = $(".editor .exit");

        $exit.click(function() {
            $editor.removeClass("show");
        });
    });

    return {
        open: function() {
            $(".editor").addClass("show");
        },
        close: function() {
            $(".editor").removeClass("show");
        },
        insert: function($dom) {
            $(".editor .content").empty();
            $(".editor .content").append($dom);
        }
    }
})();
