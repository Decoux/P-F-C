var arrayBot = ['pierre', 'feuille', 'ciseaux'];
var pointUser=0;
var pointDesktop=0;
function game(element){
document.getElementById("equal").innerHTML = "";
document.getElementById("ciseaux-b").style.backgroundColor="green";
document.getElementById("feuille-b").style.backgroundColor="green";
document.getElementById("pierre-b").style.backgroundColor="green";
document.getElementById("mobileBot").innerHTML = "";
  /*tant que pointUser n'egale pas 3 n'egale pas 3 point ou pointDesktop n'egale pas 3point on continu la boucle*/

    /*on demande a l'utilisateur de faire son choix*/
    var user = element.id
    /*on determine le choix au hazard de l'ordinateur*/
    var hazard = arrayBot[Math.floor(arrayBot.length * Math.random())];
    /*Si l'utilisateur saisie autre chose que pierre, feuille ou ciseaux on affiche une erreur*/

    if (user!= 'feuille' && user!= 'pierre' && user!= 'ciseaux') {
      alert('Erreur de saisie');
    }
    /* sinon s'il entre la meme chose que l'ordianteur on affiche Egalité*/
    else if (user===hazard) {
      document.getElementById("equal").innerHTML = "Vous etes égalité";
    }
    /*sinon si ...*/
    else if (user==='pierre' && hazard==='ciseaux' || user==='feuille' && hazard==='pierre' || user==='ciseaux' && hazard==='feuille') {
          pointUser++;
          document.getElementById("resultUser").innerHTML = "#".repeat(pointUser);
          if (hazard==="ciseaux") {
            document.getElementById("ciseaux-b").style.backgroundColor= "red";
            document.getElementById("mobileBot").innerHTML = "Le Bot a choisis ciseaux";
          }
          else if (hazard === "feuille") {
            document.getElementById("feuille-b").style.backgroundColor= "red";
            document.getElementById("mobileBot").innerHTML = "Le Bot a choisis feuille";
          }
          else if (hazard === "pierre") {
            document.getElementById("pierre-b").style.backgroundColor= "red";
            document.getElementById("mobileBot").innerHTML = "Le Bot a choisis pierre";

          }
    }

    /*sinon...*/
    else {
      pointDesktop++;
      document.getElementById("resultBot").innerHTML = "#".repeat(pointDesktop);
      if (hazard==="ciseaux") {
        document.getElementById("ciseaux-b").style.backgroundColor= "red";
        document.getElementById("mobileBot").innerHTML = "Le Bot a choisis ciseaux";
      }
      else if (hazard === "feuille") {
        document.getElementById("feuille-b").style.backgroundColor= "red";
        document.getElementById("mobileBot").innerHTML = "Le Bot a choisis feuille";
      }
      else if (hazard === "pierre") {
        document.getElementById("pierre-b").style.backgroundColor= "red";
        document.getElementById("mobileBot").innerHTML = "Le Bot a choisis pierre";

      }

    }
    if(pointDesktop===3) {
      document.getElementById("result").innerHTML = "Vous avez perdu !!";
      document.getElementById("restart").innerHTML = "Recommencer";
      document.getElementById("gameUser").style.display = "none";
      document.getElementById("form").style.display = "none";
      return;
    }
    else if(pointUser===3){
      document.getElementById("result").innerHTML = "Vous avez gagné !!";
      document.getElementById("restart").innerHTML = "Recommencer";
      document.getElementById("gameUser").style.display = "none";
      document.getElementById("form").style.display = "none";
      return;
    }
}
