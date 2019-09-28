(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/calendar-week.html", Table:"demo-vm-19091701","booking":"m2"},
        "m6":       {url:"$H/m/calendar-month.html",Table:"demo-vm-19091701","booking":"m2"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"demo-vm-19091701","booking":"m2"},
        "m2":       {url:"$H/m/roster-form.html",Table:"demo-vm-19091701",lookup:"demo-vm-19091702"},
        "m3":       {url:"$H/m/roster-data.html",Table:"demo-vm-19091701",form_module:"m2"},
        "m4":       {url:"$H/m/staff-data.html",Table:"demo-vm-19091702",form_module:"m5"},
        "m5":       {url:"$H/m/staff-form.html",Table:"demo-vm-19091702"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
