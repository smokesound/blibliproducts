import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.css";
library.add(faArrowUp);
library.add(faChevronLeft);
library.add(faChevronRight);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
