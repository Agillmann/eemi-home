EEMI HOME
===

Projet EEMi Lab Open source 

## Table of Contents


   * [EEMI HOME](#eemi-home)
      * [Table of Contents](#table-of-contents)
   * [<strong>Stack</strong>](#stack)
   * [Electron CRA](#electron--react--parcel-)
      * [Scripts](#scripts)
   * [Strapi Quick Start Guide](#strapi-quick-start-guide)
      * [Developement Environment](#developement-environment)
         * [Set Up](#set-up)
         * [Dev server](#dev-server)
      * [Deploy Heroku](#deploy-heroku)
         * [Init the Git repository](#init-the-git-repository)
         * [Connect Heroku &amp; mLab addon](#connect-heroku--mlab-addon)

# Stack 

# Electron <img src="https://electronjs.org/images/favicon.ico" width="32"> Create-React-App <img src="https://create-react-app.dev/img/logo.svg" width=32> Strapi <img src="https://bestofjs.org/logos/strapi.svg" width=32> 

App desktop using [Electron](https://electronjs.org/), [React](https://reactjs.irg), [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)

Also contains CSS styling using [Material-UI](https://github.com/mui-org/material-ui) and [React-Transition-Group](https://reactcommunity.org/react-transition-group/) for animations.

## Scripts

`yarn electron-dev` will start the Electron app and the React app at the same time.  
`yarn electron-pack` will build the React app and package in dist folder, it along the Electron app.

# **Strapi Quick Start Guide**

## Developement Environment

### Set Up

Generate project strapi

```bash=
npx create-strapi-app my-project --quickstart
```

- Show all command
```bash=
npm install strapi@beta -g
```

- Documentation
[Strapi Documentation](https://strapi.io/documentation/3.0.0-beta.x/cli/CLI.html#strapi-new)

### Dev server

- Start server dev 
```bash=
strapi develop # options : -no-build and -watch-admin
```

Go to → [http://localhost:](http://localhost:8000/)1337/admin


- Cloudinary provider (medias management)
```bash=
npm i --save strapi-provider-upload-cloudinary
```

- 


## Deploy Heroku

- Install Heroku cli 

```bash=
# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

```bash=
# macOs
brew install heroku/brew/heroku
```
    

### Init the Git repository

We just need to commit your changes and push them to Heroku.

Our app is not versioned yet, so we need to to **init the Git repository**, add the files and **submit the first commit**:
```bash=
git init
git add .
git commit -am "Initial commit"
```
Now connect to heroku cli and create addons mLab.
```bash=
heroku login
heroku create example
heroku addons:create mongolab:sandbox --as DATABASE
git push heroku master
```

### Connect Heroku & mLab addon

Init database config in file **environments/production/database.json** : 

```json=
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-hook-mongoose",
      "settings": {
        "client": "mongo",
        "uri": "mongodb://<dbuser>:<dbpassword>@ds135624.mlab.com:35624/strapi"
      },
      "options": {
        "authenticationDatabase": "",
        "ssl": false
      }
    }
  }
}
```
        

🚨 And don't forgot Heroku Environnement Variable

*Dashboard Heroku exemple :*

![Heroku Environnement exemple](https://res.cloudinary.com/bomzielab/image/upload/v1575592916/FireShot_Capture_009_-_api-cocktail__Settings_-_Heroku_-_dashboard.heroku.com_gxq4oc.png)

- Documentation

    [Deploying a Strapi API on Heroku](https://strapi.io/blog/deploying-a-strapi-api-on-heroku)
