var createList = [];

function addToCreateList() {
    const name = $("#Name").val();
    const birth = $("#Birth").val();
    const gender = $("#Gender").val();

    if (!isValid(name, birth, gender)) {
        toastr.info("All fields are mandatory!");
    }
    else {
        clearForm();
        createList.push(new Customer(0, name, birth, gender));
        prepareTableToCreateList();
	}
}

function clearForm() {
    $("#Name").val("");
    $("#Birth").val("");
    $("#Gender").val("");
    $("#btn-create").prop("disabled", false);
}

function prepareTableToCreateList() {
    if (createList.length > 0) {
        $("#tbody-create-list").html("");
        for (let i = 0; i < createList.length; i++) {
            const tdName = $("<td>").html(createList[i].name);
            const tdBirth = $("<td>").html(formatDate_dd_MM_yyyy_HH_mm(createList[i].birth));
            const tdGender = $("<td>").html(createList[i].getGenderDescription());
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

function createAjax() {
    if (createList.length > 0) {
        $.ajax({
            url: '/Customer/Create/',
            type: 'POST',
            data: JSON.stringify(createList),
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