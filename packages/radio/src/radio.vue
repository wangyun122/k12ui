<template>
  <label >
    <input
        type="radio"
        :value="label"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled">
        
    <span><slot></slot></span>
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter.js';

  export default {
    name: 'K12Radio',
    mixins: [Emitter],
    componentName: 'ElRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String
    },

    data() {
      return {
        focus: false
      }
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while(parent){
            if(parent.$options.componentName !== 'K12RadioGroup'){
                parent=parent.$parent;
            }else{
                this._radioGroup=parent;
                return true;
            }
        }
        return false;
      },

      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },

        set(val) {

          if (this.isGroup) {
            this.dispatch('K12RadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },

      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled;
      }
    }

  }
</script>