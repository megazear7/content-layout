var Canvas = (function($container) {

    // The Canvas can only have rows as children.
    this.rows = [];
    this.$container = $container;

    this.addRow = function() {
        var newRow = new Row(this);
        this.rows.push(newRow);
        return newRow;
    };

    // For testing purposes only
    this.print = function() {
        var ps = "canvas";
        $.each(this.rows, function(index, row) {
            ps = row.print(ps, "  ");
        });
        console.log(ps);
    };

    this.display = function() {
        var $canvas = $("<div class='canvas'></div>");
        this.$container.append($canvas);

        $.each(this.rows, function(index, row) {
            row.display($canvas);
        });
    };

    var self = this;

    this.$container.find(".mode").click(function(e) {
        if (self.$container.hasClass("preview")) {
            self.$container.addClass("edit");
            self.$container.removeClass("preview");
            $(e.target).text("Edit");
        } else {
            self.$container.addClass("preview");
            self.$container.removeClass("edit");
            $(e.target).text("Preview");
        }
    });

});

