function edit() {
    var id = $("#IdEdit").val();
    var name = $("#NameEdit").val();
    var birth = $("#BirthEdit").val();
    var gender = $("#GenderEdit").val();

    if (id === undefined || id === null || id === "" ||
        name === undefined || name === null || name === "" ||
        birth === undefined || birth === null || birth === "" ||
        gender === undefined || gender === null || gender === "") {
        toastr.info("All fields are mandatory!")
    }
    else {
        var customer = prepareCustomerData(id, name, birth, gender);
        editAjax(customer);
    }
}

function prepareCustomerData(id, name, birth, gender) {
    const customer = new Object();
    customer.id = parseInt(id);
    customer.name = name;
    customer.birth = birth;
    customer.gender = parseInt(gender);
    return customer;
}

function editAjax(customer) {
    $.ajax({
        url: '/Customer/Edit/',
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
                editBackToIndexView();
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

function editBackToIndexView() {
    $("#divEdit").hide();
    $("#divList").show();
}