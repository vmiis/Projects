(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "data":      {url:"$H/m/data.html",Table:"demo-vm-19090807",form_module:"m1"},
        "m1":        {url:"$H/m/p1.html",Table:"demo-vm-19090807",ListTb:'vm-demo-19080908'},
        "list-data": {url:"$H/m/list-data.html",Table:"vm-demo-19080908",form_module:"list-form"},
        "list-form": {url:"$H/m/list-form.html",Table:"vm-demo-19080908"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
