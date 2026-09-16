'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

/** Records first-touch marketing attribution on the first page a visitor sees. Renders nothing. */
export default function AttributionCapture() {
  useEffect(() => { captureAttribution(); }, []);
  return null;
}
