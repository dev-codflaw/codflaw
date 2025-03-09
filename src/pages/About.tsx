import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/aboutus.md") // Ensure the .md file is placed in the `public` folder
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="p-8 text-white">
      <div className="flex justify-center items-center min-h-screen text-white px-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">About us</h1>
          <div className="text-lg">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
