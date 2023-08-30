# User feedback Library

Library used to get user feedback on a specific functionality of your own site.
The feedback is given through a modal where the user is invited to give a rating and a comment on the functionality currently used.
This is part of the OTTM Survey tool ([survey-back-api](https://github.com/optittm/survey-back-api) and [survey-front-library](https://github.com/optittm/survey-front-library)).\
We have a specific documentation to install and test this project locally : `local_installation.md`.

## NPM installation for survey front modal

In order to install the library, you need to have npm install. Then, run the following command:

``` bash
npm install @ottm/survey-front-modal
```

## Usage 

**See examples in the folder `examples` for Angular, React and JS.**

Lexique :

- *data-api-url* : the address where to send the user's feedback (address of your survey-back-api).
- *urlFeature* : the url of the functionality (web page where the script will be inserted) you want to monitor. The library will automatically get the current page's URL, but you can optionally provide a custom one.



## Todos

- [ ] Remove the direct dependency on fingerprintjs once the library's npm package is updated.
- [ ] Give the possibility to the user to custom the modal with is own graphic chart.

## Licence

Survey front modal is available under the MIT license. See the LICENSE file for more info.
