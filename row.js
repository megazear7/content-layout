var Row = (function(parentNode) {

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

});

