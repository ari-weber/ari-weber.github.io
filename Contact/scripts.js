async function main(){
    var LoggedIP  = "No IP found";
    let apiKey = 'fe18c3a6127e45e18148e5addac65674';
    await $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
        //console.log(JSON.stringify(data, null, 2));
        LoggedIP = data["ip_address"];
    });
    document.getElementById("ip").value = `${LoggedIP}`;
    return LoggedIP;
}

(async () => {
    var text = await main();
})().catch(e => {
    // Deal with the fact the chain failed
});