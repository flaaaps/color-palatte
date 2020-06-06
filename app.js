function CopyToClipboard(containerid, value) {
    if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }

    document.getElementById(containerid).innerHTML = "Copied"
    setTimeout(() => {
        document.getElementById(containerid).innerHTML = document.getElementById(value).value
    }, 2500);
}