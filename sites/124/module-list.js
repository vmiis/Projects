(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "table-data":           {"url":"$H/m/table-data.html","form_module":"table-form"},
        "table-form":           {"url":"$H/m/table-form.html"},
        "m1":                   {url:"$H/m/m1.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
