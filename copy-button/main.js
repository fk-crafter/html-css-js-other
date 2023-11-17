const myFunction = () => {
    let copyText = document.querySelector("#myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("texte copié : " + copyText.value)
};
