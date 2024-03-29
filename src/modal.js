import Swal from 'sweetalert2'
import Network from '@ottm/survey-front-library'
import { translate } from '../i18n/i18n'
import '../css/style.css'
import 'regenerator-runtime/runtime'
import { config } from '../config'

function getApiUrl(){
  if(config.API_URL !== null){
    return config.API_URL;
  }
  return document.getElementById("ottmModal").getAttribute('data-api-url');
}


async function launch(featureUrl = window.location.href) {
  const network = new Network(featureUrl, getApiUrl());
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000
  });
  network.initConfig().then(
    async data => {
      if (data === true) {
        const values = await display()
        if (values != null && values[0] != null) {
          let notif = '';
          try {
            await network.sendUserFeedback(parseInt(values[0]), values[1]);
            notif = 'success';
          } catch (error) {
            notif = 'error';
          }
          Toast.fire({
            icon: notif,
            title: '<div data-i18n="' + notif + '"></div>',
            didOpen: () => {
              translate()
            }
          })
        }
      }
    }).catch(error => {
      Toast.fire({
        icon: 'error',
        title: '<div data-i18n="error"></div>',
        didOpen: () => {
          translate()
        }
      })
    });
}


async function display() {
  const { value: formValues } = await Swal.fire({
    title: '<div data-i18n="title"></div>',
    html:
      '<form id="rate" class="rating">' +
      '<input type="radio" id="star_5" name="rate" value="5" />' +
      '<label for="star_5" title="Five">&#9733;</label>' +
      '<input type="radio" id="star_4" name="rate" value="4" />' +
      '<label for="star_4" title="Four">&#9733;</label>' +
      '<input type="radio" id="star_3" name="rate" value="3" />' +
      '<label for="star_3" title="Three">&#9733;</label>' +
      '<input type="radio" id="star_2" name="rate" value="2" />' +
      '<label for="star_2" title="Two">&#9733;</label>' +
      '<input type="radio" id="star_1" name="rate" value="1" />' +
      '<label for="star_1" title="One">&#9733;</label>' +
      '</form>' +
      '<textarea id="comment" data-i18n="[placeholder]comment" cols="50" rows="15">' +
      '</textarea>',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up" data-i18n="button.confirm"></i>',
    showCancelButton: true,
    cancelButtonText: '<div data-i18n="button.cancel"></div>',
    preConfirm: () => {
      const checkRadioValue = document.querySelector('form#rate input[name="rate"]:checked')
      const rating = checkRadioValue ? checkRadioValue.value : null
      const comment = document.getElementById('comment').value
      return [
        rating,
        comment
      ]
    },
    didOpen: () => {
      translate()
    }
  })
  return formValues
}

export { launch }
