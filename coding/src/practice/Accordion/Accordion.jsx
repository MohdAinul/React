import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 2,
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: 3,
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];
export default function Accordion() {
  const [openids, setOpenids] = useState([]);

  function handleToggle(id) {
    if (openids.includes(id)) {
      setOpenids(openids.filter((item) => item !== id));
    } else {
      setOpenids([...openids, id]);
    }
  }
  return (
    <div>
      {sections.map((section) => {
        const isopen = openids.includes(section.id);
        return (
          <div key={section.id}>
            <button onClick={() => handleToggle(section.id)}>
              {" "}
              {section.title}
            </button>
            {isopen && <p> {section.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
