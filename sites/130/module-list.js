(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":  	{url:"$H/m/panel-main.html",router:1},
        "tb001-data":  	{url:"$H/m/tb001-data.html",Table:"demo-2020042001",form_module:"tb001-form",router:1},
        "tb001-form":  	{url:"$H/m/tb001-form.html",Table:"demo-2020042001"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
