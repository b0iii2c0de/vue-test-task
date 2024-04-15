import { defineStore } from 'pinia';
import { fetchDoctors } from '@/shared/api';
import type { Doctor } from '@/entities/doctor';

export const useDoctorListStore = defineStore('doctorList', {
  state: () => ({
    doctors: [] as Doctor[],
  }),
  actions: {
    async initDoctors() {
      this.doctors = await fetchDoctors();
    }
  }
});