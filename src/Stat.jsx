export default function Stat({ icon, category, score, color }) {
  return (
    <article className="stat" style={{ backgroundColor: `${color}10` }}>
      <div className="icon-category">
        <img src={icon} />
        <h5 style={{ color: `${color}` }}>{category}</h5>
      </div>
      <div className="stat-score">
        {score} <span className="hundred"> / 100</span>
      </div>
    </article>
  );
}
