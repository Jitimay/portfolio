export const regulus = {
  title: 'Regulus',
  poster: '/research/regulus-poster.pdf',
  demo: 'https://regulus-policy-sim.vercel.app',
  venue: 'Research in Africa Days, Deep Learning Indaba 2026',
  location: 'Lagos, Nigeria',
};

export const systems = [
  {
    id: 'flow-agent',
    links: [
      { label: 'Watch the Flow Agent prototype demo', href: 'https://www.youtube.com/watch?v=c38sVFhLrFU' },
    ],
    title: 'Flow Agent',
    category: 'Water management · Competition prototype',
    description: 'An intelligent water-management prototype that connects sensing, pump actuation, and automated control.',
    details: 'The project explores ESP32-based sensing, pump control, and SMS connectivity for water management where internet access is limited. It received Third Place in the 2026 Presidential African Youth in AI and Robotics Competition.',
  },
  {
    id: 'majisafe',
    links: [{ label: 'Watch the MajiSafe demo', href: 'https://www.youtube.com/watch?v=1B3T0LDmfFI' }],
    title: 'MajiSafe',
    category: 'Utility infrastructure · Engineering project',
    description: 'A smart water and electricity dispensing platform developed during my software engineering internship at REGIDESO.',
    details: 'The project combines ESP32 and SIM800L hardware with a Node.js backend, a Flutter app, and a React dashboard. A SHA-256 hash chain makes changes to transaction records detectable.',
  },
  {
    id: 'ikimashini',
    links: [
      { label: 'Watch the iKimashini vending demo', href: 'https://www.youtube.com/watch?v=jkhw5eVDXKs' },
      { label: 'Watch the iKimashini Petro prototype', href: 'https://www.youtube.com/watch?v=JJSYmm0JVI0' },
    ],
    title: 'iKimashini',
    category: 'Embedded automation · Hardware prototype',
    description: 'A smart vending machine prototype built around microcontrollers, motor control, and automated dispensing.',
    details: 'The prototype combines an ESP32 controller, stepper and servo motors, a keypad and display, and SMS-based mobile payment verification.',
    image: { src: '/media/ikimashini.jpg', alt: 'iKimashini smart vending machine prototype', width: 900, height: 675 },
  },
];

export const dawa = {
  id: 'dawa-ai',
  links: [{ label: 'Watch the Dawa AI demo', href: 'https://www.youtube.com/shorts/d81WxOE7nj4' }],
  title: 'Dawa AI',
  category: 'Low-resource language technology · Research prototype',
  description: 'An SMS-based medical triage research prototype for Kirundi and French using a fine-tuned Gemma model.',
  details: 'The project explored whether people using basic phones could submit symptom descriptions in local languages and receive triage guidance over SMS. The model was fine-tuned using LoRA and Unsloth. It is a research prototype without clinical validation.',
};

export const otherProjects = [
  {
    id: 'irt-1',
    title: 'IRT-1',
    description: 'Final-year research prototype exploring EEG-based robot control with OpenBCI and ESP32.',
    details: 'The project explored processing brain signals and translating classified inputs into robot commands.',
  },
  {
    id: 'ubwonkoedge',
    title: 'UbwonkoEdge AI',
    description: 'Lightweight on-device AI inference framework for ESP32 microcontrollers.',
    links: [{ label: 'Source code for UbwonkoEdge AI', href: 'https://github.com/Jitimay/ubwonko_Edge_AI' }],
  },
  {
    id: 'nodus-ai',
    title: 'Nodus AI',
    description: 'SMS-to-LLM gateway with per-number conversation history for Kirundi, French, English, and Swahili.',
  },
  {
    id: 'verytontine',
    links: [
      { label: 'Watch the VeryTontine app walkthrough', href: 'https://www.youtube.com/watch?v=K88JbnbC0DA' },
      { label: 'Watch the VeryTontine demo', href: 'https://www.youtube.com/watch?v=WEeX_yeis64' },
      { label: 'Watch the earlier VeryTontine demo', href: 'https://www.youtube.com/watch?v=4hCXdnvHpMg' },
    ],
    title: 'VeryTontine',
    description: 'A Sui-based engineering project for digitizing rotating savings groups.',
    details: 'Accepted into the Sui Founder Program and submitted to Sui Overflow 2026.',
  },
  {
    id: 'amtips',
    title: 'amTips',
    description: 'Engineering project. A description and project link are forthcoming.',
  },
  {
    id: 'quiz-buzzer',
    title: 'Arduino Quiz Buzzer',
    description: 'An eight-player system with first-press lockout and audiovisual feedback for quiz competitions.',
    links: [
      { label: 'Source code for Arduino Quiz Buzzer', href: 'https://github.com/Jitimay/GH_Buzzers' },
      { label: 'Watch the Professional Quiz Buzzers demo', href: 'https://www.youtube.com/shorts/3aSlvvr0IAw' },
      { label: 'Watch the additional Quiz Buzzers clip', href: 'https://www.youtube.com/shorts/lW_0KlVGgA0' },
    ],
  },
];
