(function(){
    var modules={
        "panel-main-local-sleep":    			 {url:"$H/m/elig-questions-data.html",Table:"local-sleep-recruitment-record"},
        "panel-main-local-sleep-eligible":      {url:"$H/m/elig-questions-eligible-data.html",Table:"local-sleep-recruitment-record"},
        "panel-main-local-sleep-non-eligible":  {url:"$H/m/elig-questions-non-eligible-data.html",Table:"local-sleep-recruitment-record"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


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
