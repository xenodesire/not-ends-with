export function notEndsWith(str: string, searchString: string, endPosition?: number): boolean {
    return !str.endsWith(searchString, endPosition);
}