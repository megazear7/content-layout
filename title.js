var Title = (function(column, title) {

    this.column = column;
    this.nodeType = "content";
    this.title = title;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + title;
    };

    this.display = function($column) {
        var $title = $("<div class='title'>"+this.title+"</div>");
        $column.append($title);

        var $edit = $("<div class='edit-bar'>Edit Title</div>");
        $title.append($edit);

        $edit.click(function() {
            console.log("hello");
        });
    };

    this.displayEditor = function($column) {
        var $title = $("<div class='text'>"+this.title+"</div>");
        $column.append($title);
    };

});

