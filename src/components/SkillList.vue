 <template>
  <div>
    <SkillCircle v-for="skill in skills" :key="skill.label" :label="skill.label" :class="[skill.class, 's60']"
      size="60" stroke="3" :percent="skill.percent" />
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

<style  scoped>
.s60 {
  width: 60px;
  height: 60px;
}
</style>