var num = 0

function clicado() {
    var header_center = document.getElementsByClassName("header-center")[0]
    header_center.style.display = "block"
    num += 1
    if (header_center.style.display == "block" && num%2==0) {
        header_center.style.display = "none"
    }
}