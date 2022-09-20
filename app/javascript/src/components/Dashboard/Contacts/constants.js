export const CONTACTS_DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    email: "albertronald@borer.com",
    created_at: "Feb 5, 2021",
  },
  {
    name: "Jacob Jones",
    role: "User",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    email: "albertjacob@borer.com",
    created_at: "Feb 5, 2021",
  },
];

export const CONTACTS_DETAILS = Array(10)
  .fill(CONTACTS_DATA)
  .flat()
  .map((contact, idx) => ({ ...contact, id: idx }));
