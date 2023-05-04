# OTTM User feedback Library

Library used to get user feedback on a specific functionality of your own site.
The feedback is given through a modal where the user is invited to give a rating and a comment on the functionnality currently used.

## Install via npm

In order to install the library, you need to have npm install. Then, run the following command: 
```
npm install ottm-modal-feedback
```

## Usage 

Initialize the plugin by referencing the necessary files:
```
    <script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript" src="./dist/bundle.js" ></script>
    <script>
        window.ModalOttm.launch(urlFeature);
    </script>
```

where urlFeature is the url of the functionnality (web page where the script will be inserted) you want to monitor.

**See examples in the folder `examples` for Angular, React and JS.**

## Contribute 

The tool is released under a MIT licence. Contributors are welcomed.

## Todos

- Give the possibility to the user to custom the modal with is own graphic chart. 
