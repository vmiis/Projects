(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":  	              {url:"$H/m/panel.html",router:1},
        "data-collection-data":   {url:"$H/m/data-collection-data.html",Table:"vm-demo-190807",form_module:"data-collection-form"},
        "data-collection-form":   {url:"$H/m/data-collection-form.html",Table:"vm-demo-190807"},
        "module-editor":          {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
