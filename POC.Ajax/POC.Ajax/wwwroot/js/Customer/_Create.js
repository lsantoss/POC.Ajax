var customersToCreateList = [];

function addToCreateList() {
    const name = $("#NameCreate").val();
    const birth = $("#BirthCreate").val();
    const gender = $("#GenderCreate").val();

    if (name === undefined || name === null || name === "" ||
        birth === undefined || birth === null || birth === "" ||
        gender === undefined || gender === null || gender === "") {
        toastr.info("All fields are mandatory!")
    }
    else {
        clearForm();
        customersToCreateListAdd(name, birth, gender);
        prepareTableToCreateList();
        prepareCreateButton();
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
                    prepareTableList(data.customers);
                    createBackToIndexView();
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
    else {
        toastr.error("List of customers to be created is empty!");
	}
}

function createBackToIndexView() {
    customersToCreateList = [];
    clearForm();
    prepareTableToCreateList();
    prepareCreateButton();
    $("#divCreate").hide();
    $("#divList").show();
}

function clearForm() {
    $("#NameCreate").val("");
    $("#BirthCreate").val("");
    $("#GenderCreate").val("0");
}

function customersToCreateListAdd(name, birth, gender) {
    const customer = new Object();
    customer.name = name;
    customer.birth = birth;
    customer.gender = parseInt(gender);
    customersToCreateList.push(customer);
}

function prepareCreateButton() {
    if (customersToCreateList.length > 0) {
        $("#btnCreate").prop("disabled", false);
    }
    else {
        $("#btnCreate").prop("disabled", true);
    }
}

function prepareTableToCreateList() {
    if (customersToCreateList.length > 0) {
        $("#tbodyCreateList").html("");
        for (var i = 0; i < customersToCreateList.length; i++) {
            let tdName = $("<td>").html(customersToCreateList[i].name);
            let tdBirth = $("<td>").html(prepareDate_dd_MM_yyyy(customersToCreateList[i].birth));
            let tdGender = $("<td>").html(prepareGenderText(customersToCreateList[i].gender));
            let tr = $("<tr>").append(tdName, tdBirth, tdGender);
            $("#tbodyCreateList").append(tr);
		}
    }
    else {
        let td = $("<td>").prop("colspan", 3).prop("align", "center").text("No customers added to the list");
        let tr = $("<tr>").append(td);
        $("#tbodyCreateList").html(tr);
	}
}