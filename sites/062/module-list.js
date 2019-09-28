(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":  	              {url:"$H/m/panel.html",router:1},
        "how-signin":  	          {url:"https://projects.vmiis.com/sites/how-to-sign-in-to-microsoft-azure-with-msal/index.html"},
        "onedrive":               {url:"$H/m/onedrive.html",level:0},
        "level-1":                {url:"$H/m/onedrive.html",level:1},
        "level-2":                {url:"$H/m/onedrive.html",level:2},
        "level-3":                {url:"$H/m/onedrive.html",level:3},
        
        "module-editor":          {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
        "json-viewer":            {url:"https://vm.vmiis.com/component/j/json-viewer.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
