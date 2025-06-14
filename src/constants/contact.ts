export const CONTACT_FORM = {
  FIELDS: {
    NAME: {
      id: 'from_name',
      label: 'Name',
      placeholder: 'Your name',
      type: 'text',
      required: true,
    },
    EMAIL: {
      id: 'from_email',
      label: 'Email',
      placeholder: 'your.email@domain.com',
      type: 'email',
      required: true,
    },
    SUBJECT: {
      id: 'subject',
      label: 'Subject',
      placeholder: 'Project discussion',
      type: 'text',
      required: true,
    },
    MESSAGE: {
      id: 'message',
      label: 'Message',
      placeholder: 'Tell me about your project...',
      type: 'textarea',
      required: true,
      rows: 6,
    },
  },
  BUTTON_STATES: {
    INITIAL: 'TRANSMIT MESSAGE',
    LOADING: 'TRANSMITTING',
    SUCCESS: 'TRANSMISSION COMPLETE',
  },
  MESSAGES: {
    SUCCESS: 'Message transmitted successfully! 🚀',
    ERROR: 'Failed to send message. Please try again.',
    LOADING: '...',
  },
  TIMEOUTS: {
    RESET_FORM: 3000, // 3 seconds
    CLEAR_ERROR: 3000,
  },
  STYLES: {
    INPUT: 'w-full bg-cyber-gray border-2 border-cyber-blue/50 rounded px-4 py-3 text-white focus:border-cyber-blue focus:outline-none transition-colors',
    LABEL: 'block text-gray-300 mb-2 font-semibold',
    BUTTON: {
      BASE: 'w-full cyber-button py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed',
      LOADING: 'flex items-center justify-center',
      LOADING_TEXT: 'animate-pulse',
      LOADING_DOTS: 'ml-2 animate-[bounce_1s_infinite]',
    },
    MESSAGE: {
      SUCCESS: 'inline-block px-4 py-2 bg-cyber-dark/90 border border-cyber-green text-cyber-green rounded-lg',
      ERROR: 'inline-block px-4 py-2 bg-cyber-dark/90 border border-cyber-pink text-cyber-pink rounded-lg',
    },
  },
} as const; 