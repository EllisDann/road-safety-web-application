import "./About.css";

export default function About() {
  const credentials = [
    {
      title: "Qualified Professionals",
      description: "Every M&S Traffic employee has MCIHT certification"
    },
    {
      title: "Competent Professionals",
      description: "HA Certificate of competency is mandatory for every employee"
    },
    {
      title: "On Time",
      description: "We aim to consistently surpass expectations and deliver all audits on time"
    },
    {
      title: "On Budget",
      description: "We are renowned for our value for money and high quality service"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              M&S Traffic is a specialised consultancy that concentrates on solving complex traffic issues 
              that affect the multi-variable and often complicated task of getting from A to B in a safe, 
              cost-effective and sustainable manner.
            </p>
            <p>
              We deliver multi-disciplinary consultancy services to both public and private sector clients. 
              Although a young company we are rapidly establishing a reputation for applying pragmatism and 
              commerciality to traffic problems, delivering timely and cost-effective solutions that exceed 
              our clients' expectations.
            </p>
            <p>
              With over 50 years of engineering experience in accident investigation and analysis, we specialise 
              in five core traffic disciplines: Road Safety, Traffic Management, Transportation Policy, 
              Modal Shift and Parking.
            </p>
          </div>
          <div className="credentials-grid">
            {credentials.map((credential, index) => (
              <div key={index} className="credential-card">
                <h3>{credential.title}</h3>
                <p>{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
