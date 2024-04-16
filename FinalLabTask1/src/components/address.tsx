import { ReactNode } from "react";

interface AddressProps {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  children?: ReactNode;
}

function Address({
  street,
  city,
  postalCode,
  country,
  children,
}: AddressProps) {
  return (
    <>
      <div>
        <h4>Address:</h4>
        <p>Street: {street}</p>
        <p>City: {city}</p>
        <p>Postal Code: {postalCode}</p>
        <p>Country: {country}</p>
        {children}
      </div>
    </>
  );
}

export default Address;
