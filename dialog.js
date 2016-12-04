var Dialog = (function() {
    $(document).ready(function() {
        $(".editor .exit").click(function() {
            $(".editor").removeClass("show");
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
        },
        close: function(callback) {
            $(".editor .exit").unbind();
            $(".editor .exit").click(function() {
                $(".editor").removeClass("show");
            });
            $(".editor .exit").click(function() {
                callback()
                $(".editor .exit").unbind();
                $(".editor .exit").click(function() {
                    $(".editor").removeClass("show");
                });
            });
        }
    }
})();
