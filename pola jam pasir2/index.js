document.write("<pre>");

for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
        if ((x <= y && x + y >= 10) || (x >= y && x + y <= 10)) {
            document.write(" ");
        } else {
            document.write("*");
        }
    }
    document.write("<br>");
}

document.write("</pre>");