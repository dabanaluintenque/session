
let xhttp = new XMLHttpRequest();

xhttp.addEventListener("load", success);
xhttp.addEventListener("error", error);
xhttp.open("GET", "/session", true);
xhttp.send();

function success(){

    let data = JSON.parse(xhttp.response);

    const element =(
        <div>
            <h1>Counting Sessions</h1>
            <p>Today is {data.dates}</p>
            <p>You visited this page <strong>{data.views}</strong> times</p>

        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('session')
    );
}

function error(){
    console.log(xhttp.readyState);
    console.log(xhttp.status);
}