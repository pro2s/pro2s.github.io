 <template>
  <div>
    <SkillCircle
      v-for="skill in skills"
      :key="skill.label"
      :label="skill.label"
      :class="[skill.class]"
      :percent="skill.percent"
      size="60"
      stroke="3"
      duration="2"
      delay="1"
    />
  </div>
</template>

<script>
import SkillCircle from "./SkillCircle.vue";

export default {
  props: ["skills"],
  components: {
    SkillCircle,
  },
};
</script>
