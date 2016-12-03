var Text = (function(column, text) {

    this.column = column;
    this.nodeType = "content";
    this.text = text;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + text;
    };

});
