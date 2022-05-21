interface ICreateSchedulingDTO {
  type: string;
  description: string;
  price: number;
  service_provider: string;
  appointments: Date[];
}

export { ICreateSchedulingDTO };
