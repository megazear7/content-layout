var Column = (function(parentRow, width) {

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

});

