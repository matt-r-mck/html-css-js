$().ready(()=>{


    $("btn").addClass("btn btn-primary")
    $("style").addClass("btn btn-success")


    $("button").click(()=>{
        $.getJSON("http://localhost:5000/api/users")
            .done(users => {
                console.log(users);
                display(users);
            })
            .fail(err=>{
                console.error(err);
            })
    });
    let on = true;
    $("style").click(()=>{
        if(on){
            $("table").addClass("table table-sm table-striped");
        }else{
            $("table").addClass("table table-sm table-dark table-striped");
        }
        on=!on;
    })

});

const display = (users)=>{
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users){
        let tr=$("<tr></tr>");

        tbody.append(tr);

        let tdId = $(`<td> ${user.id}</td>`);
        tr.append(tdId);

        let tdUsername = $(`<td>${user.userName}</td>`);
        tr.append(tdUsername);

        tr.append($(`<td>${user.firstName}</td>`));
        tr.append($(`<td>${user.lastName}</td>`));
        tr.append($(`<td>${user.phone}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${user.isReviewer ? "Y" : "N"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "Y" : "N"}</td>`));
    }
}