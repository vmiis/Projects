(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "fitness":                      {url:"$H/m/fitness.html",router:1},
        "prices":  		  	  			{url:"$H/m/prices.html",router:1,name:"Our gym prices",tags:"marketing"},
        "trainers":  		  			{url:"$H/m/trainers.html",router:1,name:"Gym Trainers",tags:"marketing"},
        "contact-us-data":  			{url:"$H/m/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form",tags:"marketing"},
        "contact-us-form":  			{url:"$H/m/contact-us-form.html",Table:"ccontact-us-vm",tags:'marketing'},
        "contact-us-form-01":  			{url:"$H/m/contact-us-form-01.html",Table:"ccontact-us-vm",tags:'marketing'},
        
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
