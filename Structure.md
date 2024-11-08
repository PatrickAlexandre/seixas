# Projet Web - Documentation

Ce projet est une application web utilisant les templates EJS pour générer des pages HTML dynamiques. Voici une description des principaux fichiers et de leur rôle dans la structure du projet.

## Structure des fichiers

| Fichier                 | Description                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| `../shop/index.ejs`     | Ce fichier représente la page principale de la boutique. Il contient le contenu dynamique de la page d'accueil de la boutique et intègre les sections de navigation et de pied de page. |
| `../includes/Head.ejs`  | Ce fichier contient le code du `<head>` de la page, y compris les liens vers les feuilles de style et les métadonnées. Ce fichier est inclus dans les différentes pages pour garantir une mise en page et des styles cohérents. |
| `../includes/Nav.ejs`   | Ce fichier contient le code de la barre de navigation. Il est inclus dans les pages principales pour afficher les liens de navigation de manière uniforme sur toutes les pages. |
| `../includes/end.ejs`   | Ce fichier contient la partie finale de la page, notamment les scripts JavaScript nécessaires pour le bon fonctionnement de la page. Il est inclus à la fin de chaque page pour améliorer les performances de chargement. |
| `./sante.ejs`           | Template EJS pour la page de la section "santé". Elle contient des informations spécifiques à cette catégorie et utilise les éléments de navigation et de pied de page pour assurer la cohérence de la structure du site. |
