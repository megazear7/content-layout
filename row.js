var Row = (function(canvas) {

    this.canvas = canvas;
    this.columns = [];
    this.nodeType = "container";

    this.addColumn = function(width) {
        var newColumn = new Column(width, this);
        this.columns.push(newColumn);

        // TODO If total width of this.columns exceeded 100, change the widths.
    };

    this.print = function(ps, indent) {
        ps = ps + "\n" + indent + "row";
        return ps;
    };

});

