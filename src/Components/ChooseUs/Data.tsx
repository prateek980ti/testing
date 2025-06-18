import LightIcon from '/src/assets/logo/light.svg';
import EnterpriseIcon from '/src/assets/logo/Enterprise.svg';
import AIIcon from '/src/assets/logo/AI.svg';
import DeveloperIcon from '/src/assets/logo/Developer.svg';

export const topFeatures = [
  {
    icon: <img src={LightIcon} alt="LightLogo" />,
    title: 'Lightning-Fast APIs',
    description: 'Integrate voice in minutes with our ultra-responsive endpoints.',
  },
  {
    icon: <img src={EnterpriseIcon} alt="EnterPrise" />,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption & GDPR-ready infrastructure.',
  },
];

export const bottomFeatures = [
  {
    icon: <img src={AIIcon} alt="AIIcon" />,
    title: 'AI-Powered Voice Intelligence',
    description: 'Smart, context-aware voice recognition built for modern apps.',
  },
  {
    icon: <img src={DeveloperIcon} alt="DeveloperIconSS" />,
    title: 'Developer-First Tools',
    description: 'Real-time logs, sandbox testing, and plug & play SDKs.',
  },
];
