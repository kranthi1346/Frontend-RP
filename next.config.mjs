/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = await import(
  "next/constants.js"
);

const process = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // // when `next build` or `npm run build` is used
  // const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === 'staging';
  // // when `next build` or `npm run build` is used
  // const isPreProd = phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === 'preprod';
  // // when `next build` or `npm run build` is used
  // const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === 'production';
  const isDev = true;
  const env = {
    RECRUITMENTTOOLBACKEND: (() => {
      if (isDev) return "https://karmik.carnationinfotech.com/api";
      // if (isProd) return 'https://karmik.carnationinfotech.com/api';
      // if (isStaging) return 'https://karmik.carnationinfotech.com/api';
      // if (isPreProd) return 'https://karmik.carnationinfotech.com/api';
      return "RECRUITMENTTOOLBACKEND:not (isDev,isProd,isPreProd && !isStaging,isProd,isPreProd && isStaging)";
    })(),
  };

  return {
    env,
  };
};
export default process;
