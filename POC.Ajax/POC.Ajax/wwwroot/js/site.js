﻿// Toastr Options
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
function prepareDate_yyyy_MM_dd(date) {
    date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    return finalDate = year + "-" + month + "-" + day;
}

function prepareTime_HH_mm(date) {
    var date = new Date(data.birth);
    var hour = date.getHours();
    var min = date.getMinutes();
    return hour + ":" + min;
}