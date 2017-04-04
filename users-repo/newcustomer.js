
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

    jQuery.post("http://localhost:49989/api/web",contacts);

    /*
    var postData = $("http://localhost:49989/api/web").serializeArray();
    for (var key in contacts) {
        if (contacts.hasOwnProperty(key)) {
            postData.push({name:key, value:contacts[key]});
        }
    }
    $.post(url, postData, function(){});
    */
    /* Update list*/
    appendOnPage(contacts);
    document.forms['contactForm'].reset();
}

/* Function gets data from the fields and gives it back to newUser and to contacts list */
function createUser() {
    var Key=6;
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;

    return {
        Key: 6,
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