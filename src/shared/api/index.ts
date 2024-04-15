import type { Specialisation } from '@/entities/specialisation';
import type { Doctor } from '@/entities/doctor';

/* Здесь я имитирую загрузку данных из локального файла JSON. 
В реальном приложении я использовал бы fetch() для получения данных с сервера */

// Имитация асинхронной загрузки данных специальностей
export async function fetchSpecialisations(): Promise<Specialisation[]> {
  const specialisations = await import('@/shared/mock/specialisations.json');
  return specialisations.default;
}

// Имитация асинхронной загрузки данных врачей
export async function fetchDoctors(): Promise<Doctor[]> {
  const doctors = await import('@/shared/mock/doctors.json');
  return doctors.default;
}