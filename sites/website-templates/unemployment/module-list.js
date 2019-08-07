(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "australia-unemployment":	    {url:"$H/m/unemployment.html",router:1,country:'Australia',country_code:'aus',tags:'economic'},
        "china-unemployment":	        {url:"$H/m/unemployment.html",router:1,country:'China',country_code:'cn',tags:'economic'},
        "united-states-unemployment":	{url:"$H/m/unemployment.html",router:1,country:'United States',country_code:'us',tags:'economic'},
        "news":                         {url:"$H/m/news.html",router:1},
        
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
