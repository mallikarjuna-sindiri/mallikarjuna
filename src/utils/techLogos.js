import antigravityLogo from '../images/tech/antigravity.png';
import awsLogo from '../images/tech/aws.png';
import cLogo from '../images/tech/c.png';
import cosmosdbLogo from '../images/tech/cosmosdb.svg';
import cppLogo from '../images/tech/cpp.svg';
import cssLogo from '../images/tech/css.png';
import cursorLogo from '../images/tech/cursor.png';
import dockerLogo from '../images/tech/docker.png';
import fastapiLogo from '../images/tech/fastapi.png';
import gcpLogo from '../images/tech/gcp.png';
import gitLogo from '../images/tech/git.png';
import githubLogo from '../images/tech/github.png';
import githubActionsLogo from '../images/tech/github_actions.png';
import githubCliLogo from '../images/tech/github_cli.svg';
import githubCopilotLogo from '../images/tech/github_copilot.svg';
import gkeLogo from '../images/tech/gke.png';
import htmlLogo from '../images/tech/html.png';
import javaLogo from '../images/tech/java.png';
import javascriptLogo from '../images/tech/javascript.png';
import jupyterLogo from '../images/tech/jupyter.svg';
import kubernetesLogo from '../images/tech/kubernetes.png';
import linuxLogo from '../images/tech/linux.svg';
import mongodbLogo from '../images/tech/mongodb.png';
import nextjsLogo from '../images/tech/nextjs.png';
import nodejsLogo from '../images/tech/nodejs.png';
import numpyLogo from '../images/tech/numpy.svg';
import opencvLogo from '../images/tech/opencv.svg';
import pandasLogo from '../images/tech/pandas.svg';
import postgresqlLogo from '../images/tech/postgresql.png';
import postmanLogo from '../images/tech/postman.svg';
import pythonLogo from '../images/tech/python.png';
import reactLogo from '../images/tech/react.png';
import redisLogo from '../images/tech/redis.png';
import restApiLogo from '../images/tech/rest_api.svg';
import scikitlearnLogo from '../images/tech/scikitlearn.svg';
import sqlalchemyLogo from '../images/tech/sqlalchemy.svg';
import vscodeLogo from '../images/tech/vscode.png';

export const techLogos = {
  // Languages & Core
  Python: pythonLogo,
  python: pythonLogo,
  Java: javaLogo,
  java: javaLogo,
  C: cLogo,
  c: cLogo,
  'C++': cppLogo,
  'c++': cppLogo,
  CPP: cppLogo,
  JavaScript: javascriptLogo,
  javascript: javascriptLogo,
  HTML: htmlLogo,
  html: htmlLogo,
  CSS: cssLogo,
  css: cssLogo,

  // Frameworks & Libraries
  React: reactLogo,
  'React.js': reactLogo,
  react: reactLogo,
  'Next.js': nextjsLogo,
  nextjs: nextjsLogo,
  FastAPI: fastapiLogo,
  fastapi: fastapiLogo,
  'Node.js': nodejsLogo,
  nodejs: nodejsLogo,
  'REST APIs': restApiLogo,
  'REST API': restApiLogo,
  SQLAlchemy: sqlalchemyLogo,
  NumPy: numpyLogo,
  Pandas: pandasLogo,
  'Scikit-learn': scikitlearnLogo,
  OpenCV: opencvLogo,
  Jupyter: jupyterLogo,

  // Databases
  PostgreSQL: postgresqlLogo,
  postgresql: postgresqlLogo,
  MongoDB: mongodbLogo,
  mongodb: mongodbLogo,
  Redis: redisLogo,
  redis: redisLogo,
  CosmosDB: cosmosdbLogo,
  cosmosdb: cosmosdbLogo,

  // Cloud & DevOps
  Docker: dockerLogo,
  docker: dockerLogo,
  Kubernetes: kubernetesLogo,
  kubernetes: kubernetesLogo,
  GCP: gcpLogo,
  gcp: gcpLogo,
  GKE: gkeLogo,
  gke: gkeLogo,
  AWS: awsLogo,
  aws: awsLogo,
  'GitHub Actions': githubActionsLogo,

  // Developer Tools & AI Assistants
  Git: gitLogo,
  git: gitLogo,
  GitHub: githubLogo,
  github: githubLogo,
  'VS Code': vscodeLogo,
  vscode: vscodeLogo,
  Postman: postmanLogo,
  postman: postmanLogo,
  Linux: linuxLogo,
  linux: linuxLogo,
  Antigravity: antigravityLogo,
  antigravity: antigravityLogo,
  'Github CLI': githubCliLogo,
  'GitHub CLI': githubCliLogo,
  'Github Copilot': githubCopilotLogo,
  'GitHub Copilot': githubCopilotLogo,
  Cursor: cursorLogo,
  cursor: cursorLogo,
};

/**
 * Returns the logo image URL for a given tech name, or null if no logo exists.
 * Supports exact match, case-insensitive match, and substring matching.
 */
export function getTechLogo(techName) {
  if (!techName || typeof techName !== 'string') return null;
  const trimmed = techName.trim();
  
  // 1. Exact match
  if (techLogos[trimmed]) return techLogos[trimmed];

  // 2. Case-insensitive exact match
  const lower = trimmed.toLowerCase();
  for (const [key, logo] of Object.entries(techLogos)) {
    if (key.toLowerCase() === lower) {
      return logo;
    }
  }

  // 3. Substring match (for combined labels like "React / Next.js")
  for (const [key, logo] of Object.entries(techLogos)) {
    if (key.length > 1 && lower.includes(key.toLowerCase())) {
      return logo;
    }
  }

  return null;
}
