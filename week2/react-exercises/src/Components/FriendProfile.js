import React from 'react';

export default function FriendProfile({ name, location, email, phone }) {
  return (
    <ul>
      <li> First name: {name.first}</li>
      <li> Last Name: {name.last}</li>
      <li>
        Address: {location.street.name}, {location.postcode}, {location.city}
      </li>
      <li> Email: {email}</li>
      <li> Phone: {phone}</li>
    </ul>
  );
}
