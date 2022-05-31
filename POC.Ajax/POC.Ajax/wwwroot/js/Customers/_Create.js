var customersToCreateList = [];

function addToCreateList() {
    const name = $("#Name").val();
    const birth = $("#Birth").val();
    const gender = $("#Gender").val();

    if (name === undefined || name === null || name === "" ||
        birth === undefined || birth === null || birth === "" ||
        gender === undefined || gender === null || gender === "") {
        toastr.info("All fields are mandatory!")
    }
    else {
        clearForm();
        customersToCreateListAdd(name, birth, gender);
        prepareTableToCreateList();
	}
}

function clearForm() {
    $("#Name").val("");
    $("#Birth").val("");
    $("#Gender").val("");
    $("#btn-create").prop("disabled", false);
}

function customersToCreateListAdd(name, birth, gender) {
    const customer = new Object();
    customer.name = name;
    customer.birth = birth;
    customer.gender = parseInt(gender);
    customersToCreateList.push(customer);
}

function prepareTableToCreateList() {
    if (customersToCreateList.length > 0) {
        $("#tbody-create-list").html("");
        for (let i = 0; i < customersToCreateList.length; i++) {
            const tdName = $("<td>").html(customersToCreateList[i].name);
            const tdBirth = $("<td>").html(prepareDate_dd_MM_yyyy_HH_mm(customersToCreateList[i].birth));
            const tdGender = $("<td>").html(prepareGenderText(customersToCreateList[i].gender));
            const tr = $("<tr>").append(tdName, tdBirth, tdGender);
            $("#tbody-create-list").append(tr);
        }
    }
    else {
        const td = $("<td>").prop("colspan", 3).prop("align", "center").text("No customers added to the list");
        const tr = $("<tr>").append(td);
        $("#tbody-create-list").html(tr);
    }
}

function prepareGenderText(value) {
    switch (value) {
        case 0:
            return "Male";
        case 1:
            return "Female";
        case 2:
            return "Other";
    }
}

function createAjax() {
    if (customersToCreateList.length > 0) {
        $.ajax({
            url: '/Customer/Create/',
            type: 'POST',
            data: JSON.stringify(customersToCreateList),
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
    else {
        toastr.error("List of customers to be created is empty!");
	}
}