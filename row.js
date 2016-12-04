var Row = (function(parentNode) {
    var self = this;

    // This could be a canvas or a column.
    this.parentNode = parentNode;
    this.columns = [];
    this.nodeType = "container";

    this.addColumn = function(width) {
        var newColumn = false;

        var newTotalWidth = this.totalWidth() + width;

        if (newTotalWidth > 100) {
            var overflowWidth = newTotalWidth - 100;
            var newProposedWidth = width - overflowWidth;
            if (newProposedWidth > 0) {
                newColumn = new Column(this, newProposedWidth);
                this.columns.push(newColumn);
            } else {
                console.error("Row is already at 100% widths");
            }
        } else {
            newColumn = new Column(this, width);
            this.columns.push(newColumn);
        }
        
        return newColumn;
    };

    this.totalWidth = function() {
        var totalWidth = 0;
        $.each(this.columns, function(index, column) {
            totalWidth += column.width;
        });
        return totalWidth;
    };

    this.print = function(ps, indent) {
        ps = ps + "\n" + indent + "row";

        $.each(this.columns, function(index, column) {
            ps = column.print(ps, indent + "  ");
        });

        return ps;
    };

    this.display = function($parentContainer) {
        var $row = $("<div class='row'></div>");
        $parentContainer.append($row);

        $.each(this.columns, function(index, column) {
            column.display($row);
        });

        var $editBar = $("<div class='edit-bar'></div>");
        $row.append($editBar);

        $editBar.click(function() {
            var $row = self.editorDisplay(1);
            Dialog.insert($row);
            Dialog.open();
        });

        var $rowText = $("<span>Row:</span>");
        $editBar.append($rowText);

        var $editDialog = $("<span class='edit-option'>Edit</span>");
        $editBar.append($editDialog);

        $editDialog.click(function(e) {
            e.stopPropagation();
            var $row = self.editorDisplay(1);
            Dialog.insert($row);
            Dialog.open();
        });

        var $addColumn = $("<span class='edit-option'>Add Column</span>");
        $editBar.append($addColumn);

        $addColumn.click(function(e) {
            e.stopPropagation();
            console.log("hello");
            /*
            self.addColumn();
            Canvas.display();
            */
        });
    };

    this.editorDisplay = function(depth, $parentContainer) {
        var $row = $("<div class='row'></div>");

        if (depth > 0) {
            $.each(this.columns, function(index, column) {
                column.editorDisplay(depth-1, $row);
            });
        }

        if (typeof $parentContainer !== "undefined") {
            $parentContainer.append($row);
            return $parentContainer;
        } else {
            return $row;
        }
    };
});

