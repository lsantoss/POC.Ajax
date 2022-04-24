function callCreateView() {
    $("#DivList").hide();
    $("#DivCreate").show();
}

function callEditViewAjax(id) {
    $.ajax({
        url: '/Customer/Edit/' + id,
        type: 'GET',
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
            $("#IdEdit").val(data.id);
            $("#NameEdit").val(data.name);
            $("#BirthEdit").val(prepareDate_yyyy_MM_dd(data.birth));
            $("#GenderEdit").val(data.gender);
            $("#DivEdit").show();
            $("#DivList").hide();
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
            $("#IdDetails").val(data.id);
            $("#NameDetails").val(data.name);
            $("#BirthDetails").val(prepareDate_dd_MM_yyyy(data.birth));
            $("#GenderDetails").val(prepareGenderText(data.gender));
            $("#DivDetails").show();
            $("#DivList").hide();
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function callDeleteViewAjax(id) {
    $.ajax({
        url: '/Customer/Delete/' + id,
        type: 'GET',
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
            $("#IdDelete").val(data.id);
            $("#NameDelete").val(data.name);
            $("#BirthDelete").val(prepareDate_dd_MM_yyyy(data.birth));
            $("#GenderDelete").val(prepareGenderText(data.gender));
            $("#DivDelete").show();
            $("#DivList").hide();
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function prepareTableList(customers) {
    if (customers.length > 0) {
        $("#TbodyList").html("");
        for (var i = 0; i < customers.length; i++) {
            let tdId = $("<td>").html(customers[i].id);
            let tdName = $("<td>").html(customers[i].name);
            let tdBirth = $("<td>").html(prepareDate_dd_MM_yyyy(customers[i].birth));
            let tdGender = $("<td>").html(prepareGenderText(customers[i].gender));

            let actions =
                "<button class='btn btn-secondary' onclick='callEditViewAjax(" + customers[i].id + ")'>Edit</button> " +
                "<button class='btn btn-secondary' onclick='callDetailsViewAjax(" + customers[i].id +")'>Details</button> " +
                "<button class='btn btn-secondary' onclick='callDeleteViewAjax(" + customers[i].id + ")'>Delete</button> ";
            let tdActions = $("<td>").html(actions);

            let tr = $("<tr>").append(tdId, tdName, tdBirth, tdGender, tdActions);
            $("#TbodyList").append(tr);
        }        
    }
    else {
        let td = $("<td>").prop("colspan", 5).prop("align", "center").text("No registered customer");
        let tr = $("<tr>").append(td);
        $("#TbodyList").html(tr);
    }
}

function prepareGenderText(value) {
    if (value == "0") {
        return "Male";
    }
    else if (value == "1") {
        return "Female";
    }
    else if (value == "2") {
        return "Other";
    }
}