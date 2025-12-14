<script setup>
import { ref } from 'vue'
import SendButtonComponent from '@/components/SendButtonComponent.vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const HCAPTCHA_SITEKEY = import.meta.env.VITE_HCAPTCHA_SITEKEY
const name = ref('')
const email = ref('')
const message = ref('')
const hCaptchaToken = ref(null)
const hCaptchaMessage = ref(false)
const btn = ref()

/* captcha handlers */
const onVerify = (token) => {
  hCaptchaToken.value = token
}

const submitForm = async () => {
  if (!hCaptchaToken.value) {
    hCaptchaMessage.value = true
    throw new Error('Please complete the captcha')
  }
  hCaptchaMessage.value = false

  await btn.value.submit(async () => {
    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
        subject: 'Someone wants to contact me',
        from_name: 'My portfolio website',
        'h-captcha-response': hCaptchaToken.value,
      }),
    })

    const result = await resp.json()

    if (!result.success) {
      throw new Error(result.message || 'Submission failed')
    }
  })

  name.value = ''
  email.value = ''
  message.value = ''
  hCaptchaToken.value = null
}
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="rounded-lg bg-gray-800 p-8 inset-shadow-sm inset-shadow-cyan-200 md:col-span-3"
  >
    <h2 class="mb-8 text-2xl font-semibold">Send me a message</h2>
    <div class="space-y-5">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-400">Your name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          value=""
          onchange="this.setAttribute('value', this.value);"
          class="mt-1 w-full rounded-lg border border-b-gray-500 px-4 py-2 placeholder-cyan-200/75 focus:border-cyan-600 focus:outline-none"
          placeholder="Mario Rossi"
          autocomplete="name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-400">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="mt-1 w-full rounded-lg border border-b-gray-500 px-4 py-2 placeholder-cyan-200/75 focus:border-cyan-600 focus:outline-none"
          placeholder="email@example.com"
          autocomplete="email"
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-400">Your message</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          rows="5"
          class="mt-1 max-h-50 min-h-20 w-full rounded-lg border border-b-gray-500 px-4 py-2 placeholder-cyan-200/75 focus:border-cyan-600 focus:outline-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>
    </div>

    <VueHcaptcha
      :sitekey="HCAPTCHA_SITEKEY"
      class="h-captcha mt-4 flex justify-center"
      data-theme="dark"
      @verify="onVerify"
    />

    <div v-if="hCaptchaMessage" class="mt-2 w-full text-center text-red-500">
      Please complete the captcha
    </div>

    <SendButtonComponent ref="btn" />

    <div class="mt-6 border-t border-gray-600 pt-6">
      <p class="text-center text-sm text-gray-400">I typically respond within 24-48 hours</p>
    </div>
  </form>
</template>
