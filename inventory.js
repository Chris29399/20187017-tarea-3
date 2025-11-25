var selectedRow = null

function onSubmit(){
    var formData = readData();
    if (selectedRow == null)
        addEntry(formData);
        else
        updateEntry(formData);

    document.getElementById('code').value = "";
    document.getElementById('productName').value = "";
    document.getElementById('price').value = "";
    document.getElementById('quantity').value = "";
    selectedRow = null;
}

function addEntry(data){
    var table = document.getElementById("productList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.code;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantity;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button type="button" class="btn btn-secondary" onClick="onEdit(this)">Edit</button>
                        <button type="button" class="btn btn-danger" onClick="onDelete(this)">Delete</button>`;
} 

function readData(){
    var formData = {};
    formData["code"] = document.getElementById('code').value;
    formData["productName"] = document.getElementById('productName').value;
    formData["price"] = document.getElementById('price').value;
    formData["quantity"] = document.getElementById('quantity').value;
    return formData;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('code').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('price').value = selectedRow.cells[2].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[3].innerHTML;
}

function updateEntry(formData) {
    selectedRow.cells[0].innerHTML = formData.code
    selectedRow.cells[1].innerHTML = formData.productName
    selectedRow.cells[2].innerHTML = formData.price
    selectedRow.cells[3].innerHTML = formData.quantity
}

function onDelete(td) {
    if(confirm("Are you sure you want to delete this product?")) {
    row = td.parentElement.parentElement;
    document.getElementById("productList").deleteRow(row.rowIndex);
    }
}