// Simple frontend slugify function for titles and URLs
export default function slugify(text = "") {
    return text
      .toString()
      .normalize("NFKD") // handle accented chars
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
      .replace(/\s+/g, "-")         // spaces → hyphens
      .replace(/-+/g, "-");         // collapse multiple hyphens
  }
  