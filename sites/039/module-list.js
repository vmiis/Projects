(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "p1":       {url:"$H/m/calendar-week.html",Table:"demo-vm-19091501","booking":"p2"},
        "p2":       {url:"$H/m/booking-form.html",Table:"demo-vm-19091501"},
        "p3":       {url:"$H/m/booking-data.html",Table:"demo-vm-19091501",form_module:"p2"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
