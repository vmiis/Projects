(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "recruitment-data":    	        {url:"$H/m/elig-questions-data.html",Table:"dev-spardac-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form":    	        {url:"$H/m/elig-questions-form.html",Table:"dev-spardac-recruitment-record"},
    }
    //-------------------------------------------------------------------------------------
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();