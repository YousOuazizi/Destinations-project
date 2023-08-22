# Documentation

## Comment exécuter l'application localement ?

### 1. Image MongoDB :
   - Téléchargez l'image MongoDB si ce n'est pas déjà fait :
     ```bash
     docker pull mongo:latest
     ```

### 2. Exécutez un conteneur MongoDB :
   - Utilisez la commande :
     ```bash
     docker run --name mongo-container -p 27017:27017 -d mongo:latest
     ```
     Avec cette commande, vous lancez un conteneur MongoDB qui expose le port 27017. Ainsi, votre backend (qui s'exécute localement) pourra se connecter à localhost:27017 pour accéder à MongoDB.

### 3. Installer les dépendances du Backend :
   - Pour installer les dépendances, exécutez la commande dans le répertoire du backend :
     ```bash
     npm install
     ```

### 4. Démarrer le serveur GraphQL :
   - Une fois que toutes les dépendances sont installées, vous pouvez démarrer l'application avec :
     ```bash
     npm run start
     ```

### 5. Installer les dépendances du Frontend :
   - Pour installer les dépendances, exécutez la commande dans le répertoire du frontend :
     ```bash
     npm install
     ```

### 6. Démarrer l'application :
   - Une fois que toutes les dépendances sont installées, vous pouvez démarrer l'application avec :
     ```bash
     npm start
     ```

### 7. Démarrer les tests :
   - Une fois que toutes les dépendances sont installées, vous pouvez démarrer les tests avec :
     ```bash
     npm test
     ```

## Partie Front-end

### Composants React

- **DestinationList** : Ce composant est le conteneur principal pour afficher la liste des destinations. Il gère l'affichage, l'ajout, la modification et la suppression des destinations.
- **DestinationContent** : Ce composant sert de grille pour afficher chaque DestinationCard. Il prend en charge la liste des destinations et les fonctions de gestion des actions sur chaque destination.
- **DestinationCard** : Ce composant représente une seule carte de destination affichant les détails de la destination. Il offre des options pour éditer, supprimer ou bloquer la destination.
- **AddDestinationDialog** : Ce composant permet d'ouvrir une boîte de dialogue pour ajouter une nouvelle destination.
- **ConfirmDeleteDialog** : Une boîte de dialogue pour confirmer la suppression d'une destination.
- **DestinationForm** : Un formulaire pour ajouter ou éditer une destination.
- **EditDestinationDialog** : Une boîte de dialogue pour éditer une destination existante.

### Composants Redux

- **Action et reducers pour Redux** : Les fonctions d'action et les réducteurs permettent de gérer l'état global des destinations dans l'application.

  - **Actions** :
    - `fetchDestinations`: Récupère la liste des destinations.
    - `createDestination`: Crée une nouvelle destination.
    - `deleteDestination`: Supprime une destination spécifiée par son ID.
    - `editDestination`: Édite une destination existante.
    - `toggleBlockDestination`: Bascule l'état bloqué d'une destination.

  - **Reducers** :
    - `destinationsReducer`: Un réducteur pour gérer l'état des destinations dans l'application. Il traite les actions réussies pour la récupération, la création, la suppression, l'édition et le basculement de l'état bloqué des destinations.

## Partie Back-end

### 1. Schéma GraphQL (schema.graphql) :
   - Ce fichier décrit les types et les opérations qui peuvent être effectuées à travers le serveur GraphQL.
     - `Destination` : décrit une destination avec ses attributs tels que le nom, l'adresse, l'image, etc.
     - `EditDestinationInput` : est utilisé pour modifier une destination existante. Il n'est pas nécessaire de fournir tous les champs lors de la modification d'une destination.
     - `Query` : contient la liste des opérations de requête disponibles.
     - `Mutation` : contient la liste des opérations de mutation disponibles.

### 2. Modèle Mongoose (destination.schema) :
   - Ce fichier détaille le schéma utilisé par Mongoose pour interagir avec la base de données MongoDB.
     - `Destination` : définit le schéma pour le modèle Destination dans MongoDB.
     - `DestinationDocument` : est une combinaison du modèle Destination avec le Document de Mongoose pour des opérations DB.

### 3. Résolveurs (destination.resolver) :
   - Ils contiennent les fonctions qui seront appelées lorsqu'une opération est demandée à travers GraphQL.
     - `destinations` : retourne la liste de toutes les destinations.
     - `createDestination` : crée une nouvelle destination.
     - `editDestination` : modifie une destination existante en fonction de son ID.
     - `deleteDestination` : supprime une destination existante en fonction de son ID.
     - `toggleBlockDestination` : active ou désactive le blocage d'une destination.

### 4. Module (destination.module) :
   - Il organise l'injection de dépendance pour les services et les résolveurs concernant les destinations.

### 5. Service (destination.service) :
   - Contient la logique métier et interagit avec la base de données à travers le modèle Mongoose.
