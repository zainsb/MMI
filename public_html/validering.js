function validerNavn()
{
    navn = $("#fornavn").val();
    regEx =  /^[a-zA-ZøæåØÆÅ.]{2,20}$/;
    ok = regEx.test(navn);
    console.log(ok + "  : " + "navn")
    if(!ok)
    {
        document.getElementById("feilNavn").innerHTML=
                "Feil i navnet.";
        return false;
    }
    document.getElementById("feilNavn").innerHTML="";
    return true;
}

function validerEpost()
{
    epost = $("#epost").val();
    regEx = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    ok = regEx.test(epost);
    if(!ok)
    {
        document.getElementById("feilEpost").innerHTML=
                "Feil i epost.";
        return false;
    }
    document.getElementById("feilEpost").innerHTML="";
    return true;
}
            
function validerAlle(){
    okNavn = validerNavn();
    okEpost = validerEpost();

    if(okNavn && okEpost)
    {
        return true;
    }
    return false;
}