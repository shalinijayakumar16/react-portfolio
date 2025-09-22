import React, { useState } from "react";


const talks = [
  {
    title: "Impact CIT",
    description:
      "Featured in my first professional interview, presenting insights on our ongoing project and organizational vision, effectively communicating technical concepts and goals to a broader audience.",
    image: "src/assets/impact_cit.jpg",
    link: "https://m.youtube.com/watch?v=NjamTgUH8S4&fbclid=PAT01DUAM30dpleHRuA2FlbQIxMAABpzUr6gvvkS7f5qEW-EfigHZRilU7U7jbkFBAR5qFy3zsK9RDlKOEQnCHZALR_aem_ni68gyN1WwSXmTlj6LWtZw",
  },
  {
    title: "NASSCOM Technology Conference 2025",
    description:
      "Invited to speak at NASSCOM Technology Conference 2024; delivered a 15-minute session on ULOG3 covering its inception, team, and milestones—an inspiring experience that strengthened public speaking and leadership presence.",
    image: "src/assets/nasscom.jpg",
    link: "https://www.linkedin.com/posts/mithun-vimalan-82b01a27a_gratefulbeyondwords-dreamsinthemaking-blessedmoments-activity-7260620450093834240-VP65?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdvkXQBGLWOxISaqO-1zQdGB2ZHHfwnQrw",
  },
  {
    title: "Innovfest Amplified 2024",
    description:
      "Showcased as the youngest startup at Innovfest Amplified 2024 (CII & Yi), sharing space with industry leaders like TuTr Hyperloop and SpanTrik.",
    image: "src/assets/innovfest.jpg",
    link: "https://www.linkedin.com/posts/mithun-vimalan-82b01a27a_innovfestamplified2024-cubesat-spacetech-activity-7277599312996397056-GZrJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdvkXQBGLWOxISaqO-1zQdGB2ZHHfwnQrw",
  },
  {
    title: "SyCon - Lakshya SSN 2025",
    description:
      "Invited to deliver a talk on ULOG3 at SSN College of Engineering (SyCon – Lakshya SSN), marking my first formal recognition from a reputed institution.",
    image: "src/assets/sycon.jpg",
    link: "https://www.linkedin.com/posts/mithun-vimalan-82b01a27a_entrepreneurshipinaihardware-ssncollegeofengineering-activity-7277599312996397056-GZrJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdvkXQBGLWOxISaqO-1zQdGB2ZHHfwnQrw",
  },
  {
    title: "Founderx Global Conference 2025",
    description:
      "Invited to talk at the FounderX Global Conference 2025, held at Sri Aurobindo Auditorium, Auroville, Tamil Nadu, on June 21–22, 2025. Grateful to Dakshin S P Lakshman for the invitation to share our journey and vision with global founders and innovators.",
    image: "src/assets/founderx.jpg",
    link: "https://www.linkedin.com/posts/mithun-vimalan-82b01a27a_founderx-founderxglobalconference-founderxglobalconference2025-activity-7338551479043051521-LZzq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdvkXQBGLWOxISaqO-1zQdGB2ZHHfwnQrw",
  },
];

export default function TechTalksLayout() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="techtalks" className="section">
      <div className="wrapper">
        <div className="title">
          <h3>Tech Talks</h3>
        </div>
        <div className="talks-grid">
          {talks.map((talk, index) => (
            <div key={index} className="talk-card">
              <div className="talk-img">
                <img src={talk.image} alt={talk.title} />
              </div>
              <div className="talk-info">
                <h4>{talk.title}</h4>
                <p className={expandedIndex === index ? "expanded" : "collapsed"}>
                  {talk.description}
                </p>
                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                >
                  Visit Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
