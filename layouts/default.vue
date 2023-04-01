<template>
  <div
    :class="[$i18n.locale == 'ar' ? 'rtl' : 'ltr']"
    class="relative flex flex-col justify-between spae-y-20"
  >
    <div class="h-full w-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}
</style>
