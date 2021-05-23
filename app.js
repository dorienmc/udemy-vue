const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "Lorijn",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
