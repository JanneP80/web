
var users = [];

var user = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};

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
    /* In the beginning: get data from fields into user */
    /* todo */

    user = createUser();
    console.log(user);
    /* In the end: save it to array */
    users.push(user);
    console.log(users);
    storeLocalStorage(users);
    /* Update list*/
    appendOnPage(users);
}

/* Function gets data from the fields and gives it back to user list */
function createUser() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;

    return {
        firstName: firstName,
        lastName: lastName,
        age: phone,
        address: address,
        city: city
    };
}

function appendOnPage(users) {
      var oneRow = '';

    for (var i = 0; i < users.length; i++) {
        var urli = "https://www.google.fi/maps/place/"+users[i].address+","+users[i].city;
        oneRow += "<tr>" +
            "<td >" + users[i].firstName+ "</td>" +
            "<td >" + users[i].lastName+ "</td>" +
            "<td >" + users[i].age+ "</td>" +
            "<td ><a href="+urli+">" + users[i].address+ "</td>" +
            "<td >" + users[i].city+ "</td>" +
        "</tr>"
    }
    var customersElement = document.getElementById('customers');
    customersElement.innerHTML = oneRow;
    /* localStorage.setObj("rows", oneRow);*/
    /* oneRow = JSON.parse(localStorage.getItem("rows"); */
    /* localStorage.setItem("rows", oneRow); */
}

/*todo next use for clearing localstorage: localStorage.removeItem("rows")*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
    users.splice(lineNumber-1,1);
    appendOnPage(users);
}

function storeLocalStorage(users){
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("customers",JSON.stringify(users));
        /* localStorage.setItem("lastname", "Smith");*/
        // Retrieve
        // document.getElementById("customers").innerHTML = localStorage.getItem("customers");*/
    } else {
        document.getElementById("customers").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function reloadCustomers() {
   /* localStorage.getItem("customers",JSON.parse(users)); */
    /* document.getElementById("customers").innerHTML = localStorage.getItem("rows"); */

    /* document.getElementById("customers").innerHTML = JSON.parse(localStorage.getItem("customers")); */

        /* users=localStorage.getItem("rows"); */
    /* oneRow = localStorage.getItem("rows"); */
    if (Storage.length !== 0) {
        users = JSON.parse(localStorage.getItem("customers"));
        appendOnPage(users);
    } else{
        users.push(user);
    }
    /* appendOnPage(users); */
    /* oneRow = localStorage.getObj("rows"); */
     return users;
}