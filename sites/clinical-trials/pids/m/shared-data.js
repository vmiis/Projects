var notes="notes-data";
var note_table=$vm.module_list[notes].Table;
//-------------------------------------
m.set_req=function(){
    if(m.input!=undefined && m.input.record!=undefined){
        m.query={Table:m.Table,'Data.Participant_uid':m.input.record.UID.toString()}
    }
    else{
        m.query={Table:m.Table}
    }
};
//-------------------------------------
m.load=function(){
        if(m.input!=undefined && m.input.record!=undefined){
        $('#export_section__ID').hide();
    }
    else{
        $('#export_section__ID').show();
    }
}
//-------------------------------------
m.cell_render=function(records,I,field,td){
    switch(field){
        case '_Status':
            td.html("<span style='color:"+records[I].Data['sysStatus']+"'>&#x25cf;</span>");
            break;
        case '_Participant_ID':
            td.html(records[I].Data.Participant_uid);
            break;
        case '_Notes':
            //default: create a hyperlink to load note module with task name and task UID
            //if there is a note for this record, the td will be overwritten lately
            td.html("<u style='cursor:pointer'>Notes</u>");
            td.find('u').on('click',function(){
                $vm.load_module(notes,'',{task_name:m.task_name,task_uid:records[I].UID,participant_uid:records[I].Data.Participant_uid})
            })
            break;
    }
}
//-------------------------------------
m.data_process=function(){
    //get all notes for current grid view and render them
    //var notes="notes-data";
    var uid_array=[];
    for(var i=0;i<m.records.length;i++){
        uid_array.push(m.records[i].UID)
    }
    var query={ I2:m.task_name, I3: { $in: uid_array } }
    var req={cmd:"find",table:note_table,query:query}
    $vm.request(req,function(res){
        //--------------------------
        var part=[];
        //find the notes and attach to the record
        if(res.result.length!=undefined){
            for(var j=0;j<m.records.length;j++){
                for(var k=0;k<res.result.length;k++){
                    if(m.records[j].UID==res.result[k].I3){
                        m.records[j].sys_x=res.result[k].Data;
                        m.records[j].I4=res.result[k].I4;
                        break;
                    }
                }
            }
        }
        //-------------------------- ,participant_uid:records[index].Data.Participant_uid
        //rendering the notes;
        $("#grid__ID td[data-id=_Notes]").each(function(index){
            if(m.records[index].sys_x!=undefined){
                var t=m.records[index].sys_x.Title;
                var c=m.records[index].sys_x.Color
                $(this).html("<u style='cursor:pointer;color:"+c+"'>"+t+"</u>");
                $(this).find('u').on('click',function(){
                    $vm.load_module(notes,'',{task_name:m.task_name,task_uid:m.records[index].UID,participant_uid:m.records[index].Data.Participant_uid})
                })
            }
        });
        //--------------------------
    });
}
/*
m.cell_render=function(records,I,field,td){
    switch(field){
        case '_Status':
            td.html("<span style='color:"+records[I].Data['sysStatus']+"'>&#x25cf;</span>");
            break;
        case '_Participant_ID':
            td.html(records[I].Data.Participant_uid);
            break;
        case '_Notes':
            var notes='Notes';
            if(records[I].Notes!=undefined){
                var n1=records[I].Notes.split('\n')[0];
                //var n2=n1.split('\n').pop();
                if(n1.length>0){
                    notes=n1;
                    if(notes.length>10) notes=notes.substring(0,10)+"...";
                }
            }
            td.html("<u style='cursor:pointer'>"+notes+"</u>");
            td.find('u').on('click',function(){
                $vm.load_module('notes','',{record:records[I]});
            });
            break;
    }
}*/
//-------------------------------------
m.new=function(){
    if(m.form_module!=undefined){
        //we are using child panel
        var participant_record=$vm.vm['__ID'].input.record;
        $vm.load_module(m.form_module,'',{participant_record:participant_record,goback:1});
    }
}
//-------------------------------------
