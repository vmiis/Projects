(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "p1":       {url:"$H/m/calendar-week.html",Table:"demo-vm-19091602","booking":"p2"},
        "p2":       {url:"$H/m/roster-form.html",Table:"demo-vm-19091602"},
        "p3":       {url:"$H/m/roster-data.html",Table:"demo-vm-19091602",form_module:"p2"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
