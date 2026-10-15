import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('../Logo/Logo Gymstagram® em Neon sobre Fundo Preto.png');
const outputPath = path.resolve('public/images/logo.png');
const outputPathTransparent = path.resolve('public/images/logo_transparent.png');
const outputRootLogo = path.resolve('../Logo/Logo Gymstagram® em Neon sem Fundo.png');

async function processImage() {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image
      .raw()
      .ensureAlpha()
      .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const channels = info.channels; // 4 (RGBA)

    console.log(`Image loaded: ${width}x${height}, channels: ${channels}`);

    // Process each pixel to remove black background and preserve clean anti-aliasing
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Luminance / max brightness
      const maxVal = Math.max(r, g, b);
      // perceptual brightness
      const luma = 0.299 * r + 0.587 * g + 0.114 * b;

      if (maxVal < 18) {
        // Pure or near black background
        data[i + 3] = 0;
      } else if (maxVal < 60) {
        // Transition / smooth anti-aliased edge
        const factor = (maxVal - 18) / (60 - 18);
        const alpha = Math.round(factor * 255);
        data[i + 3] = alpha;

        // Un-multiply color with black background to remove black halo
        const normFactor = Math.max(0.2, factor);
        data[i] = Math.min(255, Math.round(r / normFactor));
        data[i + 1] = Math.min(255, Math.round(g / normFactor));
        data[i + 2] = Math.min(255, Math.round(b / normFactor));
      } else {
        // Text / Logo body - fully opaque
        data[i + 3] = 255;
      }
    }

    // Trim transparent borders to optimize logo display
    const processedBuffer = await sharp(data, {
      raw: { width, height, channels: 4 }
    })
      .trim() // Trims transparent padding around the logo
      .png()
      .toBuffer();

    // Save to all locations
    await sharp(processedBuffer).toFile(outputPath);
    await sharp(processedBuffer).toFile(outputPathTransparent);
    await sharp(processedBuffer).toFile(outputRootLogo);

    console.log('Successfully saved transparent logo to:');
    console.log(outputPath);
    console.log(outputRootLogo);
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processImage();
