import demo from './assets/demo.json'
import init from './plain.js'
import { createApp } from 'vue'

import './scss/main.scss'
import './scss/responsive.scss'

import Nav from './containers/Nav.vue'
import About from './containers/About.vue'
import Services from './containers/Services.vue'
import Features from './containers/Features.vue'
import Timeline from './containers/Timeline.vue'
import Progress from './containers/Progress.vue'
import Works from './containers/Works.vue'
import Video from './containers/Video.vue'
import Pricing from './containers/Pricing.vue'
import Counters from './containers/Counters.vue'
import Team from './containers/Team.vue'
import Testimonial from './containers/Testimonial.vue'
import Blog from './containers/Blog.vue'
import Contact from './containers/Contact.vue'
import Footer from './containers/Footer.vue'

createApp(Nav).provide('links', demo.links).mount('#navigation')
createApp(About).mount('#info')
createApp(Services).mount('#services')
createApp(Features).mount('#features')
createApp(Timeline).mount("#timeline")
createApp(Progress).mount("#progress")
createApp(Works).mount("#works")
createApp(Video).mount("#video")
createApp(Pricing).mount('#pricing')
createApp(Counters).mount('#counters')
createApp(Team).mount('#team')
createApp(Testimonial).mount('#testimonial')
createApp(Blog).mount('#blog')
createApp(Contact).mount('#contact')
createApp(Footer).provide('links', demo.links).mount('#footer')

init()