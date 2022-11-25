export const imageDataHelper = (fileName, extension = ".svg", alt = null) => ({
  src: `assets/${fileName}${extension}`,
  alt: alt || fileName,
});
