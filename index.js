function love() {

    var name1 = document.getElementById("Nameone").value;
    var name2 = document.getElementById("Namesecond").value;
    if (name1.lenght() <= 2) {
        alert("Enter atleast 3 character ");
    }
    if (name2.lenght() <= 2) {
        alert("Enter atleast 3 character ");
    } else {
        var random = Math.floor(Math.random() * 100);
        document.getElementById("print").innerHTML = name1 + "and" + name2 + "=" + random + "%" + "of love";
        if (random <= 10 || random <= 40) {
            document.getElementById(" statement ").innerHTML = "Worst Relationship";
        } else if (random <= 41 || random <= 70) {
            document.getElementById(" statement ").innerHTML = "Good Relationship";
        } else if (random <= 71 || random <= 89) {
            document.getElementById(" statement ").innerHTML = "Best Relationship";
        } else if (random <= 90 || random <= 100) {
            document.getElementById("   statement ").innerHTML = "Lovely Relationship";
        }
    }
}