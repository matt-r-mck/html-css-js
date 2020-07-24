const getUserByPK = () => {
    let xhr=new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:5000/api/users/${xid.value}`, true);
    xhr.onload = ()=> {
        console.log(xhr.response);
        display(xhr.response);
    }
    xhr.send();
};

const display = (user)=>{
    uid.value = user.id,
    uusername.value = user.userName,
    upass.value = user.password,
    ufirst.value = user.firstName,
    ulast.value = user.lastName,
    uphone.value = user.phone,
    uemail.value = user.email,
    uadmin.checked = user.isAdmin,
    urev.checked = user.isReviewer
    };

const editUser = (user) => {
    var body = JSON.stringify(user);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("PUT", `http://localhost:5000/api/users/${user.id}`, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.response);
    }
    xhr.send(body);
};



const save = () => {
    let user ={
        id: +uid.value,
        userName: uusername.value,
        password: upass.value,
        firstName: ufirst.value,
        lastName: ulast.value,
        phone: uphone.value,
        email: uemail.value,
        isAdmin: uadmin.checked,
        isReviewer: urev.checked
    };
    editUser(user);
};

const get = (id)=>{
    return document.getElementById(id).value;
};

const set = (id,val)=>{
    return document.getElementById(id).value = val;
};

const getcheck = (id)=>{
    return document.getElementById(id).checked;
};

const setCheck = (id, val)=>{
    return document.getElementById(id).checked = val;
};

// const getcheck = (id)=>{
//     return document.getElementById(id).checked;
// };