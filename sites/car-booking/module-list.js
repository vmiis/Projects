(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "car-booking-record-data":    	{url:"$H/m/car-booking-record-data.html",Table:"car-booking-record",form_module:"car-booking-record-form",router:1},
        "car-booking-record-form":    	{url:"$H/m/car-booking-record-form.html",Table:"car-booking-record"},
        "car-data":      	  			{url:"$H/m/car-data.html",Table:"car",form_module:"car-form",router:1},
        "car-form":      	  			{url:"$H/m/car-form.html",Table:"car"},
        "car-booking":   			    {url:"$H/m/car-booking.html",Table:"car","booking_form":"car-booking-record-form",router:1},
        "car-booking-calendar": 	    {url:"$H/m/car-booking-calendar.html",Table:"car-booking-record",
                                            "booking":"car-booking","booking_form":"car-booking-record-form",router:1},
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
