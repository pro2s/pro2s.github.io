import demo from './assets/demo.json'
import init from './plain.js'
import { createApp, reactive } from 'vue'

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

const data = reactive(demo);
const create = (Component, mountTo) => createApp(Component).provide('data', data).mount(mountTo)

create(Nav, '#navigation')
create(About, '#info')
create(Services, '#services')
create(Features, '#features')
create(Timeline, '#timeline')
create(Progress, "#progress")
create(Works, "#works")
create(Video, "#video")
create(Pricing, '#pricing')
create(Counters, '#counters')

create(Team, '#team')
create(Testimonial, '#testimonial')
create(Blog, '#blog')

create(Contact, '#contact')
create(Footer, '#footer')

init()