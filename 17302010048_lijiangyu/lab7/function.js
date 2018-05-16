let main_list=document.getElementsByClassName("for_get");
for (let i = 1; i < main_list.length; i++) {
    main_list[i].style.display="none";
}

let input_blank=[];
let listOfTable=[];

function judge_f1_func() {
    let sel1=document.getElementById("func1").value;
    content_type(sel1);
}

function content_type(sel1) {
    for (let i = 1; i < main_list.length; i++) {
        main_list[i].style.display="none";
    }
    switch (sel1) {
        case "f1-1":break;
        case "f1-2":main_list[1].style.display="block";
        case "f1-3":
        case "f1-4":main_list[2].style.display="block";
        case "f1-5":
            main_list[3].style.display="block";
            main_list[4].style.display="block";break;
        default:break;
    }
}

function click_create_attr_block() {
    let numOfSheets=document.getElementById("numOfSheets").value;
    create_attr_block(numOfSheets);
}

function create_attr_block(num) {
    let zone=document.getElementById("attrTitle");

    //初始化
    zone.innerHTML="";
    input_blank.length=0;

    //赋值
    let numOfSheets=num;

    for(let i=0;i<numOfSheets;i++){
        input_blank[i]=document.createElement("input");
        input_blank[i].type="text";
        input_blank[i].placeholder="Attribute";
        input_blank[i].className="in-box";
        zone.appendChild(input_blank[i]);
    }
    zone.style.display="block";
}

function click_forCommit() {
    let sel1=document.getElementById("func1").value;
    let table_zone=document.getElementById("table_zone");
    switch (sel1) {
        case "f1-1":break;
        case "f1-2":create_table_title_inAll();break;
        case "f1-3":create_table_content();break;
        case "f1-4":
        case "f1-5":break;
        default:break;
    }
}

function create_table_title_inAll() {
    if (document.getElementById("tableZone").hasChildNodes()){

    }  else {
        let sel2=document.getElementById("func2");
        let opt= document.createElement("option");
        let table=create_table_title_abstract();
        opt.appendChild(document.createTextNode(table.name));
        sel2.appendChild(opt);
        create_table_title();
        document.getElementById("tableZone").appendChild(show_table_title());

        listOfTable.splice(listOfTable.length,0,table);

        function create_table_title() {
            for (let i=0; i<input_blank.length; i++){
                table.Attr[i]=input_blank[i].value;
            }
        }
        function create_table_title_abstract() {

            let tableName=document.getElementById("tableName");
            let table2=new Table(tableName.value);
            return table2;
        }
        function show_table_title() {
            let table1=document.createElement("table");
            let row1=document.createElement("tr");
            for (let i = 0; i < table.Attr.length; i++) {
                let th0=document.createElement("th");
                th0.appendChild(document.createTextNode(table.Attr[i]));
                row1.appendChild(th0);
            }
            table1.appendChild(row1);
            return table1;
        }
    }
}

function get_content_fromInput() {
    let array=[];

}

function create_table_content() {
    let formName=document.getElementById("func2").value;
    for (let i=0;i<listOfTable.length;i++ ){
        if (listOfTable[i].name===formName){
            input_blank.length=0;
            //input_blank=listOfTable[i].Attr;
            for (let q = 0; q < listOfTable[q].Attr.length; q++) {
                input_blank[q]=listOfTable[i].Attr[q];
            }
            let zone=document.getElementById("tableZone");
            for(let i=0; i<input_blank.length; i++){
                let a=document.createElement("input");
                a.placeholder=input_blank[i];
                a.type="text";
                a.className="in-box";
                zone.appendChild(a);
            }
        }
    }
}

function Table(name) {this.name=name;this.Attr=[];}


