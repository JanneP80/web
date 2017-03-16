
var contacts = [];

var newUser;

/* var newUser = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};*/

/* var oneRow = ''; */
/*
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};
*/
function onAddClick() {
    /* In the beginning: get data from fields into newUser */
    /* todo */

    newUser = createUser();
    console.log(newUser);
    /* In the end: save it to array and local storage */
    contacts.push(newUser);
    console.log(contacts);
    storeLocalStorage(contacts);
    /* Update list*/
    appendOnPage(contacts);
}

/* Function gets data from the fields and gives it back to newUser and to contacts list */
function createUser() {
    var firstName = document.getElementById("firstname").value;
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
        var urli = "https://www.google.fi/maps/place/"+contacts[i].address+","+contacts[i].city;
        oneRow += "<tr>" +
            "<td >" + contacts[i].firstName+ "</td>" +
            "<td >" + contacts[i].lastName+ "</td>" +
            "<td >" + contacts[i].phone+ "</td>" +
            "<td ><a href="+urli+">" + contacts[i].address+ "</td>" +
            "<td >" + contacts[i].city+ "</td>" +
        "</tr>"
    }
    var customersElement = document.getElementById('contacts');
    customersElement.innerHTML = oneRow;
    /* localStorage.setObj("rows", oneRow);*/
    /* oneRow = JSON.parse(localStorage.getItem("rows"); */
    /* localStorage.setItem("rows", oneRow); */
}

/*todo next use for clearing localstorage: localStorage.removeItem("customers")*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
    contacts.splice(lineNumber-1,1);
    appendOnPage(contacts);
}

function storeLocalStorage(contacts){
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("contacts",JSON.stringify(contacts));
        /* localStorage.setItem("lastname", "Smith");*/
        // Retrieve
        // document.getElementById("customers").innerHTML = localStorage.getItem("customers");*/
    } else {
        document.getElementById("contacts").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function reloadCustomers() {
   /* localStorage.getItem("customers",JSON.parse(contacts)); */
    /* document.getElementById("customers").innerHTML = localStorage.getItem("rows"); */

    /* document.getElementById("customers").innerHTML = JSON.parse(localStorage.getItem("customers")); */

        /* contacts=localStorage.getItem("rows"); */
    /* oneRow = localStorage.getItem("rows"); */
    if (typeof(Storage) !== "undefined") {
        contacts = JSON.parse(localStorage.getItem("contacts"));
        appendOnPage(contacts);
    } else{
        document.getElementById("contacts").innerHTML = "";
    }
    /* appendOnPage(contacts); */
    /* oneRow = localStorage.getObj("rows"); */
     return contacts;
}