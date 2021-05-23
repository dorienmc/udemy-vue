const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    submitForm(event) {
      alert("Submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
