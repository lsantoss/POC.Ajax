var customersToCreateList = [];

function addToCreateList() {
    const name = document.getElementById("Name").value;
    const birth = document.getElementById("Birth").value;
    const gender = document.getElementById("Gender").value;

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

function create() {
    if (customersToCreateList.length > 0) {
        $.ajax({
            url: '/Home/Create/',
            type: 'POST',
            data: JSON.stringify(customersToCreateList),
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                if (data.success === true) {
                    prepareTableList(data.customers);
                    backToIndexView();
                    toastr.success(data.message);
                }
                else {
                    toastr.error(data.message);
                }
            }
        });
    }
    else {
        alert("List of customers to be created is empty!");
	}
}

function backToIndexView() {
    customersToCreateList = [];
    clearForm();
    prepareTableToCreateList();
    prepareCreateButton();
    document.getElementById("divCreate").hidden = true;
    document.getElementById("divList").hidden = false;
}

function clearForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Birth").value = "";
    document.getElementById("Gender").value = "0";
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
            tdBirth.innerText = customersToCreateList[i].birth;
            tr.appendChild(tdBirth);

            let genderText = "";
            if (customersToCreateList[i].gender == "0") {
                genderText = "Male";
            }
            else if (customersToCreateList[i].gender == "1") {
                genderText = "Female";
            }
            else if (customersToCreateList[i].gender == "2") {
                genderText = "Other";
            }

            let tdGender = document.createElement("td");
            tdGender.innerText = genderText;
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