# Asset provenance

## Branding and layout

- `static/images/vinuni-greenx-logo.png`: retrieved from the user-specified [ReMask website](https://kuan2vn.github.io/ReMask.github.io/static/images/vinuni-greenx-logo.png). VinUniversity / Smart Green Transformation Center branding, retained at the user's request; no independent endorsement or new logo ownership is claimed.
- Page structure takes inspiration from the ReMask project page. Styles and project content are adapted for this dataset initiative.

## Opening Sentinel-2 example — TERRA-CD

`static/images/terra-cd-figure1.png` is the unchanged original figure from [Oak et al., TERRA-CD, Figure 1](https://arxiv.org/html/2605.14651v1#S3.F1). Authors: Omkar Oak, Rukmini Nazre, Rujuta Budke, and Suraj Sawant (2026). [Original PNG](https://arxiv.org/html/2605.14651v1/Images/Dataset_definition.png). The paper is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the [authors' repository](https://github.com/omkarsoak/TERRA-CD) also declares CC BY 4.0.

The page uses CSS windows to show the 2019 image (panel a), 2024 image (panel b), and published vegetation MCD mask (panel e). The full PNG is 3174 × 600 pixels; the selected panels occupy 512-pixel squares at horizontal offsets 0, 532, and 2128. The same upper-right 256 × 256 display-pixel detail (x = 256–512, y = 0–256 within each panel) is enlarged in all three website windows. This is display zoom, not higher sensor resolution. Original pixels, mask colors, and source file are unchanged. The added HTML outlines identify the same display location for easier reading; they are **not labels or verified event footprints**. Clicking any panel opens the complete original figure, including the other semantic masks and original captions. Checksums and metadata are in `static/images/terra-cd-provenance.json`.

The source describes 10 m Sentinel-2 inputs and a two-date vegetation-change task. Its masks are derived from separately classified land-cover maps, using spectral-index/SVM processing and sample checks. This example is not a manual reference mask independently validated by us. Only the published figure was obtained; we did not download the raw GeoTIFF/mask pair, and its tile coordinates are not established here.

These published change classes are **not** our persistent-loss/regreening outcomes. We have not assigned an unobserved third-date outcome, inferred restoration, or included this sample in our Vietnamese pilot. The original paper's three vegetation MCD classes are no change, increase, and decrease. The website deliberately does not reuse the public mask's numeric IDs as our label IDs.

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
