<template>
  <label>
    <input 
    type="checkbox"
    :name="name"
    v-model="model"
    :value="label"
    :disabled="disabled"
    @focus="focus = true"
    @blur="focus = false"
    >
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
  import Emitter from '../../../src/mixins/emitter.js';

  export default {
    name: 'K12Checkbox',

    mixins: [Emitter],

    componentName: 'K12Checkbox',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      checked: Boolean,
      name: String,
    },

    data() {
      return {
        focus: false,
        selfModel: false,
      }
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'K12CheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },

      model: {
        get() {
          return this.isGroup ?
            this.store : this.value !== undefined ?
            this.value : this.selfModel;
        },

        set(val) {
          if (this.isGroup) {
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else if (this.value !== undefined) {
            this.$emit('input', val);
          } else {
            this.selfModel = val;
          }
        }
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      }

    }



  }
</script>