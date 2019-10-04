(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"ent-fu-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup-ent-fu",
                                                online_questionnaire:"online-questionnaire-app-ent-fu",
                                                participant_id:{field1:"Randomisation_number",field2:"Intervention_Group"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"ent-fu-participant"},

        "online-questionnaire-setup-ent-fu": {url:"$H/m/oq-setup.html",Table:"ent-fu-participant"},
        "online-questionnaire-app-ent-fu":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"ent-fu-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"ent-fu-notes"},

        "serious-adverse-event-data-ent-fu":       {url:"$H/m/library/serious-adverse-event-data.html",Table:"serious-adverse-event-ent-fu",form_module:"serious-adverse-event-form-ent-fu",task_name:"Unscheduled - Serious Adverse Event"},
        "serious-adverse-event-form-ent-fu":       {url:"$H/m/library/serious-adverse-event-form.html",Table:"serious-adverse-event-ent-fu",task_name:"Unscheduled - Serious Adverse Event"},
        "adverse-event-data-ent-fu":           {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-ent-fu",form_module:"adverse-event-form-ent-fu",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-ent-fu":           {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-ent-fu",task_name:"Unscheduled - Adverse Event"},

        "ess-data-ent-fu":                     {url:"$H/m/library/ess-data.html",Table:"ess-ent-fu",form_module:"ess-form-ent-fu",task_name:"Epworth Sleepiness Scale (ESS)"},
        "ess-form-ent-fu":                     {url:"$H/m/library/ess-form.html",Table:"ess-ent-fu",task_name:"Epworth Sleepiness Scale (ESS)"},
        "fosq30-data-ent-fu":                  {url:"$H/m/library/fosq30-data.html",Table:"fosq30-ent-fu",form_module:"fosq30-form-ent-fu",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 30)"},
        "fosq30-form-ent-fu":                  {url:"$H/m/library/fosq30-form.html",Table:"fosq30-ent-fu",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 30)"},
        "eq-5d-data-ent-fu":                   {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-ent-fu",form_module:"eq-5d-form-ent-fu",task_name:"EQ-5D-5L instrument"},
        "eq-5d-form-ent-fu":                   {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-ent-fu",task_name:"EQ-5D-5L instrument"},
        "glasgow-benefit-inventory-data-ent-fu": {url:"$H/m/library/glasgow-benefit-inventory-data.html",Table:"glasgow-benefit-inventory-ent-fu",form_module:"glasgow-benefit-inventory-form-ent-fu",task_name:"Glasgow Benefit Inventory"},
        "glasgow-benefit-inventory-form-ent-fu": {url:"$H/m/library/glasgow-benefit-inventory-form.html",Table:"glasgow-benefit-inventory-ent-fu",task_name:"Glasgow Benefit Inventory"},
        "snoring-severity-scale-data-ent-fu":  {url:"$H/m/library/snoring-severity-scale-data.html",Table:"snoring-severity-scale-ent-fu",form_module:"snoring-severity-scale-form-ent-fu",task_name:"The Snoring Severity Scale"},
        "snoring-severity-scale-form-ent-fu":  {url:"$H/m/library/snoring-severity-scale-form.html",Table:"snoring-severity-scale-ent-fu",task_name:"For PARTNER - The Snoring Severity Scale"},
        "study-completion-data-ent-fu":               {url:"$H/m/library/study-completion-data.html",Table:"study-completion-ent-fu",form_module:"study-completion-form-ent-fu",task_name:"Study Completion/ Withdrawal"},
        "study-completion-form-ent-fu":               {url:"$H/m/library/study-completion-form.html",Table:"study-completion-ent-fu",task_name:"Study Completion/ Withdrawal"},
        "sleep-physician-review-data-ent-fu":         {url:"$H/m/library/sleep-physician-review-data.html",Table:"sleep-physician-review-ent-fu",form_module:"sleep-physician-review-form-ent-fu",task_name:"REVIEW 1 – Sleep Physician Review"},
        "sleep-physician-review-form-ent-fu":         {url:"$H/m/library/sleep-physician-review-form.html",Table:"sleep-physician-review-ent-fu",task_name:"REVIEW 1 – Sleep Physician Review"},
        "phone-call-data-ent-fu":                      {url:"$H/m/library/phone-call-data.html",Table:"phone-call-ent-fu",form_module:"phone-call-form-ent-fu",task_name:"PHONE CALL - With Researcher"},
        "phone-call-form-ent-fu":                      {url:"$H/m/library/phone-call-form.html",Table:"phone-call-ent-fu",task_name:"PHONE CALL - With Researcher"},
        "current-medication-data-ent-fu":              {url:"$H/m/library/current-medication-data.html",Table:"current-medication-ent-fu",form_module:"current-medication-form-ent-fu",task_name:"REVIEW 1 - Current Medications"},
        "current-medication-form-ent-fu":              {url:"$H/m/library/current-medication-form.html",Table:"current-medication-ent-fu",task_name:"REVIEW 1 - Current Medications"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
