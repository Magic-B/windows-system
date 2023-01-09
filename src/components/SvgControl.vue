<template>
  <component :is="`svg-${name}`"></component>
</template>

<script>
import SvgLeft from 'app/public/icons/svg/SvgLeft.vue'
import SvgRight from 'app/public/icons/svg/SvgRight.vue'
import SvgTop from 'app/public/icons/svg/SvgTop.vue'

export default {
  name: 'SvgControl',
  props: ['name'],
  components: {
    SvgLeft, SvgRight, SvgTop
  }
}
</script>

<style lang="scss" scoped>

</style>
