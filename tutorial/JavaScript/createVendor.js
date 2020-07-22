const create = (vendor) => {
    var body = JSON.stringify(vendor);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("POST", "http://localhost:5000/api/vendors", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.response);
    };
    xhr.send(body);
};


const save = () => {
    let vendor ={
        id:0,
        code: get("vcode"),
        name: get("vname"),
        address: get("vadd"),
        city: get("vcity"),
        state: get("vstate"),
        zip: get("vzip"),
        phone: get("vphone"),
        email: get("vemail")

    };
    create(vendor);
};

const get = (id)=>{
    return document.getElementById(id).value;
};
