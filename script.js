const data = [
  {
    "name":"Manzanas (malla)",
    "price":79,
    "code":"#3321",
    "moneda": "$",
    "wigth": "700",
    "measure":"g"
  },
  {
    "name":"Naranjas (malla)",
    "price":75,
    "code":"#3321",
    "moneda": "$",
    "wigth": "800",
    "measure":"g"
  },
  {
    "name":"Kiwis (malla)",
    "price":80,
    "code":"#3321",
    "moneda": "$",
    "wigth": "950",
    "measure":"g"
  },
  {
    "name":"Peras (malla)",
    "price":85,
    "code":"#3321",
    "moneda": "$",
    "wigth": "1000",
    "measure":"g"
  },
  {
    "name":"Arroz (bolsa)",
    "price":54,
    "code":"#2312",
    "moneda": "$",
    "wigth": "1000",
    "measure":"g"
  },
  {
    "name":"Queso (bolsa)",
    "price":240,
    "code":"#2312",
    "moneda": "$",
    "wigth": "200",
    "measure":"g"
  },
  {
    "name":"Harina",
    "price":45,
    "code":"#2312",
    "moneda": "$",
    "wigth": "1000",
    "measure":"g"
  },
  {
    "name":"Coca Cola 2.5L",
    "price":156,
    "code":"#1123",
    "moneda": "$",
    "wigth": "2550",
    "measure":"g"
  },
  {
    "name":"Sprite 1.5L",
    "price":120,
    "code":"#1123",
    "moneda": "$",
    "wigth": "1500",
    "measure":"g"
  },
  {
    "name":"Jugo Ades 1L",
    "price":156,
    "code":"#1124",
    "moneda": "$",
    "wigth": "1000",
    "measure":"g"
  },
  {
    "name":"Jugo Cepita 2L",
    "price":156,
    "code":"#1124",
    "moneda": "$",
    "wigth": "2000",
    "measure":"g"
  },
  {
    "name":"Pan Flauta",
    "price":70,
    "code":"#4321",
    "moneda": "$",
    "wigth": "250",
    "measure":"g"
  },
  {
    "name":"Pan Glactal Grande",
    "price":121,
    "code":"#4321",
    "moneda": "$",
    "wigth": "550",
    "measure":"g"
  }
]

function search() {
  let productCode = document.getElementById("codigoInput").value;
  let weight = Number(document.getElementById("pesoInput").value);
  let list = document.getElementById("resultList");
  let total = document.getElementById("totalValue");
  
  list.innerHTML = '';

  if (productCode && weight) {
    let less = weight - ((weight * 5) / 100);
    let more = weight + ((weight * 5) / 100);
    let sommatory = 0; 

    const result = data.filter((item) => {
      return item.code === productCode && Number(item.wigth) >= less  && Number(item.wigth) <= more
    })

    let listUl = list.appendChild(document.createElement("ul"));
    
    result.forEach((item) => {
      let liElement = document.createElement("li");
      let li = listUl.appendChild(liElement)
      li.innerHTML = `${item.name} - ${item.moneda}${item.price}`;
      sommatory += item.price;
    })

    total.innerHTML = `Total: $${sommatory}`;
  } else {
    window.alert('Missing fields.')
  }
}