# Asset provenance

## Branding and layout

- `static/images/vinuni-greenx-logo.png`: retrieved from the user-specified [ReMask website](https://kuan2vn.github.io/ReMask.github.io/static/images/vinuni-greenx-logo.png). VinUniversity / Smart Green Transformation Center branding, retained at the user's request; no independent endorsement or new logo ownership is claimed.
- Page structure takes inspiration from the ReMask project page. Styles and project content are adapted for this dataset initiative.

## Satellite previews

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
