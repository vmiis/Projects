(function(){
    var modules={
        facility:           {url:$vm.hosting_path+"/facility.html",router:1},
        car_booking_data:   {url:"$H/car-list-and-car-booking-records/booking-data.html",  Table:"demo-vm-19091807",  form_module:"car_booking_form"},
        car_booking_form:   {url:"$H/car-list-and-car-booking-records/booking-form.html",  Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        car_booking_form_2: {url:"$H/car-list-and-car-booking-records/booking-form-2.html",Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        car_list_data:      {url:"$H/car-list-and-car-booking-records/list-data.html",     Table:"demo-vm-19091808",  form_module:"list_form"},
        car_list_form:      {url:"$H/car-list-and-car-booking-records/list-form.html",     Table:"demo-vm-19091808"},
        car_month:          {url:"$H/car-booking-calendar/calendar-month.html",            Table:"demo-vm-19091807","booking":"car_booking_form",lookup:"demo-vm-19091808"},
        car_week:           {url:"$H/car-booking-calendar/calendar-week.html",             Table:"demo-vm-19091807","booking":"car_booking_form","booking2":"car_booking_form_2",lookup:"demo-vm-19091808"},
        car_day:            {url:"$H/car-booking-calendar/calendar-day.html",              Table:"demo-vm-19091807","booking":"car_booking_form",lookup:"demo-vm-19091808"},
        car_diagram:        {url:"$H/car-booking-calendar/diagram.html"},
        
        room_booking_data:  {url:"$H/room-list-and-room-booking-records/booking-data.html",  Table:"demo-vm-19091805",  form_module:"room_booking_form"},
        room_booking_form:  {url:"$H/room-list-and-room-booking-records/booking-form.html",  Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        room_booking_form_2:{url:"$H/room-list-and-room-booking-records/booking-form-2.html",Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        room_list_data:     {url:"$H/room-list-and-room-booking-records/list-data.html",     Table:"demo-vm-19091806",  form_module:"list_form"},
        room_list_form:     {url:"$H/room-list-and-room-booking-records/list-form.html",     Table:"demo-vm-19091806"},
        room_month:         {url:"$H/room-booking-calendar/calendar-month.html",            Table:"demo-vm-19091805","booking":"room_booking_form",lookup:"demo-vm-19091806"},
        room_week:          {url:"$H/room-booking-calendar/calendar-week.html",             Table:"demo-vm-19091805","booking":"room_booking_form","booking2":"room_booking_form_2",lookup:"demo-vm-19091806"},
        room_day:           {url:"$H/room-booking-calendar/calendar-day.html",              Table:"demo-vm-19091805","booking":"room_booking_form",lookup:"demo-vm-19091806"},
        room_diagram:       {url:"$H/room-booking-calendar/diagram.html",router:1},

        equipment_booking_data:  {url:"$H/equipment-list-and-equipment-booking-records/booking-data.html",  Table:"demo-vm-19091811",  form_module:"equipment_booking_form"},
        equipment_booking_form:  {url:"$H/equipment-list-and-equipment-booking-records/booking-form.html",  Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        equipment_booking_form_2:{url:"$H/equipment-list-and-equipment-booking-records/booking-form-2.html",Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        equipment_list_data:     {url:"$H/equipment-list-and-equipment-booking-records/list-data.html",     Table:"demo-vm-19091812",  form_module:"list_form"},
        equipment_list_form:     {url:"$H/equipment-list-and-equipment-booking-records/list-form.html",     Table:"demo-vm-19091812"},
        equipment_month:         {url:"$H/equipment-booking-calendar/calendar-month.html",            Table:"demo-vm-19091811","booking":"equipment_booking_form",lookup:"demo-vm-19091812"},
        equipment_week:          {url:"$H/equipment-booking-calendar/calendar-week.html",             Table:"demo-vm-19091811","booking":"equipment_booking_form","booking2":"equipment_booking_form_2",lookup:"demo-vm-19091812"},
        equipment_day:           {url:"$H/equipment-booking-calendar/calendar-day.html",              Table:"demo-vm-19091811","booking":"equipment_booking_form",lookup:"demo-vm-19091812"},
        equipment_diagram:       {url:"$H/equipment-booking-calendar/diagram.html"},
    }
    for(m in modules){ if($vm.module_list[m]!=undefined) alert(m+" is existed"); modules[m].url=modules[m].url.replace("$H","https://projects.vmiis.com/sites/"); $vm.module_list[m]=modules[m];}
})();

(function(){
    //-------------------------------------------------------------------------------------
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";
    var aggregation="vm-demo-ato-bas-quarter";
    var aggregation_ie="vm-demo-income-expense-month-aggregation";
    var aggregation_item="vm-demo-item-monthly-aggregation";
    var aggregation_tax="vm-demo-tax-return-yearly-aggregation";
    if(window.location.toString().indexOf('_w=1')!=-1){
        pre_item="predefined-transaction-item-wappsystem";
        transaction="transaction-wappsystem";
        aggregation="ato-bas-quarter-aggregation-wappsystem";
        aggregation_ie="income-expense-month-aggregation-wappsystem";
        aggregation_item="item-month-aggregation-wappsystem";
        aggregation_tax="ato-tax-return-yearly-aggregation-wappsystem";
    }
    else if(window.location.toString().indexOf('_v=1')!=-1){
        pre_item="predefined-transaction-item-vmautomation";
        transaction="transaction-vmautomation";
        aggregation="ato-bas-quarter-aggregation-vmautomation";
        aggregation_ie="income-expense-month-aggregation-vmautomation";
        aggregation_item="item-month-aggregation-automation";
        aggregation_tax="ato-tax-return-yearly-aggregation-vmautomation";
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "finance":                                  {url:$vm.hosting_path+"/finance.html",router:1},
        "predefined_transaction_item_data":         {url:"$H/predefined-transaction-item/data.html",Table:pre_item,form_module:"predefined_transaction_item_form",router:1},
        "predefined_transaction_item_form":         {url:"$H/predefined-transaction-item/form.html",Table:pre_item},
        "transaction_diagram":                      {url:"$H/predefined-transaction-item/diagram.html",router:1},
        "transaction-data-basic":                   {url:"$H/transaction-records/data-basic.html",                   Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter":            {url:"$H/transaction-records/data-year-quarter.html",            Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-bas":                     {url:"$H/transaction-records/data-bas.html",                     Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-bas":        {url:"$H/transaction-records/data-year-quarter-bas.html",        Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-tax-return":              {url:"$H/transaction-records/data-tax-return.html",              Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-tax-return": {url:"$H/transaction-records/data-year-quarter-tax-return.html", Table:transaction,form_module:"transaction-form",router:1},
        "transaction-form":                         {url:"$H/transaction-records/form.html",                         Table:transaction,item_table:pre_item,router:1},
        "ato-bas-quarter-aggregation-data":         {url:"$H/ato-bas-quarterly-aggregation/ato-bas-quarter-aggregation-data.html",Table:aggregation,transaction_table:transaction,form_module:'ato-bas-quarter-aggregation-form',router:1},
        "ato-bas-quarter-aggregation-form":         {url:"$H/ato-bas-quarterly-aggregation/ato-bas-quarter-aggregation-form.html",Table:aggregation,router:1},
        "income-expense-month-aggregation-data":    {url:"$H/income-expense-month-aggregation/income-expense-month-aggregation-data.html",Table:aggregation_ie,transaction_table:transaction,form_module:'income-expense-month-aggregation-form',router:1},
        "income-expense-month-aggregation-form":    {url:"$H/income-expense-month-aggregation/income-expense-month-aggregation-form.html",Table:aggregation_ie,router:1},
        "income-expense-month-aggregation-chart":   {url:"$H/income-expense-month-aggregation/income-expense-month-aggregation-chart.html",Table:aggregation_ie,router:1},
        "item-monthly-aggregation-data":            {url:"$H/item-monthly-aggregation/item-month-aggregation-data.html",Table:aggregation_item,transaction_table:transaction,form_module:'item-monthly-aggregation-form',router:1},
        "item-monthly-aggregation-form":            {url:"$H/item-monthly-aggregation/item-month-aggregation-form.html",Table:aggregation_item,router:1},
        "item-monthly-aggregation-chart":           {url:"$H/item-monthly-aggregation/item-month-aggregation-chart.html",Table:"vm-demo-item-monthly-aggregation",router:1},
        "tax-return-yearly-aggregation-data":       {url:"$H/tax-return-yearly-aggregation/ato-tax-return-yearly-aggregation-data.html",Table:aggregation_tax,transaction_table:transaction,form_module:'tax-return-yearly-aggregation-form',router:1},
        "tax-return-yearly-aggregation-form":       {url:"$H/tax-return-yearly-aggregation/ato-tax-return-yearly-aggregation-form.html",Table:aggregation_tax,router:1},
        "tax-return-yearly-aggregation-chart":      {url:"$H/tax-return-yearly-aggregation/ato-tax-return-yearly-aggregation-chart.html",Table:aggregation_tax,router:1},
    }
    for(m in modules){ if($vm.module_list[m]!=undefined) alert(m+" is existed"); modules[m].url=modules[m].url.replace("$H","https://projects.vmiis.com/sites/"); $vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
})();

(function(){
    var modules={
        "marketing":                                {url:$vm.hosting_path+"/marketing.html",router:1},
        "contact_us_1":                             {url:"$H/contact-us-1/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_2":                             {url:"$H/contact-us-2/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_3":                             {url:"$H/contact-us-3/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_data":                          {url:"$H/contact-us-1/data.html",Table:"demo-vm-ccontact-us",router:1},
        "services_1":                               {url:"$H/our-services/services.html",router:1},
        "learn_more":                               {url:"$H/our-services/learn-more.html",router:1},
        "portfolio_1":                              {url:"$H/our-portfolio/portfolio.html",router:1},
        "trainers_1":                               {url:"$H/our-trainers/trainers.html",router:1},
        "medical-services":                         {url:"$H/medical-services/services.html",router:1},
        "read_more":                                {url:"$H/medical-services/read-more.html",router:1},
    }
    for(m in modules){ if($vm.module_list[m]!=undefined) alert(m+" is existed"); modules[m].url=modules[m].url.replace("$H","https://projects.vmiis.com/sites/"); $vm.module_list[m]=modules[m];}
})();


(function(){
    var modules={
        "clinical-trials":                          {url:$vm.hosting_path+"/clinical-trials.html",router:1},
        "ameq_data":                                {url:"$H/activity-morning-eveningness-questionnaire/data.html",Table:"me-shf-spardac",form_module:"ameq_form",router:1},
        "ameq_form":                                {url:"$H/activity-morning-eveningness-questionnaire/form.html",Table:"me-shf-spardac",router:1},
}
    for(m in modules){ if($vm.module_list[m]!=undefined) alert(m+" is existed"); modules[m].url=modules[m].url.replace("$H","https://projects.vmiis.com/sites/"); $vm.module_list[m]=modules[m];}
})();