var Text = (function(column, text) {

    this.column = column;
    this.nodeType = "content";
    this.text = text;

    this.print = function(ps, indent) {
        return ps + "\n" + indent + text;
    };

    this.display = function($column) {
        var $text = $("<div class='text'>"+this.text+"</div>");
        $column.append($text);

        var $edit = $("<div class='edit-bar'>Edit Text</div>");
        $text.append($edit);

        $edit.click(function() {
            console.log("hello");
        });
    };

    this.editorDisplay = function($column) {
        var $text = $("<div class='text'>"+this.text+"</div>");
        $column.append($text);
    };

});
