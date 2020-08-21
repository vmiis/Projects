(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":        {url:"$H/m/panel.html",router:1},
        "data":         {url:"$H/m/data.html",Table:"vm-2020081301",form_module:"form", router:1},
        "form":         {url:"$H/m/form.html",Table:"vm-2020081301"},
        "excel-panel":  {url:"$H/m/excel-panel.html",router:1},
        "excel-data":   {url:"$H/m/excel-data.html",Table:"vm-2020082101",form_module:"excel-form",router:1},
        "excel-form":   {url:"$H/m/excel-form.html",Table:"vm-2020082101"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
