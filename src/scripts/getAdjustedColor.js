const getAdjustedColor = (hexColor, adjustmentAmount) => {
    if(hexColor === '#000000') return '#ebebeb';
    if(hexColor === '#FFFFFF') return '#212121';

    const hexToRGB = hexColor => {
        const hexValue = parseInt(hexColor.slice(1), 16);
        const r = (hexValue >> 16) & 255;
        const g = (hexValue >> 8) & 255;
        const b = hexValue & 255;
        return { r, g, b };
    };

    const rgbToHex = (r, g, b) => `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

    const color = hexToRGB(hexColor);

    // Calculate the luminance using the formula for perceived brightness
    const luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;

    // Determine whether the color is light or dark
    const isLight = luminance > 0.5;

    // Adjust the color based on lightness
    const adjustedR = isLight ? Math.max(0, color.r - adjustmentAmount) : Math.min(255, color.r + adjustmentAmount);
    const adjustedG = isLight ? Math.max(0, color.g - adjustmentAmount) : Math.min(255, color.g + adjustmentAmount);
    const adjustedB = isLight ? Math.max(0, color.b - adjustmentAmount) : Math.min(255, color.b + adjustmentAmount);

    return rgbToHex(adjustedR, adjustedG, adjustedB);
}

export default getAdjustedColor;