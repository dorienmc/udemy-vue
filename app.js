const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue3",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.courseGoal;
      } else {
        return "Master Vue";
      }
    },
  },
});
app.mount("#user-goal");
