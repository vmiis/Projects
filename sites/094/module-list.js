(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "word-pair-association":        {url:"$H/m/word-pair-association/task-01.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
