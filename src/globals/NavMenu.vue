<template>
  <p>{{ t('hello') }}</p>
  <button @click="changeLanguage">Change langauge</button>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    
    return { t }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale === "ara" ? this.$i18n.locale = "en" : this.$i18n.locale = "ara";
    }
  }
})
</script>
