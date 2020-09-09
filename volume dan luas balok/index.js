function volume(p, l, t) {
    var volume
    volume = p * l * t;
    return volume;
}
document.write("<b>diketahui:</b><br>panjang: 2<br>lebar: 4 <br> tinggi: 6<br>")
document.write("<br><br><b>jawaban:</b>")
document.write("<br>Hasil volume adalah: ");
document.write(volume(2, 4, 6));

function luas(p, l, t) {
    var luas
    luas = 2 * (p * l + p * t + l * t);
    return luas;
}
document.write("<br><br> Luas kubus adalah: ")
document.write(luas(2, 4, 6))