import { defineStore } from 'pinia';
import type { Specialisation } from '@/entities/specialisation';

export const useSpecialisationFilterStore = defineStore('specialisationFilter', {
  state: () => ({
    specialisations: [] as Specialisation[],
    selectedSpecialisationId: null as number | null,
  }),
  actions: {
    selectSpecialisation(id: number | null) {
      this.selectedSpecialisationId = id;
    }
  }
});