<template>
  <v-text-field
    ref='input'
    :label='label'
    :textarea='textarea'
    append-icon='content_copy'
    @click:append='copy'
    v-model='value'
    :attrs='$attrs'
  />
</template>

<script>
export default {
  name: 'VClipboardTextField',
  props: {
    'label': {
      type: String,
      required: false,
    },
    'textarea': {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    copy() {
      const input = this.$refs.input;
      input.focus();
      document.execCommand('selectAll');
      this.copied = document.execCommand('copy');
    },
  }
}
</script>
