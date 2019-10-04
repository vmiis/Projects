(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "about1":  		  	  			{url:"$H/m/about.html",router:1,name:'Clinic services',tags:'marketing'},
        "services":  	  	  			{url:"$H/m/services.html",router:1,tags:"marketing"},
        "price-02":  		  	 		{url:"$H/m/price-02.html",router:1,name:"Our clinic prices",tags:"marketing"},
        "contact-us-data":  			{url:"$H/m/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form",tags:"marketing"},
        "contact-us-form":  			{url:"$H/m/contact-us-form.html",Table:"ccontact-us-vm",tags:'marketing'},
        "contact-us-form-03":  			{url:"$H/m/contact-us-form-03.html",Table:"ccontact-us-vm",tags:'marketing'},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
