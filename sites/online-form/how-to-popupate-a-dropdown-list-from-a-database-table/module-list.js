(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":  	              {url:"$H/m/panel.html",router:1},
        "data-collection-data":   {url:"$H/m/data-collection-data.html",Table:"vm-demo-19080905",form_module:"data-collection-form"},
        "data-collection-form":   {url:"$H/m/data-collection-form.html",Table:"vm-demo-19080905",ListTb:"vm-demo-19080906"},
        "list-data":              {url:"$H/m/list-data.html",Table:"vm-demo-19080906",form_module:"list-form"},
        "list-form":              {url:"$H/m/list-form.html",Table:"vm-demo-19080906"},
        "module-editor":          {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
