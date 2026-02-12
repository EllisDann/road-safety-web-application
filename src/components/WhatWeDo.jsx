import "./WhatWeDo.css";

export default function WhatWeDo() {
  const services = [
    {
      title: "Road Safety Audit",
      description: "Comprehensive safety audits at all stages from preliminary design to post-construction monitoring"
    },
    {
      title: "Accident Investigation",
      description: "Collection and analysis of accident data with remedial scheme development and evaluation"
    },
    {
      title: "Traffic Management",
      description: "Traffic calming schemes, management solutions and network optimization"
    },
    {
      title: "Strategic Guidance",
      description: "Transport policy advice and strategic planning for public and private sector clients"
    },
    {
      title: "Parking Solutions",
      description: "Tailored parking solutions including residents, customers, loading and event parking"
    },
    {
      title: "Motorcycle Audits",
      description: "Specialized audits focusing on motorcycle safety and infrastructure requirements"
    }
  ];

  return (
    <section id="whatwedo" className="whatwedo">
      <div className="whatwedo-container">
        <h2>What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
