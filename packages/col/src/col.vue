<script>
  export default {
  name: 'K12Col',

  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number,
  },

  computed: {
    gutter() {
      return this.$parent.gutter;
    },

    style() {
      var ret = {};

      if (this.gutter) {
        ret.paddingLeft = this.gutter / 2 + 'px';
        ret.paddingRight = ret.paddingLeft;
      }

      return ret;
    }
  },
  render(h) {
    let { style } = this;
    let classList = [];

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
          ? `k12-col-${prop}-${this[prop]}`
          : `k12-col-${this[prop]}`
        );
      }
    });

    return (
      <div
        class={['k12-col', classList]}
        style={style}>
        {this.$slots.default}
      </div>
    );
  }
};

</script>