(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "equipment-booking-record-data":   	{url:"$H/m/equipment-booking-record-data.html",Table:"equipment-booking-record",form_module:"equipment-booking-record-form",router:1},
        "equipment-booking-record-form":   	{url:"$H/m/equipment-booking-record-form.html",Table:"equipment-booking-record"},
        "equipment-data":      	  			{url:"$H/m/equipment-data.html",Table:"equipment",form_module:"equipment-form",router:1},
        "equipment-form":      	  			{url:"$H/m/equipment-form.html",Table:"equipment"},
        "equipment-booking":   			    {url:"$H/m/equipment-booking.html",Table:"equipment","booking_form":"equipment-booking-record-form",router:1},
        "equipment-booking-calendar": 	    {url:"$H/m/equipment-booking-calendar.html",Table:"equipment-booking-record",
                                            "booking":"equipment-booking","booking_form":"equipment-booking-record-form",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
