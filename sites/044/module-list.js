(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/calendar-week.html",Table:"demo-vm-19100402","booking":"m2","booking2":"m8"},
        "m6":       {url:"$H/m/calendar-month.html",Table:"demo-vm-19100402","booking":"m2"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"demo-vm-19100402","booking":"m2"},
        "m2":       {url:"$H/m/booking-form.html",Table:"demo-vm-19100402",lookup:"demo-vm-19100403"},
        "m8":       {url:"$H/m/booking-form.2.html",Table:"demo-vm-19100402",lookup:"demo-vm-19100403"},
        "m3":       {url:"$H/m/booking-data.html",Table:"demo-vm-19100402",form_module:"m2"},
        "m4":       {url:"$H/m/participant-data.html",Table:"demo-vm-19100403",form_module:"m5"},
        "m5":       {url:"$H/m/participant-form.html",Table:"demo-vm-19100403"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
