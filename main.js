function Osoba(Ime, Prezime, Email) {
    this.Ime = Ime;
    this.Prezime = Prezime;
    this.Email = Email;
}
var Osobe = new Array();
console.log(Osobe.length);

function AddInStorage() {
    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime");
    var email = document.getElementById("email");

    if (ime.value == "" || prezime.value == "" || email.value == "") return false;

    var temp = new Osoba();
    temp.Ime = ime.value;
    temp.Prezime = prezime.value;
    temp.Email = email.value;
    ime.value = prezime.value = email.value = "";

    Osobe.push(temp);
    localStorage.setItem("Osobe", JSON.stringify(Osobe));

    var red = document.getElementById("load");
    var i = Osobe.length - 1;
    red.innerHTML += "<div class=\"row pb-1\"> <div class=\"col\">  <label>" + temp.Ime +
        "</label> </div> <div class=\"col\"><label>" + temp.Prezime + "</label> </div> <div class=\"col\">    <label>" +
        temp.Email + "</label> </div> <button class=\"btn btn-outline-warning btn-sm\" onclick=\"EditStorage(" + i + ")\">Edit</button><button class=\"btn btn-outline-danger btn-sm pl-2\" onclick=\"DeleteFromStorage(" + i + ")\">Delete</button></div> "

}

function UcitajStorage() {
    if (localStorage.getItem("Osobe") !== null) {
        Osobe = JSON.parse(localStorage.getItem("Osobe"));
        if (Osobe.length > 0) {
            var red = document.getElementById("load");
            for (var i = 0; i < Osobe.length; i++) {
                red.innerHTML += "<div class=\"row pb-1\"> <div class=\"col\">  <label>" + Osobe[i].Ime +
                    "</label> </div> <div class=\"col\"><label>" + Osobe[i].Prezime + "</label> </div> <div class=\"col\">    <label>" +
                    Osobe[i].Email + "</label> </div> <button class=\"btn btn-outline-warning btn-sm\" onclick=\"EditStorage(" + i + ")\">Edit</button><button class=\"btn btn-outline-danger btn-sm pl-2\" onclick=\"DeleteFromStorage(" + i + ")\">Delete</button></div> "
            }
        }
    }
}

function EditStorage(i) {
    document.getElementById("Eime").value = Osobe[i].Ime;
    document.getElementById("Eprezime").value = Osobe[i].Prezime;
    document.getElementById("Eemail").value = Osobe[i].Email;

    document.getElementById("EditBtn").outerHTML = "<button class=\"btn btn-primary btn-sm\" id=\"EditBtn\" onclick=\"Edit(" + i + ")\">Edit</button>";
}

function Edit(i) {
    var ime = document.getElementById("Eime");
    var prezime = document.getElementById("Eprezime");
    var email = document.getElementById("Eemail");

    Osobe[i].Ime = ime.value;
    Osobe[i].Prezime = prezime.value;
    Osobe[i].Email = email.value;
    ime.value = prezime.value = email.value = "";

    localStorage.setItem("Osobe", JSON.stringify(Osobe));
    document.getElementById("load").innerHTML = "";

    UcitajStorage();

}

function DeleteFromStorage(i) {
    Osobe.splice(i, 1);
    localStorage.setItem("Osobe", JSON.stringify(Osobe));
    document.getElementById("load").innerHTML = "";
    UcitajStorage();
}

function DeleteAllOsobe() {
    localStorage.removeItem("Osobe");
    document.getElementById("load").innerHTML = "";
    UcitajStorage();
}