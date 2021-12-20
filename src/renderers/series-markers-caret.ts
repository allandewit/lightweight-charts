import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawCaret(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	const caretSize = shapeSize('caretUp', size);
	const halfCaretSize = (caretSize - 1) / 2;
	const quarterCaretSize = halfCaretSize / 2;

	ctx.beginPath();
	if (up) {
		ctx.moveTo(centerX - halfCaretSize, centerY + quarterCaretSize);
		ctx.lineTo(centerX, centerY - quarterCaretSize);
		ctx.lineTo(centerX + halfCaretSize, centerY + quarterCaretSize);
	} else {
		ctx.moveTo(centerX - halfCaretSize, centerY - quarterCaretSize);
		ctx.lineTo(centerX, centerY + quarterCaretSize);
		ctx.lineTo(centerX + halfCaretSize, centerY - quarterCaretSize);
	}

	ctx.fill();
}

export function hitTestCaret(
	up: boolean,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement caret hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
