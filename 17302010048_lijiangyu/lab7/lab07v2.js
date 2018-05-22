let main_list=document.getElementsByClassName("for_get");
for (let i = 1; i < main_list.length; i++) {
    main_list[i].style.display="none";
}
//根据第一个select框中的信息判断各个部分是否显示
function judge_f1_func() {
    let sel1=document.getElementById("func1").value;
    content_type(sel1);
}
function content_type(sel1) {
    for (let i = 1; i < main_list.length; i++) {
        main_list[i].style.display="none";
    }
    let warningPart=document.getElementById("warningPart");
    if (sel1 === "f1-5") {
        warningPart.style.display="block";
    }else {
        warningPart.style.display="none";
    }

    switch (sel1) {
        case "f1-1":break;
        case "f1-2":
            main_list[1].style.display="block";
            main_list[3].style.display="block";
            main_list[4].style.display="block";
            break;
        case "f1-3":
            main_list[2].style.display="block";
            main_list[3].style.display="block";
            main_list[4].style.display="block";

            let sel20=document.getElementById("func2");
            let tb0=getTable_fromAList(sel20.value);
            create_attr_block(tb0.attr.length);
            break;
        case "f1-4":
            main_list[2].style.display="block";
            main_list[3].style.display="block";
            main_list[4].style.display="block";

            let sel2=document.getElementById("func2");
            let tb=getTable_fromAList(sel2.value);
            create_attr_block(tb.attr.length);

            break;
        case "f1-5":
            main_list[3].style.display="block";
            main_list[4].style.display="block";

            break;
        default:break;
    }
}
//根据用户输入的值立刻生成相等数量的input框
let blank_list_forAttr=[];
function click_create_attr_block() {
    let numOfSheets=document.getElementById("numOfSheets").value;
    create_attr_block(numOfSheets);
}
function create_attr_block(num) {
    let zone=document.getElementById("attrTitle");

    //初始化
    zone.innerHTML="";
    blank_list_forAttr.length=0;

    //赋值
    let numOfSheets=num;

    for(let i=0;i<numOfSheets;i++){
        blank_list_forAttr[i]=document.createElement("input");
        blank_list_forAttr[i].type="text";
        blank_list_forAttr[i].placeholder="Attribute";
        blank_list_forAttr[i].className="in-box";
        blank_list_forAttr[i].id="input_content "+i;
        zone.appendChild(blank_list_forAttr[i]);
    }
    zone.style.display="block";
}

//根据第一个select框中的信息判断commit按钮的触发方式
let list=[];
function click_forCommit() {
    //获取input框中的值
    // for (let i = 0; i < blank_list_forAttr.length; i++) {
    //     list[i]=document.getElementById("input_content " +i).value;//blank_list_forAttr[i];
    // }blank_list_forAttr.length=0;

    let sel1=document.getElementById("func1").value;
    let sel2=document.getElementById("func2");
    let table_zone=document.getElementById("tableZone");
    switch (sel1) {
        case "f1-1":break;
        case "f1-2":
            let numOfSheets=blank_list_forAttr.length;
            let k=0;
            for(let i=0;i<numOfSheets;i++){
                if (blank_list_forAttr[i].value!==""){
                    k++;
                }
            }

            if (k === blank_list_forAttr.length) {

                for (let i = 0; i < blank_list_forAttr.length; i++) {
                    list[i]=blank_list_forAttr[i].value;
                }blank_list_forAttr.length=0;

                let table_eq=new Table(document.getElementById("tableName").value);
                table_eq.create_attrTitle(list);

                let vr=document.createElement("option");
                vr.appendChild(document.createTextNode(document.getElementById("tableName").value));
                sel2.appendChild(vr);
                vr.selected=true;

                showTable(table_eq.name);

            }




            break;
        case "f1-3":



            let tb=getTable_fromAList(sel2.value);


            list.length=0;
            for (let i = 0; i < blank_list_forAttr.length; i++) {
                list[i]=blank_list_forAttr[i].value;
            }blank_list_forAttr.length=0;

            let tr=document.createElement("tr");
            for (let i = 0; i < tb.attr.length; i++) {
                let td=document.createElement("td");
                tb.attr[i].create_attr_content(list[i]);
                td.appendChild(tb.attr[i].attr_list[tb.attr[i].attr_list.length-1]);
                tr.appendChild(td);
            }

            table_zone.appendChild(tr);

            create_attr_block(tb.attr.length);
            showTable(tb.name);


            break;
        case "f1-4":
            let tb_0=getTable_fromAList(sel2.value);
            let list0=[];

            for (let i = 0; i < blank_list_forAttr.length; i++) {
                list0[i]=blank_list_forAttr[i].value;
            }blank_list_forAttr.length=0;


            tb_0.delete_attr_inRow(list0);
            showTable(sel2.value);
            create_attr_block(tb_0.attr.length);
            break;
        case "f1-5":
            deleteTable(sel2.value);
            let tbtb=deleteTableName_inSelect2(sel2.value);
            showTable(tbtb);
            break;
        default:break;
    }
    list.length=0;
}

function func2_click() {
    let string=document.getElementById("func2");

    let func1_val=document.getElementById("func1");
    if (func1_val.value !== "f1-5") {
        let tb=getTable_fromAList(string.value);
        create_attr_block(tb.attr.length);
    }

    showTable(string.value);
}

