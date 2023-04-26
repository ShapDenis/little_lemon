const nameToURL = (name) => {
  const lowercase = name.toLowerCase();
  return lowercase.replace(/\s+/g, "-")
};

const names = [
  {name: "Home"},
  {name: "Reservations"},
  {name: "Contact"},
];

const links = names.map((item) => {
  return {
    ...item,
    id: item.name,
    url: nameToURL(item.name) === "home" ? "/" : nameToURL(item.name),
  };
});

export default links;
