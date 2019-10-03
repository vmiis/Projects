(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":  	              {url:"$H/m/panel.html",router:1},
        "how-signin":  	          {url:"https://projects.vmiis.com/sites/063/index.html"},
        "onedrive":               {url:"$H/m/onedrive.html",level:0},
        "level-1":                {url:"$H/m/onedrive.html",level:1},
        "level-2":                {url:"$H/m/onedrive.html",level:2},
        "level-3":                {url:"$H/m/onedrive.html",level:3},
        "json-viewer":            {url:"https://vm.vmiis.com/component/j/json-viewer.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
