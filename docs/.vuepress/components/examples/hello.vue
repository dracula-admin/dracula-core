<template>
  <div>
    <fieldset>
      <legend>Message</legend>
      <input type="text" v-model="msg">
    </fieldset>
    <DracHello :msg="msg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style>

</style>