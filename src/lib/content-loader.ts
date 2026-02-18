import { Topic, CEFRLevel } from '@/content/types';
import { levels, getLevelDefinition } from '@/content/levels';

// Static imports for available content
import { a0Topics } from '@/content/a0';
import { a1Topics } from '@/content/a1';
import { a2Topics } from '@/content/a2';
import { b1Topics } from '@/content/b1';
import { b2Topics } from '@/content/b2';

const topicsByLevel: Record<string, Topic[]> = {
  a0: a0Topics,
  a1: a1Topics,
  a2: a2Topics,
  b1: b1Topics,
  b2: b2Topics,
};

export function getAllLevels() {
  return levels;
}

export function getLevel(levelId: string) {
  return getLevelDefinition(levelId);
}

export function getTopicsForLevel(levelId: string): Topic[] {
  return topicsByLevel[levelId] || [];
}

export function getTopic(levelId: string, topicId: string): Topic | undefined {
  const topics = topicsByLevel[levelId];
  if (!topics) return undefined;
  return topics.find((t) => t.id === topicId);
}

export function getAdjacentTopics(
  levelId: string,
  topicId: string
): { prev: Topic | null; next: Topic | null } {
  const topics = topicsByLevel[levelId] || [];
  const currentIndex = topics.findIndex((t) => t.id === topicId);

  return {
    prev: currentIndex > 0 ? topics[currentIndex - 1] : null,
    next: currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null,
  };
}
