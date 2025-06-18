import LightIcon from "../../../assets/logoimage/light.svg";
import EnterpriseIcon from "../../../assets/logoimage/Enterprise.svg";
import AIIcon from "../../../assets/logoimage/AI.svg";
import DeveloperIcon from "../../../assets/logoimage/Developer.svg";






export const leftFeatures = [
  {
    icon: <img src={LightIcon} alt="LightLogo" />,
    title: 'Lightning-Fast APIs',
    description: 'Integrate voice in minutes with our ultra-responsive endpoints.',
  },
  {
    icon: <img src={AIIcon} alt="AIIcon" />,
    title: 'AI-Powered Voice Intelligence',
    description: 'Smart, context-aware voice recognition built for modern apps.',
  },
];

export const rightFeatures = [
  {
    icon: <img src={EnterpriseIcon} alt="EnterPrise" />,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption & GDPR-ready infrastructure.',
  },
  {
    icon: <img src={DeveloperIcon} alt="DeveloperIconSS" />,
    title: 'Developer-First Tools',
    description: 'Real-time logs, sandbox testing, and plug & play SDKs.',
  },
];
