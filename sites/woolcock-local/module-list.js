(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "control-panel-main":               {url:"$H/c/control-panel-main.html",router:1},
        
        
        "new-hire-data":       {url:"$H/m/new-hire-data.html",Table:"new-hire",Table2:"new-hire-manager",Table2:"new-hire-hr",form_module:"new-hire-form",router:1},
        "new-hire-form":       {url:"$H/m/new-hire-form.html",Table:"new-hire",Table2:"new-hire-manager",Table2:"new-hire-hr"},
        "module-editor":       {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
