<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="$emit('clear', name)"
    :readonly="readonly"
    :type="type"
    :class="{'form-control': true, 'is-invalid': invalid}"
    :id="name"
    :name="name"
    :placeholder="label"
    :aria-label="label"
  />
  <div class="help-block with-errors">{{ invalid || '' }}</div>
</template>

<script>
export default {
  props: ["modelValue", "readonly", "type", "invalid", "name", "label"],
  emits: ["clear", "update:modelValue"]
};
</script>
