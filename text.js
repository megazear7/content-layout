var Text = (function(column, text) {
    var self = this;

    this.column = column;
    this.nodeType = "content";
    this.text = text;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + text;
    };

    this.display = function($column) {
        var $text = $("<div class='text'><div class='content'>"+this.text+"</div></div>");
        $column.append($text);

        var $editBar = $("<div class='edit-bar'></div>");
        $text.append($editBar);

        $editBar.click(function() {
            var $text = self.editorDisplay();
            Dialog.insert($text);
            Dialog.open();
        });

        var $textText = $("<span>Text:</span>");
        $editBar.append($textText);

        var $editDialog = $("<span class='edit-option'>Edit</span>");
        $editBar.append($editDialog);

        $editDialog.click(function(e) {
            e.stopPropagation();
            var $text = self.editorDisplay();
            Dialog.insert($text);
            Dialog.open();
        });
    };

    this.editorDisplay = function($column) {
        var $text = $("<div class='text'><div class='content'>"+this.text+"</div></div>");

        if (typeof $column !== "undefined") {
            $column.append($text);
            return $column;
        } else {
            return $text;
        }
    };

});
