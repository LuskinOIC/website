import MinimalCard from "./MinimalCard";

const CardsRow = ({ title, cards }) => {
  return (
    <section className="block px-5 md:px-32">
      <h1 className="mb-2 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
        {title}
      </h1>
      <div className="flex flex-wrap md:flex-row-4 md:gap-10">
        {cards.map(
          (card) =>
            card.sys &&
            card.fields && (
              <MinimalCard
                key={card.sys.id}
                cardContent={{
                  title: card.fields.name,
                  cardPhoto: card.fields.portrait,
                }}
              />
            ),
        )}
      </div>
    </section>
  );
};

export default CardsRow;
