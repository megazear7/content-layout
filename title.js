var Title = (function(column, title) {
    var self = this;

    this.column = column;
    this.nodeType = "content";
    this.title = title;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + title;
    };

    this.display = function($column) {
        var $title = $("<div class='title'><div class='content'>"+this.title+"</div></div>");
        $column.append($title);

        var $edit = $("<div class='edit-bar'>Edit Title</div>");
        $title.append($edit);

        $edit.click(function() {
            var $row = self.editorDisplay();
            Dialog.insert($row);
            Dialog.open();
        });
    };

    this.editorDisplay = function($column) {
        var $title = $("<div class='title'><div class='content'>"+this.title+"</div></div>");

        if (typeof $column !== "undefined") {
            $column.append($title);
            return $column;
        } else {
            return $title;
        }
    };

});

