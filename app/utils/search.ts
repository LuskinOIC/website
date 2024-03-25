import { SearchIndex } from "@/app/constants/types";
export function getUniqueByTitle(
  objects: Array<{ title: string; path: string }>,
): Array<{ title: string; path: string }> {
  const seenTitles = new Set();
  return objects.filter((obj) => {
    if (seenTitles.has(obj.title)) {
      return false;
    } else {
      seenTitles.add(obj.title);
      return true;
    }
  });
}

export function filterSearchResults(query: string, searchIndex: SearchIndex) {
  let results: Array<{ path: string; title: string }> = [];
  const key = query as keyof typeof searchIndex;
  const exactMatch = Object.keys(searchIndex).filter((key) => key === query);
  const partialMatch = Object.keys(searchIndex).filter((key) =>
    key.includes(query),
  );

  if (exactMatch.length > 0 && searchIndex[key].length > 0) {
    results = searchIndex[key].map((item) => ({
      path: item.path,
      title: item.title,
    }));
  } else if (partialMatch.length > 0) {
    const partialMatches = partialMatch
      .flatMap((key) => searchIndex[key as keyof typeof searchIndex])
      .map((item) => ({ path: item.path, title: item.title }));
    results = [...results, ...partialMatches];
  }

  results = results.sort((a, b) => {
    const aContains = a.title.toLowerCase().includes(query);
    const bContains = b.title.toLowerCase().includes(query);

    // Prioritize titles with the match word
    if (aContains && !bContains) return -1;
    if (!aContains && bContains) return 1;

    // Next priority is the length of the title, shorter titles come first
    if (a.title.length !== b.title.length) {
      return a.title.length - b.title.length;
    }

    return a.title.localeCompare(b.title);
  });

  return getUniqueByTitle(results).slice(0, 10);
}
