(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "data":      {url:"$H/m/data.html",Table:"demo-vm-19100901",form_module:"form"},
        "form":      {url:"$H/m/form.html",Table:"demo-vm-19100901"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
