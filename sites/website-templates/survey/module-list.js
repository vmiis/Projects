(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "survey-data":      	  		{url:"$H/m/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$H/m/survey-form.html",Table:"survey-vm"},         
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
