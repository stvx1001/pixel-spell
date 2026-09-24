/* next/image does not add basePath to string paths, so public files go through this. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
