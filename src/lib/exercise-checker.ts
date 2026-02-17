function normalize(str: string): string {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

function stripPunctuation(str: string): string {
  return str.replace(/[.,!?;:]+$/g, '');
}

function normalizeSentence(str: string): string {
  return normalize(str).replace(/\s+([.,!?;:])/g, '$1');
}

export function checkExactMatch(
  userAnswer: string,
  correctAnswer: string,
  acceptableAnswers?: string[]
): { correct: boolean; almostCorrect: boolean } {
  const normalizedUser = normalize(userAnswer);
  const normalizedCorrect = normalize(correctAnswer);

  if (normalizedUser === normalizedCorrect) {
    return { correct: true, almostCorrect: false };
  }

  if (acceptableAnswers) {
    for (const alt of acceptableAnswers) {
      if (normalizedUser === normalize(alt)) {
        return { correct: true, almostCorrect: false };
      }
    }
  }

  // Check for near-miss (single character difference)
  if (levenshteinDistance(normalizedUser, normalizedCorrect) === 1) {
    return { correct: false, almostCorrect: true };
  }

  return { correct: false, almostCorrect: false };
}

export function checkWordOrder(
  userOrder: string[],
  correctOrder: string[]
): boolean {
  if (userOrder.length !== correctOrder.length) return false;
  return userOrder.every(
    (word, i) => stripPunctuation(normalize(word)) === stripPunctuation(normalize(correctOrder[i]))
  );
}

export function checkMultipleChoice(
  selectedIndex: number,
  correctIndex: number
): boolean {
  return selectedIndex === correctIndex;
}

export function checkSentenceMatch(
  userSentence: string,
  correctSentence: string
): { correct: boolean; almostCorrect: boolean } {
  const normalizedUser = normalizeSentence(userSentence);
  const normalizedCorrect = normalizeSentence(correctSentence);

  if (normalizedUser === normalizedCorrect) {
    return { correct: true, almostCorrect: false };
  }

  // Check if words are all correct but in slightly wrong order (one swap = 2 positions differ)
  const userWords = normalizedUser.split(' ');
  const correctWords = normalizedCorrect.split(' ');
  if (userWords.length === correctWords.length) {
    const diffs = userWords.filter((w, i) => w !== correctWords[i]).length;
    if (diffs <= 2) {
      return { correct: false, almostCorrect: true };
    }
  }

  return { correct: false, almostCorrect: false };
}

export function checkKeyPhrases(
  userText: string,
  keyPhrases: string[]
): { matched: string[]; missed: string[] } {
  const normalizedText = normalize(userText);
  const matched: string[] = [];
  const missed: string[] = [];

  for (const phrase of keyPhrases) {
    if (normalizedText.includes(normalize(phrase))) {
      matched.push(phrase);
    } else {
      missed.push(phrase);
    }
  }

  return { matched, missed };
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
