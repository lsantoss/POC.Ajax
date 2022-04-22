function deleteAjax() {
    var customer = new Object();
    customer.id = document.getElementById("IdDelete").value;

    $.ajax({
        url: '/Customer/Delete/',
        type: 'POST',
        data: JSON.stringify(customer),
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            if (data.success === true) {
                prepareTableList(data.customers);
                deleteBackToIndexView();
                toastr.success(data.message);
            }
            else {
                toastr.error(data.message);
            }
        }
    });
}

function deleteBackToIndexView() {
    document.getElementById("divDelete").hidden = true;
    document.getElementById("divList").hidden = false;
}