const sharp = require('sharp');

/**
 * Processes an image (base64 or buffer) and returns an optimized WebP buffer.
 * @param {string|Buffer} input - Base64 string or image buffer.
 * @returns {Promise<Buffer>} - Optimized WebP buffer.
 */
async function processToWebP(input) {
    try {
        let buffer;
        if (typeof input === 'string' && input.startsWith('data:image')) {
            // Extract the base64 part
            const base64Data = input.split(';base64,').pop();
            buffer = Buffer.from(base64Data, 'base64');
        } else if (Buffer.isBuffer(input)) {
            buffer = input;
        } else {
            throw new Error('Invalid image input format');
        }

        // Convert to WebP with high compression efficiency
        return await sharp(buffer)
            .webp({ quality: 80, effort: 6 }) // Balance quality and compression speed/efficiency
            .toBuffer();
    } catch (error) {
        console.error('Image processing error:', error);
        throw error;
    }
}

/**
 * Converts a buffer to a base64 string for database storage.
 * @param {Buffer} buffer - Image buffer.
 * @returns {string} - Base64 string with appropriate MIME type.
 */
function bufferToBase64(buffer) {
    return `data:image/webp;base64,${buffer.toString('base64')}`;
}

module.exports = {
    processToWebP,
    bufferToBase64
};
