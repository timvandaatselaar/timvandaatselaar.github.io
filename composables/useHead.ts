export const useHead = (object) => {
  let title = object.title ? object.title : null;
  let description = object.description ? object.description : null;
  let image = object.image ? object.image : null;
  let meta = [];

  if (title) {
    meta.push({
      hid: "og:title",
      name: "og:title",
      content: title,
    });
  }

  if (description) {
    meta.push({
      hid: "og:description",
      name: "og:description",
      content: description,
    });
  }

  if (image) {
    meta.push({
      hid: "og:image",
      name: "og:image",
      content: image,
    });
  }

  return useMeta({
    title: title,
    meta: meta,
  });
};
