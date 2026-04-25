# Submodule Git : rappel minimal

## Ce que tu as

- **Repo host** : ce dossier `VueFormationExpertWithStrapi`.
- **Repo lib** : cloné sous `submodule/vue-lib-exo-nico-corrected` (référence Git vers ton dépôt lib).

Le fichier **`.gitmodules`** à la racine du host indique l’URL et le chemin du submodule.

## Cloner le host (avec la lib)

```bash
git clone --recurse-submodules <URL_DU_REPO_HOST>
cd VueFormationExpertWithStrapi
yarn install
```

Si tu as déjà cloné **sans** `--recurse-submodules` :

```bash
cd VueFormationExpertWithStrapi
git submodule update --init --recursive
yarn install
```

## Vérifier que le submodule est bien là

```bash
git submodule status
# doit afficher une ligne du type : <sha> submodule/vue-lib-exo-nico-corrected (...)

ls submodule/vue-lib-exo-nico-corrected/package.json
```

## Mettre à jour la lib (prendre les derniers commits du remote)

```bash
cd submodule/vue-lib-exo-nico-corrected
git pull origin master   # ou main, selon ta branche
cd ../..
git add submodule/vue-lib-exo-nico-corrected
git commit -m "Bump submodule vue-lib-exo-nico-corrected"
```

## Travailler dans la lib puis pousser

```bash
cd submodule/vue-lib-exo-nico-corrected
# ... modifications ...
git add .
git commit -m "feat: ..."
git push origin master
cd ../..
git add submodule/vue-lib-exo-nico-corrected
git commit -m "Point host vers nouveau commit de la lib"
```

## Changer l’URL du remote du submodule (ex. passage GitHub → autre forge)

Éditer **`.gitmodules`**, puis :

```bash
git submodule sync
git submodule update --init --recursive
```
