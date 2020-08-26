(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":  {url:"$H/m/panel.html",router:1},
        "data":   {url:"$H/m/data.html",Table:"vm-demo-Sample01",form_module:"form",router:1},
        "form":   {url:"$H/m/form.html",Table:"vm-demo-Sample01"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
