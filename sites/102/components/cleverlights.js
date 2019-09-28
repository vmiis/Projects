(function(){
    var modules={
        "panel-main-cleverlights":    			 {url:"$H/modules/elig-questions-data.html",Table:"cleverlights-recruitment-record"},
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
