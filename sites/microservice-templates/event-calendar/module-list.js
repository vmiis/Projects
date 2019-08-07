(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "event-data":      	  		    {url:"$H/m/event-data.html",Table:"event-vm",form_module:"event-form"},
        "event-form":      	  		    {url:"$H/m/event-form.html",Table:"event-vm"},         
        "event-daily":      	 	    {url:"$H/m/event-daily.html",Table:"event-vm",router:1,
                                            event_form:"event-form"
                                        },         
        "event-monthly":      	 	    {url:"$H/m/event-monthly.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            event_form:"event-form"
                                        },         
        "event-panel":      	 	    {url:"$H/m/event-panel.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            form_module:"event-form"
                                        },         
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
