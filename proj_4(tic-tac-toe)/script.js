let n = document.querySelectorAll("td");
for (let i = 0; i < n.length; i++) {
    n[i].addEventListener("click", function() {
        let t = n[i].textContent;
        if (t == "") {
            t = "X";
        }
        else if (t == "X") {
            t = "O";
        }
        else {
            t = "";
        }
        n[i].textContent = t;
    });
}
let refresh = document.querySelector("button");
refresh.addEventListener("click", function() {
    for (let u = 0; u < n.length; u++) {
        n[u].textContent = "";
    }
});
