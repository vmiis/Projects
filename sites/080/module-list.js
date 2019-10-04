(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "blog":                         {url:"$H/m/blog.html",router:1},
        "send-message-data":            {url:"$H/m/send-message-data.html",Table:"send-message-demo190715", form_module:"send-message-form", router:1},
        "send-message-form":            {url:"$H/m/send-message-form.html",Table:"send-message-demo190715" },
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
