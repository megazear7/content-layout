var Column = (function(parentRow, width) {
    var self = this;

    // The column can have 0 or more rows, or content.
    this.rows = [];
    this.parentRow = parentRow;
    this.content = null;
    this.nodeType = "container";
    this.width = width;

    this.siblings = function() {
        return this.parentRow.columns;
    };

    this.changeWidth = function() {
        // Updates the this.width property. .
        // We may not even need this method, the row object could just
        // directly manipulate the width property on this object.
    };

    this.addTitle = function(title) {
        if (this.rows.length === 0) {
            this.content = new Title(this, title);
            return true;
        } else {
            return false;
        }
    };

    this.addText = function(text) {
        if (this.rows.length === 0) {
            this.content = new Text(this, text);
            return true;
        } else {
            return false;
        }
    };

    this.addRow = function() {
        var newRow = false;

        if (! this.content) {
            newRow = new Row(this);
            this.rows.push(newRow);
        }

        return newRow;
    };

    this.clearContent = function() {
        this.content = null;
    };

    this.clearRows = function() {
        this.rows.length = 0;
    }

    this.print = function(ps, indent) {
        ps = ps + "\n" + indent + this.width;

        if (this.content) {
            ps = this.content.print(ps, indent + "  ");
        } else {
            $.each(this.rows, function(index, row) {
                ps = row.print(ps, indent + "  ");
            });
        }

        return ps;
    };

    this.display = function($row) {
        var $column = $("<div class='column' style='width:" + this.width + "%'></div>")
        $row.append($column);

        if (this.content) {
            this.content.display($column);
        } else {
            $.each(this.rows, function(index, row) {
                row.display($column);
            });
        }

        var $edit = $("<div class='edit-bar'>Edit Column</div>");
        $column.append($edit);

        $edit.click(function() {
            var $row = self.editorDisplay(1);
            Dialog.insert($row);
            Dialog.open();
        });
    };

    this.editorDisplay = function(depth, $row) {
        var $column;
        if (typeof $row !== "undefined") {
            $column = $("<div class='column' style='width:" + this.width + "%'></div>")
        } else {
            $column = $("<div class='column' style='width:100%'></div>")
        }

        if (depth > 0) {
            if (this.content) {
                this.content.editorDisplay($column);
            } else {
                $.each(this.rows, function(index, row) {
                    row.editorDisplay(depth-1, $column);
                });
            }
        }

        if (typeof $row !== "undefined") {
            $row.append($row);
            return $row;
        } else {
            return $column;
        }
    };

});

