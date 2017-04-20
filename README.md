# No Serve: AngularJs Seed

A project seed for a lightweight angularjs app that does not require a build tool or an http server.

Setup includes [AngularJs](https://angularjs.org/), [Angular Material](https://material.angularjs.org/latest/), [Ui Router](https://ui-router.github.io/), [Lodash](https://lodash.com/), and [Font Awesome](http://fontawesome.io/). As these files are manually downloaded and included (to remove a need for a package manager), they may be out of date.

Basic seed project used for very small applications. Css relies on automatic LESS compilation through the Atom editor ([less-autocompile](https://atom.io/packages/less-autocompile))

## Project Setup

```bash
# clone the repo
$ git clone https://github.com/EmandM/angularjs-seed.git web-app

# change directory to your app
$ cd web-app
```


* Clone/Download the repo
* Add Javascript inside [`/source/components`](/source/components)
* Add HTML inside [`index.html`](/index.html)
* Add LESS inside [`/source/styles`](/source/styles)
* Use a LESS autocompiler to compile all less files down into [`styles.css`](/source/styles.css)
* Run project simply by opening [index.html](/index.html) inside a browser.

> It is necessary to contain all html inside index.html as AngularJs retrieves all further HTML files via AJAX requests which require a server to respond.



If you want to build anything more heavyweight use the [AngularJS Seed](https://github.com/EmandM/angularjs-seed) project.
