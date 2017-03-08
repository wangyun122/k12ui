<template>
  <div class="k12-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter.js';

  export default {
    name: 'K12RadioGroup',

    componentName: 'K12RadioGroup',

    mixins: [Emitter],

    props: {
      value: [String, Number],
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean
    },
    watch: {
      value(value) {
        this.$emit('change', value);
        this.dispatch('K12FormItem', 'k12.form.change', [this.value]);
      }
    }
  };
</script>

