interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// para no repetir codigo podemos extender los tipos de BasicAddress
// con la palabra clave extends, like this:

interface AddressWithUnit extends BasicAddress {
  unit: string;
}