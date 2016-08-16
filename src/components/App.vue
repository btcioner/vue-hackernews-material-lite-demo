<script>

  export default {
    name: "App",

    components: {
    }
  }
</script>

<template>
<div  class="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
      <div class="mdl-layout--large-screen-only mdl-layout__header-row">
      </div>
      <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        <h3>Hacker News</h3>
      </div>
    </header>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</div>
</template>
