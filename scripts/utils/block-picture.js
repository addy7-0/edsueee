import { createOptimizedPicture } from '../aem.js';

/**
 * Responsive picture from a block cell that contains an img (standard EDS delivery URLs).
 * Uses Franklin image params (?width=, format=, optimize=). No DM URL rewriting.
 *
 * @param {HTMLElement} cell - Block cell wrapping an image
 * @param {{ excludeAltText?: boolean, eager?: boolean }} [options]
 * @returns {HTMLPictureElement|string} Empty string if no image
 */
export default function pictureFromImageCell(cell, options = {}) {
  const { excludeAltText = false, eager = false } = options;
  const img = cell?.querySelector('img');
  if (!img?.src) return '';
  let alt = img.getAttribute('alt') || '';
  if (excludeAltText) alt = '';
  return createOptimizedPicture(img.src, alt, eager);
}
