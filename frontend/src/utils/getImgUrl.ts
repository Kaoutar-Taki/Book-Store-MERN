function getImgUrl(name: string): string {
    return new URL(`../assets/books/${name}`, import.meta.url).toString();
}

export { getImgUrl };
