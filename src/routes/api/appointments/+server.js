import { json } from "@sveltejs/kit";

export async function GET() {
  const r = await getData();
  return json(r);
}

function getData() {
  return new Promise((resolve) => {
    const t = setTimeout(() => {
      clearTimeout(t);
      resolve([
        {
          "name": "John Doe",
          "appointmentDate": "2023-10-30T10:00:00Z",
          "location": "123 Main Street",
          "email": "john.doe@example.com",
          "mobile": "123-456-7890",
          "status": "pending"
        },
        {
          "name": "Jane Doe",
          "appointmentDate": "2023-10-30T11:00:00Z",
          "location": "456 Elm Street",
          "email": "jane.doe@example.com",
          "mobile": "987-654-3210",
          "status": "confirmed"
        },
        {
          "name": "Peter Parker",
          "appointmentDate": "2023-10-30T12:00:00Z",
          "location": "789 Oak Street",
          "email": "peter.parker@example.com",
          "mobile": "012-345-6789",
          "status": "cancelled"
        },
        {
          "name": "Mary Jane Watson",
          "appointmentDate": "2023-10-30T13:00:00Z",
          "location": "1011 Maple Avenue",
          "email": "maryjane.watson@example.com",
          "mobile": "456-789-0123",
          "status": "pending"
        },
        {
          "name": "Bruce Wayne",
          "appointmentDate": "2023-10-30T14:00:00Z",
          "location": "1112 Gotham Alley",
          "email": "bruce.wayne@example.com",
          "mobile": "987-012-3456",
          "status": "confirmed"
        },
        {
          "name": "Clark Kent",
          "appointmentDate": "2023-10-30T15:00:00Z",
          "location": "1213 Metropolis Avenue",
          "email": "clark.kent@example.com",
          "mobile": "012-345-6789",
          "status": "cancelled"
        },
        {
          "name": "Diana Prince",
          "appointmentDate": "2023-10-30T16:00:00Z",
          "location": "1314 Themyscira Island",
          "email": "diana.prince@example.com",
          "mobile": "456-789-0123",
          "status": "pending"
        },
        {
          "name": "Arthur Curry",
          "appointmentDate": "2023-10-30T17:00:00Z",
          "location": "1415 Atlantis",
          "email": "arthur.curry@example.com",
          "mobile": "987-012-3456",
          "status": "confirmed"
        },
        {
          "name": "Barry Allen",
          "appointmentDate": "2023-10-30T18:00:00Z",
          "location": "1516 Central City",
          "email": "barry.allen@example.com",
          "mobile": "012-345-6789",
          "status": "cancelled"
        },
        {
          "name": "Hal Jordan",
          "appointmentDate": "2023-10-30T19:00:00Z",
          "location": "1617 Coast City",
          "email": "hal.jordan@example.com",
          "mobile": "456-789-0123",
          "status": "pending"
        }
      ]);
    }, 2000);
  });
}