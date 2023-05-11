import Swal from 'sweetalert2'
import Network from 'ottm-connector-feedback'
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
  const network = new Network(featureUrl, getApiUrl())
  network.initConfig().then(
    async data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500
      })
      if (data === true) {
        const values = await display()
        if (values != null && values[0] != null) {
          network.sendUserFeedback(parseInt(values[0]), values[1])
          Toast.fire({
            icon: 'success',
            title: '<div data-i18n="success"></div>',
            didOpen: () => {
              translate()
            }
          })
        }
      }
    })
}


async function display() {
  const { value: formValues } = await Swal.fire({
    position: 'bottom-end',
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
      '<textarea id="comment" data-i18n="comment" placeholder="What can we do to improve?" cols="50" rows="15">' +
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
