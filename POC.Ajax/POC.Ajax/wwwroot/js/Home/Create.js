function backToIndexView() {
    clearForm();
    document.getElementById("divCreate").hidden = true;
    document.getElementById("divList").hidden = false;
}

function clearForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Birth").value = "";
    document.getElementById("Gender").value = "";
}