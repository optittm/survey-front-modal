# User feedback Library

Library used to get user feedback on a specific functionality of your own site.
The feedback is given through a modal where the user is invited to give a rating and a comment on the functionality currently used.
This is part of the OTTM Survey tool ([survey-back-api](https://github.com/optittm/survey-back-api) and [survey-front-library](https://github.com/optittm/survey-front-library))

## Install via npm

In order to install the library, you need to have npm install. Then, run the following command: 
```
npm install @ottm/survey-front-modal
```

## Usage 

Initialize the plugin by referencing the necessary files:
```
    <script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript" src="./dist/bundle.js" ></script>
    <script>
        window.ModalOttm.launch();
        // window.ModalOttm.launch(urlFeature);
    </script>
```

Where data-api-url is the address where to send the user's feedback (address of your survey-back-api).  
And urlFeature is the url of the functionality (web page where the script will be inserted) you want to monitor.  
The library will automatically get the current page's URL, but you can optionally provide a custom one.

**See examples in the folder `examples` for Angular, React and JS.**

## Contribute 

The tool is released under a MIT licence. Contributors are welcomed.

## Todos

- Remove the direct dependency on fingerprintjs once the library's npm package is updated
- Give the possibility to the user to custom the modal with is own graphic chart. 
