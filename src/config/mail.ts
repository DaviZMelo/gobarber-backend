interface IMailConfig {
  driver: 'ethereal' | 'ses';

  tmpFolder: string;
  uploadsFolder: string;

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'naoresponda@gobarbeer.tk',
      name: 'naoresponda',
    },
  },
} as IMailConfig;
