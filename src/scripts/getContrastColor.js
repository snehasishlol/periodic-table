const getContrastColor = (hexColor) => {
    // Convert the hex color to RGB values
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate the luminance using the formula for perceived brightness
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Choose white or black based on the luminance
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

export default getContrastColor;