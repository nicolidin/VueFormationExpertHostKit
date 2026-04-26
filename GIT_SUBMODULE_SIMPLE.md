# Submodule Git : rappel minimal

## Ce que tu as

- **Repo host** : ce dossier `VueFormationExpertWithStrapi`.
- **Repo lib** : cloné sous `submodule/vue-lib-submodule-kit` (référence Git vers ton dépôt lib).

Le fichier **`.gitmodules`** à la racine du host indique l’URL et le chemin du submodule.

## Cloner le host (avec la lib)

```bash
git clone --recurse-submodules <URL_DU_REPO_HOST>
cd VueFormationExpertHostKit
yarn install
```

Si tu as déjà cloné **sans** `--recurse-submodules` :

```bash
cd VueFormationExpertHostKit
git submodule update --init --recursive
yarn install
```

## Vérifier que le submodule est bien là

```bash
git submodule status
# doit afficher une ligne du type : <sha> submodule/vue-lib-submodule-kit (...)

ls submodule/vue-lib-submodule-kit/package.json
```

## Mettre à jour la lib (prendre les derniers commits du remote)

```bash
cd submodule/vue-lib-submodule-kit
git pull origin master   # ou main, selon ta branche
cd ../..
git add submodule/vue-lib-submodule-kit
git commit -m "Bump submodule vue-lib-submodule-kit"
```

## Travailler dans la lib puis pousser

```bash
cd submodule/vue-lib-submodule-kit
# ... modifications ...
git add .
git commit -m "feat: ..."
git push origin master
cd ../..
git add submodule/vue-lib-submodule-kit
git commit -m "Point host vers nouveau commit de la lib"
```

## Changer l’URL du remote du submodule (ex. passage GitHub → autre forge)

Éditer **`.gitmodules`**, puis :

```bash
git submodule sync
git submodule update --init --recursive
```
