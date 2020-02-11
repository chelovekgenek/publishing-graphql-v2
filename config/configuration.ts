import { Config } from './configuration.interface';

export default (): Config => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  origin: {
    rtlnieuws: {
      host: process.env.RTLNIEUWS_HOST,
    },
  },
});
