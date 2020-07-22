const create = (user) => {
    var body = JSON.stringify(user);
    let xhr = new XMLHttpRequest;
    xhr.responseType = "json";
    xhr.open ("POST", "http://localhost:5000/api/users", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.response);
    };
    xhr.send(body);
};


const save = () => {
    let user ={
        id:0,
        username: get("pusername"),
        password: get("ppass"),
        firstname: get("pfirst"),
        lastname: get("plast"),
        phone: get("pphone"),
        email: get("pemail"),
        isAdmin: getcheck("padmin"),
        isReviewer: getcheck("prev")
    };
    create(user);
};

const get = (id)=>{
    return document.getElementById(id).value;
};
const getcheck = (id)=>{
    return document.getElementById(id).checked;
};