var Canvas = (function() {

    // The Canvas can only have rows as children.
    this.rows = [];

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

    this.display = function($container) {
        var $canvas = $("<div class='canvas'></div>");
        $container.append($canvas);

        $.each(this.rows, function(index, row) {
            row.display($canvas);
        });
    };

});

