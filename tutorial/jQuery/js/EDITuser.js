let user = null;

$().ready(()=>{
    $("#getBTN").click(()=>{
        getUserByPk();
    });


});
    


const getUserByPk = ()=>{
    $.getJSON(`http://localhost:5000/api/users/${xid.value}`)
    .done(user =>{
        console.log(user);
        display(user);
    })
    .fail(err=>{
        console.error(err);
    });
};

const display = (user) =>{
    uid.value = +user.id,
    uusername.value = user.userName,
    upass.value = user.password,
    ufirst.value = user.firstName,
    ulast.value = user.lastName,
    uphone.value = user.phone,
    uemail.value = user.email,
    uadmin.checked = user.isAdmin,
    urev.checked = user.isReviewer
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

const editUser = ((user)=>{
    $.ajax({
        method: "Put",
        url: `http://localhost:5000/api/users/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done(res =>{
        console.log(res);
        display(user);
    })
    .fail(err=>{
        console.error(err);
    })
});