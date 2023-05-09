export const slugify = (text: string) => {
  text = text.replace(/[^a-zA-Z0-9]/g, "-");
  text = text.replace(/-+/g, "-");
  text = text.replace(/^-+/, "");
  text = text.replace(/-+$/, "");
  return text.toLowerCase();
};
