import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: "#017934",
                secondary: "#80bc99",
                accent: "#79d200",
                back: "#dcedc8"
            },
        },
    },
});
