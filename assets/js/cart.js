
let data = localStorage.getItem("cart")
let cartValue = JSON.parse(data)


if(data){
    let tableData = ""
    cartValue.map((user, index) => {
        tableData += `       <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>
     
        <div class="image" >
          <img src="${user.image}" alt="image" />
        </div>
     
        <div class="description">
        ${user.name}
        </div>

      
     
        <div class="total-price">${user.price}</div>

        <div class="quantity">
        <button class="minus-btn" id="minusButton" data-name="${index}" type="button" name="button">
          -
        </button>
        <input type="text" id="qty${index}"  name="name" value="1">
        <button class="plus-btn"  type="button" data-name="${index}" id="plusButton" name="button" >
          +
        </button>
      </div>
      </div>`;
    });

    document.getElementById("cartNo").innerHTML = tableData;
}

document.querySelectorAll('.minus-btn').forEach(function(button) {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      let thisElement = e.target;
      let input = thisElement.closest('div').querySelector('input');
      let value = parseInt(input.value);

      if (value > 1) {
          value = value - 1;
          let arr = cartValue
      } else {
          value = 0;
      }

      input.value = value;


  });
});

document.querySelectorAll('.plus-btn').forEach(function(button) {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      let thisElement = e.target;

      
      let input = thisElement.closest('div').querySelector('input');
      let value = parseInt(input.value);

      if (value < 10) {
          value = value + 1;
          let arr = cartValue
          arr.push(cartValue[button.getAttribute('data-name')])
          let strAr = JSON.stringify(arr)
          localStorage.setItem("cart",strAr )
      } else {
          value = 10;
          alert("Cart Maximum limit is 10")
      }

      input.value = value;
  });
});


function deleteCart(){
  localStorage.removeItem("cart")
  window.location.replace("cart.html");
}