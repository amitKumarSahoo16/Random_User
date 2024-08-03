function generatequote()
{
    fetch('http://api.quoteable.io/random')
    .then(Response=>Response.json())
    .then(data=>
    {
        const Quote='${data.content}-${data.author}';
        document.getElementById('quote').innerText=Quote;
    })
    .catch(error=>{
        document.getElementById('quote').innerText='An error occured';
    });
}
// generate an intial Quote when the page look;
generatequote();