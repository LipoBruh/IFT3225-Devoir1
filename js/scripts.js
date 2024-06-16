document.addEventListener("DOMContentLoaded", function(event){
    // Code here waits to run until the DOM is loaded.

    document.getElementById('form-base-1').addEventListener = updateElements();
    document.getElementById('form-base-2').addEventListener = updateElements();
    document.getElementById('form-base-3').addEventListener = updateElements();

     document.getElementById('afficherBtn').addEventListener('click', function() {
            afficherAcideAmine();
        });

  });


// navigation entre les onglets

document.getElementById(id).style.property = new style



function question1(){
    try{
        component1 = document.getElementById("main-component-1");
        component2 = document.getElementById("main-component-2");

        if (component1!=null && component2!=null) {
            console.log("Question 1")
            component1.style.display = "inline";
            component2.style.display = "none";
        }
    }
    catch{
        console.log("Not ready to update the component.")
    }


}



function question2(){
    try{
        component1 = document.getElementById("main-component-1");
        component2 = document.getElementById("main-component-2");

        if (component1!=null && component2!=null) {
            console.log("Question 2")
            component1.style.display = "none";
            component2.style.display = "inline";
        }
    }
    catch{
        console.log("Not ready to update the component.")
    }
}


//q1 stuff


  function buttonARN(base,form){
    try{
        formElement = document.getElementById(form);
        if (formElement!=null) {
            console.log(base);
            formElement.value= base;
            updateElements()
        }
    }
    catch{
        console.log("Could not update the component.")
    }

  }




function updateElements(){
    try{
        data = codonToAminoAcid();
        console.log(data);
        //
        title = document.getElementById('q1-aa-name');
        image = document.getElementById('div-image-amino-acid');
        if (title != null && image!=null) {
            console.log(data.name);
            title.innerHTML=data.name;
            image.innerHTML= '<img alt="Amino Acid" src="'+data.image +'"class="rounded d-block mx-auto" style="max-width: 20% !important;"></img>'
        }
    }
    catch{
        console.log("Not ready to update the component.")
    }
}


function valueToString(element){
    if (element != null) {
        str = element.value.toString();
        //console.log(str);
        return str;
    }
    else{
        return "";
    }

}

function formsToCodon(){
    //
    paire1=valueToString(document.getElementById('form-base-1'));
    paire2=valueToString(document.getElementById('form-base-2'));
    paire3=valueToString(document.getElementById('form-base-3'));
    codon = paire1+paire2+paire3
    return codon.toString().toUpperCase();
}


/*
Gets the values stored in the input tags 
If they are a valid codon, we return the data associated with the translated amino acid
***To be tested***
*/
function codonToAminoAcid(){
    console.log("Change in input");
    codon = formsToCodon();
    console.log(codon);
    return codonToAminoAcid2(codon);
}


/////////////////////////////////////////Partie 2//////////////////////////////////////////////

function sleep(milliseconds) { /*Inspired from */
      return new Promise(resolve => setTimeout(resolve, milliseconds));
   }
//fOR Saucy AnneSo

function afficherAcideAmine() {

    try {

        var entrerUtilisateur = document.getElementById('entrerARN').value.trim().toUpperCase();


        //1.  Les bases acceptes :  U, A, C, G
        if (/^[AUCG]+$/.test(entrerUtilisateur)) {

            var tableBody = document.getElementById('table');
            tableBody.innerHTML = '';



            //2. Lire l'entrée de lèutilisateur par groupe de 3 bases
            for (var i = 0; i < entrerUtilisateur.length; i += 3) {
                var codon = entrerUtilisateur.substr(i, 3);
                var acideAmine = codonToAminoAcid2(codon);

                // 3. Afficher les infos dans le tableau
                var row = tableBody.insertRow();
                var nameCell = row.insertCell(0);
                var acronymCell = row.insertCell(1);
                var imageCell = row.insertCell(2);
                //


                nameCell.textContent = acideAmine.name;
                acronymCell.textContent = acideAmine.acronym;
                imageCell.innerHTML = '<img src="' + acideAmine.image + '" alt="Amino Acid" style="max-width: 50px; align : center">';


            }

            // Afficher limage de lacide
            if (acideAmine) {

            }
                var imageDiv = document.getElementById('div-image-amino-acid-q2');
                imageDiv.innerHTML = '<img alt="Amino Acid" src="' + acideAmine.image + ' "class="rounded d-block mx-auto" " style="max-width: 60% !important;"></img>';

            } else {

                alert('La séquence est invalide. Ce qui est accepté : U, A, C, G');
            }


    } catch (error) {

        console.error('Erreur', error);
        alert('Une erreur sest produite.');

    }
}


function codonToAminoAcid2(codon){
    switch(codon){
        //Phe
        case "UUU":
        case "UUC": return {acronym:"Phe",name:"Phenylalanine",image:".\\images\\L-Phenylalanine.png"};
        //Leu
        case "CUU":
        case "CUC":
        case "CUA":
        case "CUG":
        case "UUA":
        case "UUG": return {acronym:"Leu",name:"Leucine",image:".\\images\\L-Leucine.png"};
        //Ser
        case "AGU":
        case "AGC":
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG": return {acronym:"Ser",name:"Serine",image:".\\images\\L-Serine.png"};
        //Tyr
        case "UAU":
        case "UAC": return {acronym:"Tyr",name:"Tyrosine",image:".\\images\\L-Tyrosine.png"};
        //STOP
        case "UGA":
        case "UAA":
        case "UAG": return {acronym:"STOP",name:"STOP",image:".\\images\\STOP.png"};
        //Cys
        case "UGU":
        case "UGC": return {acronym:"Cys",name:"Cysteine",image:".\\images\\L-Cysteine.png"};
        //Trp
        case "UGG": return {acronym:"Trp",name:"Tryptophan",image:".\\images\\L-Tryptophan.png"};
        //Pro
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG": return {acronym:"Pro",name:"Proline",image:".\\images\\L-Proline.png"};
        //His
        case "CAU":
        case "CAC": return {acronym:"His",name:"Histidine",image:".\\images\\L-Histidine.png"};
        //Gln
        case "CAA":
        case "CAG": return {acronym:"Gln",name:"Glutamine",image:".\\images\\L-Glutamine.png"};
        //Arg
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG": return {acronym:"Arg",name:"Arginine",image:".\\images\\L-Arginine.png"};
        //Ile
        case "AUU":
        case "AUC":
        case "AUA": return {acronym:"Ile",name:"Isoleucine",image:".\\images\\L-Isoleucine.png"};
        //Met
        case "AUG": return {acronym:"Met",name:"Methionine",image:".\\images\\L-Methionine.png"};
        //Thr
        case "ACU":
        case "ACC":
        case "ACA":
        case "ACG": return {acronym:"Thr",name:"Threonine",image:".\\images\\L-Threonine.png"};
        //Asn
        case "AAU":
        case "AAC": return {acronym:"Asn",name:"Asparagine",image:".\\images\\L-Asparagine.png"};
        //Lys
        case "AAA":
        case "AAG": return {acronym:"Lys",name:"Lysine",image:".\\images\\L-Lysine.png"};
        //Arg
        case "AGA":
        case "AGG": return {acronym:"Arg",name:"Arginine",image:".\\images\\L-Arginine.png"};
        //Val
        case "GUU":
        case "GUC":
        case "GUA":
        case "GUG": return {acronym:"Val",name:"Valine",image:".\\images\\L-Valine.png"};
        //Ala
        case "GCU":
        case "GCC":
        case "GCA":
        case "GCG": return {acronym:"Ala",name:"Alanine",image:".\\images\\L-Alanine.png"};
        //Asp
        case "GAU":
        case "GAC": return {acronym:"Asp",name:"Asparagine",image:".\\images\\L-Asparagine.png"};
        //Glu
        case "GAA":
        case "GAG": return {acronym:"Glu",name:"Glutamate",image:".\\images\\L-Glutamate.png"};
        //Gly
        case "GGU":
        case "GGC":
        case "GGA":
        case "GGG": return {acronym:"Gly",name:"Glycine",image:".\\images\\L-Glycine.png"};
        //
        default:
            throw new Error("Invalid Codon")
    }
}




