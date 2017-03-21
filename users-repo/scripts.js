var contacts = [];

var newUser = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};

function onAddClick() {
    /* In the beginning: get data from fields into newUser */
    /* todo */

    newUser = createUser();
    console.log(newUser);
    
    contacts.push(newUser);

    console.log(contacts);
    storeLocalStorage(contacts);
    /* Update list*/
    appendOnPage(contacts);
}

/* Function gets data from the fields and gives it back to newUser and to contacts list */
function createUser() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        city: city
    };
}

function appendOnPage(contacts) {

    var oneRow = '';

        for (var i = 0; i < contacts.length; i++) {
            var urli = "https://www.google.fi/maps/place/" + contacts[i].address + ',' + contacts[i].city;
            oneRow += "<tr>" +
                "<td >" + contacts[i].firstName + "</td>" +
                "<td >" + contacts[i].lastName + "</td>" +
                "<td >" + contacts[i].phone + "</td>" +
                "<td ><a href=" + urli + ">" + contacts[i].address + "</td>" +
                "<td >" + contacts[i].city + "</td>" +
                "</tr>"
        }
        var customersElement = document.getElementById('contacts');
        customersElement.innerHTML = oneRow;

}

/*todo next use for clearing localstorage: localStorage.removeItem("contacts")*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
    contacts.splice(lineNumber - 1, 1);
    appendOnPage(contacts);
}

function storeLocalStorage(contacts) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
        document.getElementById("contacts").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

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