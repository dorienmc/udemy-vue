const app = Vue.createApp({
  data() {
    return {
      name: "Dorien",
      age: 34,
      pictureUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/320px-Smiley.svg.png",
    };
  },
  methods: {
    getRand() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
