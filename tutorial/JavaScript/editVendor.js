const getVendorByPK = () => {
    let xhr=new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:5000/api/vendors/${xid.value}`, true);
    xhr.onload = ()=> {
        console.log(xhr.response);
        display(xhr.response);
    }
    xhr.send();
};

const display = (vendor)=>{
    vid.value = vendor.id,
    vcode.value = vendor.code,
    vname.value = vendor.name,
    vadd.value = vendor.address,
    vcity.value = vendor.city,
    vstate.value = vendor.state,
    vzip.value = vendor.zip,
    vphone.value = vendor.phone,
    vemail.value = vendor.email
    };

const editVendor = (vendor) => {
    var body = JSON.stringify(vendor);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("PUT", `http://localhost:5000/api/vendors/${vendor.id}`, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.response);
    }
    xhr.send(body);
};



const save = () => {
    let vendor ={
        id: +vid.value,
        code: vcode.value,
        name: vname.value,
        address: vadd.value,
        city: vcity.value,
        state: vstate.value,
        zip: vzip.value,
        phone: vphone.value,
        email: vemail.value
    };
    editVendor(vendor);
};