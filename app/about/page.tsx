export const metadata = {
  title: 'How this was built — Olivia Houlihan',
};

export default function AboutBuildPage() {
  return (
    <main className="page">
      <h1>How this site was built</h1>
      <p>
        This site uses Next.js (App Router) and React with TypeScript. It is containerized with a
        multi-stage Dockerfile for efficient production builds and a small runtime image.
      </p>
      <h2>Key details</h2>
      <ul>
        <li>Framework: Next.js 14, React 18</li>
        <li>Language: TypeScript, strict mode</li>
        <li>Styling: Minimal custom CSS with a clean, accessible layout</li>
        <li>Deployment: Docker image exposing port 3000</li>
      </ul>
      <h2>Local development</h2>
      <pre className="code">npm install
npm run dev</pre>
      <h2>Docker</h2>
      <pre className="code">docker build -t olivia-website .
docker run -p 3000:3000 olivia-website</pre>
      <p>
        You can later wire CI/CD to build and push the image to a registry and deploy on your
        platform of choice (e.g., Fly.io, Render, AWS, GCP, Azure, or a VPS).
      </p>
      <h2>Github Repo</h2>
      <a href="https://github.com/Livy1159/OliviaHoulihanWebsite" target="_blank" rel="noopener noreferrer">https://github.com/Livy1159/OliviaHoulihanWebsite</a>
    </main>
  );
}


