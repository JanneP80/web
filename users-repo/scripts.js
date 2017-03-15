
var users = [];

var user = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};

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
    var oneRow = '';
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
}

/*todo next*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
users[lineNumber-1].pop()
}