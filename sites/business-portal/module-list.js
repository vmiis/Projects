(function(){
    //-------------------------------------------------------------------------------------
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";
    var aggregation="vm-demo-ato-bas-quarter";
    var aggregation_ie="vm-demo-income-expense-month-aggregation";
    if(window.location.toString().indexOf('_w=1')!=-1){
        pre_item="predefined-transaction-item-wappsystem";
        transaction="transaction-wappsystem";
        aggregation="ato-bas-quarter-aggregation-wappsystem";
        aggregation_ie="income-expense-month-aggregation-wappsystem";
    }
    else if(window.location.toString().indexOf('_v=1')!=-1){
        pre_item="predefined-transaction-item-vmautomation";
        transaction="transaction-vmautomation";
        aggregation="ato-bas-quarter-aggregation-vmautomation";
        aggregation_ie="income-expense-month-aggregation-vmautomation";
    }
    //-------------------------------------------------------------------------------------
    var modules={
        facility:         {url:$vm.hosting_path+"/facility.html",router:1,description:"control panel"},
        
        car_booking_data:   {url:"https://projects.vmiis.com/sites/car-list-and-car-booking-records/booking-data.html",  Table:"demo-vm-19091807",  form_module:"car_booking_form"},
        car_booking_form:   {url:"https://projects.vmiis.com/sites/car-list-and-car-booking-records/booking-form.html",  Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        car_booking_form_2: {url:"https://projects.vmiis.com/sites/car-list-and-car-booking-records/booking-form-2.html",Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        car_list_data:      {url:"https://projects.vmiis.com/sites/car-list-and-car-booking-records/list-data.html",     Table:"demo-vm-19091808",  form_module:"list_form"},
        car_list_form:      {url:"https://projects.vmiis.com/sites/car-list-and-car-booking-records/list-form.html",     Table:"demo-vm-19091808"},
        car_month:          {url:"https://projects.vmiis.com/sites/car-booking-calendar/calendar-month.html",            Table:"demo-vm-19091807","booking":"car_booking_form",lookup:"demo-vm-19091808",description:"car booking monthly calendar"},
        car_week:           {url:"https://projects.vmiis.com/sites/car-booking-calendar/calendar-week.html",             Table:"demo-vm-19091807","booking":"car_booking_form","booking2":"car_booking_form_2",lookup:"demo-vm-19091808",description:"car booking weekly calendar"},
        car_day:            {url:"https://projects.vmiis.com/sites/car-booking-calendar/calendar-day.html",              Table:"demo-vm-19091807","booking":"car_booking_form",lookup:"demo-vm-19091808",description:"car booking daily calendar"},
        car_diagram:        {url:"https://projects.vmiis.com/sites/car-booking-calendar/diagram.html",                   description:"car booking diagram"},
        
        room_booking_data:  {url:"https://projects.vmiis.com/sites/room-list-and-room-booking-records/booking-data.html",  Table:"demo-vm-19091805",  form_module:"room_booking_form"},
        room_booking_form:  {url:"https://projects.vmiis.com/sites/room-list-and-room-booking-records/booking-form.html",  Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        room_booking_form_2:{url:"https://projects.vmiis.com/sites/room-list-and-room-booking-records/booking-form-2.html",Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        room_list_data:     {url:"https://projects.vmiis.com/sites/room-list-and-room-booking-records/list-data.html",     Table:"demo-vm-19091806",  form_module:"list_form"},
        room_list_form:     {url:"https://projects.vmiis.com/sites/room-list-and-room-booking-records/list-form.html",     Table:"demo-vm-19091806"},
        room_month:         {url:"https://projects.vmiis.com/sites/room-booking-calendar/calendar-month.html",            Table:"demo-vm-19091805","booking":"room_booking_form",lookup:"demo-vm-19091806",description:"room booking monthly calendar"},
        room_week:          {url:"https://projects.vmiis.com/sites/room-booking-calendar/calendar-week.html",             Table:"demo-vm-19091805","booking":"room_booking_form","booking2":"room_booking_form_2",lookup:"demo-vm-19091806",description:"room booking weekly calendar"},
        room_day:           {url:"https://projects.vmiis.com/sites/room-booking-calendar/calendar-day.html",              Table:"demo-vm-19091805","booking":"room_booking_form",lookup:"demo-vm-19091806",description:"room booking daily calendar"},
        room_diagram:       {url:"https://projects.vmiis.com/sites/room-booking-calendar/diagram.html",                   description:"room booking diagram"},

        equipment_booking_data:  {url:"https://projects.vmiis.com/sites/equipment-list-and-equipment-booking-records/booking-data.html",  Table:"demo-vm-19091811",  form_module:"equipment_booking_form"},
        equipment_booking_form:  {url:"https://projects.vmiis.com/sites/equipment-list-and-equipment-booking-records/booking-form.html",  Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        equipment_booking_form_2:{url:"https://projects.vmiis.com/sites/equipment-list-and-equipment-booking-records/booking-form-2.html",Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        equipment_list_data:     {url:"https://projects.vmiis.com/sites/equipment-list-and-equipment-booking-records/list-data.html",     Table:"demo-vm-19091812",  form_module:"list_form"},
        equipment_list_form:     {url:"https://projects.vmiis.com/sites/equipment-list-and-equipment-booking-records/list-form.html",     Table:"demo-vm-19091812"},
        equipment_month:         {url:"https://projects.vmiis.com/sites/equipment-booking-calendar/calendar-month.html",            Table:"demo-vm-19091811","booking":"equipment_booking_form",lookup:"demo-vm-19091812",description:"equipment booking monthly calendar"},
        equipment_week:          {url:"https://projects.vmiis.com/sites/equipment-booking-calendar/calendar-week.html",             Table:"demo-vm-19091811","booking":"equipment_booking_form","booking2":"equipment_booking_form_2",lookup:"demo-vm-19091812",description:"equipment booking weekly calendar"},
        equipment_day:           {url:"https://projects.vmiis.com/sites/equipment-booking-calendar/calendar-day.html",              Table:"demo-vm-19091811","booking":"equipment_booking_form",lookup:"demo-vm-19091812",description:"equipment booking daily calendar"},
        equipment_diagram:       {url:"https://projects.vmiis.com/sites/equipment-booking-calendar/diagram.html",                   description:"equipment booking diagram"},       
        
        finance:                            {url:$vm.hosting_path+"/finance.html",router:1,description:"control panel"},
        predefined_transaction_item_data:   {url:"https://projects.vmiis.com/sites/predefined-transaction-item/data.html",Table:pre_item,form_module:"predefined_transaction_item_form",router:1,description:"view and search data in a cloud database table"},
        predefined_transaction_item_form:   {url:"https://projects.vmiis.com/sites/predefined-transaction-item/form.html",Table:pre_item,description:"data collection form"},
        transaction_diagram:                {url:"https://projects.vmiis.com/sites/predefined-transaction-item/diagram.html",router:1,description:"show relationship"},
        "transaction-data-basic":                   {url:"https://projects.vmiis.com/sites/transaction-records/data-basic.html",                   Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-data-year-quarter":            {url:"https://projects.vmiis.com/sites/transaction-records/data-year-quarter.html",            Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-data-bas":                     {url:"https://projects.vmiis.com/sites/transaction-records/data-bas.html",                     Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-data-year-quarter-bas":        {url:"https://projects.vmiis.com/sites/transaction-records/data-year-quarter-bas.html",        Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-data-tax-return":              {url:"https://projects.vmiis.com/sites/transaction-records/data-tax-return.html",              Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-data-year-quarter-tax-return": {url:"https://projects.vmiis.com/sites/transaction-records/data-year-quarter-tax-return.html", Table:transaction,form_module:"transaction-form",router:1,description:"view and search data in a cloud database table"},
        "transaction-form":                         {url:"https://projects.vmiis.com/sites/transaction-records/form.html",                         Table:transaction,item_table:pre_item,router:1,description:"data collection form"},
        "ato-bas-quarter-aggregation-data":         {url:"https://projects.vmiis.com/sites/ato-bas-quarterly-aggregation/ato-bas-quarter-aggregation-data.html",Table:aggregation,transaction_table:transaction,form_module:'ato-bas-quarter-aggregation-form',router:1,description:"view and search data in a cloud database table"},
        "ato-bas-quarter-aggregation-form":         {url:"https://projects.vmiis.com/sites/ato-bas-quarterly-aggregation/ato-bas-quarter-aggregation-form.html",Table:aggregation,router:1,description:"data collection form"},
        "income-expense-month-aggregation-data":    {url:"https://projects.vmiis.com/sites/income-expense-month-aggregation/income-expense-month-aggregation-data.html",Table:aggregation_ie,transaction_table:transaction,form_module:'income-expense-month-aggregation-form',router:1,description:"view and search data in a cloud database table"},
        "income-expense-month-aggregation-form":    {url:"https://projects.vmiis.com/sites/income-expense-month-aggregation/income-expense-month-aggregation-form.html",Table:aggregation_ie,router:1,description:"data collection form"},
        "income-expense-month-aggregation-chart":   {url:"https://projects.vmiis.com/sites/income-expense-month-aggregation/income-expense-month-aggregation-chart.html",Table:aggregation_ie,router:1,description:"chart"},
}
    for(m in modules){$vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
})();


