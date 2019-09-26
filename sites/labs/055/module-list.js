(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/hr-form.html",Table:"demo-vm-2019102601"},
        "m2":       {url:"$H/m/hr-data.html",Table:"demo-vm-2019102601",form_module:"m1"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
