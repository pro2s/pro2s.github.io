import init from './plain.js'
import { createApp } from 'vue'

import './scss/main.scss'
import './scss/responsive.scss'

import Serices from './containers/Services.vue'
import Features from './containers/Features.vue'
import Timeline from './containers/Timeline.vue'
import Progress from './containers/Progress.vue'
import Portfolio from './containers/Portfolio.vue'
import Pricing from './containers/Pricing.vue'
import Counters from './containers/Counters.vue'
import Team from './containers/Team.vue'
import Testimonial from './containers/Testimonial.vue'
import Blog from './containers/Blog.vue'
import Contacts from './containers/Contacts.vue'
import ContactForm from './containers/ContactForm.vue'

createApp(Serices).mount('#services')
createApp(Features).mount('#features')
createApp(Timeline).mount("#timeline")
createApp(Progress).mount("#progress")
createApp(Portfolio).mount("#portfolios")
createApp(Pricing).mount('#pricing')
createApp(Counters).mount('#counters')
createApp(Team).mount('#team')
createApp(Testimonial).mount('#testimonial')
createApp(Blog).mount('#blog')
createApp(Contacts).mount('#contacts')
createApp(ContactForm).mount('#contactForm')

init()