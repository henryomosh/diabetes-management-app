const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456"
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    password: "123456"
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    password: "123456"
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442c",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    password: "123456"
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    password: "123456"
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    password: "123456"
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    password: "123456"
  }
];

const patients = [
  {
    patient_id: users[2].id,
    name: "Delba de Oliveira",
    gender: "Female",
    phone: "+36 30 123 4567",
    dob: "1998-01-01",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    patient_id: users[3].id,
    name: "Lee Robinson",
    gender: "Male",
    phone: "+36 30 123 4567",
    dob: "1992-01-01",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png"
  },
  {
    patient_id: users[4].id,
    name: "Michael Novotny",
    gender: "Male",
    phone: "+36 30 123 4567",
    dob: "1985-01-01",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png"
  },
  {
    patient_id: users[5].id,
    name: "Amy Burns",
    gender: "Female",
    phone: "+36 30 123 4567",
    dob: "1987-01-01",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png"
  },
  {
    patient_id: users[6].id,
    name: "Balazs Orban",
    gender: "Male",
    phone: "+36 30 123 4567",
    dob: "1990-01-01",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png"
  }
];

const others = [
  {
    user_id: 1,
    label: "hba1c",
    name: "HbA1c",
    amount: 56,
    units: "%",
    time: "02:21",
    date: "2025-04-10"
  },
  {
    user_id: 1,
    label: "bp",
    name: "Blood Pressure",
    amount: 120,
    units: "bpm",
    time: "02:30",
    date: "2025-04-10"
  }
];

export { users, patients, others };
