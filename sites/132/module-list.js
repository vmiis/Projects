(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "data":         {url:"$H/m/data.html",Table:"vm-2020081301",form_module:"form", router:1},
        "form":         {url:"$H/m/form.html",Table:"vm-2020081301"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
