function callCreateView() {
    document.getElementById("divList").hidden = true;
    document.getElementById("divCreate").hidden = false;
}

function callEditView(id) {
    $.ajax({
        url: '/Home/Edit/' + id,
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

function callDetailsView(id) {
    console.log(id);
}

function callDeleteView(id) {
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
            tdBirth.innerText = customers[i].birth;
            tr.appendChild(tdBirth);

            let genderText = "";
            if (customers[i].gender == "0") {
                genderText = "Male";
            }
            else if (customers[i].gender == "1") {
                genderText = "Female";
            }
            else if (customers[i].gender == "2") {
                genderText = "Other";
            }

            let tdGender = document.createElement("td");
            tdGender.innerText = genderText;
            tr.appendChild(tdGender);

            let tdActions = document.createElement("td");
            tdActions.innerHTML =
                "<button class='btn btn-secondary' onclick='callEditView(" + customers[i].id + ")'>Edit</button> " +
                "<button class='btn btn-secondary' onclick='callDetailsView(" + customers[i].id +")'>Details</button> " +
                "<button class='btn btn-secondary' onclick='callDeleteView(" + customers[i].id + ")'>Delete</button> ";
            tr.appendChild(tdActions);
        }
    }
}