import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: env('UPLOAD_PROVIDER', 'local') === 'cloudinary'
        ? '@strapi/provider-upload-cloudinary'
        : 'local',
      providerOptions: env('UPLOAD_PROVIDER', 'local') === 'cloudinary'
        ? {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          }
        : {},
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;
