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
        beforeSend: function () {
            document.getElementById("div-loader").hidden = false;
        },
        complete: function () {
            document.getElementById("div-loader").hidden = true;
        },
        success: function (data) {
            if (data.success === true) {
                prepareTableList(data.customers);
                deleteBackToIndexView();
                toastr.success(data.message);
            }
            else {
                toastr.error(data.message);
            }
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function deleteBackToIndexView() {
    document.getElementById("divDelete").hidden = true;
    document.getElementById("divList").hidden = false;
}