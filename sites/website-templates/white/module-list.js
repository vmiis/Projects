(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "page-01":	    {url:"$H/m/page-01.html",router:1,tags:'blog'},
        "page-02":	    {url:"$H/m/page-02.html",router:1,tags:'blog'},
        "page-03":	    {url:"$H/m/page-03.html",router:1,tags:'blog'},
        "page-04":	    {url:"$H/m/page-04.html",router:1,tags:'blog'},
        "page-05":	    {url:"$H/m/page-05.html",router:1,tags:'blog'},
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
