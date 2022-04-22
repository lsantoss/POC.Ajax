function deleteAjax() {
    var customer = new Object();
    customer.id = $("#IdDelete").val();

    $.ajax({
        url: '/Customer/Delete/',
        type: 'POST',
        data: JSON.stringify(customer),
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
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
    $("#divDelete").hide();
    $("#divList").show();
}