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
function prepareDate_dd_MM_yyyy_HH_mm(date, separator = "/") {
    date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    hour = (hour < 10 ? "0" + hour : hour);
    min = (min < 10 ? "0" + min : min);
    return finalDate = day + separator + month + separator + year + " " + hour + ":" + min;
}

function prepareDate_yyyy_MM_dd_HH_mm(date, separator = "-") {
    date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    hour = (hour < 10 ? "0" + hour : hour);
    min = (min < 10 ? "0" + min : min);
    return finalDate = year + separator + month + separator + day + " " + hour + ":" + min;
}