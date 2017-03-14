/**
 * Created by ekoodi on 14.3.2017.
 */
var users = [];

var user = {
    firstName: '',
    lastName: '',
    age: '',
    address: ''
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
    /* TODO how to do it in array */

    /*
    for (var i = 0; i < users.length; i++) {
        var userListElement = document.getElementById('userListFN');
        userListElement.innerHTML = '' + users[i].firstName;
        var userListElement = document.getElementById('userListLN');
        userListElement.innerHTML = '' + users[i].lastName;
        var userListElement = document.getElementById('userListAG');
        userListElement.innerHTML = '' + users[i].age;
        var userListElement = document.getElementById('userListAD');
        userListElement.innerHTML = '' + users[i].address;
    }*/

          appendOnPage(users);

}

/* Function gets data from the fields and gives it back to userlist */
function createUser() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;

    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        address: address
    };
}

function appendOnPage(users) {

    var table = document.createElement("table");
    for (var i = 0; i < users.length; i++) {
        var row = table.insertRow(-1);
        var firstNameCell = row.insertCell(-1);
        firstNameCell.appendChild(document.createTextNode(users[i].firstName));
        var lastNameCell = row.insertCell(-1);
        lastNameCell.appendChild(document.createTextNode(users[i].lastName));
        var ageCell = row.insertCell(-1);
        ageCell.appendChild(document.createTextNode(users[i].age))
        var addressCell = row.insertCell(-1);
        addressCell.appendChild(document.createTextNode(users[i].address))
    }
    document.body.appendChild(table);

}