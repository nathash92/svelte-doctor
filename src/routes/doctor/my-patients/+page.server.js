/** @type {import('./$types').PageServerLoad} */
export function load() {
  const d = getData();
  return {
    patients: d,
    pageTitle: 'My Patients',
    breadcrumbs: [{
      name: 'Home',
      path: '/'
    }, {
      name: 'My Patients',
    }]
  }
}

function getData() {
  return [
    {
      "name": "John Doe",
      "id": 1,
      "location": "New York",
      "mobile": "555-555-5555",
      "age": 30,
      "blood_group": "A+"
    },
    {
      "name": "Jane Smith",
      "id": 2,
      "location": "Los Angeles",
      "mobile": "555-123-4567",
      "age": 25,
      "blood_group": "B-"
    },
    {
      "name": "Bob Johnson",
      "id": 3,
      "location": "Chicago",
      "mobile": "555-789-1234",
      "age": 40,
      "blood_group": "O+"
    },
    {
      "name": "Mary Davis",
      "id": 4,
      "location": "Houston",
      "mobile": "555-999-8888",
      "age": 35,
      "blood_group": "AB-"
    },
    {
      "name": "Sarah Wilson",
      "id": 5,
      "location": "Miami",
      "mobile": "555-321-9876",
      "age": 28,
      "blood_group": "A-"
    },
    {
      "name": "Michael Brown",
      "id": 6,
      "location": "San Francisco",
      "mobile": "555-888-7777",
      "age": 45,
      "blood_group": "B+"
    },
    {
      "name": "Lisa Johnson",
      "id": 7,
      "location": "Dallas",
      "mobile": "555-666-4444",
      "age": 32,
      "blood_group": "O-"
    },
    {
      "name": "James Smith",
      "id": 8,
      "location": "Seattle",
      "mobile": "555-222-3333",
      "age": 50,
      "blood_group": "AB+"
    },
    {
      "name": "Emily White",
      "id": 9,
      "location": "Boston",
      "mobile": "555-777-1111",
      "age": 27,
      "blood_group": "A+"
    },
    {
      "name": "David Johnson",
      "id": 10,
      "location": "Atlanta",
      "mobile": "555-444-9999",
      "age": 38,
      "blood_group": "B+"
    }
  ];
}