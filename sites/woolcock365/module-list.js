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
        "create-list-fields":               {url:"$H/a/create-list-fields.html",Table:"https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/"},



        "new-hire-data":                    {url:"$H/h/new-hire-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Hire')",
                                                form_module:"new-hire-form",router:1
                                            },
        "new-hire-form":	                {url:"$H/h/new-hire-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Hire')",
                                            },

        "contract-variation-data":          {url:"$H/h/contract-variation-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Contract Variation')",
                                                form_module:"contract-variation-form",router:1
                                            },
        "contract-variation-form":	        {url:"$H/h/contract-variation-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Contract Variation')",
                                            },

        "contract-renewal-data":          {url:"$H/h/contract-renewal-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Contract Renewal')",
                                                form_module:"contract-renewal-form",router:1
                                            },
        "contract-renewal-form":	        {url:"$H/h/contract-renewal-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Contract Renewal')",
                                            },

        "new-student-agreement-data":          {url:"$H/h/new-student-agreement-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Student Agreement')",
                                                form_module:"new-student-agreement-form",router:1
                                            },
        "new-student-agreement-form":	        {url:"$H/h/new-student-agreement-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Student Agreement')",
                                            },


        "student-agreement-renewal-data":   {url:"$H/h/student-agreement-renewal-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Student Agreement Renewal')",
                                                form_module:"student-agreement-renewal-form",router:1
                                            },
        "student-agreement-renewal-form":	{url:"$H/h/student-agreement-renewal-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Student Agreement Renewal')",
                                            },

        "variation-to-existing-student-agreement-data": {url:"$H/h/variation-to-existing-student-agreement-data.html",
                                                            Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Variation to Existing Student Agreement')",
                                                            form_module:"variation-to-existing-student-agreement-form",router:1
                                                        },
        "variation-to-existing-student-agreement-form":	{url:"$H/h/variation-to-existing-student-agreement-form.html",
                                                            Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Variation to Existing Student Agreement')",
                                                        },

        "new-clinician-hire-data":          {url:"$H/h/new-clinician-hire-data.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Clinician Hire')",
                                                form_module:"new-clinician-hire-form",router:1
                                            },
        "new-clinician-hire-form":	        {url:"$H/h/new-clinician-hire-form.html",
                                                Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Clinician Hire')",
                                            },

        "variation-to-existing-clinician-data": {url:"$H/h/variation-to-existing-clinician-data.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Variation to Existing Clinician')",
                                                    form_module:"variation-to-existing-clinician-form",router:1
                                                },
        "variation-to-existing-clinician-form":	{url:"$H/h/variation-to-existing-clinician-form.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('Variation to Existing Clinician')",
                                                },


        "new-affiliate-data":   {url:"$H/h/new-affiliate-data.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Affiliate')",
                                                    form_module:"new-affiliate-form",router:1
                                                },
        "new-affiliate-form":	{url:"$H/h/new-affiliate-form.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Affiliate')",
                                                },

        "new-honorary-affiliate-data": {url:"$H/h/new-honorary-affiliate-data.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Honorary Affiliate')",
                                                    form_module:"new-honorary-affiliate-form",router:1
                                                },
        "new-honorary-affiliate-form":	{url:"$H/h/new-honorary-affiliate-form.html",
                                                    Table: "https://woolcockmed.sharepoint.com/sites/HRandEmployment/_api/web/lists/GetByTitle('New Honorary Affiliate')",
                                                },






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
