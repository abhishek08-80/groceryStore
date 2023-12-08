fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
}).then((objectData) => {
    console.log("objectData", objectData);
    let tableData = "";
    objectData.map((user) => {
        tableData += ` <div id="productList" style="width: 18rem;"><img class="card-img-top">
        <div class="card-body">
            <div class="card-title">
                <a id="productName" href="details.html?id=${user.id}">${user.title} </a>
            </div>
            <div class="card-text">$${user.price}
            </div>
            <div>
                <a href="details.html?id=${user.id}">
                    <img src="${user.image}" /></a>
            </div>
            <a href="details.html?id=${user.id}" class="btn btn-primary">View more Details</a>
        </div>
    </div>`;
    });
    document.getElementById("userData").innerHTML = tableData;
})

