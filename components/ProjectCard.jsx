export default function ProjectCard({ project }) {
  const { id, title, category, description, details, image, links } = project;

  return (
    <article className="project-card" id={id} aria-labelledby={id + '-title'}>
      {category && <p className="label">{category}</p>}
      <h3 id={id + '-title'}>{title}</h3>
      <p>{description}</p>
      {(details || image) && (
        <details className="project-details">
          <summary>About {title}</summary>
          {details && <p>{details}</p>}
          {image && <img {...image} loading="lazy" decoding="async" />}
        </details>
      )}
      {links?.length > 0 && (
        <ul className="project-links">
          {links.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
        </ul>
      )}
    </article>
  );
}
