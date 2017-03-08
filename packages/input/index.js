import K12Input from './src/input';

/* istanbul ignore next */
K12Input.install = function(Vue) {
  Vue.component(K12Input.name, K12Input);
};

export default K12Input;
