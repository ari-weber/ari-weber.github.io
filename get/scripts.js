(async () => {
    setTimeout(() => {
        window.location.href = "http://example.com/new_url";
    }, 1000);
})().catch(e => {
    // Deal with the fact the chain failed
});