var m = [ [], [], [], [], [], [], [], [], [] ]
coluna = 10
linha=8

var table1= "<table border='1' cellspacing='1'>"
var table2
function facil(){

    document.getElementById("campo").innerHTML += table1
    for(var i=0;i<linha;i++){
        table1 +="<tr>"
        for(var j=0;j<coluna;j++){
            //pode colocar um console log no math e tirar o math.floor
            n = Math.floor(Math.random()*10)
            table1 += "<td>"
            table1 += m[i][j] = "10"
            table1 +="</td>"


            }

            document.getElementById("campo").innerHTML += "<br>"
            table1 +="</tr>"

    }
  table1 += "</table>"
  document.getElementById("campo").innerHTML += table1
}
function vol(params) {
    window.location.href = "index.html"    
}
