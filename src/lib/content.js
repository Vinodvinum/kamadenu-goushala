export async function getAllBlogs() {
  const modules = import.meta.glob("../data/blog/*.json", { eager: true });
  return Object.values(modules).map((m) => m.default);
}

export async function getAllCows() {
  const modules = import.meta.glob("../data/cows/*.json", { eager: true });
  return Object.values(modules).map((m) => m.default);
}
