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