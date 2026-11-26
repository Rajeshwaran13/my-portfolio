/**
 * miniMarkdown — minimal, safe inline markdown for chatbot replies.
 * Supports **bold**, [text](url) links and newlines. Escapes HTML first.
 */
function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderMini(input) {
  let out = escapeHtml(input);
  out = out.replace(/\[([^\]]+)\]\(((?:https?:|mailto:|tel:)[^\s)]+)\)/g, (_m, text, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\n/g, '<br>');
  return out;
}
