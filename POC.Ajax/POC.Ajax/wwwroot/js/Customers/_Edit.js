function edit() {
    const id = $("#Id").val();
    const name = $("#Name").val();
    const birth = $("#Birth").val();
    const gender = $("#Gender").val();

    if (id === undefined || id === null || id === "" ||
        name === undefined || name === null || name === "" ||
        birth === undefined || birth === null || birth === "" ||
        gender === undefined || gender === null || gender === "") {
        toastr.info("All fields are mandatory!");
    }
    else {
        const customer = prepareCustomerData(id, name, birth, gender);
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
                toastr.success(data.message);
                callListViewAjax();
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