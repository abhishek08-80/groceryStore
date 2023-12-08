let data = localStorage.getItem("cart")
let cartValue = JSON.parse(data)

let sum = ""
if(data){
    let tableData = ""
    cartValue.map((user, index) => {
        sum+=parseInt(user.price)
        tableData += `<div class="productValue">
        <div> ${user.name}</div>
        <div>${user.price}</div>
    </div>`;
    });

    document.getElementById("cartDetail").innerHTML = tableData;
    // document.getElementById("total").innerHTML = sum;

}
