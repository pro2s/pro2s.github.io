<template>
  <transition name="modal">
    <div class="modal-mask" v-if="show" @click="$emit('close')">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header" v-if="header === undefined || header">
            <slot name="header">
              <h5 class="modal-title">Modal title</h5>
            </slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button type="button" class="close body" data-dismiss="modal" aria-label="Close" @click="$emit('close')" v-if="!(header === undefined || header)">
              <span aria-hidden="true">&times;</span>
            </button>
            <slot name="body">
              <p>Modal body text goes here.</p>
            </slot>
          </div>
          <div class="modal-footer" v-if="footer === undefined || footer">
            <slot name="footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close')">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["footer", "header", "show"],
   beforeMount() {
    window.addEventListener('keyup', this.onKeyUp);
  },
  beforeUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    onKeyUp (event) {
      if (event.which === 27) {
        this.$emit('close');
      }
    },
  },
}
</script>

<style scoped>
.close.body {
  position: absolute;
  right: 3px;
  top: 0px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-dialog,
.modal-leave-active .modal-dialog {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>