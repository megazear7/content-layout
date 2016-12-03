var Column = (function(row, width) {

    // The column can have 0 or more rows, or content.
    this.rows = [];
    this.parentRow = row;
    this.content = null;
    this.nodeType = "container";
    this.width = 50;

    this.siblings = function() {
        return this.parentRow.columns;
    };

    this.changeWidth = function() {
        // Updates the this.width property. .
        // We may not even need this method, the row object could just
        // directly manipulate the width property on this object.
    };

    this.setContent = function(content) {
        // If there is already content or any rows, do nothing.
        // otherwise, set this.content = content
    };

    this.addRow = function(row) {
        // If there is already content, do nothing
        // otherwise do this.rows.push(row);
    };

    this.clearContent = function() {
        this.content = null;
    };

    this.clearRows = function() {
        this.rows.length = 0;
    }

    this.print = function(ps, indent) {
        // TODO
    };

});

