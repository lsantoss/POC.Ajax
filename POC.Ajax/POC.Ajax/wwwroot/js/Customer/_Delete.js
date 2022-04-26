﻿function deleteAjax() {
    var customer = new Object();
    customer.id = $("#Id").val();

    $.ajax({
        url: '/Customer/Delete/',
        type: 'POST',
        data: JSON.stringify(customer),
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            if (data.success === true) {
                toastr.success(data.message);
                callListView();
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