<template>
  <div>
    <h1>Hello !!!, {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    }
  }
}
</script>