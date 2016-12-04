$(document).ready(function() {
    window.Canvas = new Canvas($(document).find(".container"));

    var row1 = Canvas.addRow();
    //var row2 = Canvas.addRow();
    //var row3 = Canvas.addRow();

    var row1Col1 = row1.addColumn(50);
    var row1Col2 = row1.addColumn(25);
    var row1Col3 = row1.addColumn(25);

    row1Col2.addTitle("My Big Title");

    var row1Col1Row1 = row1Col1.addRow();
    //row1Col1.addRow();
    //row1Col1.addRow();

    var row1Col1Row1Col1 = row1Col1Row1.addColumn(100);
    row1Col1Row1Col1.addText("Hello, I am some text.");

    console.log("-----------------");
    Canvas.print();
    console.log("-----------------");
    console.log(Canvas);

    Canvas.display();
});
