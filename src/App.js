import Routers from './navigation/Router'
import ThemeProvider from './ThemeProvider'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";

// css
import "../src/assets/css/plugins/animate.min.css"
import "../src/assets/css//main.css?v=5.5"

//  JS



// import "../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
// import "../src/assets/js/vendor/modernizr-3.6.0.min.js"
import "../src/assets/js/vendor/jquery-3.6.0.min.js"
// import "../src/assets/js/vendor/jquery-migrate-3.3.0.min.js"
import "../src/assets/js/vendor/bootstrap.bundle.min.js"
// import "../src/assets/js/plugins/slick.js"
// import "../src/assets/js/plugins/jquery.syotimer.min.js"
// import "../src/assets/js/plugins/waypoints.js"
// import "../src/assets/js/plugins/wow.js"
// import "../src/assets/js/plugins/perfect-scrollbar.js"
// import "../src/assets/js/plugins/magnific-popup.js"
// import "../src/assets/js/plugins/select2.min.js"
// import "../src/assets/js/plugins/counterup.js"
// import "../src/assets/js/plugins/jquery.countdown.min.js"
// import "../src/assets/js/plugins/images-loaded.js"
// import "../src/assets/js/plugins/isotope.js"
// import "../src/assets/js/plugins/scrollup.js"
// import "../src/assets/js/plugins/jquery.vticker-min.js"
// import "../src/assets/js/plugins/jquery.theia.sticky.js"
// import "../src/assets/js/plugins/jquery.elevatezoom.js"

// import "../src/assets/js/main.js"
// import "../src/assets/js/shop.js"


store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Routers />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;

// Vendor JS
