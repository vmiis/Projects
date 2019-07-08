(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "room-booking-record-data":    	{url:"$H/m/room-booking-record-data.html",Table:"room-booking-record",form_module:"room-booking-record-form",router:1},
        "room-booking-record-form":    	{url:"$H/m/room-booking-record-form.html",Table:"room-booking-record"},
        "room-data":      	  			{url:"$H/m/room-data.html",Table:"room",form_module:"room-form",router:1},
        "room-form":      	  			{url:"$H/m/room-form.html",Table:"room"},
        "room-booking":   			    {url:"$H/m/room-booking.html",Table:"room","booking_form":"room-booking-record-form",router:1},
        "room-booking-calendar": 	    {url:"$H/m/room-booking-calendar.html",Table:"room-booking-record",
                                            "booking":"room-booking","booking_form":"room-booking-record-form",router:1},
        "room-booking-workflow": 		{url:"$H/m/room-booking-workflow.html",router:1},


                                            
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
