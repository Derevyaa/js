function drawTriangle() {
    let height = parseInt(document.getElementById("height").value);
    let symbol = document.getElementById("symbol").value;

    let triangle = "";
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += symbol + " ";
        }
        triangle += row + "<br>";

        document.getElementById("output").innerHTML = triangle;
    }
}
