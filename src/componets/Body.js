const Body = ({ active }) => {
  const langDescription = [
    { text: "Сметана", desc: "Добавка", price: "53TL" },
    { text: "Kaimak", desc: "Katki", price: "56TL" },
    { text: "Cream", desc: "Suplements", price: "5TL" },
  ];
  return (
    <>
      <div>{langDescription[active].text}</div>
      <div>{langDescription[active].desc}</div>
      <div>{langDescription[active].price}</div>
    </>
  );
};

export default Body;
