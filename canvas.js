var Canvas = (function($container) {
    var self = this;

    // The canvas can only have rows
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
        this.$container.find(".content").empty();

        var $canvas = $("<div class='canvas'></div>");
        this.$container.find(".content").append($canvas);

        $.each(this.rows, function(index, row) {
            row.display($canvas);
        });

        var $editBar = $("<div class='edit-bar'></div>");
        $canvas.append($editBar);

        $editBar.click(function() {
            var $canvas = self.editorDisplay(1);
            Dialog.insert($canvas);
            Dialog.open();
        });

        var $canvasText = $("<span>Canvas:</span>");
        $editBar.append($canvasText);

        var $editDialog = $("<span class='edit-option'>Edit</span>");
        $editBar.append($editDialog);

        $editDialog.click(function() {
            var $canvas = self.editorDisplay(1);
            Dialog.insert($canvas);
            Dialog.open();
        });

        var $addRow = $("<span class='edit-option'>Add Row</span>");
        $editBar.append($addRow);

        $addRow.click(function(e) {
            e.stopPropagation();
            self.addRow();
            self.display();
        });
    };

    this.editorDisplay = function(depth) {
        var $canvas = $("<div class='canvas'></div>");

        if (depth > 0) {
            $.each(this.rows, function(index, row) {
                row.editorDisplay(depth-1, $canvas);
            });
        }

        return $canvas;
    };

    this.$container.find(".mode").click(function(e) {
        if (self.$container.hasClass("preview")) {
            self.$container.addClass("edit");
            self.$container.removeClass("preview");
            $(e.target).text("Switch to Preview Mode");
        } else {
            self.$container.addClass("preview");
            self.$container.removeClass("edit");
            $(e.target).text("Switch to Edit Mode");
        }
    });

});

