$.ajax({
    type: "GET",
    url: "https://it-its.id/api/movies",
    success: function (data) {
        console.log("Data successfully retrieved from API!");
    },
    error: function (xhr,status,error) {
        console.log(error);
        $(".container").append(`<h1 style="text-align: center">API not found. Please refresh or try again later</h1>`)
    }
}).then(function (data) {
    x = 0;
    var row = "#row" + x;
    for (let i = 0; i < data.length; i++) {
        if ($(row).children().length >= 2) {
            x += 1;
            row = "#row" + x
            $(".container").append(`<div class="row justify-content-center align-items-center g-0" id="row${x}"> 
         </div>`)
        }
        $(row).append(`<div class="col-lg p-2">
        <div class="card">
            <div style="box-shadow: 0px 5px 10px 1px #D3D3D3; padding: 35px" class="card-body">
                <h5 class="card-title">${data[i].Title}</h5>
                <p class="card-text">${data[i].Plot}</p>
            </div>
        </div>
    </div>`)
    }
})

function render(data) {

}