(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "task-1-data":  	{url:"$H/m2/task-data.html",Table:"task-1-demo-0702",form_module:"task-1-form",router:1,task_name:'task 1'},
        "task-1-form":  	{url:"$H/m2/task-form.html",Table:"task-1-demo-0702"},
        "task-2-data":  	{url:"$H/m2/task-data.html",Table:"task-2-demo-0702",form_module:"task-2-form",router:1,task_name:'task 2'},
        "task-2-form":  	{url:"$H/m2/task-form.html",Table:"task-2-demo-0702"},
        "notes-data":  	    {url:"$H/m2/notes-data.html",Table:"notes-demo-0702",form_module:"notes-form",router:1},
        "notes-form":  	    {url:"$H/m2/notes-form.html",Table:"notes-demo-0702"},

        "task-3-data":  	{url:"$H/m3/task-data.html",Table:"task-3-demo-0702",form_module:"task-3-form",router:1},
        "task-3-form":  	{url:"$H/m3/task-form.html",Table:"task-3-demo-0702"},
        "notes":  	        {url:"$H/m3/notes.html"},


        "dashboard":  	    {url:"$H/m1/dashboard.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
