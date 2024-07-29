Vue.component('animated-span', {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <transition
      name="fade-expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <span v-if="visible" class="requerido">*</span>
    </transition>
  `,
  methods: {
    beforeEnter(el) {
      el.style.transform = 'scale(0.5)';
      el.style.opacity = '0';
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      el.style.transform = 'scale(1)';
      el.style.opacity = '1';
      el.addEventListener('transitionend', done, { once: true });
    },
    beforeLeave(el) {
      el.style.transform = 'scale(1)';
      el.style.opacity = '1';
    },
    leave(el, done) {
      el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      el.style.transform = 'scale(0.5)';
      el.style.opacity = '0';
      el.addEventListener('transitionend', done, { once: true });
    }
  }
});
