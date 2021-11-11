export const featureIndexComparer = (a, b) =>
  a.featureIndex > b.featureIndex ? -1 : 1;

export const dateComparer = (a, b) =>
  a.module.meta.publishDate < b.module.meta.publishDate ? 1 : -1;
