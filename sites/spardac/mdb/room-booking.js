(function(){
    var modules={
        "room-booking-record-data":    	{url:"$A/modules/mdb/r/room-booking-record-data.html",Table:"room-booking-record",form_module:"room-booking-record-form",router:1},
        "room-booking-record-form":    	{url:"$A/modules/mdb/r/room-booking-record-form.html",Table:"room-booking-record"},
        "room-data":      	  			{url:"$A/modules/mdb/r/room-data.html",Table:"room",form_module:"room-form",router:1},
        "room-form":      	  			{url:"$A/modules/mdb/r/room-form.html",Table:"room"},
        "room-booking":   			    {url:"$A/modules/mdb/r/room-booking.html",Table:"room","booking_form":"room-booking-record-form",router:1},
        "room-booking-calendar": 	    {url:"$A/modules/mdb/r/room-booking-calendar.html",Table:"room-booking-record",
                                        "booking":"room-booking","booking_form":"room-booking-record-form",router:1},
        "room-booking-app":   			{url:"$A/apps/r/room-booking/index.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
