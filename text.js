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

        var $edit = $("<div class='edit-bar'>Edit Text</div>");
        $text.append($edit);

        $edit.click(function() {
            var $row = self.editorDisplay();
            Dialog.insert($row);
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
