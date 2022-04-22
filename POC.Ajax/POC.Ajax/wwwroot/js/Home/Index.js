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
        success: function (data) {
            document.getElementById("IdEdit").value = data.id;
            document.getElementById("NameEdit").value = data.name;
            document.getElementById("BirthEdit").value = prepareDate_dd_MM_yyyy(data.birth);
            document.getElementById("GenderEdit").value = data.gender;
            document.getElementById("divEdit").hidden = false;
            document.getElementById("divList").hidden = true;
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
        success: function (data) {
            document.getElementById("IdDetails").value = data.id;
            document.getElementById("NameDetails").value = data.name;
            document.getElementById("BirthDetails").value = prepareDate_dd_MM_yyyy(data.birth);
            document.getElementById("GenderDetails").value = prepareGenderText(data.gender);
            document.getElementById("divDetails").hidden = false;
            document.getElementById("divList").hidden = true;
        }
    });
}

function callDeleteViewAjax(id) {
    console.log(id);
}

function prepareTableList(customers) {
    if (customers.length > 0) {
        let tbody = document.getElementById("tbodyList");
        tbody.innerText = "";

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
            tdBirth.innerText = customers[i].birth.split('T')[0];;
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