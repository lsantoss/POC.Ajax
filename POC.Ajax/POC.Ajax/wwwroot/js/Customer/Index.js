function callCreateView() {
    document.getElementById("divList").hidden = true;
    document.getElementById("divCreate").hidden = false;
}

function callEditViewAjax(id) {
    $.ajax({
        url: '/Customer/Edit/' + id,
        type: 'GET',
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
            document.getElementById("IdEdit").value = data.id;
            document.getElementById("NameEdit").value = data.name;
            document.getElementById("BirthEdit").value = prepareDate_yyyy_MM_dd(data.birth);
            document.getElementById("GenderEdit").value = data.gender;
            document.getElementById("divEdit").hidden = false;
            document.getElementById("divList").hidden = true;
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
            document.getElementById("div-loader").hidden = false;
        },             
        complete: function () {
            document.getElementById("div-loader").hidden = true;
        },
        success: function (data) {
            document.getElementById("IdDetails").value = data.id;
            document.getElementById("NameDetails").value = data.name;
            document.getElementById("BirthDetails").value = prepareDate_dd_MM_yyyy(data.birth);
            document.getElementById("GenderDetails").value = prepareGenderText(data.gender);
            document.getElementById("divDetails").hidden = false;
            document.getElementById("divList").hidden = true;
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
            document.getElementById("div-loader").hidden = false;
        },
        complete: function () {
            document.getElementById("div-loader").hidden = true;
        },
        success: function (data) {
            document.getElementById("IdDelete").value = data.id;
            document.getElementById("NameDelete").value = data.name;
            document.getElementById("BirthDelete").value = prepareDate_dd_MM_yyyy(data.birth);
            document.getElementById("GenderDelete").value = prepareGenderText(data.gender);
            document.getElementById("divDelete").hidden = false;
            document.getElementById("divList").hidden = true;
        },
        error: function () {
            toastr.error("Sorry, an error occurred during your request.");
        }
    });
}

function prepareTableList(customers) {
    let tbody = document.getElementById("tbodyList");
    tbody.innerText = "";

    if (customers.length > 0) {
        for (var i = 0; i < customers.length; i++) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            let tdId = document.createElement("td");
            tdId.innerText = customers[i].id;
            tr.appendChild(tdId);

            let tdName = document.createElement("td");
            tdName.innerText = customers[i].name;
            tr.appendChild(tdName);

            let tdBirth = document.createElement("td");
            tdBirth.innerText = prepareDate_dd_MM_yyyy(customers[i].birth);
            tr.appendChild(tdBirth);

            let tdGender = document.createElement("td");
            tdGender.innerText = prepareGenderText(customers[i].gender);
            tr.appendChild(tdGender);

            let tdActions = document.createElement("td");
            tdActions.innerHTML =
                "<button class='btn btn-secondary' onclick='callEditViewAjax(" + customers[i].id + ")'>Edit</button> " +
                "<button class='btn btn-secondary' onclick='callDetailsViewAjax(" + customers[i].id +")'>Details</button> " +
                "<button class='btn btn-secondary' onclick='callDeleteViewAjax(" + customers[i].id + ")'>Delete</button> ";
            tr.appendChild(tdActions);
        }        
    }
    else {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let td = document.createElement("td");
        td.setAttribute("colspan", "5");
        td.setAttribute("align", "center");
        td.innerText = "No registered customer";
        tr.appendChild(td);
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