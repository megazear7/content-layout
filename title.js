var Title = (function(column, title) {

    this.column = column;
    this.nodeType = "content";
    this.title = title;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + title;
    };

});

