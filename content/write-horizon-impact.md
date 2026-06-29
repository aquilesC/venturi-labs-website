Title: How to Write the Horizon Europe Impact Pathway Section for Hardware Projects
Category: Grants & Funding
Tags: Horizon Europe, Impact Pathway, TRL Scale, Grant Writing, Deep Tech
CTA_Target: PI, TTO
slug: write-horizon-impact
Date: 2026-06-29
Summary: A blueprint for filling out the mandatory "Impact" and "Knowledge Utilization" tables in EU proposals. It provides concrete text templates explaining how an open-hardware or studio-backed productization model proves a definitive pathway from TRL 4 to TRL 8, directly satisfying European Commission reviewers.

## The Evaluation Shift in Horizon Europe

Writing the "Impact" section (Section 2) for a Horizon Europe proposal requires a distinct shift in mindset, particularly for physical scientific hardware. European Commission evaluators are no longer satisfied with vague promises that a breakthrough instrument will "eventually be spun out" or "licensed to industry." 

With recent template revisions tightening page limits and streamlining Section 2.1 (*Project’s pathways towards impact*), evaluators demand hyper-specific, de-risked uptake mechanisms. They want to see exactly how your consortium plans to move a fragile bench prototype (TRL 4) into a validated, deployable system (TRL 6–8) without letting the technology die in the academic lab.

For deep tech hardware, the most effective way to prove a credible impact pathway is to integrate a **centralized productization or venture studio model** directly into the grant. By treating industrialization as a structured service rather than a post-award gamble, you instantly validate your technology readiness timeline.

## Navigating the Technology Readiness Level (TRL) Scale for Hardware

The European Commission uses the [TRL scale]({filename}/navigating_trl.md) to assess funding eligibility and maturity. In hardware proposals, projects typically follow this arc:
*   **TRL 3-4 (The Starting Point):** Experimental proof of concept; technology validated in the lab. This is your "duct-tape and LabVIEW" prototype. It proves the novel science but is not scalable.
*   **TRL 5-6 (The Horizon Europe Core):** Technology validated and demonstrated in a relevant environment. This requires standardizing the hardware, integrating proper software (e.g., Python/PyQt), and solving fundamental engineering compliance.
*   **TRL 7-8 (The Deployment Phase):** System prototype demonstration in an operational environment; system complete and qualified (CE-marked).

The massive gap between TRL 4 and TRL 6 is the deep tech "Valley of Death." If your proposal relies on an academic postdoc to navigate EMI shielding, CE-marking, and supply chain logistics alone, evaluators will flag your impact pathway as high-risk. 

## The Blueprint: Structuring Section 2.1 and 2.2

To maximize your evaluation score, you must explicitly separate the novel scientific payload from the standard "Platform Tax" (the basic structural engineering required for all commercial hardware). 

Here are structural blueprints and text templates you can adapt for your Horizon Europe Impact section to prove a realistic **how to prove trl 4 to trl 6** transition.

### Blueprint for Section 2.1: Pathways Towards Impact

In this section, you must define the short-term *Results* and the medium-term *Outcomes*. 

**Text Template (Adapt for your specific technology):**
> **Result (End of Year 2):** The project will deliver a TRL 4 benchtop prototype of the [Novel Metrology/Deposition Sensor], validating the core scientific principles within a controlled laboratory environment. 
>
> **Uptake Mechanism & Pathway to TRL 6 (Year 3-4):** To transition the TRL 4 prototype into a deployable TRL 6/7 system, the consortium will not rely on a high-risk, ad-hoc academic spin-off. Instead, we will utilize a centralized hardware productization model [via Partner X / Venture Studio]. The novel scientific payload will be physically decoupled from the standard lab infrastructure. The studio partner will port the underlying data acquisition algorithms into a pre-existing, [object-oriented Python architecture]({filename}/labview-to-python.md) and integrate the sensor into a standardized, CE-compliant modular chassis. 
> 
> **Outcome (End of Project):** By utilizing shared engineering infrastructure, the project will deploy three stable, user-ready "Serial #001" units to external validation partners in the consortium, achieving TRL 6/7 and ensuring immediate scientific uptake across the European Research Area.

### Blueprint for Section 2.2: Measures to Maximise Impact

This section details your dissemination, communication, and exploitation measures. For hardware, "Exploitation" is where you explain the commercialization strategy. 

**Text Template (Adapt for your specific technology):**
> **Exploitation Strategy (Asset Carve-Out vs. Spin-off):**
> Niche scientific instruments frequently fail to secure the venture capital required for traditional spin-offs due to limited early-stage Total Addressable Markets (TAM). To guarantee the exploitation of the [Instrument Name], our consortium will execute an [asset carve-out strategy]({filename}/asset-carveout-vs-spinoff.md).
>
> 1. **IP Management:** The foreground IP generated (the novel sensor architecture) will be licensed directly to the productization execution partner.
> 2. **Capital Efficiency:** Because the execution partner utilizes a compounding hardware architecture (shared power backplanes, standard EMI shielding, and unified UI frameworks), the cost of commercializing the instrument is reduced by an estimated 60%. This allows the technology to achieve operational profitability at low manufacturing volumes (20-50 units/year).
> 3. **Talent Retention:** The lead academic hardware engineer (Postdoc) will transition into a structured [12-month industrialization sprint]({filename}/1-year-sprint.md) with the product studio, ensuring zero loss of tacit knowledge and anchoring high-value deep tech talent within the regional ecosystem.

## Why This Approach Wins

When an evaluator reads this impact pathway, they see a de-risked roadmap. You have eliminated the fantasy that a university lab will magically transform into a CE-compliant manufacturing facility. 

By strategically inserting a specialized execution partner into your Horizon Europe proposal, you demonstrate a profound understanding of hardware economics, proving to the Commission that their funding will result in tangible, deployable technology rather than abandoned patents.