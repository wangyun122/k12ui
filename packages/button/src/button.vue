<template>
    <button :disabled="disabled" class="btn"
        @click="handleClick"
        :class="[
        type  ? 'btn-' + type : '',
        size  ? 'btn-' + size : '',
        level ? 'btn-level-' + level : ''
        ]"
    >
          <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
    export default {
        name: 'K12Button',
        props: {
            type: {
                type: String,
                default: 'darkblue'
            },
            size: {
                type: String,
                default: 'small'
            },
            level:String,
            // icon: {
            //     type: String,
            //     default: ''
            // },
            // nativeType: {
            //     type: String,
            //     default: 'button'
            // },
            // loading: Boolean,
            disabled: Boolean,
            // plain: Boolean,
            // autofocus: Boolean
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>