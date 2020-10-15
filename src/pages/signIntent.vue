<template>
  <div>
    <choose-header></choose-header>
    <choose-footer></choose-footer>
  </div>
</template>

<script>
import ChooseHeader from '../components/ChooseHeader'
import ChooseFooter from '../components/ChooseFooter'
export default {
  name: 'signIntent',
  components: {
    ChooseHeader,
    ChooseFooter
  }
}
</script>

<style>

</style>