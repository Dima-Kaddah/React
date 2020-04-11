import React from 'react';

export default function FriendProfile({
  firstName,
  lastName,
  street,
  city,
  postcode,
  email,
  phone,
}) {
  return (
    <ul>
      <li> First name: {firstName}</li>
      <li> Last Name: {lastName}</li>
      <li>
        Address: {street}, {postcode}, {city}
      </li>
      <li> Email: {email}</li>
      <li> Phone: {phone}</li>
    </ul>
  );
}
