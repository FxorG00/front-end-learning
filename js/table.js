// 新增一行
function newRow() {
    var table=document.getElementById("table");
    // console.log(table);
    // console.log(table.rows.length);
    var length=table.rows.length;
    var newRow=table.insertRow(length);
    // 插入列节点
    var nameCol=newRow.insertCell(0);
    var phoneCol=newRow.insertCell(1);
    var buttonCol=newRow.insertCell(2);
    console.log(nameCol);
    // 修改 innerHTML
    nameCol.innerHTML="未命名";
    phoneCol.innerHTML="无电话";
    buttonCol.innerHTML="<button onclick='editRow(this)'>编辑</button><button onclick='delRow(this)'>删除</button>";
}
   

function delRow(button) {
    var row=button.parentNode.parentNode;
    // row->td->tr
    row.parentNode.removeChild(row);
}

function editRow(button) {
    var row=button.parentNode.parentNode;
    console.log(row);
    
    var name=row.cells[0];
    var phone=row.cells[1];
    // 这里获取的是 <td>
    console.log(name);
    console.log(phone);
    
    var inputname=prompt("请输入名字：");
    var inputphone=prompt("请输入联系方式：");
    name.innerHTML=inputname;
    phone.innerHTML=inputphone;
}