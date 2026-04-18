import fs from "fs";
import path from "path";

export interface Treatment {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  price: string;
  content: string;
}

export function getTreatments(): Treatment[] {
  const filePath = path.join(process.cwd(), "public/cms/treatments.csv");
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Simple CSV parser that handles quotes and basic escaping
  const lines = fileContent.split("\n");
  const headers = lines[0].split(",").map((h) => h.replace(/"/g, "").trim());
  const rows = lines.slice(1).filter((line) => line.trim() !== "");

  const treatments: Treatment[] = rows.map((row) => {
    // Basic CSV splitting on commas not inside quotes
    const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
    const values = matches ? matches.map((v) => v.replace(/^"|"$/g, "").replace(/""/g, '"')) : [];

    const treatment: any = {};
    headers.forEach((header, index) => {
      const key = header.toLowerCase().replace(/ image:alt/g, "imageAlt") as keyof Treatment;
      treatment[key === "image:alt" ? "imageAlt" : key] = values[index] || "";
    });

    return treatment as Treatment;
  });

  return treatments;
}

export function formatCategory(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("And", "&");
}
