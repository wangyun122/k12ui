<style>
  .k12-input {
    position: relative;
    display: inline-block;
    width: 160px;
  }
  
  .k12-input__icon {
    position: absolute;
    width: 35px;
    height: 100%;
    right: 0;
    top: 3px;
    text-align: center;
    color: #bfcbd9;
    transition: all .3s;
    &:after {
      content: '';
      height: 100%;
      width: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
  
  .k12-input__inner {
    line-height: 1;
    outline: none;
    padding: 3px 10px;
    &::placeholder {
      color: #1f2d3d;
    }
    &:hover {
      border-color: #8391a5;
    }
    &:focus {
      outline: none;
      border-color: #20a0ff;
    }
  }
</style>
<template>
    <div class="k12-input">
        <template v-if="type !== 'textarea'">
            <div v-if="$slots.prepend">
            <!-- 前置元素 -->
                <slot name="prepend"></slot>
            </div>
             <!-- input 图标 -->
            <slot name="icon">
                <i class="k12-input__icon"
                   :class="[
                     'icon-' + icon,
                      onIconClick ? 'is-clickable' : ''
                    ]"
                    v-if="icon"
                    @click="handleIconClick">
                </i>
      </slot>
            <input 
            :type="type !== 'textarea'"
            class="k12-input__inner"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            :minlength="minlength"
            :min="min"
            :max="max"
            :form="form"
            ref="input"
            :value="currentValue"
            >
            <!-- 后置元素 -->
            <div class="K12-input-group__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
<textarea v-else class="k12-textarea__inner" :value="currentValue" :name="name" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :maxlength="maxlength" :minlength="minlength" :rows="rows"></textarea>
</div>
</template>

<script>
  import calcTextareaHeight from './calcTextareaHeight';
  export default {
    name: 'K12Input',

    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
      resize: String,
      readonly: Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      onIconClick: Function
    },

    data() {
      return {
        currentValue: this.value
      }
    },

    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val);
      }
    },

    methods: {
      handleBlur(event) {
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('K12FormItem', 'k12.form.blur', [this.currentValue]);
        }
      },
      // inputSelect() {
      //     this.$refs.input.select();
      // },
      resizeTextarea() {
        if (this.$isServer) return;
        let {
          autosize,
          type
        } = this;
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        const options = {
          resize: this.resize
        };
        this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows, options);

      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleInput(event) {
        this.setCurrentValue(event.target.value);
      },
      handleIconClick(event) {
        if (this.onIconClick) {
          this.onIconClick(event);
        }
        this.$emit('click', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        this.$emit('input', value);
        this.$emit('change', value);
        if (this.validateEvent) {
          this.dispatch('K12FormItem', 'el.form.change', [value]);
        }
      }
    },
  }
</script>