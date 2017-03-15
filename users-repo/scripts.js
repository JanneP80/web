/**
 * Created by ekoodi on 14.3.2017.
 */
var users = [];

var user = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
};

/* var count = 0; */

function onAddClick() {
    /* In the beginning: get data from fields into user */
    /* todo */

    user = createUser();
    console.log(user);
    /* In the end: save it to array */
    users.push(user);
    console.log(users);

    /* Update list*/
    /* TODO how to do it in array */

    /* var table = document.createElement("table"); */


    /* for (var i = count; i < users.length; i++) { */
    /*
     var row = table.insertRow(-1);
     var firstNameCell = row.insertCell(-1);
     firstNameCell.appendChild(document.createTextNode(users[count].firstName));
     var lastNameCell = row.insertCell(-1);
     lastNameCell.appendChild(document.createTextNode(users[count].lastName));
     var ageCell = row.insertCell(-1);
     ageCell.appendChild(document.createTextNode(users[count].phone));
     var addressCell = row.insertCell(-1);
     addressCell.appendChild(document.createTextNode(users[count].address)); */
    /*
     var userListElement = document.getElementById('userListFN');
     userListElement.innerHTML = '' + users[i].firstName;
     var userListElement = document.getElementById('userListLN');
     userListElement.innerHTML = '' + users[i].lastName;
     var userListElement = document.getElementById('userListAG');
     userListElement.innerHTML = '' + users[i].phone;
     var userListElement = document.getElementById('userListAD');
     userListElement.innerHTML = '' + users[i].address;
     */
    /* }*/
    /* count++;*/
    /*
     */
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

    /*
     var row = table.insertRow(-1);
     var firstNameCell = row.insertCell(-1);
     firstNameCell.appendChild(document.createTextNode(users[i].firstName));
     var lastNameCell = row.insertCell(-1);
     lastNameCell.appendChild(document.createTextNode(users[i].lastName));
     var ageCell = row.insertCell(-1);
     ageCell.appendChild(document.createTextNode(users[i].phone));
     var addressCell = row.insertCell(-1);
     addressCell.appendChild(document.createTextNode(users[i].address));
     var cityCell = row.insertCell(-1);
     cityCell.appendChild(document.createTextNode(users[i].city));
     */
    /*
     var table = document.createElement("table");
     var row = table.insertRow(-1);
     var firstNameCell = row.insertCell(-1);
     firstNameCell.appendChild(document.createTextNode(users[count].firstName));
     var lastNameCell = row.insertCell(-1);
     lastNameCell.appendChild(document.createTextNode(users[count].lastName));
     var ageCell = row.insertCell(-1);
     ageCell.appendChild(document.createTextNode(users[count].phone));
     var addressCell = row.insertCell(-1);
     addressCell.appendChild(document.createTextNode(users[count].address));
     */

    /* document.body.appendChild(table);*/
}