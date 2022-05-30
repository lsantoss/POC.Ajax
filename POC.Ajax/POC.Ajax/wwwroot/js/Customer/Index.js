function callListViewAjax() {
    $.ajax({
        url: '/Customer/List/',
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
        },
        success: function (data) {
            $("#div-container-crud").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callCreateViewAjax() {
    $.ajax({
        url: '/Customer/Create/',
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
        },
        success: function (data) {
            $("#div-container-crud").html(data);
        },
        error: function (data) {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callEditViewAjax(id) {
    $.ajax({
        url: `/Customer/Edit/${id}`,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
        },
        success: function (data) {
            $("#div-container-crud").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callDetailsViewAjax(id) {
    $.ajax({
        url: `/Customer/Details/${id}`,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
        },
        success: function (data) {
            $("#div-container-crud").html(data);
        },
        error: function (data) {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callDeleteViewAjax(id) {
    $.ajax({
        url: `/Customer/Delete/${id}`,
        type: 'GET',
        dataType: 'html',
        contentType: 'application/json',
        async: false,
        beforeSend: function () {
            $("#div-loader").show();
        },
        complete: function () {
            $("#div-loader").hide();
        },
        success: function (data) {
            $("#div-container-crud").html(data);
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}