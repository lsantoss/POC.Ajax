﻿var customersToCreateList = [];

function addToCreateList() {
    const name = document.getElementById("NameCreate").value;
    const birth = document.getElementById("BirthCreate").value;
    const gender = document.getElementById("GenderCreate").value;

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
                document.getElementById("div-loader").hidden = false;
            },
            complete: function () {
                document.getElementById("div-loader").hidden = true;
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
        alert("List of customers to be created is empty!");
	}
}

function createBackToIndexView() {
    customersToCreateList = [];
    clearForm();
    prepareTableToCreateList();
    prepareCreateButton();
    document.getElementById("divCreate").hidden = true;
    document.getElementById("divList").hidden = false;
}

function clearForm() {
    document.getElementById("NameCreate").value = "";
    document.getElementById("BirthCreate").value = "";
    document.getElementById("GenderCreate").value = "0";
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
        document.getElementById("btnCreate").disabled = false;
    }
    else {
        document.getElementById("btnCreate").disabled = true;
    }
}

function prepareTableToCreateList() {
    let tbody = document.getElementById("tbodyCreateList");
    tbody.innerText = "";

    if (customersToCreateList.length > 0) {
        for (var i = 0; i < customersToCreateList.length; i++) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            let tdName = document.createElement("td");
            tdName.innerText = customersToCreateList[i].name;
            tr.appendChild(tdName);

            let tdBirth = document.createElement("td");
            tdBirth.innerText = prepareDate_dd_MM_yyyy(customersToCreateList[i].birth);
            tr.appendChild(tdBirth);

            let tdGender = document.createElement("td");
            tdGender.innerText = prepareGenderText(customersToCreateList[i].gender);
            tr.appendChild(tdGender);
		}
    }
    else {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let td = document.createElement("td");
        td.setAttribute("colspan", "3");
        td.setAttribute("align", "center");
        td.innerText = "No customers added to the list";
        tr.appendChild(td);
	}
}