export const appendContentToTitle = (contentMd: string, title: string): string => {
  const safeContentMd = contentMd || '';

  if (!safeContentMd.trim()) {
    return `# ${title}`;
  }

  return `# ${title}\n ${safeContentMd}`;
};

export const extractTitleFromMarkdown = (contentMd: string): string | null => {
  const lines = contentMd.split('\n');
  const firstLine = lines[0]?.trim();

  if (firstLine && firstLine.startsWith('#')) {
    return firstLine.substring(1).trim();
  }

  return null;
};
