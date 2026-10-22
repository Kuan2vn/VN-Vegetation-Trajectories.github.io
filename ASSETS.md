# Asset provenance

## Branding and layout

- `static/images/vinuni-greenx-logo.png`: retrieved from the user-specified [ReMask website](https://kuan2vn.github.io/ReMask.github.io/static/images/vinuni-greenx-logo.png). VinUniversity / Smart Green Transformation Center branding, retained at the user's request; no independent endorsement or new logo ownership is claimed.
- Page structure takes inspiration from the ReMask project page. Styles and project content are adapted for this dataset initiative.

## Opening Landsat sequence — external illustration

The three `static/images/yellowstone-{1987,1989,2018}.jpg` files come from NASA Earth Observatory's [World of Change: Burn Recovery in Yellowstone](https://science.nasa.gov/earth/earth-observatory/world-of-change/burn-recovery-in-yellowstone/). Dates are confirmed by the source's [all-images listing](https://science.nasa.gov/earth/earth-observatory/world-of-change/burn-recovery-in-yellowstone/all-images/):

| File | Acquisition date | Role on this page |
| --- | --- | --- |
| `yellowstone-1987.jpg` | 5 August 1987 | Landscape before the 1988 fires |
| `yellowstone-1989.jpg` | 2 August 1989 | Burn footprint after the fires |
| `yellowstone-2018.jpg` | 10 August 2018 | Uneven long-term regrowth |

Credit: **NASA Earth Observatory; Landsat 5 and Landsat 8 imagery.** NASA credits image interpretation to Carl Key, USGS. Images combine visible and infrared wavelengths: green vegetation and red burn scars are false-color signals, not drawn class labels. Original NASA display images are included unchanged at the requested 1200-pixel rendition; labels and interpretation are separate HTML captions. The 2018 view was selected over 2019 for its clearer, less cloud-obscured presentation. Source URLs and SHA-256 checksums are in `static/images/yellowstone-provenance.json`.

This sequence illustrates a physical process over decades. It is **not part of our dataset**, not an annotation or prediction, and not an example of the planned roughly one-year Sentinel-2 follow-up. Regrowth is spatially uneven, and the later image does not establish complete ecological recovery. No source-region pixels have been assigned our proposed classes.

NASA's [image and media usage guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) apply. Use here is educational/scientific with attribution; NASA endorsement is not implied.

## Vietnam pilot satellite previews

Contains modified Copernicus Sentinel data (2023–2025), accessed via the [Element 84 Earth Search](https://earth-search.aws.element84.com/v1) `sentinel-2-c1-l2a` collection. Source rights: [Copernicus data terms](https://dataspace.copernicus.eu/terms-and-conditions).

The nine `hanoi-{year}-{rgb,nir,ndvi}.png` files are display derivatives of pilot site `hanoi_west_11`, approximately 1.28 × 1.28 km, 128 × 128 pixels at 10 m. Acquisition dates:

- 2023: 18 May 2023
- 2024: 27 April 2024
- 2025: 12 May 2025

RGB uses B4/B3/B2. NIR false color uses B8/B4/B3. NDVI uses (B8−B4)/(B8+B4). Display transforms affect preview colors; models should use the documented reflectance rasters, not these rendered PNGs. See `static/images/provenance.json` for collection metadata and checksums.

**These images have no verified event or outcome masks.** Dates illustrate repeat observations, not a confirmed before/after/follow-up loss event. A seasonal change in appearance is not proof of target loss or regreening.

## Schematic assets

- `trajectory.svg`, `favicon.svg`, and the CSS output mask were created for this project page.
- The trajectory image uses drawn landscapes, not satellite images.
- All drawn masks and outcome examples are explicitly illustrative, not ground truth or model results.
