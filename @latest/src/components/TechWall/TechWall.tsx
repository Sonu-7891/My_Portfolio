import { TECH_ROW_1, TECH_ROW_2 } from '@/data/portfolioData';

const TechBadge = ({ icon, name }: { icon: string; name: string }) => (
  <div className="tech-badge">
    <span className="tech-badge-icon">{icon}</span>
    <span className="tech-badge-name">{name}</span>
  </div>
);

const TechWall = () => {
  const row1 = [...TECH_ROW_1, ...TECH_ROW_1];
  const row2 = [...TECH_ROW_2, ...TECH_ROW_2];

  return (
    <section id="tech-wall">
      <div className="section-wrap" style={{ marginBottom: '40px' }}>
        <div className="section-label fade-up">Tech Stack</div>
        <h2 className="section-title fade-up">Technologies I Build With</h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {row1.map((tech, i) => (
            <TechBadge key={`r1-${tech.name}-${i}`} icon={tech.icon} name={tech.name} />
          ))}
        </div>
        <div className="marquee-track reverse">
          {row2.map((tech, i) => (
            <TechBadge key={`r2-${tech.name}-${i}`} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWall;
