# GDG Dschang official website
> Be a Google Developers Group. Be a Hero!

![preview-web](images/gdgdschang17-banner.jpg)

## Project Hoverboard  

[![Join the chat at https://gitter.im/gdg-x/hoverboard](https://badges.gitter.im/gdg-x/hoverboard.svg)](https://gitter.im/gdg-x/hoverboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Project Hoverboard is the next generation conference website template after 
[Project Zeppelin](https://github.com/gdg-x/zeppelin) and more optimized 
version - [Project Zeppelin-Grunt](https://github.com/gdg-x/zeppelin-grunt).

> Template is brought by [Oleh Zasadnyy](https://plus.google.com/+OlehZasadnyy) 
from [GDG Lviv](http://lviv.gdg.org.ua/).

> *Do you :heart: it?* Show your support - please, :star: the project.

:zap: [Live demo](https://hoverboard-dev.firebaseapp.com/)

### Features
:white_check_mark: Polymer  
:white_check_mark: [PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server)  
:white_check_mark: Offline access  
:white_check_mark: i18n  
:white_check_mark: Material design  
:white_check_mark: Animations  
:white_check_mark: Integrated speakers and sessions management  
:white_check_mark: SEO friendly  
:white_check_mark: Optimized and fast  
:white_check_mark: Editable theme colors  
:white_check_mark: Quick deploy  

### Setup
:book: [Full documentation](/docs/).

##### Docker based development env

If you don't want to bother with the dependencies, you can develop in the docker container.

Build:

    docker build -t hoverboard .

and run:

    docker run -it -v "$PWD":/app -p 8080:8080 hoverboard

:book: Read more in [docker docs](/docs/tutorials/docker.md).

### *Hoverboard* - Roadmap :rocket:
:x: Admin panel  
:x: Firebase Integration   
:x: My schedule  
:x: Push notification  
:x: ES2015  
:x: Accessibility  
:x: Unit/Integration Tests  
:point_right: __Propose your feature with [creating an issue](https://github.com/gdg-x/hoverboard/issues/new)__

### *Hoverboard* - Contributing

Project Hoverboard is still under development, and it is open for contributions. 
Feel free to send PR. If you have any questions, feel free to contact 
[Oleh Zasadnyy](https://plus.google.com/+OlehZasadnyy).

## GDG Dschang website project

###### Prerequisites
    
:point_right: **[Fork](https://github.com/gdg-dschang/website/fork) this repository** and clone it locally.

*(for global way to install dependencies, don't forget `sudo` behavior on some linux like distro)*

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm i -g polymer-cli
    
and [Bower](https://bower.io/):
    
    npm i -g bower

##### Install dependencies

    bower install

##### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve
    
:book: Read more in [setup docs](/docs/tutorials/set-up.md).


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

Or you can build in Docker container:

    docker run -v "$PWD":/app hoverboard polymer build
    
:book: Read more in [deploy docs](/docs/tutorials/deploy.md).   

### Updating
Here is a git workflow for updating your fork (or downloaded copy) to the latest version:
```
git remote add upstream https://github.com/gdg-dschang/website.git
git fetch upstream
git merge upstream/master # OR git merge upstream/develop
# resolve the merge conflicts in your editor
git add . -u
git commit -m 'Updated to the latest version'
```

### Who fork and use this repo?

Going to use the template? Go on! The only thing we ask - let us know with a 
pull request, so we can include you in this list.

For your own starting website, take a look of Project Hoverboard mentioned above


##### General workflow
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Run the tests, adding new ones for your code if necessary
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

:book: Read complete [contributing guide](CONTRIBUTING.md).


### Contributors :sparkles:
See [list of contributors](https://github.com/gdg-dschang/website/graphs/contributors).

__Maintainer:__ [tnga](https://github.com/tnga).


######The GDG App, GDG[x] are not endorsed and/or supported by Google, the corporation.


### License

Project is published under the [MIT license](https://github.com/gdg-dschang/website/blob/master/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
