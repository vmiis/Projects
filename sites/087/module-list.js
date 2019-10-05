(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "survey-data":      	  		{url:"$H/m/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$H/m/survey-form.html",Table:"survey-vm"},         
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
