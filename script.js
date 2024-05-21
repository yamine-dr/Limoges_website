/* 1. Disparition/réapparition du contenu des sections */
// Section "Introduction"
document.getElementById('intro_titre').addEventListener('click', function() {
    var section_intro = document.getElementById('intro');
    var contenu_intro = section_intro.querySelectorAll('p, figure, #images_defiler');

    contenu_intro.forEach(function(element) {
        if (element.style.display === 'none') {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
});

// Section "Géographie"
document.getElementById('geographie_titre').addEventListener('click', function() {
  var section_geographie = document.getElementById('geographie');
  var contenu_geographie = section_geographie.querySelectorAll('#localisation, #geologie, #hydrographie, #climat');

  contenu_geographie.forEach(function(element) {
      if (element.style.display === 'none') {
          element.style.display = '';
      } else {
          element.style.display = 'none';
      }
  });
});

// Section "Urbanisme"
document.getElementById('urbanisme_titre').addEventListener('click', function() {
  var section_urbanisme = document.getElementById('urbanisme');
  var contenu_urbanisme = section_urbanisme.querySelectorAll('#typologie, #occupation_sols');

  contenu_urbanisme.forEach(function(element) {
      if (element.style.display === 'none') {
          element.style.display = '';
      } else {
          element.style.display = 'none';
      }
  });
});

/* 2. Envoi formulaire = afficher fenêtre pop-up */
document.getElementById('comment').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;

  alert("Merci pour votre commentaire " + prenom + " !");
});

/* 3. Galerie d'images qui défilent */
// Bloc pour faire défiler les images 
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#images_defiler img');
    let indice_image = 0;

    function image_suivante() {
        images[indice_image].classList.remove('active');
        indice_image = (indice_image + 1) % images.length;
        images[indice_image].classList.add('active');
      }

    images[indice_image].classList.add('active'); // On affiche d'abord la 1ère image
    setInterval(image_suivante, 3000); // Défilement toutes les 3 secondes
  });

// Bloc pour les légendes des images qui défilent
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#images_defiler img');
    const liste_legendes = [
        'Hôtel de ville de Limoges',
        'Cours du temple',
        'Gare des Bénédictins',
        'Halles Centrales de Limoges',
        'Pont Saint-Martial',
        'Rue de la Boucherie',
        ];
    let indice_legende = 0;
    const legende = document.getElementById('legendes_images');

    function legende_suivante() {
        images[indice_legende].classList.remove('active');
        legende.textContent = ''; // Efface l'ancienne légende
        indice_legende = (indice_legende + 1) % images.length;
        images[indice_legende].classList.add('active');
        legende.textContent = liste_legendes[indice_legende]; // Affiche la nouvelle légende
    }

    // Affichage de la 1ère image et sa légende :
    images[indice_legende].classList.add('active');
    legende.textContent = liste_legendes[indice_legende];

    setInterval(legende_suivante, 3000); // Défilement toutes les 3 secondes
});

/* 
4. Clic sur dernière image = tout mélanger 

var derniere_image = document.getElementById('derniere_image');

derniere_image.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';

    for (let element of document.body.children) {
        element.style.position = "fixed";
        const rect =  element.getBoundingClientRect();
        element.style.top = rect.top;
        element.style.left = rect.left;
        element.style.width = 50 + "px";
        element.style.height = 50 + "px";
        element.style.transition = "all 1s";
        element.style.top = document.documentElement.clientHeight / 2 + "px";
        element.style.left = document.documentElement.clientWidth / 2 + "px";
    }
}); 
*/