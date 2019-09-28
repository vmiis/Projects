(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "p1":        {url:"$H/m/p1.html",Table:"demo-vm-ccontact-us"},
        "p2":        {url:"$H/m/p2.html",Table:"demo-vm-ccontact-us"},
        "p3":        {url:"$H/m/p3.html",Table:"demo-vm-ccontact-us"},
        "admin":     {url:"$H/m/admin.html",Table:"demo-vm-ccontact-us",form_module:"p1"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
