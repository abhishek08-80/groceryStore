const queryParams = new URLSearchParams(window.location.search);

const paramValue = queryParams.get('id');

if (paramValue) {

    fetch(`https://fakestoreapi.com/products/${paramValue}`).then((data) => {
        // console.log(data.json())  
        return data.json(); 
    }).then((objectData) => {
        console.log("objectData", objectData);

        const imageElement = document.getElementById('imageProduct');
        imageElement.src = objectData?.image;
        document.getElementById('productName').innerHTML = objectData.title;
        document.getElementById('description').innerHTML = objectData.description;
        document.getElementById('price').innerHTML = `$${objectData.price}`;
    })

} else {
    console.log("Parameter 'param' not found in the URL");
}



function addCart() {
    let val = localStorage.getItem("cart")
    if(val){
        let data =JSON.parse(val);
        if(data.length <=10){
            data.push({
                name: document.getElementById('productName').innerText,
                image: document.getElementById('imageProduct').src,
                price: document.getElementById('price').innerText
            })
            localStorage.setItem("cart",JSON.stringify(data) )
            alert("1 Item Added to Cart")
        }else{
            alert("Cart Maximum limit is 10")
        }
    }else{
        var arr = []
        arr.push({
            name: document.getElementById('productName').innerText,
                image: document.getElementById('imageProduct').src,
                price: document.getElementById('price').innerText
        })
        let strAr = JSON.stringify(arr)
        localStorage.setItem("cart",strAr )
    }
}