 <template>
  <div>
    <SkillCircle v-for="skill in skills" :key="skill.label" :label="skill.label" :class="skill.class" />
  </div>
</template>

<script>
import SkillCircle from "./SkillCircle.vue"

export default {
  props: ['skills'],
  components: {
    SkillCircle,
  }
}
</script>
