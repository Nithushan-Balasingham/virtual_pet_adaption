export function getMoodColor(mood) {
  switch (mood) {
    case "Happy":
      return "green";
    case "Excited":
      return "orange";
    case "Sad":
      return "red";
    default:
      return "gray";
  }
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
