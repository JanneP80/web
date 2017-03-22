
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

function storeLocalStorage(contacts) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
        document.getElementById("contacts").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}