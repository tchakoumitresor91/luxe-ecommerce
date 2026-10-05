// ============================================
//menu.mjs -side menu behavior 
//menu.mjs -comportement du menu latéral
// ============================================
//this file is an ES MODULES (ESM). three rules make it different 
//from a classic script : 
//ce fichier est un module ES (ESM). Trois règles le rendent différent
//d'un script classique : 
//
// MODULE SCOPE : every variable declared here is PRIVATE to this 
//file. other files cannot see 'sideMenu' or 'Overlay' unbless we share them white 'export'
//PORTEE DE MODULE : chaque variable declarée ici est PRIVEE a ce fichier.
//les autres fichiers ne peuvent pas voir 'sideMenu' ou 'Overlay' à moins que nous les partagions avec 'export'
//
//SCRICT MODE : modules always run in strict mode, so mistakes 
//(like using an undeclared variable) throw an error instead of 
//silently creating a global variable.
//MODE SCRICT : les modules s'executent toujours en mode strict,
//donc les erreurs (comme utiliser une varible non declaree)
//declenchent une erreur au lieu de creer silencieusement une
//variable globale
//
//DEFERD : the browse runs a module only AFTER the whole HTML
//is parsed. so we can call getElementById at the top of this file
//without waiting for DOMContentLoaded.
//DIFFER : le navigateur execute un module seulement apres l'analyse
//de tout le HTML. on peut donc utiliser getElementById
//sans attendre DOMContentLoaded
//
//  Grab the DOM elements once 
//   recuperer les element du DOM une seule fois 
//every time the user clicks. they stay private (not expired).
//on les stocke dans des constentes pour ne pas chercher dans la 
//pages a chaque clic. ils reste  prives (non exportes)
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const toggleButtons = document.getElementById('menuToggle');
const closeButtons = document.getElementById('menuClose');


//    the two reusable actions
//   les 2 actions reutilisables
// 'export' makes a function avaible to OTHER  files, which can then 
//'import' it by name. Anything whithout 'export' stays private.
//export rend une fonction disponible pour D' AUTRES fichiers, qui 
//peuvent alors l'importer par son nom. ce qui n'a pas d'export reste prive.

export function openMenu() {
    //adding the class triggers th CSS transition: the panel slides
    //in because 'slide-menu.is-open' sets translateX(0).
    //Ajouter la classe declanche la transition CSS: le panneau glisse
    //à l'interieur parce que 'slide-menu.is-open' definit translateX(0).
    sideMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    //Tell screen readres the menu is now avaible.
    //indiquer au lecteur d'ecran que le menu est maintenant disponible.
    sideMenu.setAttribute('aria-hidden', 'false');
}


export function closeMenu() {
    //removing the classes sends the panel back to translateX(-100%)
    //retirer les classes envoie le panneau a translateX(-100%)
    sideMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    sideMenu.setAttribute('aria-hidden', 'true');
}

//     connect user actions to two functions 
//     connecter les action utilisateur aux 2 fonctions
//we wrap the listeners in an exported function instead of running
//them at the top level. the module only starts when someone decides 
//to start it: main.mjs will call initMenu().
// on enroule les ecouteurs dans une fonction exportee au lieu de les executer 
// au niveau superieur. le module ne demarre que lorsque quelqu'un decide de
// le demarrer: main.mjs appellera initMenu().
export function initMenu(){
    //safety guard: if a page does not have the menu markup stop here
    //instead of crashing with "cannot read properties of null" 
    //garde de securiter: si une page n'as pas le HTML ne menu on 
    //s'arrrete ici au lieu de planter avec "cannot read properties of null"
    if (!sideMenu  || !overlay || !closebutton) return;

    //three triggers same two functions (DRY: don't repeat yourself)
    //trois declencheurs meme deux fonctions (DRY: ne pas se repeter soi-meme)
    toggleButtons.addEventListener('click', openMenu);
    closeButtons.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    //accebility: pressing escape closed the menu
    //'event.key'  tells us which key was pressed.
    //accessibiliter: appuyer sur escape ferme le menu
    //'event.key' nous dit quelle touche a ete appuyee.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Espace') closeMenu();
    });
}

