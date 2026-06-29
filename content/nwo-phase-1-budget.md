Title: NWO Take-off Phase 1 Budget Template and Feasibility Study Guide
Category: Grants & Funding
Tags: NWO, Take-off Grant, Feasibility Study, Budgeting, Commercialization, Deep Tech
CTA_Target: PI, Postdoc
slug: nwo-phase-1-budget
Date: 2026-06-29
Summary: A regionalized, highly practical walkthrough of the NWO Take-off grant requirements. It details exactly how to structure the feasibility budget, justifying why funds should be spent on commercial systems engineering, supply chain mapping, and outsourcing the "Platform Tax" rather than hiring another pure academic researcher.

## Maximizing the Impact of Your Feasibility Study

The NWO Take-off Phase 1 grant is a critical lifeline in the Dutch deep-tech ecosystem. Designed to fund feasibility studies, it provides up to €60,000 for a maximum period of six months to help researchers determine the commercial viability of their academic prototypes.

However, many Principal Investigators (PIs) and postdocs make a fundamental mistake when drafting their **nwo grant commercialization proposal**. They treat the feasibility study as an extension of their academic research, allocating the budget entirely to more lab time and bench testing. Reviewers at the NWO are not looking to fund another academic paper; they are looking for a rigorous, de-risked pathway to market.

To successfully navigate the **dutch research council knowledge utilization** requirements, your proposal must shift its focus from scientific discovery to industrial execution. This guide breaks down how to structure your budget and narrative to prove commercial feasibility for deep tech hardware.

## The Pitfall of the Academic Budget

When an academic team drafts an **nwo take off phase 1 budget**, the default reflex is often to allocate 90% of the funds to a postdoc salary to "improve the prototype."

For physical scientific instruments, this approach is inherently flawed. A prototype built by a researcher in a university lab is typically a TRL 4 (Technology Readiness Level 4) device. It relies on bespoke coding (often LabVIEW), unshielded electronics, and custom-machined parts that cannot be scaled. Paying a postdoc to add a new sensor to this fragile system does not answer the core question of the grant: *Is this commercially feasible?*

Commercial feasibility for hardware is dictated by the "Platform Tax"—the engineering required to make the device safe, certifiable, and manufacturable. Your budget must reflect a systematic plan to address these hurdles.

## A Structural NWO Take-off Phase 1 Budget Template

To align with the goals of the NWO Take-off scheme, your budget should prioritize market validation, supply chain mapping, and foundational systems engineering. Here is a recommended breakdown for a €60,000 Phase 1 hardware budget:

* **Market Discovery and Customer Validation (15% - €9,000):**
* Travel and logistics to visit external industrial labs or academic partners.
* Hosting structured interviews with Key Opinion Leaders (KOLs) to define exact User Requirement Specifications (URS). You must prove that a market exists outside your own university.


* **Systems Engineering & Architecture Audit (40% - €24,000):**
* Outsourcing an architectural review to an external productization studio or execution partner.
* Funding the translation of your academic codebase (e.g., [migrating from LabVIEW to a scalable Python/PyQt structure]({filename}/labview-to-python.md)).
* Developing a concrete [Hardware Abstraction Layer (HAL)]({filename}/hardware-abstraction-layer.md) blueprint to decouple your novel scientific payload from the standard lab infrastructure.


* **Regulatory Compliance & CE-Marking Roadmap (15% - €9,000):**
* Consulting with compliance experts to map out the exact [requirements for the Low Voltage Directive and EMC Directive]({filename}/ce-marking-requirements.md) (EN 61010).
* Identifying the necessary thermal, electrical, and structural modifications required to pass certification.


* **Supply Chain Mapping and Vendor Integration (10% - €6,000):**
* Sourcing regional, high-precision machine shops capable of low-volume manufacturing.
* Identifying secondary suppliers for critical opto-mechanical components to prevent single-point-of-failure bottlenecks.


* **Project Management & Valorisation Strategy (20% - €12,000):**
* Salary allocation for the lead researcher (the "valorising agent") to manage the feasibility study, coordinate with external engineering partners, and draft the final commercialization report.



## Justifying the Execution Partner in Your Proposal

One of the strongest narratives you can include in an **nwo grant commercialization proposal** for hardware is the explicit decision to partner with an external productization studio.

In your budget justification, clarify that relying entirely on internal academic staff for hardware scaling is a high-risk strategy. Evaluators understand that postdocs are scientific experts, not supply chain managers or CE-marking compliance officers.

By allocating funds to an external execution partner, you demonstrate to the NWO that you understand the reality of hardware economics. You are leveraging [pre-existing commercial architectures]({filename}/breadboard.md) (standardized DAQ backplanes, modular CE-compliant enclosures) to rapidly de-risk the transition from a TRL 4 bench prototype to a TRL 6 deployable system.

## Writing for Knowledge Utilization

The overarching goal of the Dutch Research Council is to ensure that publicly funded innovations achieve tangible societal or economic impact.

When structuring the **dutch research council knowledge utilization** section of your Phase 1 application, tie every line item in your budget directly to a commercial milestone. Do not promise an improved scientific prototype; promise a comprehensive report detailing the exact manufacturing cost, the regulatory roadmap, and the verified market demand for your instrument.

By treating your Phase 1 budget as an industrial feasibility audit rather than an academic research grant, you drastically increase your chances of securing the funding and successfully commercializing your deep tech hardware.