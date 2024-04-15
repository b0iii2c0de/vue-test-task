export interface Doctor {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  specializationList: Array<{ id: number }>; // или number[]
}
