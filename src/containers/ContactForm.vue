<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input
            :readonly="done"
            v-model="name"
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            required
            data-error="Please enter your name"
          />
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <input
            :readonly="done"
            v-model="email"
            type="text"
            placeholder="Your Email"
            id="email"
            class="form-control"
            name="email"
            aria-label="Your Email"
            required
            data-error="Please enter your email"
          />
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <textarea
            :readonly="done"
            v-model="message"
            class="form-control"
            id="message"
            placeholder="Your Message"
            aria-label="Your Message"
            rows="8"
            data-error="Write your message"
            required
          ></textarea>
          <div class="help-block with-errors"></div>
        </div>
        <div class="submit-button text-center">
          <button class="btn btn-common" id="submit" @click="send()" v-show="!done">
            Send Message
          </button>
          <div class="h3 text-center" v-show="done">{{ result }}</div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    done: false,
    result: null,
    name: "",
    email: "",
    message: "",
  }),
  methods: {
    ok() {
      this.result = "Thanks"
      this.done = true
    },
    error() {
      this.result = "Error"
      this.done = true
    },
    send() {
      const url = import.meta.env.VITE_API_PATH || "/api/"
      fetch(url + 'send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: this.name, email: this.email, message: this.message})
      })
      .then((response) => {
        response.status === 200
          ? this.ok()
          : this.error()
      })
      .catch((error) => this.error())
    },
  },
}
</script>
