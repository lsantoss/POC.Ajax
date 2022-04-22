function edit() {
    var id = document.getElementById("IdEdit").value;
    var name = document.getElementById("NameEdit").value;
    var birth = document.getElementById("BirthEdit").value;
    var gender = document.getElementById("GenderEdit").value;

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
            document.getElementById("div-loader").hidden = false;
        },
        complete: function () {
            document.getElementById("div-loader").hidden = true;
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
    document.getElementById("divEdit").hidden = true;
    document.getElementById("divList").hidden = false;
}