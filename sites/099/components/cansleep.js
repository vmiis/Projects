(function(){
    var modules={
        "panel-main-cansleep":    			 {url:"$H/modules/elig-questions-data.html",Table:"cansleep-recruitment-record"},
        "panel-main-cansleep-eligible":      {url:"$H/modules/elig-questions-eligible-data.html",Table:"cansleep-recruitment-record"},
        "panel-main-cansleep-non-eligible":  {url:"$H/modules/elig-questions-non-eligible-data.html",Table:"cansleep-recruitment-record"},
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
