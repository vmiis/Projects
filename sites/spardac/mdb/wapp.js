(function(){
    var modules={

        "panel-main-wapp":    			{url:"$A/modules/mdb/p/panel-wapp/panel-main.html",router:1},
        "panel-child-wapp":    			{url:"$A/modules/mdb/p/panel-wapp/panel-child.html"},
        
        "participant-data-wapp":   		{url:"$A/modules/mdb/p/participant-data-wapp.html",Table:"participant",form_module:"participant-form-wapp",router:1,
                                            child_panel:"panel-child-wapp",
                                            questionnaire_setup:"online-questionnaire-setup-wapp",
                                            online_questionnaire:"online-questionnaire-app-wapp"
                                        },
        "participant-form-wapp":   		{url:"$A/modules/mdb/p/participant-form-wapp.html",Table:"participant"},

        "notes":  		  	  			{url:"$A/modules/mdb/n/notes.html"},


        "actiwatch-data-wapp":	               {url:"$A/modules/mdb/a/actiwatch-data-wapp.html",Table:"actiwatch-wapp",form_module:"actiwatch-form-wapp"},
        "actiwatch-form-wapp":	               {url:"$A/modules/mdb/a/actiwatch-form-wapp.html",Table:"actiwatch-wapp"},
        "adverse-event-data-wapp":	           {url:"$A/modules/mdb/a/adverse-event-data-wapp.html",Table:"adverse-eevent-wapp",form_module:"adverse-eevent-form-wapp"},
        "adverse-eevent-form-wapp":	           {url:"$A/modules/mdb/a/adverse-event-form-wapp.html",Table:"adverse-eevent-wapp"},
    
        "background-information-data-wapp":     {url:"$A/modules/mdb/b/background-information-data-wapp.html",Table:"background-information-wapp",form_module:"background-information-form-wapp"},
        "background-information-form-wapp":     {url:"$A/modules/mdb/b/background-information-form-wapp.html",Table:"background-information-wapp",task_name:"Background information"},
        
        "clinical-trials-app-wapp":     {url:"$A/apps/c/clinical-trials-wapp/index.html"},
        "consent-data-wapp":  			{url:"$A/modules/mdb/c/consent-data-wapp.html",Table:"consent-wapp",form_module:"consent-form-wapp"},
        "consent-form-wapp":  			{url:"$A/modules/mdb/c/consent-form-wapp.html",Table:"consent-wapp",task_name:"Consent"},
        
        "dass-data-wapp":	 	        {url:"$A/modules/mdb/d/dass-data-wapp.html",Table:"dass-wapp",form_module:"dass-form-wapp"},
        "dass-form-wapp":	 	        {url:"$A/modules/mdb/d/dass-form-wapp.html",Table:"dass-wapp"},
        
        "ess-data-wapp":       			{url:"$A/modules/mdb/e/ess-data-wapp.html",Table:"ess-wapp",form_module:"ess-form-wapp"},
        "ess-form-wapp":       			{url:"$A/modules/mdb/e/ess-form-wapp.html",Table:"ess-wapp"},
        
        "ethnicity-data-wapp":    		{url:"$A/modules/mdb/e/ethnicity-self-data-wapp.html",Table:"ethnicity-wapp",form_module:"ethnicity-form-wapp"},
        "ethnicity-form-wapp":    		{url:"$A/modules/mdb/e/ethnicity-self-form-wapp.html",Table:"ethnicity-wapp"},

        "family-sleep-history-data-wapp":{url:"$A/modules/mdb/f/family-sleep-history-data-wapp.html",Table:"family-sleep-history-wapp",form_module:"family-sleep-history-form-wapp"},
        "family-sleep-history-form-wapp":{url:"$A/modules/mdb/f/family-sleep-history-form-wapp.html",Table:"family-sleep-history-wapp"},

        "fosq-data-wapp":      	  		{url:"$A/modules/mdb/f/fosq-data-wapp.html",Table:"fosq-wapp",form_module:"fosq-form-wapp"},
        "fosq-form-wapp":      	  		{url:"$A/modules/mdb/f/fosq-form-wapp.html",Table:"fosq-wapp"},

        "isi-data-wapp":      	  		{url:"$A/modules/mdb/i/isi-data-wapp.html",Table:"isi-wapp",form_module:"isi-form-wapp"},
        "isi-form-wapp":      	  		{url:"$A/modules/mdb/i/isi-form-wapp.html",Table:"isi-wapp"},

        "online-questionnaire-setup-wapp": 	{url:"$A/modules/mdb/o/online-questionnaire-setup-wapp.html",Table:"participant"},
        "online-questionnaire-app-wapp":    {url:"$A/apps/o/online-questionnaire-wapp/index.html"},


        
        "screening-data-wapp": 			{url:"$A/modules/mdb/s/screening-data-wapp.html",Table:"screening",form_module:"screening-form-wapp"},
        "screening-form-wapp": 			{url:"$A/modules/mdb/s/screening-form-wapp.html",Table:"screening"},
        "sdp-data-wapp":     		    {url:"$A/modules/mdb/s/sleep-disorder-patterns-data-wapp.html",Table:"sdp-wapp",form_module:"sdp-form-wapp"},
        "sdp-form-wapp":     		    {url:"$A/modules/mdb/s/sleep-disorder-patterns-form-wapp.html",Table:"sdp-wapp"},

        "wa-data-wapp":    			    {url:"$A/modules/mdb/w/wa-data-wapp.html",Table:"wa-wapp",form_module:"wa-form-wapp"},
        "wa-form-wapp":    			    {url:"$A/modules/mdb/w/wa-form-wapp.html",Table:"wa-wapp"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
