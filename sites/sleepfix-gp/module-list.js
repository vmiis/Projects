(function(){
    var modules={
        "screening-form":		            {url:"$H/m/screening-form.html",Table:"sleep-fix-gp-screening"},
        "pis-form":		                    {url:"$H/m/pis-form.html"},
        "consent-form":		                {url:"$H/m/consent-form.html",Table:"sleep-fix-gp-consent"},
        "registration-form":		        {url:"$H/m/registration-form.html",Table:"sleep-fix-gp-registration"},
        "screen-failure-phq-9":		        {url:"$H/m/screen-failure-phq-9.html"},
        "screen-failure-thank-you-page":	{url:"$H/m/screen-failure-thank-you-page.html"},
        "sleepfix-study-page-tmp":		    {url:"$H/m/sleepfix-study-page-tmp.html"},
        "sleepfix-study-page":		        {url:"$H/m/sleepfix-study-page.html"},        
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
