document.querySelectorAll('[data-outbound]').forEach((placeholder) => {
  const url = placeholder.dataset.outbound;
  if (!url) return;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return;

    const link = document.createElement('a');
    for (const attribute of placeholder.attributes) {
      if (attribute.name !== 'data-outbound') {
        link.setAttribute(attribute.name, attribute.value);
      }
    }
    link.href = parsed.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    while (placeholder.firstChild) {
      link.append(placeholder.firstChild);
    }
    placeholder.replaceWith(link);
  } catch {
    // Ignore malformed outbound URLs and leave the placeholder inert.
  }
});
