export const imageDataHelper = (fileName, extension = ".svg", alt = null) => ({
  src: `assets/${fileName}${extension}`,
  alt: alt || fileName,
});

export const pngImageDataHelper = (fileName, extension = ".png", alt = null) => ({
  src: `assets/${fileName}${extension}`,
  alt: alt || fileName,
});