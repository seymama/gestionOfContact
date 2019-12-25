/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var Contact = {
    // init contact
    init: function (nom , prenom ){
        this.nom = nom; 
        this.prenom = prenom;
    },
    // decription
    decrip: function(){
        return `| ${this.nom} | ${this.prenom} |`;
    }
};

//contact exist
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

function listChoix(){
    var menu = `
    ******** MENU ********
    1 : Liste les contacts
    2 : Ajouter un contact
    0 : Quitter
    **********************
    `;
    console.log(menu);
}

function ajouterContact(nom, prenom){
    var newContact = Object.create(Contact);

    newContact.init(nom, prenom);
    contacts.push(newContact);

    console.log(" Le nouveau contact à été ajouté.");
}

function listerContacts(contacts)
{
    console.log("Voici la liste de vos contacts :");
    console.log(' | Nom    | Prenom  |');
    contacts.forEach(function(contact){
        console.log(`${contact.decrip()}`);
    });

}

console.log("Bienvenue dans le gestionnaire des contacts! ");

//Var choix = (prompt("Choisissez une option"));
var contacts = [contact1, contact2];
var choix; 
    while (choix !== "0"){
        listChoix();
        choix = prompt("Choisissez un option");

        switch(choix) {
            case "1":
                listerContacts(contacts)
            break;

            case "2":
                var nom = prompt("Saisissez le nom :");
                var prenom = prompt("Saisissez le prenom :");
            break;

            default:
                console.log("Je n'ai pas compris votre choix.");
            break;
        }
    }
    if (choix === "0"){
        console.log("Au revoir !");
    }