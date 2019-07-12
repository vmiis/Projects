(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":               {url:"$H/m/panel-main.html",router:1},


        //-------------------------------------------------------------------------------------
        "panel-permission":   			    {url:"$H/p/panel-permission.html",router:1},
        "permission-check":                 {url:"$H/p/permission-check.html"},
        "permission-role-login-data":       {url:"$H/p/permission-role-login-data.html",Table:"91000628",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$H/p/permission-role-login-form.html",Table:"91000628"},
        "permission-role-table-group-data": {url:"$H/p/permission-role-table-group-data.html",Table:"91000627",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$H/p/permission-role-table-group-form.html",Table:"91000627"},
        "permission-query-data":            {url:"$H/p/permission-query-data.html",Table:"91000626",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$H/p/permission-query-form.html",Table:"91000626"},
        //-------------------------------------------------------------------------------------
        "module-editor":                {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
        //-------------------------------------------------------------------------------------
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
