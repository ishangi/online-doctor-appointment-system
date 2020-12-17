var showname = document.getElementById("seekname")
if (showname == null) {
    var shownamed = document.getElementById("seeknamed")
    var respd = " "
    var url = window.location.origin + "/seeknamedoc"

    console.log(url)

    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
        respd = request.response;
        shownamed.innerHTML = respd
    }
    request.send()
}

else {
    var resp = " "
    var url = window.location.origin + "/seekname"

    console.log(url)

    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
        resp = request.response;
        showname.innerHTML = resp
    }
    request.send()

}

