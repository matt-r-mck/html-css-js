const vendors = (vendor) => {
    var body = JSON.stringify(vendor);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("GET", "http://localhost:5000/api/vendors", true);
    xhr.onload = function () {
        console.log(xhr.response);
        loadVendors(xhr.response);
    };
    xhr.send();
};

const loadVendors = (vendors) => {
    var select = sel;
    for (let v of vendors){
        let option = `<option value=${v.id}>${v.name}</option>`;
        select.innerHTML += option;
    }
}


const create = (product) => {
    var body = JSON.stringify(product);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("POST", "http://localhost:5000/api/products", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.response);
    };
    xhr.send(body);
};


const save = () => {
    let product ={
        id:0,
        partNbr: pnbr.value,
        name: pname.value,
        price: +pprice.value,
        unit: punit.value,
        vendorId: +sel.options[sel.selectedIndex].value
    };
    create(product);
};

// const get = (id)=>{
//     return document.getElementById(id).value;
// };

// const selected = (id) =>{
//     return sel.options[sel.selectedIndex].value
// };
