import "./WhatWeDo.css";

export default function WhatWeDo() {
  const mainService = {
    title: "Road Safety Audit",
    description: "We have developed a reputation as experts in the field of Road Safety Audit and have carried out extensive Road Safety Audits for a diverse range of clients throughout the UK."
  };

  const otherServices = [
    {
      title: "Accident Investigation",
      description: "Collection and analysis of accident data with remedial scheme development"
    },
    {
      title: "Road Safety Engineering",
      description: "Traffic management and calming schemes with risk assessment activities"
    },
    {
      title: "Pedestrian Audits",
      description: "Specialized audits focusing on pedestrian safety and infrastructure"
    },
    {
      title: "Cyclist Audits", 
      description: "Vulnerable road user audits addressing cyclist safety needs"
    },
    {
      title: "Motorcycle Audits",
      description: "Specialized audits considering motorcycle dynamics and safety"
    }
  ];

  return (
    <section id="whatwedo" className="whatwedo">
      <div className="whatwedo-container">
        <h2>What We Do</h2>
        
        <div className="main-service">
          <h3>{mainService.title}</h3>
          <p className="main-description">{mainService.description}</p>
        </div>

        <div className="other-services">
          <h3>Other Services</h3>
          <div className="services-grid">
            {otherServices.map((service, index) => (
              <div key={index} className="service-card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
