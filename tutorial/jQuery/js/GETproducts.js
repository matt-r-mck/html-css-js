let sortColumn="id"

$().ready(()=>{

    $("table").addClass("table table-sm table-dark table-striped");
    $("#id, #partNbr, #name, #price, #unit, #vendor").addClass("btn btn-link");
    $("#btn").click(()=>{
        getProducts();
    });
});

const resort = (column)=>{
    sortColumn=column;
    getProducts();
}

const getProducts = (()=>{
    $.getJSON("http://localhost:5000/api/products")
    .done(products=>{
        console.log(products);
        display(products);
    })
    .fail(err=>{
        console.error(err);
    });
});

const display = (products)=>{
    let tbody = $("tbody");
    tbody.empty();
    products.sort(sortFn);
    for(let p of products){
        let tr=$("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${p.id}</td>`));
        tr.append($(`<td>${p.partNbr}</td>`));
        tr.append($(`<td>${p.name}</td>`));
        tr.append($(`<td>${p.price}</td>`));
        tr.append($(`<td>${p.unit}</td>`));
        tr.append($(`<td>${p.vendor.name}</td>`));
    }
}

const sortFn = (a,b)=>{
    if(a[sortColumn] === b[sortColumn]){
        return 0;
    }
    return(a[sortColumn] > b[sortColumn]) ?1 : -1;
}