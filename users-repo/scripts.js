/*  use for clearing localstorage: localStorage.removeItem("contacts")*/
function onRemoveClick() {
    var lineNumber = document.getElementById("lineNumber").value;
    contacts.splice(lineNumber - 1, 1);
    storeLocalStorage(contacts);
    appendOnPage(contacts);
    document.forms['delete'].reset();
}