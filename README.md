# VN Vegetation Trajectories

**Research in progress:** an event-centered Sentinel-2 benchmark initiative for vegetation loss and subsequent regreening in Vietnamese landscapes. This is a working title.

[Project website](https://kuan2vn.github.io/VN-Vegetation-Trajectories.github.io/)

## Proposed task

Input: three co-registered multispectral observations, before a vegetation-loss event, after loss, and at a later follow-up. Output: a dense trajectory map.

| Value | Meaning |
| --- | --- |
| 0 | No qualifying target loss in the reviewed interval |
| 1 | Loss, with cover still reduced at follow-up |
| 2 | Loss, with vegetation present again at follow-up |
| 255 | Ignore / uncertain; excluded from supervised scoring |

These are three target classes plus an ignore value. Regreening means observed cover, not ecological recovery. Persistent loss refers to the specified follow-up, not permanence. Exact cover thresholds, follow-up windows, crop-cycle exclusions, minimum event size, and review requirements are being designed. The initial follow-up target is roughly one year with seasonal context.

## Current status — 22 October 2026

- Pilot collection: 3 geographic areas, 27 adjacent spatial patches, 39 source scenes, and 314 retained site–date observations.
- Source dates span December 2022–December 2025, with different dates available in each area.
- **No verified reference masks, training results, or finished benchmark release yet.**
- The observations are repeated views of three geographic groups, not independent event samples or nationwide coverage.
- This repository contains the website, selected image previews, and task documentation. It does not contain the full raster collection or any SND/ReMask experiment artifacts.

Planned work: finalize annotation rules; curate and annotate a bounded event set; audit quality; establish geographic splits and spectral/segmentation baselines; document and review a dataset release.

## Research context

VinUniversity project: “Utilizing satellite and drone imagery to monitor deforestation, UHIs, green space degradation, and detect super-emitters.” PI: Pham Huy Hieu. Co-PIs: Vu Hoang Dieu and Nguyen Duc Thanh. This dataset initiative focuses specifically on vegetation-loss trajectories.

Related resources include [DynamicEarthNet](https://arxiv.org/abs/2203.12560), [TERRA-CD](https://arxiv.org/abs/2605.14651), and [OlmoEarth LCC](https://huggingface.co/datasets/allenai/olmoearth_lcc). Temporal change mapping is established; some target trajectories are derivable from existing semantic masks. Our proposed contribution depends on useful event coverage, directly reviewed footprints and outcomes, and reproducible evaluation—not on a claim that this trajectory is unprecedented.

## Website maintenance

Buildless HTML/CSS/JavaScript. GitHub Pages serves the root of `main`. No installation or build is required. For a local preview, run `python -m http.server 8080` from this directory.

- `index.html`: public project narrative and current progress.
- The page opens with the published Sentinel-2 image pair and vegetation-change mask from TERRA-CD Figure 1. This external example illustrates two-date change labels; it does not establish our proposed follow-up outcomes. The motivation links global urban green-space trends to Vietnamese city evidence; see [SOURCES.md](SOURCES.md).
- `static/style.css`: responsive layout, adapted from the ReMask project page.
- `static/site.js`: RGB / NIR / NDVI selector and back-to-top control.
- `static/images/`: selected public-source previews, schematic, and branding.
- [ASSETS.md](ASSETS.md): provenance and limitations.

Do not present schematic masks as annotations, include unverified event claims, or update observation counts as if they were event counts. Keep status and release availability explicit.

## Rights and attribution

Opening example: Oak et al., TERRA-CD, Figure 1 (CC BY 4.0). Pilot imagery contains modified Copernicus Sentinel data (2023–2025). See [ASSETS.md](ASSETS.md). VinUniversity branding remains the property of its owner. No dataset license or publication status is asserted by this site; third-party assets retain their applicable terms.
