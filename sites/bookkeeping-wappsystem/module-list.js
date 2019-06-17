(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "ato-tax-return-yearly-aggregation-data":     {url:"$H/m/ato-tax-return-yearly-aggregation-data.html",Table:"ato-tax-return-yearly-aggregation-wappsystem",transaction_table:'transaction-wappsystem',form_module:"ato-tax-return-yearly-aggregation-form",router:1,private:1},
        "ato-tax-return-yearly-aggregation-form":     {url:"$H/m/ato-tax-return-yearly-aggregation-form.html",Table:"ato-tax-return-yearly-aggregation-wappsystem",transaction_table:'transaction-wappsystem',private:1},

        "predefined-transaction-item-data": {url:"$H/m/predefined-transaction-item-data.html",Table:"predefined-transaction-item-wappsystem",form_module:"predefined-transaction-item-form",private:1},
        "predefined-transaction-item-form": {url:"$H/m/predefined-transaction-item-form.html",Table:"predefined-transaction-item-wappsystem",private:1},
        
        "transaction-y-q-tax-return-data":  {url:"$H/m/transaction-year-quarter-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        "transaction-y-q-bas-data":    		{url:"$H/m/transaction-year-quarter-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        "transaction-y-q-data":    		    {url:"$H/m/transaction-year-quarter-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        
        "transaction-bas-data":   		    {url:"$H/m/transaction-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        "transaction-tax-return-data":      {url:"$H/m/transaction-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        "transaction-data":    			    {url:"$H/m/transaction-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1,private:1},
        "transaction-form":    			    {url:"$H/m/transaction-form.html",Table:"transaction-wappsystem",private:1,
                                                item_table:'predefined-transaction-item-wappsystem'
                                            },
        "ato-bas-quarter-aggregation-data":     {url:"$H/m/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem',form_module:"ato-bas-quarter-aggregation-form",router:1,private:1},
        "ato-bas-quarter-aggregation-form":     {url:"$H/m/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem',private:1},
        "income-expense-month-aggregation-data":{url:"$H/m/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"income-expense-month-aggregation-form",router:1,private:1},
        "income-expense-month-aggregation-form":{url:"$H/m/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',private:1},
        "item-month-aggregation-data":          {url:"$H/m/item-month-aggregation-data.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"item-month-aggregation-form",router:1,private:1},
        "item-month-aggregation-form":          {url:"$H/m/item-month-aggregation-form.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',private:1},
        "income-expense-chart":                 {url:"$H/m/income-expense-chart.html",Table:"income-expense-month-aggregation-wappsystem",router:1,private:1},
        "item-chart":                           {url:"$H/m/item-chart.html",Table:"item-month-aggregation-wappsystem",router:1,private:1},
        
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
