(function(){
    var modules={
        "car-booking-record-data":    	{url:"$A/modules/mdb/c/car-booking-record-data.html",Table:"car-booking-record",form_module:"car-booking-record-form",router:1},
        "car-booking-record-form":    	{url:"$A/modules/mdb/c/car-booking-record-form.html",Table:"car-booking-record"},
        "car-data":      	  			{url:"$A/modules/mdb/c/car-data.html",Table:"car",form_module:"car-form",router:1},
        "car-form":      	  			{url:"$A/modules/mdb/c/car-form.html",Table:"car"},
        "car-booking":   			    {url:"$A/modules/mdb/c/car-booking.html",Table:"car","booking_form":"car-booking-record-form",router:1},
        "car-booking-calendar": 	    {url:"$A/modules/mdb/c/car-booking-calendar.html",Table:"car-booking-record",
                                            "booking":"car-booking","booking_form":"car-booking-record-form",router:1},
        "car-booking-app":   			{url:"$A/apps/c/car-booking/index.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
