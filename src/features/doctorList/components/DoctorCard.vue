<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  import type { Doctor } from '@/entities/doctor';

  export default defineComponent({
    props: {
      doctor: {
        type: Object as PropType<Doctor>,
        required: true,
      },
      specializations: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
  });
</script>

<template>
  <div class="p-4 border rounded shadow flex flex-col items-center space-y-2 w-full max-w-sm">
    <img class="w-40 h-40 rounded-full" src="https://via.placeholder.com/150" alt="Фото доктора">
    <p class="text-base text-center mt-2">Специализации: {{ specializations.join(', ') }}</p>
    <h2 class="text-lg text-center">{{ doctor.lastName }} {{ doctor.firstName }} {{ doctor.middleName }}</h2>
  </div>
</template>

