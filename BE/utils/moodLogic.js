export function calculateMood(createdAt) {
    const ageInMs = Date.now() - new Date(createdAt).getTime();
    const days = ageInMs / (1000 * 60 * 60 * 24);
  
    if (days < 1) return 'Happy';
    if (days <= 3) return 'Excited';
    return 'Sad';
  }
  