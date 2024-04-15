<script lang="ts">
  import { defineComponent, computed, onMounted, ref } from 'vue';
  import { useDoctorListStore } from '@/features/doctorList/model';
  import { useSpecialisationFilterStore } from '@/features/specialisationFilter/model';
  import DoctorCard from '@/features/doctorList/components/DoctorCard.vue';
  import SpecialisationButton from '@/features/specialisationFilter/components/SpecialisationButton.vue';
  import { fetchSpecialisations } from '@/shared/api';
  import type { Doctor } from '@/entities/doctor';
  import type { Specialisation } from '@/entities/specialisation';

  export default defineComponent({
    components: { DoctorCard, SpecialisationButton },
    setup() {
      const doctorListStore = useDoctorListStore();
      const specialisationFilterStore = useSpecialisationFilterStore();

      // Предполагается, что данные специализаций загружаются асинхронно
      const specialisations = ref<Specialisation[]>([]);

      onMounted(async () => {
        // Загрузка данных специализаций из локального файла или API
        specialisations.value = await fetchSpecialisations();
        await doctorListStore.initDoctors();
      });

      const filteredDoctors = computed(() => {
        if (!specialisationFilterStore.selectedSpecialisationId) {
          return doctorListStore.doctors;
        }
        return doctorListStore.doctors.filter(doctor =>
          doctor.specializationList.some(
            (spec: { id: number }) => spec.id === specialisationFilterStore.selectedSpecialisationId
          )
        );
      });

      const doctorSpecialisations = computed(() => {
        return doctorListStore.doctors.flatMap(doctor => doctor.specializationList.map(spec => spec.id));
      });

      const getSpecializations = (doctor: Doctor) => {
        return doctor.specializationList.map(spec => {
          const specialisation = specialisations.value.find((s: Specialisation) => s.id === spec.id);
          return specialisation ? specialisation.name : 'Unknown';
        });
      };

      return { filteredDoctors, getSpecializations, doctorSpecialisations, specialisations };
    },
  });
</script>

<template>
  <div class="flex flex-col md:flex-row justify-center items-start mx-auto">
    <div class="w-full md:w-1/4 flex flex-wrap justify-center md:justify-start md:flex-col items-center md:items-start">
      <SpecialisationButton
        v-for="specialisation in specialisations"
        :key="specialisation.id"
        :specialisation="specialisation"
        :isDisabled="!doctorSpecialisations.includes(specialisation.id)"
        class="m-1"
      />
    </div>
    <div class="w-full md:w-3/4 flex flex-wrap justify-center">
      <DoctorCard
        v-for="doctor in filteredDoctors"
        :key="doctor.id"
        :doctor="doctor"
        :specializations="getSpecializations(doctor)"
        class="m-2"
      />
    </div>
  </div>
</template>
