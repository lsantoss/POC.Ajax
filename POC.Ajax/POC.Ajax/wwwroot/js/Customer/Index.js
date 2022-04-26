function callListView() {
    $.ajax({
        url: '/Customer/List/',
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            $("#DivCustomer").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callCreateView() {
    $.ajax({
        url: '/Customer/Create/',
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            $("#DivCustomer").html(data);
        },
        error: function (data) {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callEditViewAjax(id) {
    $.ajax({
        url: '/Customer/Edit/' + id,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            $("#DivCustomer").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callDetailsViewAjax(id) {
    $.ajax({
        url: '/Customer/Details/' + id,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            $("#DivCustomer").html(data);
        },
        error: function (data) {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callDeleteViewAjax(id) {
    $.ajax({
        url: '/Customer/Delete/' + id,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#DivLoader").show();
        },
        complete: function () {
            $("#DivLoader").hide();
        },
        success: function (data) {
            $("#DivCustomer").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}