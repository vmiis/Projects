(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/calendar-week.html",Table:"vmiis-event-calendar-record","booking":"m2","booking2":"m8",lookup:"vmiis-event-calendar-record-category"},
        "m6":       {url:"$H/m/calendar-month.html",Table:"vmiis-event-calendar-record","booking":"m2",lookup:"vmiis-event-calendar-record-category"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"vmiis-event-calendar-record","booking":"m2",lookup:"vmiis-event-calendar-record-category"},
        "m2":       {url:"$H/m/booking-form.html",Table:"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        "m8":       {url:"$H/m/booking-form.2.html",Table:"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        "m3":       {url:"$H/m/booking-data.html",Table:"vmiis-event-calendar-record",form_module:"m2"},
        "m4":       {url:"$H/m/list-data.html",Table:"vmiis-event-calendar-record-category",form_module:"m5"},
        "m5":       {url:"$H/m/list-form.html",Table:"vmiis-event-calendar-record-category"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
