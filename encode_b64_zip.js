/*********** DÉVELOPPÉ PAR REXT ************/
/*                                          */
/*      Pourquoi ce programme ?             */
/*      Parce que ça peut servir XD         */
/*                                          */
/********************************************/




/*********** MANUEL D'UTILISATION ***********/
/*                                          */
/*  Pour lancer  l'installation  :  npm i   */
/*                                          */
/********************************************/


/****LES MODULES NODEJS****/
const fs = require('fs');
const btoa =  require('btoa');
const AdmZip = require('adm-zip');

// On récupère le fichier par l'agument 2 qui est à la troisième position
/*
    Défintion des options du script
    Les deux premiers arguments sont vérrouillés
    argv[0] -> correspond à node
    argv[1] -> correspond au nom du script appelé

*/
const sourceName = process.argv[2];

/****CREATION DU SYSTEME DE FLAG****/

// Fonction de récupération des index des process
function grab(flag)
{
    let index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

// Définition des flags pour l'encodage et le zippage
const destinationNameB64 = grab('--base64');
const destinationNameZIP = grab('--zip');

/****POUR TESTER SI LE NOM DU FICHIER EST BIEN RECUPERE****/
    /*
    console.log(process.argv[2]);
    */
/**********************************************************/

/****POUR TESTER LA POSITION DES ARGUMENTS****/
    /*
    process.argv.forEach( function(val, index){
        
        console.log(`${index}: ${val}`);

    });
    */
/*********************************************/

/****CAS D'UTILISATION DU PROGRAMME****/

// Premier cas encodage en base64 mais pas de zip
if( destinationNameB64 && !destinationNameZIP )
{
    console.log(`Vous allez encoder le fichier ${sourceName} en base64, il vous est aussi possible de le zipper !`);

    // On lit le contenu de notre fichier
    let sourceFile = fs.readFileSync(sourceName);

    // On donne le chemin et le nouveau nom du fichier encodé
    let sourceEncoded = `${destinationNameB64}`;

    // On écrit dans le dossier "results" le fichier .txt du du fichier encodé
    fs.writeFileSync(sourceEncoded, sourceFileEncoded);
}