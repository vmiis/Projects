(function(){
    //-------------------------------------------------------------------------------------
    //permission
    var modules={
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1},
        "panel-permission":   			    {url:"$H/p/panel-permission.html",router:1},
        "permission-check":                 {url:"$H/p/permission-check.html"},
        "permission-role-login-data":       {url:"$H/p/permission-role-login-data.html",Table:"91000684",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$H/p/permission-role-login-form.html",Table:"91000684"},
        "permission-role-table-group-data": {url:"$H/p/permission-role-table-group-data.html",Table:"91000683",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$H/p/permission-role-table-group-form.html",Table:"91000683"},
        "permission-query-data":            {url:"$H/p/permission-query-data.html",Table:"91000682",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$H/p/permission-query-form.html",Table:"91000682"},
        //-------------------------------------------------------------------------------------
        //app
        "panel-main":                       {url:"$H/m/panel-main.html",router:1},
        "panel-child": 		                {url:"$H/m/panel-child.html"},

        "randomisation-data":		        {url:"$H/m/randomisation-data.html",Table:"20010891",form_module:"randomisation-form"},
        "randomisation-form":		        {url:"$H/m/randomisation-form.html",Table:"20010891"},
        "participant-data":     	        {url:"$H/m/participant-data.html", Table:"20010817",
                                                form_module:"participant-form",
                                                panel_child:"panel-child",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form":     	        {url:"$H/m/participant-form.html", Table:"20010817"},
        "edc-notes-data":	  		        {url:"$H/m/edc-notes-data.html",Table:"20010818",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$H/m/edc-notes-form.html",Table:"20010818"},
        "online-questionnaire-setup": 	    {url:"$H/m/online-questionnaire-setup.html",Table:"20010817"},
        "online-questionnaire-panel":       {url:"$H/m/online-questionnaire-panel.html"},
        "online-questionnaire-login":       {url:"$H/m/online-questionnaire-login.html"},
        "job-tracking-data":	  		    {url:"$H/j/job-tracking-data.html",Table:"91000685",form_module:"job-tracking-form"},
        "job-tracking-form":	  		    {url:"$H/j/job-tracking-form.html",Table:"91000685"},
        //-------------------------------------------------------------------------------------
        //tasks
        "file-notes-data":		        {url:"$H/m/tasks/file-notes-data.html",Table:"20010822",form_module:"file-notes-form"},
        "file-notes-form":		        {url:"$H/m/tasks/file-notes-form.html",Table:"20010822"},
        
        "adverse-event-data":		    {url:"$H/m/tasks/adverse-event-data.html",Table:"20010824",form_module:"adverse-event-form"},
        "adverse-event-form":		    {url:"$H/m/tasks/adverse-event-form.html",Table:"20010824"},
        
        "concomitant-medication-data":	{url:"$H/m/tasks/concomitant-medication-data.html",Table:"20010826",form_module:"concomitant-medication-form"},
        "concomitant-medication-form":	{url:"$H/m/tasks/concomitant-medication-form.html",Table:"20010826"},
        
        "s-visit-date-data":		    {url:"$H/m/tasks/visit-date-data.html",Table:"20010827",form_module:"s-visit-date-form"},
        "s-visit-date-form":		    {url:"$H/m/tasks/visit-date-form.html",Table:"20010827"},
        
        "s-bloods-data":		        {url:"$H/m/tasks/bloods-data.html",Table:"91000710",form_module:"s-bloods-form"},
        "s-bloods-form":		        {url:"$H/m/tasks/bloods-form.html",Table:"91000710"},

        "s-psg-upload-data":		        {url:"$H/m/tasks/psg-300-data.html",Table:"91000711",form_module:"s-psg-upload-form"},
        "s-psg-upload-form":		        {url:"$H/m/tasks/psg-300-form.html",Table:"91000711"},
        
        /*
        "s-anthropometry-data":		    {url:"$H/m/tasks/anthropometry-data.html",Table:"20010829",form_module:"s-anthropometry-form"},
        "s-anthropometry-form":		    {url:"$H/m/tasks/anthropometry-form.html",Table:"20010829",task_name:"Anthropometry"},
        
        "s-ess-data":                   {url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"20010831",form_module:"s-ess-form"},
        "s-ess-form":	                {url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"20010831",task_name:"Epworth Sleepiness Scale"},
        */
       

        "b-visit-date-data":		    {url:"$H/m/tasks/visit-date-data.html",Table:"20010832",form_module:"b-visit-date-form"},
        "b-visit-date-form":		    {url:"$H/m/tasks/visit-date-form.html",Table:"20010832"},      
        "m3-visit-date-data":		    {url:"$H/m/tasks/visit-date-data.html",Table:"91000736",form_module:"m3-visit-date-form"},
        "m3-visit-date-form":		    {url:"$H/m/tasks/visit-date-form.html",Table:"91000736"},
        "m2-visit-date-data":		    {url:"$H/m/tasks/visit-date-data.html",Table:"20010847",form_module:"m2-visit-date-form"},
        "m2-visit-date-form":		    {url:"$H/m/tasks/visit-date-form.html",Table:"20010847"},
        "m12-visit-date-data":		    {url:"$H/m/tasks/visit-date-data.html",Table:"20010873",form_module:"m12-visit-date-form"},
        "m12-visit-date-form":		    {url:"$H/m/tasks/visit-date-form.html",Table:"20010873"},


        "b-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000712",form_module:"b-visit-info-form"},
        "b-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000712"},
        "w1-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000713",form_module:"w1-visit-info-form"},
        "w1-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000713"},
        "w2-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000714",form_module:"w2-visit-info-form"},
        "w2-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000714"},
        "m1-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000715",form_module:"m1-visit-info-form"},
        "m1-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000715"},
        "m2-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000716",form_module:"m2-visit-info-form"},
        "m2-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000716"},
        "m3-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000717",form_module:"m3-visit-info-form"},
        "m3-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000717"},
        "m5-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000718",form_module:"m5-visit-info-form"},
        "m5-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000718"},
        "m7-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000719",form_module:"m7-visit-info-form"},
        "m7-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000719"},
        "m9-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000720",form_module:"m9-visit-info-form"},
        "m9-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000720"},
        "m12-visit-info-data":		    {url:"$H/m/tasks/visit-info-data.html",Table:"91000721",form_module:"m12-visit-info-form"},
        "m12-visit-info-form":		    {url:"$H/m/tasks/visit-info-form.html",Table:"91000721"},

        "b-dxa-data":		    {url:"$H/m/tasks/dxa-data.html",Table:"91000722",form_module:"b-dxa-form"},
        "b-dxa-form":		    {url:"$H/m/tasks/dxa-form.html",Table:"91000722",task_name:"DXA"},
        "m3-dxa-data":		    {url:"$H/m/tasks/dxa-data.html",Table:"91000723",form_module:"m3-dxa-form"},
        "m3-dxa-form":		    {url:"$H/m/tasks/dxa-form.html",Table:"91000723",task_name:"DXA"},
        "m12-dxa-data":		    {url:"$H/m/tasks/dxa-data.html",Table:"91000724",form_module:"m12-dxa-form"},
        "m12-dxa-form":		    {url:"$H/m/tasks/dxa-form.html",Table:"91000724",task_name:"DXA"},


        "b-anthropometry-data":		    {url:"$H/m/tasks/anthropometry-data.html",Table:"20010833",form_module:"b-anthropometry-form"},
        "b-anthropometry-form":		    {url:"$H/m/tasks/anthropometry-form.html",Table:"20010833",task_name:"Anthropometry"},
        "m1-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"20010846",form_module:"m1-anthropometry-form"},
        "m1-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"20010846",task_name:"Anthropometry"},
        "m2-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"20010850",form_module:"m2-anthropometry-form"},
        "m2-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"20010850",task_name:"Anthropometry"},
        "m3-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"91000737",form_module:"m3-anthropometry-form"},
        "m3-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"91000737",task_name:"Anthropometry"},
        
        "m5-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"91000756",form_module:"m5-anthropometry-form"},
        "m5-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"91000756",task_name:"Anthropometry"},
        "m7-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"91000757",form_module:"m7-anthropometry-form"},
        "m7-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"91000757",task_name:"Anthropometry"},
        "m9-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"20010864",form_module:"m9-anthropometry-form"},
        "m9-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"20010864",task_name:"Anthropometry"},
        "m12-anthropometry-data":		{url:"$H/m/tasks/anthropometry-data.html",Table:"20010876",form_module:"m12-anthropometry-form"},
        "m12-anthropometry-form":		{url:"$H/m/tasks/anthropometry-form.html",Table:"20010876",task_name:"Anthropometry"},
        
        "b-minmod-and-bloods-data":		    {url:"$H/m/tasks/minmod-and-bloods-data.html",Table:"91000726",form_module:"b-minmod-and-bloods-form"},
        "b-minmod-and-bloods-form":		    {url:"$H/m/tasks/minmod-and-bloods-form.html",Table:"91000726",task_name:"b-minmod-and-bloods"},
        "m3-minmod-and-bloods-data":		    {url:"$H/m/tasks/minmod-and-bloods-data.html",Table:"91000738",form_module:"m3-minmod-and-bloods-form"},
        "m3-minmod-and-bloods-form":		    {url:"$H/m/tasks/minmod-and-bloods-form.html",Table:"91000738",task_name:"minmod-and-bloods"},
        "m12-minmod-and-bloods-data":		    {url:"$H/m/tasks/minmod-and-bloods-data.html",Table:"20010878",form_module:"m12-minmod-and-bloods-form"},
        "m12-minmod-and-bloods-form":		    {url:"$H/m/tasks/minmod-and-bloods-form.html",Table:"20010878",task_name:"minmod-and-bloods"},

        "b-food-diary-data":		    {url:"$H/m/tasks/food-diary-data.html",Table:"91000727",form_module:"b-food-diary-form"},
        "b-food-diary-form":		    {url:"$H/m/tasks/food-diary-form.html",Table:"91000727",task_name:"b-food-diary"},
        "m3-food-diary-data":		    {url:"$H/m/tasks/food-diary-data.html",Table:"91000739",form_module:"m3-food-diary-form"},
        "m3-food-diary-form":		    {url:"$H/m/tasks/food-diary-form.html",Table:"91000739",task_name:"m3-food-diary"},
        "m5-food-diary-data":		    {url:"$H/m/tasks/food-diary-data.html",Table:"91000760",form_module:"m5-food-diary-form"},
        "m5-food-diary-form":		    {url:"$H/m/tasks/food-diary-form.html",Table:"91000760",task_name:"m5-food-diary"},
        "m12-food-diary-data":		    {url:"$H/m/tasks/food-diary-data.html",Table:"91000758",form_module:"m12-food-diary-form"},
        "m12-food-diary-form":		    {url:"$H/m/tasks/food-diary-form.html",Table:"91000758",task_name:"m12-food-diary"},

        "b-24hr-bp-data":		    {url:"$H/m/tasks/24hr-bp-data.html",Table:"91000728",form_module:"b-24hr-bp-form"},
        "b-24hr-bp-form":		    {url:"$H/m/tasks/24hr-bp-form.html",Table:"91000728",task_name:"b-24hr_bp"},
        "m3-24hr-bp-data":		    {url:"$H/m/tasks/24hr-bp-data.html",Table:"91000740",form_module:"m3-24hr-bp-form"},
        "m3-24hr-bp-form":		    {url:"$H/m/tasks/24hr-bp-form.html",Table:"91000740",task_name:"m3-24hr_bp"},
        "m12-24hr-bp-data":		    {url:"$H/m/tasks/24hr-bp-data.html",Table:"91000759",form_module:"m12-24hr-bp-form"},
        "m12-24hr-bp-form":		    {url:"$H/m/tasks/24hr-bp-form.html",Table:"91000759",task_name:"m12-24hr_bp"},


        "b-ess-data":                   {url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"20010836",form_module:"b-ess-form"},
        "b-ess-form":	                {url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"20010836",task_name:"Epworth Sleepiness Scale"},
        "m3-ess-data":                  {url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"91000741",form_module:"m3-ess-form"},
        "m3-ess-form":	                {url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"91000741",task_name:"Epworth Sleepiness Scale"},
        "m12-ess-data":                  {url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"20010879",form_module:"m12-ess-form"},
        "m12-ess-form":	                {url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"20010879",task_name:"Epworth Sleepiness Scale"},
        
        "b-fosq-data":                  {url:"$H/m/tasks/fosq-data.html",Table:"20010838",form_module:"b-fosq-form"},
        "b-fosq-form":	                {url:"$H/m/tasks/fosq-form.html",Table:"20010838",task_name:"Functional Outcomes of Sleep"},
        "m3-fosq-data":                 {url:"$H/m/tasks/fosq-data.html",Table:"91000742",form_module:"m3-fosq-form"},
        "m3-fosq-form":	                {url:"$H/m/tasks/fosq-form.html",Table:"91000742",task_name:"Functional Outcomes of Sleep"},
        "m12-fosq-data":                 {url:"$H/m/tasks/fosq-data.html",Table:"20010881",form_module:"m12-fosq-form"},
        "m12-fosq-form":	             {url:"$H/m/tasks/fosq-form.html",Table:"20010881",task_name:"Functional Outcomes of Sleep"},
        
        "b-dass-data":                  {url:"$H/m/tasks/depression-anxiety-stress-scales-data.html",Table:"20010839",form_module:"b-dass-form"},
        "b-dass-form":	                {url:"$H/m/tasks/depression-anxiety-stress-scales-form.html",Table:"20010839",task_name:"dass"},
        "m3-dass-data":                 {url:"$H/m/tasks/depression-anxiety-stress-scales-data.html",Table:"91000743",form_module:"m3-dass-form"},
        "m3-dass-form":	                {url:"$H/m/tasks/depression-anxiety-stress-scales-form.html",Table:"91000743",task_name:"dass"},
        "m12-dass-data":                 {url:"$H/m/tasks/depression-anxiety-stress-scales-data.html",Table:"20010882",form_module:"m12-dass-form"},
        "m12-dass-form":	             {url:"$H/m/tasks/depression-anxiety-stress-scales-form.html",Table:"20010882",task_name:"dass"},
        
        //IWQO
        "b-iwqlq-data":                 {url:"$H/m/tasks/iwqlq-data.html",Table:"20010841",form_module:"b-iwqlq-form"},
        "b-iwqlq-form":	                {url:"$H/m/tasks/iwqlq-form.html",Table:"20010841",task_name:"iwqlq"},
        "m3-iwqlq-data":                {url:"$H/m/tasks/iwqlq-data.html",Table:"91000744",form_module:"m3-iwqlq-form"},
        "m3-iwqlq-form":	            {url:"$H/m/tasks/iwqlq-form.html",Table:"91000744",task_name:"iwqlq"},
        "m12-iwqlq-data":                {url:"$H/m/tasks/iwqlq-data.html",Table:"20010884",form_module:"m12-iwqlq-form"},
        "m12-iwqlq-form":	            {url:"$H/m/tasks/iwqlq-form.html",Table:"20010884",task_name:"iwqlq"},
        
        "b-ipaq-data":                  {url:"$H/m/tasks/ipaq-data.html",Table:"20010843",form_module:"b-ipaq-form"},
        "b-ipaq-form":	                {url:"$H/m/tasks/ipaq-form.html",Table:"20010843",task_name:"ipaq"},
        "m3-ipaq-data":                 {url:"$H/m/tasks/ipaq-data.html",Table:"91000745",form_module:"m3-ipaq-form"},
        "m3-ipaq-form":	                {url:"$H/m/tasks/ipaq-form.html",Table:"91000745",task_name:"ipaq"},
        "m12-ipaq-data":                {url:"$H/m/tasks/ipaq-data.html",Table:"20010886",form_module:"m12-ipaq-form"},
        "m12-ipaq-form":	            {url:"$H/m/tasks/ipaq-form.html",Table:"20010886",task_name:"ipaq"},
    }
    //-------------------------------------------------------------------------------------
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
