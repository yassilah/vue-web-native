<template web>
  <h1>Bonjour sur {{platform}}!</h1>
</template>

<template native>
  <Label class="h1">Bonjour sur {{platform}}!</Label>
</template>

<script>
export default {
  data() {
    return {
      platform: CURRENT_PLATFORM
    }
  }
}
</script>

<style lang="sass" native>
.h1
  color: blue
</style>

<style lang="sass" web>
h1
  color: red
</style>
