# Evidence behind the project-page motivation

Checked 22 October 2026. This is a focused editorial evidence check, not a systematic review or proof of an unstudied task. Page statistics describe their sources' areas, dates, and definitions; they are not estimates produced by this project.

| Page claim | Primary source | Interpretation boundary |
| --- | --- | --- |
| Global urban green-space share: 19.5% in 1990 → 13.9% in 2020 | [UN SDG Report 2025, Goal 11](https://unstats.un.org/sdgs/report/2025/goal-11), “Rapid urbanization calls for a focus on urban climate adaptation” | A reported urban green-space share, not a vegetation-loss event count or a Vietnam statistic. |
| Inner-city vegetation scarcity: 0.95 m²/person in Dong Da and 0.72 in HCMC District 4 | [Scheiber et al., 2026](https://doi.org/10.1016/j.rsase.2025.101820), §3.2; [open full text](https://elib.dlr.de/220800/1/1-s2.0-S2352938525003738-main.pdf) | 2019 district boundaries; satellite-defined vegetation using an NDVI threshold. It does not measure public-park accessibility or today's reorganized administrative units. |
| Regrowth on cleared development plots is a locally relevant follow-up question | Same study, §4.2 | The discussion describes scrub/grass regrowth in Thu Duc and stalled development. This motivates the question; it does not establish causes or outcomes for our pilot patches. |
| The public lead example has two-date vegetation-change labels | [Oak et al., TERRA-CD](https://arxiv.org/html/2605.14651v1), Fig. 1 and §§3.3–3.4 | Published algorithm-derived labels; not our manually reviewed outcomes. No raw tile identity, independent mask audit, or third-date outcome was obtained. |

## How the introductions informed the page

We read the introductions and relevant methods/discussion in three reports:

- [DynamicEarthNet (Toker et al., CVPR 2022)](https://arxiv.org/html/2203.12560v1): local environmental change requires time series and pixel-level interpretation. Its existing temporal semantic labels overlap with part of our proposed task.
- [TERRA-CD (Oak et al., 2026 preprint)](https://arxiv.org/html/2605.14651v1): links urban vegetation monitoring to multi-class change labels and a benchmark. Its broad claims about other datasets are not repeated as established facts here.
- [Scheiber et al. (2026)](https://doi.org/10.1016/j.rsase.2025.101820): connects urban ecosystem services, Vietnamese urbanization, and repeat satellite monitoring. It supplies the concrete local use case.

The resulting page structure is: **proposed scope → a labeled public example → global and local evidence → the proposed dataset and AI task → current status → optional data details**. A changed task is not by itself evidence of scientific novelty. Quality, coverage, and evaluation remain to be established.

## Search scope and limits

Discovery used web search, official UN/WRI pages, arXiv full text, the DLR institutional repository, and the TERRA-CD authors' GitHub repository. Representative exact queries included:

- `TERRA-CD dataset Sentinel-2 vegetation change dataset github`
- `Vietnam urban green space decline Hanoi Ho Chi Minh City 2025 satellite Scheiber`
- `site.unstats.un.org "2025" "green" "cities" "11"`
- `"Sentinel-2" "vegetation change" dataset download masks github`
- `"DynamicEarthNet" "dataset" "download" samples`

Forest-loss statistics and the Yellowstone sequence were considered but not used in the revised opening: urban green-space evidence and Sentinel-2 examples fit the pilot more directly. The selected example is a published figure with traceable label semantics, not a downloaded raw dataset sample. Screening and interpretation were performed by one assistant; coverage is selective.

## Workflow credit

The evidence-checking workflow used the `research-evidence-core:literature-review` skill, documented in Kassis, T., Agarwal, V., He, Y., Patel, D., & Brueckner, A. M. (2026), *Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents*, [arXiv:2609.00065](https://doi.org/10.48550/arXiv.2609.00065). This is a workflow reference, not evidence for the environmental claims above.
