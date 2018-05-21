let table_list=[];
//删除某一整张表格
function deleteTable(name) {
    for (let i = 0; i < table_list.length; i++) {
        if (table_list[i].name===name){
            table_list.splice(i,1);
        }
    }
}

function deleteTableName_inSelect2(name) {
    let sel2=document.getElementById("func2");
    let sel2_opt_length=sel2.options.length;
    let sel2_opt_options=sel2.options;
    if (sel2_opt_length===1){

    } else {
        for (let i = 1; i < Number(sel2_opt_length); i++) {
            if (sel2_opt_options[i].textContent === name) {
                sel2_opt_options.remove(i);
                if (sel2_opt_length !== 3) {
                    sel2_opt_options[i-1].selected=true;
                    return sel2_opt_options[i-1].textContent;
                }else {
                    sel2_opt_options[1].selected=true;
                    return sel2_opt_options[1].textContent;
                }


                break;
            }
        }

    }



}


function getTable_fromAList(name){
    for (let j = 0; j < table_list.length; j++) {
        if (table_list[j].name===name){
            return table_list[j];
        }
    }
}

function showTable(name) {
    let tb=getTable_fromAList(name);

    let  zone=document.getElementById("tableZone");
    zone.innerHTML="";
    let titleRow=document.createElement("tr");
    for (let i=0;i<tb.attr.length;i++){
        let attr_title=document.createElement("th");
        //attr_title.className="in-box";
        attr_title.appendChild(document.createTextNode(tb.attr[i].name));
        titleRow.appendChild(attr_title);
    }
    zone.appendChild(titleRow);
    for (let i=0;i<tb.attr.length;i++) {
        if (tb.attr[i].attr_list.length !== 0) {
            for (let row = 0; row < tb.attr[i].attr_list.length; row++) {
                let tr = document.createElement("tr");
                for (let i = 0; i < tb.attr.length; i++) {
                    let td = document.createElement("td");
                    td.appendChild(tb.attr[i].attr_list[row]);
                    tr.appendChild(td);
                }
                zone.appendChild(tr);
            }
        } else {
        }
    }

}


class Table {

    constructor(name){
        this.name=name;
        this.attr=[];
        table_list.splice(table_list.length,0,this);
    }

    getTable(){return this;}


    //删除某一行的内容
    delete_attr_inRow(list){
        let k=0;
        let list_toBeDeleted=[];
        for (let row = 0; row < this.attr[0].attr_list.length; row++) {
            for (let col = 0; col < this.attr.length; col++) {
                if (list[col]===""||this.attr[col].attr_list[row].placeholder===list[col]){
                    k++;
                }
            }
            if (k === this.attr.length) {
                list_toBeDeleted.splice(0,0,row);
            }else {
            }
            k=0;
        }

        for (let i = 0; i < list_toBeDeleted.length; i++) {
            this.delete_row_attr(list_toBeDeleted[i]);
        }

    }
    delete_row_attr(row){
        for (let i=0;i<this.attr.length;i++){
            this.attr[i].delete_attr_content(row);
        }
    }




    //创建标题行
    create_attrTitle(list){
        for (let i = 0; i < list.length; i++) {
            this.attr[i]=new Attr(list[i]);
        }
    }
    //创建新的一行
    create_attr_inRow(list) {
        let tr=document.createElement("tr");
        for (let i = 0; i < this.attr.length; i++) {
            let td=document.createElement("td");
            this.attr[i].create_attr_content(list[i]);
            td.appendChild(this.attr[i].attr_list[this.attr[i].attr_list.length-1]);
            tr.appendChild(td);
        }
        return tr;
    }
}

class Attr {

    constructor(name){
        this.name=name;
        this.attr_list=[];
    }

    //对于某一个attr，删除它的某一个内容
    delete_attr_content(num) {
        this.attr_list.splice(num,1);
    }
    //对于某一个attr，在末尾创造一个新的内容
    create_attr_content(string) {
        let a=document.createElement("input");
        a.type="text";
        a.placeholder=string;
        this.attr_list.splice(this.attr_list.length,0,a);
    }
}

