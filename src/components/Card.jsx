export default function Card({ item }) {
  return (
    <article className="card">
      <div className="card-top">
        <img
          className="card-image"
          src={item.img}
          alt={`Image of ${item.name}`}
        />
        <p className="card-description">{item.description}</p>
      </div>

      <div className="card-bottom">
        <p className="name">{item.name}</p>
        <p className="title">{item.title}</p>
      </div>
    </article>
  );
}
