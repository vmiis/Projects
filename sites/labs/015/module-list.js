(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "data":      {url:"$H/m/data.html",Table:"demo-vm-19090701",form_module:"p1"},
        "p1":        {url:"$H/m/p1.html",Table:"demo-vm-19090701"},
        "p2":        {url:"$H/m/p2.html",Table:"demo-vm-19090701"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
