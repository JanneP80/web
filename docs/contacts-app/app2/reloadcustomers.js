
function reloadCustomers() { /* on startup from localstorage*/

    try {
        if (typeof(Storage) !== "undefined") {
            contacts = JSON.parse(localStorage.getItem("contacts"));
        } else {
            document.getElementById("contacts").innerHTML = "no-go";
        }
    }
    catch (err) {
        document.getElementById("contacts").innerHTML = err.message;
    }
    if (contacts){
        appendOnPage(contacts);
    }
    else{
        contacts = [];
    }
}

function appendOnPage(contacts) {
    var oneRow = '';
    for (var i = 0; i < contacts.length; i++) {
        var urli = "https://www.google.fi/maps/place/" + contacts[i].address + ',' + contacts[i].city;
        oneRow += "<tr>" +
            "<td >" + contacts[i].firstName + "</td>" +
            "<td >" + contacts[i].lastName + "</td>" +
            "<td >" + contacts[i].phone + "</td>" +
            "<td ><a href=" + urli + " + target='_blank'>" + contacts[i].address + "</td>" +
            "<td >" + contacts[i].city + "</td>" +
            "</tr>";
    }
    var customersElement = document.getElementById('contacts');
    customersElement.innerHTML = oneRow;
}