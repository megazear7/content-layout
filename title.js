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

        var $editBar = $("<div class='edit-bar'></div>");
        $title.append($editBar);

        $editBar.click(function() {
            var $title = self.editorDisplay();
            Dialog.insert($title);
            Dialog.open();
        });

        var $titleText = $("<span>Title:</span>");
        $editBar.append($titleText);

        var $editDialog = $("<span class='edit-option'>Edit</span>");
        $editBar.append($editDialog);

        $editDialog.click(function() {
            var $title = self.editorDisplay();
            Dialog.insert($title);
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

