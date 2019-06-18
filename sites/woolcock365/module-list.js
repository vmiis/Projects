(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "control-panel-main":               {url:"$H/c/control-panel-main.html",router:1},
        "control-panel-administrator":      {url:"$H/c/control-panel-administrator.html",router:1},
        "control-panel-site":               {url:"$H/c/control-panel-site.html",router:1},
        
        "me":   	                        {url:"$H/a/me.html"},
        "users":   	                        {url:"$H/a/users.html"},
        "groups":   	                    {url:"$H/a/groups.html"},
        "sharepoint-site":                  {url:"$H/a/sharepoint-site.html"},
        "sharepoint-list":   	            {url:"$H/a/sharepoint-list.html"},
        "sharepoint-list-column":           {url:"$H/a/sharepoint-list-column.html"},
        "sharepoint-list-item":             {url:"$H/a/sharepoint-list-item.html"},


        "clinician-appointment-data":      {url:"$H/m/clinician-appointment-data.html",
                                                Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Clinician Appointment')",
                                                form_module:"clinician-appointment-form"
                                            },
        "clinician-appointment-form":	    {url:"$H/m/clinician-appointment-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Clinician Appointment')",
                                            },
        
        "employee-appointment-c-data":      {url:"$H/m/employee-appointment-c-data.html",
                                                Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment')",
                                                form_module:"employee-appointment-c-form"
                                            },
        "employee-appointment-c-form":	    {url:"$H/m/employee-appointment-c-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment')",
                                            },
        "employee-appointment-b-data":      {url:"$H/m/employee-appointment-b-data.html",
                                                Table:"Employee Appointment",
                                                form_module:"employee-appointment-b-form"
                                            },
        "employee-appointment-b-form":	    {url:"$H/m/employee-appointment-b-form.html",
                                                Table:"Employee Appointment",
                                            },
        
        
        "employee-appointment-a-data":      {url:"$H/m/employee-appointment-a-data.html",
                                                Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form')",
                                                form_module:"employee-appointment-a-form"
                                            },
        "employee-appointment-a-form":	    {url:"$H/m/employee-appointment-a-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form')",
                                            },
        
        "employee-appointment-data":   	    {url:"$H/m/employee-appointment-data.html",
                                                Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form')",
                                                Table1:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form P1')",
                                                Table2:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form P2')",
                                                form_module:"employee-appointment-form"
                                            },
        "employee-appointment-form":   	    {url:"$H/m/employee-appointment-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form')",
                                                Table1:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form P1')",
                                                Table2:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment Form P2')",
                                            },
        
        "employee-appointment-r1-data":     {url:"$H/m/employee-appointment-r1-data.html",Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment')", form_module:"employee-appointment2-form"},
        "employee-appointment2-data":       {url:"$H/m/employee-appointment2-data.html",Table:"https://graph.microsoft.com/v1.0/sites/woolcockmed.sharepoint.com,904f3621-bfdc-4154-a36e-e73f3d46c7c0,2367a8ed-18d1-4fea-afe2-c5784ffccfa9/lists/0e9e1d2f-2898-44c1-b3a7-645882b05459/items", form_module:"employee-appointment2-form"},
        "employee-appointment2-form":       {url:"$H/m/employee-appointment2-form.html",
                                                Table:"https://graph.microsoft.com/v1.0/sites/woolcockmed.sharepoint.com,904f3621-bfdc-4154-a36e-e73f3d46c7c0,2367a8ed-18d1-4fea-afe2-c5784ffccfa9/lists/0e9e1d2f-2898-44c1-b3a7-645882b05459/items",
                                                v1_endpoint:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Employee Appointment')"
                                            },



        "module-editor":                    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
