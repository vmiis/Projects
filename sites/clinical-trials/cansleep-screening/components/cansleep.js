(function(){
    //-------------------------------------------------------------------------------------
    /*
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    */
    //-------------------------------------------------------------------------------------
    var modules={
        "recruitment-data":    	        {url:"$H/modules/elig-questions-data.html",Table:"cansleep-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form":    	        {url:"$H/modules/elig-questions-form.html",Table:"cansleep-recruitment-record"},
    }
    /*
    url_replace(modules,"","$H","https://www.cansleepstudy.com/modules","http://127.0.0.1:8000/wappsystem/cansleep/modules");
    //-------------------------------------------------------------------------------------
    for(m in modules){$vm.module_list[m]=modules[m];}
    */
    
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