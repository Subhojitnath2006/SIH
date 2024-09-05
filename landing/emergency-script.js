function callNumber(number) {
    if (confirm(`Do you want to call ${number}?`)) {
        window.location.href = `tel:${number}`;
    }
}
