// let input_blank=[];
// let listOfTable=[];
//
//
// let btCommit=document.getElementById("commit");
// btCommit.style.display="none";
// let block=document.getElementById("attrTitle");
// block.style.display="none";
//
// function createTable() {
//     //初始化
//     block.innerHTML="";
//     input_blank.length=0;
//
//     //赋值
//     let numOfSheets=document.getElementById("numOfSheets").value;
//
//     for(let i=0;i<numOfSheets;i++){
//         input_blank[i]=document.createElement("input");
//         input_blank[i].type="text";
//         input_blank[i].placeholder="Attribute";
//         block.appendChild(input_blank[i]);
//     }
//     btCommit.style.display="block";
//     block.style.display="block";
// }
//
// function changeByValue(name) {
//     for (let i = 0; i < listOfTable.length; i++) {
//         listOfTable[i].style.display="none";
//         if (listOfTable[i] === name) {
//             listOfTable[i].style.display="block";
//         }
//     }
// }
//
// document.getElementById("commit").attachEvent("onclick",handle);
// function handle() {
//     let key=document.getElementById("func1").value;
// }
//
//
//
//
// class Table {
//     attr_list=[];
//     attr_content=[];
//
//     constructor(name){this.name=name;}
//
//
//
// }