<template>
  <form @submit.prevent>
    <div class="row">
      <FormGroup>
        <FormInput
          v-model="fields.name"
          @clear="clear"
          :readonly="done"
          type="text"
          :invalid="invalid['name']"
          name="name"
          label="Your Name"
          />
      </FormGroup>
      <FormGroup>
        <FormInput
          v-model="fields.email"
          @clear="clear"
          :readonly="done"
          type="text"
          :invalid="invalid['email']"
          name="email"
          label="Your Email"
          />
      </FormGroup>
      <FormGroup>
        <textarea
          :readonly="done"
          v-model="fields.message"
          @focus="clear('message')"
          :class="{ 'form-control': true, 'is-invalid': invalid['message'] }"
          id="message"
          placeholder="Your Message"
          aria-label="Your Message"
          rows="8">
        </textarea>
        <div class="help-block with-errors">{{ invalid["message"] }}</div>
      </FormGroup>
      <div class="col-md-12">
        <div class="submit-button text-center">
          <button class="btn btn-common" id="submit" @click="send()" v-show="!done">
            Send Message
          </button>
          <div class="h3 text-center" v-show="done">{{ result }}</div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from '../components/FormGroup.vue'
import FormInput from '../components/FormInput.vue'
import { sendForm } from "../api.js"

const required = (value, message) => {
  return !value || value.lenght === 0 ? message : null
}

export default {
  components: {
    FormGroup,
    FormInput,
  },
  data: () => ({
    done: false,
    result: null,
    fields: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      name: (value) => required(value, "Please enter your name"),
      email: (value) => required(value, "Please enter your email"),
      message: (value) => required(value, "Please enter your message"),
    },
    invalid: {},
  }),
  methods: {
    ok() {
      this.result = "Thanks"
      this.done = true
    },
    error(error) {
      this.result = (error && error.message) || "Error"
      this.done = true
    },
    clear(field) {
      delete this.invalid[field]
    },
    validate() {
      for (const field in this.fields) {
        this.invalid[field] = this.validators[field](this.fields[field])
      }

      return this.isValid()
    },
    isValid()
    {
      for (const field in this.invalid) {
        if (this.invalid[field] !== null) {
          return false
        }
      }

      return true
    },
    send() {
      if (!this.validate()) {
        return
      }

      sendForm(this.fields)
        .then((response) => {
          response.status === 200 ? this.ok() : this.error()
        })
        .catch((error) => this.error(error))
    },
  },
}
</script>
