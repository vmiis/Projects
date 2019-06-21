(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "contact-us-data":  			{url:"$H/m/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form",tags:"marketing"},
        "contact-us-form":  			{url:"$H/m/contact-us-form.html",Table:"ccontact-us-vm",tags:'marketing'},
        "contact-us-form-02":  			{url:"$H/m/contact-us-form-02.html",Table:"ccontact-us-vm",tags:'marketing'},
        "food-data":    			    {url:"$H/m/food-data.html",Table:"food-demo",form_module:"food-form"},
        "food-form":    			    {url:"$H/m/food-form.html",Table:"food-demo"},


                                            
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
