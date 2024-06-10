function submit() {
    var a = document.getElementById("inputNames");
    var b = a.value;
    var c = document.getElementById("inputNumber");
    var d = c.value;
    var e = document.getElementById("inputMail");
    var f = e.value;
    alert(b + '-' + d + '-' + f);
    alert('Ваша заявка принята!');
    a.value = "";
    c.value = "";
    e.value = "";
}