<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  import { useSpecialisationFilterStore } from '../model';
  import type { Specialisation } from '@/entities/specialisation';

  export default defineComponent({
    props: {
      specialisation: {
        type: Object as PropType<Specialisation>,
        required: true,
      },
      isDisabled: Boolean,
    },
    setup(props) {
      const store = useSpecialisationFilterStore();
      const selectSpecialisation = () => {
        store.selectSpecialisation(props.specialisation.id);
      };
      return { selectSpecialisation };
    },
  });
</script>

<template>
  <button 
    :disabled="isDisabled" 
    @click="selectSpecialisation"
    class="px-4 py-2 bg-amber-600 hover:bg-amber-800 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed m-2"
  >
    {{ specialisation.name }}
  </button>
</template>
