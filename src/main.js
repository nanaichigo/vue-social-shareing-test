/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import font awesome icon component */
import {
  faTwitter,
  faFacebookF,
  faLine,
  faWordpress,
  faEvernote,
  faSkype,
  faFacebookMessenger,
  faBuffer,
  faFlipboard,
  faHackerNews,
  faLinkedin,
  faOdnoklassniki,
  faPinterest,
  faGetPocket,
  faQuora,
  faRedditAlien,
  faStumbleupon,
  faTelegramPlane,
  faTumblr,
  faViber,
  faVk,
  faWeibo,
  faWhatsapp,
  faXing,
  faYammer,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCommentDots,
  faPaw,
  faItalic,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faTwitter,
  faFacebookF,
  faLine,
  faWordpress,
  faEvernote,
  faSkype,
  faEnvelope,
  faFacebookMessenger,
  faCommentDots,
  faBuffer,
  faFlipboard,
  faHackerNews,
  faItalic,
  faPaw,
  faLinkedin,
  faOdnoklassniki,
  faPinterest,
  faGetPocket,
  faQuora,
  faRedditAlien,
  faStumbleupon,
  faTelegramPlane,
  faTumblr,
  faViber,
  faVk,
  faWeibo,
  faWhatsapp,
  faXing,
  faYammer,
);

const app = createApp(App);

registerPlugins(app);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
