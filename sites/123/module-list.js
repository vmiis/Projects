(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "url-data":      {url:"$H/m/url-data.html",Table:"demo-vm-19100901",form_module:"url-form"},
        "url-form":      {url:"$H/m/url-form.html",Table:"demo-vm-19100901"},
        "test-data":      {url:"$H/m/test-data.html",Table:"demo-vm-19100902",form_module:"test-form"},
        "test-form":      {url:"$H/m/test-form.html",Table:"demo-vm-19100902"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
