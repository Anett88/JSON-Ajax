$(function () {
    //console.log(tarsasJson);
//    var tarsasTomb = JSON.parse(tarsasJson);
//    console.log(tarsasTomb);

    $.ajax({
        url: "termekek.json",
        success: function (result) {
            console.log(result);
            tarsasTomb=result;
            kiir();
        }}
    );
    
    $("#OK").click(ment);
    $("#rendez").click(rendez);
    

});
 var tarsasTomb=[];
//táblázat kiírása:
function kiir(){
    
    $("article").empty();
    
   console.log(tarsasTomb);
   $("article").append("<table>");
   $("article table").append("<tr>");
   
   //fejléc
   $("article table tr").append("<th>Termék neve: </th>");
   $("article table tr").append("<th>Ár: </th>");
   $("article table tr").append("<th>Típus: </th>");
   
   //sorok,oszlopok
    for (var i = 0; i < tarsasTomb.length; i++) {
       $("article table ").append("<tr>");
        for (var item in tarsasTomb[i]) {
             $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");

        }
       
//       $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].termekNev+"</td>");
//       $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].ar+"</td>");
//       $("article table tr").eq(i+1).append("<td>"+tarsasTomb[0].tipus+"</td>");
    }
   
   
}

function ment(){
    var ujAdat={};
    ujAdat.termekNev=$("#nev").val();
    ujAdat.ar=$("#nev").val();
    ujAdat.tipus="Táblás";
    
    console.log(ujAdat);
    
    tarsasTomb.push(ujAdat);
    
    kiir();
}

function rendez(){
   tarsasTomb.sort(function(a,b){return Number(a.nev>b.nev)-0.5;}); 
     kiir();
}

//objektumok szerkezet létrehozása:
//var tarsastomb=[
//    {
//        termekNev:"Monopoly",
//        ar:1500,
//        tipus:"táblajáték"
//        
//       
//    },
//    {
//        termekNev:"Activity",
//        ar:1000,
//        tipus:"táblajáték"
//    }
//];


//Json:szövges,szabványos adatleíró formátum->megfeleltethető a java script objektumának 
//var tarsasJson = '[{"termekNev":"Monopoly","ar":1500,"tipus":"táblajáték"}{"termekNev":"Activity","ar":1000,"tipus":"táblajáték"}]';