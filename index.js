import VClipboardTextField from './src/components/VClipboardTextField.vue';

const VuetifyClipboard = {
  install(Vue, options) {
    Vue.component('v-clipboard-text-field', VClipboardTextField);
  },
};

export default VuetifyClipboard;
