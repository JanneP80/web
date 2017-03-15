
var users = [];

var user = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};

var oneRow = '';

function onAddClick() {
    /* In the beginning: get data from fields into user */
    /* todo */

    user = createUser();
    console.log(user);
    /* In the end: save it to array */
    users.push(user);
    console.log(users);

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
    /* var oneRow = ''; */

    for (var i = 0; i < users.length; i++) {
        oneRow += "<tr>" +
            "<td >" + users[i].firstName+ "</td>" +
            "<td >" + users[i].lastName+ "</td>" +
            "<td >" + users[i].age+ "</td>" +
            "<td >" + users[i].address+ "</td>" +
            "<td >" + users[i].city+ "</td>" +
        "</tr>"
    }
    var customersElement = document.getElementById('customers');
    customersElement.innerHTML = oneRow;
    localStorage.setObj("rows", oneRow);
    /* localStorage.setItem("rows", oneRow); */
}

/*todo next use for clearing localstorage: localStorage.removeItem("rows")*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
    users.splice(lineNumber-1,1)

}

function storeLocalStorage(){
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("firstname", "Jack");
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("customers").innerHTML = localStorage.getItem("firstname")+" "+localStorage.getItem("lastname");
    } else {
        document.getElementById("customers").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function reloadCustomers() {
    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    };

    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    };

    document.getElementById("customers").innerHTML = localStorage.getItem("rows");
    /* users=localStorage.getItem("rows"); */
    /* oneRow = localStorage.getItem("rows"); */
    oneRow = localStorage.getObj("rows")
}