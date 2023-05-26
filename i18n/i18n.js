import i18next from 'i18next';
import $ from 'jquery';
import jqueryI18next from 'jquery-i18next';
import LngDetector from 'i18next-browser-languagedetector';

export const translate = () => {
    $(function () {
        i18next
            .use(LngDetector)
            .init({
                debug: false,
                fallbackLng: 'en',
                resources: {
                    en: {
                        translation: {
                            "button": {
                                "confirm": "Send",
                                "cancel": "Cancel"
                            },
                            "title": "User feedback",
                            "comment": "What can we do to improve ?",
                            "success": "Feedback successfully sent !",
                            "error": "An error has occurred"
                        }
                    },
                    fr: {
                        translation: {
                            "button": {
                                "confirm": "Envoyer",
                                "cancel": "Annuler"
                            },
                            "title": "Avis utilisateur",
                            "comment": "Que pouvons-nous faire de mieux ?",
                            "success": "Avis utilisateur correctement envoyé !",
                            "error": "Une erreur s'est produite"
                        }
                    }
                }
            }, (err, t) => {
                if (err) return console.error(err);


                jqueryI18next.init(i18next, $, { useOptionsAttr: true });

                $('body').localize();
            });
    });
}