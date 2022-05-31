// Toastr Options
toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "debug": false,
    "newestOnTop": false,
    "preventDuplicates": false,
    "positionClass": "toast-top-right",
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

//Common Functions
function isValid(...fields) {
    let valid = true;
    for (let field of fields) {
        if (field === undefined || field === null || field === "") {
            valid = false;
            break;
		}
    }
    return valid;
}

function prepareDate_dd_MM_yyyy_HH_mm(date, separator = "/") {
    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    hour = (hour < 10 ? "0" + hour : hour);
    min = (min < 10 ? "0" + min : min);
    return finalDate = day + separator + month + separator + year + " " + hour + ":" + min;
}