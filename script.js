//script 1 and script 2 both are running 


$(document).ready(function () {
    $('.show-nav').click(function () {
        $('.hidden-nav').toggle(200)
    })
})
function stats() {
    // console.log("data is wasted")

    //script1 
    /* $.get("https://api.covid19api.com/summary",
         function (data) {
             let totalCase = data["Global"]["TotalConfirmed"]
             let newCase = data['Global']['NewConfirmed']
             let totalRecovered = data['Global']['TotalRecovered'];
             let totalDeath = data['Global']['TotalDeaths'];
             $('#t-case').text(totalCase);
             $('#n-case').text(newCase);
             $('#t-recover').text(totalRecovered);
             $('#t-death').text(totalDeath);
             let newRow = document.getElementById('new-row');
             for (let i = 0; i < data['Countries'].length; i++) {
                 newRow.innerHTML += "<tr class='table-success'><td>" + data['Countries'][i]['Country'] + "</td><td>" + data['Countries'][i]['NewConfirmed'] + "</td><td>" + data['Countries'][i]['TotalConfirmed'] + "</td><td>" + data['Countries'][i]['NewDeaths'] + "</td><td>" + data['Countries'][i]['TotalDeaths'] + "</td><td>" + data['Countries'][i]['NewRecovered'] + "</td><td>" + data['Countries'][i]['TotalRecovered'] + "</td></tr>"
             }
 
         }
     )*/
    //script2 
    let api = 'https://api.covid19api.com/summary';
    $.ajax({
        type: 'GET',
        url: api,
        dataType: 'json',
        beforeSend: function () {
            $('#my-spinner').addClass("spinner-border")
        },
        success: function (data) {
            let totalCase = data["Global"]["TotalConfirmed"]
            let newCase = data['Global']['NewConfirmed']
            let totalRecovered = data['Global']['TotalRecovered'];
            let totalDeath = data['Global']['TotalDeaths'];
            $('#t-case').text(totalCase);
            $('#n-case').text(newCase);
            $('#t-recover').text(totalRecovered);
            $('#t-death').text(totalDeath);
            let n = 0
            let newRow = document.getElementById('new-row');
            for (let i = 0; i < data['Countries'].length; i++) {
                n += 1;
                newRow.innerHTML += "<tr class='text-center table-success'><td>" + data['Countries'][i]['Country'] + "</td><td>" + data['Countries'][i]['NewConfirmed'] + "</td><td>" + data['Countries'][i]['TotalConfirmed'] + "</td><td>" + data['Countries'][i]['NewDeaths'] + "</td><td>" + data['Countries'][i]['TotalDeaths'] + "</td><td>" + data['Countries'][i]['NewRecovered'] + "</td><td>" + data['Countries'][i]['TotalRecovered'] + "</td></tr>"
            }

        },
        complete: function () {
            $('#my-spinner').removeClass("spinner-border")
        },
        error: function () {
            $('#error').text("there is error with api cant fetch data")
        }
    })
}

/*
//table headers fixing on scroll
//still working on it
let tableHeader = document.getElementById("fixed");
let sticky = tableHeader.offsetHeight
window.onscroll=function(){
    if (sticky<tableHeader) {

        tableHeader.classList.add("sticky")
        console.log("thanks")
    }else{
        console.log("not thanks")
        tableHeader.classList.remove("sticky")
    }
}
*/