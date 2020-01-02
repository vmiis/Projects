(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "lightbox": {url:"$H/m/lightbox/m.html"},
        "hover-effect-01": {url:"$H/m/hover-effect-01/m.html"},

        "pie-chart-data":   {url:"$H/m/pie-chart/pie-data.html",Table:"pie",form_module:"pie-chart-form",router:1},
        "pie-chart-form":   {url:"$H/m/pie-chart/pie-form.html",Table:"pie"},
        "pie-chart":        {url:"$H/m/pie-chart/pie-chart.html",Table:"pie"},
        "pie-chart-3d":     {url:"$H/m/pie-chart/pie-chart-3d.html",Table:"pie"},
        "pie-chart-donut":  {url:"$H/m/pie-chart/pie-chart-donut.html",Table:"pie"},

        "car-calendar-week":    {url:"$H/m/car-booking/calendar-week.html",Table:"demo-vm-19091807","booking":"car-booking-form","booking2":"car-booking-form-2",lookup:"demo-vm-19091808"},
        "car-calendar-month":   {url:"$H/m/car-booking/calendar-month.html",Table:"demo-vm-19091807","booking":"car-booking-form",lookup:"demo-vm-19091808"},
        "car-calendar-day":     {url:"$H/m/car-booking/calendar-day.html",Table:"demo-vm-19091807","booking":"car-booking-form",lookup:"demo-vm-19091808"},
        "car-booking-form":     {url:"$H/m/car-booking/booking-form.html",Table:"demo-vm-19091807",lookup:"demo-vm-19091808"},
        "car-booking-form-2":   {url:"$H/m/car-booking/booking-form.2.html",Table:"demo-vm-19091807",lookup:"demo-vm-19091808"},
        "car-booking-data":     {url:"$H/m/car-booking/booking-data.html",Table:"demo-vm-19091807",form_module:"car-booking-form"},
        "car-list-data":        {url:"$H/m/car-booking/list-data.html",Table:"demo-vm-19091808",form_module:"car-list-form"},
        "car-list-form":        {url:"$H/m/car-booking/list-form.html",Table:"demo-vm-19091808"},

        "room-calendar-week":   {url:"$H/m/room-booking/calendar-week.html",Table:"demo-vm-19091805","booking":"room-booking-form","booking2":"room-booking-form-2",lookup:"demo-vm-19091808"},
        "room-calendar-month":  {url:"$H/m/room-booking/calendar-month.html",Table:"demo-vm-19091805","booking":"room-booking-form",lookup:"demo-vm-19091806"},
        "room-calendar-day":    {url:"$H/m/room-booking/calendar-day.html",Table:"demo-vm-19091805","booking":"room-booking-form",lookup:"demo-vm-19091806"},
        "room-booking-form":    {url:"$H/m/room-booking/booking-form.html",Table:"demo-vm-19091805",lookup:"demo-vm-19091806"},
        "room-booking-form-2":  {url:"$H/m/room-booking/booking-form.2.html",Table:"demo-vm-19091805",lookup:"demo-vm-19091806"},
        "room-booking-data":    {url:"$H/m/room-booking/booking-data.html",Table:"demo-vm-19091805",form_module:"room-booking-form"},
        "room-list-data":       {url:"$H/m/room-booking/list-data.html",Table:"demo-vm-19091806",form_module:"room-list-form"},
        "room-list-form":       {url:"$H/m/room-booking/list-form.html",Table:"demo-vm-19091806"},

        "services-p1":          {url:"$H/m/services/p1.html"},

        "clinical-trials-participant-data": {url:"$H/m/clinical-trials/participant-data.html",Table:"participant",form_module:"clinical-trials-participant-form"},
        "clinical-trials-participant-form": {url:"$H/m/clinical-trials/participant-form.html",Table:"participant"},
        
        "2-columns-content-page-01":          {url:"$H/m/2-columns-content-page/page-01.html"},
        "2-columns-content-page-02":          {url:"$H/m/2-columns-content-page/page-02.html"},
        "2-columns-content-page-03":          {url:"$H/m/2-columns-content-page/page-03.html"},
        "2-columns-content-page-04":          {url:"$H/m/2-columns-content-page/page-04.html"},
        "2-columns-content-page-05":          {url:"$H/m/2-columns-content-page/page-05.html"},

        "wappsystem-secrete-data":            {url:"$H/m/stripe/secrete-data.html",Table:"demo-wappsystem-secrete",form_module:"wappsystem-secrete-form"},
        "wappsystem-secrete-form":            {url:"$H/m/stripe/secrete-form.html",Table:"demo-wappsystem-secrete"},
        "shopping-cart":                      {url:"$H/m/stripe/shopping-cart.html",pay:"stripe-pay"},
        "stripe-pay":                         {url:"$H/m/stripe/pay/index.html"},
        
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
