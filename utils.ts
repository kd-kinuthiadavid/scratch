/**
 * @TODO: @FIXME:
 * ADD the base imagekit url to doppler and use it as an environment variable
 */

const baseImageKitUrl = process.env.NEXT_PUBLIC_IMAGEKIT_BASE_URL;

const imagesLoaer = (src: string): string => `${baseImageKitUrl}${src}`;

export { imagesLoaer };
