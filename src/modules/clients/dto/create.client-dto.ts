export class CreateClientDto {
  name: string;
  rut: string;
  email: string;
  address: AddressDto;
}

class AddressDto {
  city: string;
  street: string;
  houseNumber: number;
}
