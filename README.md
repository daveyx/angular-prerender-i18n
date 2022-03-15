# Why this repo?
https://stackoverflow.com/questions/71478409/angular-i18n-avoid-trailing-slash-in-url-on-prerendered-root-page

# How to run

- point www.example.com to 127.0.0.1 in /etc/hosts
- `npm run prerender`
- `docker stop angular-prerender-i18n`
- `docker rm angular-prerender-i18n`
- `docker build -f DockerfileApacheLocalhost -t angular-prerender-i18n .`
- `docker run -d -p 80:80 --name angular-prerender-i18n angular-prerender-i18n`
- open www.example.com in browser

# AngularPrerender

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
