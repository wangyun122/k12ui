<script>
  import Emitter from '../../../src/mixins/emitter.js';

  export default {
    name: 'K12CheckboxGroup',

    componentName: 'K12CheckboxGroup',

    mixins: [Emitter],

    props: {
      value: {}
    },

    watch: {
      value(value) {
        this.dispatch('K12FormItem', 'k12.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="k12-checkbox-group">
    <slot></slot>
  </div>
</template>
