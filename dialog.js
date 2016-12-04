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
        container: function() {
            return $(".editor");
        }
    }
})();
