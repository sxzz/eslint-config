export async function importWithError<T = any>(pkg: string): Promise<T> {
  try {
    return await import(pkg)
  } catch {
    throw new Error(
      `Failed to import "${pkg}". Please install it with: npm i -D ${pkg}`,
    )
  }
}
