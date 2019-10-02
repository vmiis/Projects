(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "enquiry-data":   	{url:"$H/m/enquiry-data.html",Table:"vm-enquiry",form_module:"enquiry-form",router:1},
        "enquiry-form":   	{url:"$H/m/enquiry-form.html",Table:"vm-enquiry",router:1},         
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
