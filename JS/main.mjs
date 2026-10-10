// ===============================================
//main.mjs -application entry point
//main.mjs -point d'entree de l'application
//=================================================
//this is the ONLY file the HTML loads. Its imports the other modules 
//and starts them. Adding a feature later = one new import line here
//c'est le seul fichier que le HTML charge il importe les autres 
//modules et les demarre ajouter une fonctionnaliter plus tard = une 
//nouvelle ligne d'import ici 

//'import {name} from 'path' brings in something that another file 
//shared with 'export'
//'import {nom} from 'chemin' recupere ce qu'un autre fichier a partage
//
// IMPORTANT: in the browser the file extension is REQUIRED
// ('./menu.mjs', not './menu'). Node.js can skip it, browsers cannot,
// because they must request the exact URL.
// The './' means "start from the folder of THIS file".
// FR: IMPORTANT : dans le navigateur, l'extension du fichier est
// OBLIGATOIRE ('./menu.mjs', pas './menu'). Node.js peut l'omettre,
// pas les navigateurs, car ils doivent demander l'URL exacte.
// Le './' signifie "partir du dossier de CE fichier".
import { initMenu } from './menu.mjs';

// Even if several files import menu.mjs, the browser loads and runs it
// only ONCE and shares that single instance.
// FR: Même si plusieurs fichiers importent menu.mjs, le navigateur ne
// le charge et ne l'exécute qu'UNE fois et partage cette instance unique.
initMenu();