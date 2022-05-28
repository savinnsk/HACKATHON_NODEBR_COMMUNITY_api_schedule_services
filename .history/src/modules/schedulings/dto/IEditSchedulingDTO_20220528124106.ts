export interface IEditSchedulingDTO {
  service_provider_id: string;
  scheduling_id: string;
  type: string;
  description: string;
  price: number;
  available_status: boolean;
}
