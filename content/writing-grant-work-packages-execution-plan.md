Title: Demystifying the Execution Plan: Writing Work Packages That Survive Jury Scrutiny
Category: Grants & Funding
Tags: Work Packages, Gantt Charts, Risk Mitigation, EIC Accelerator, Horizon Europe, Project Management
CTA_Target: PI, TTO, Engineering
slug: writing-grant-work-packages-execution-plan
Date: 2026-10-31
Summary: A tactical blueprint for structuring the Implementation section of EIC Accelerator and Horizon Europe hardware proposals—covering the Science Breadboard Work Package architecture, Design Freeze milestones, Deliverables vs. Milestones, and realistic risk mitigation matrices.

When evaluating a deep tech grant—such as the [EIC Accelerator]({filename}/eic-accelerator-deep-tech.md) or a [Horizon Europe collaborative project]({filename}/managing-horizon-europe-consortia.md)—juries apply a brutal heuristic: *Brilliant science is common; brilliant execution is rare.*

You can have a watertight "Excellence" section that outlines a Nobel-caliber breakthrough in nanoparticle synthesis, and an ["Impact" section]({filename}/write-horizon-impact.md) boasting a [highly defensible bottom-up market]({filename}/market-analysis-trap-generic-tam.md). But if your "Implementation" section—the third of the [four universal grant pillars]({filename}/anatomy-of-a-winning-deep-tech-grant.md)—looks like a disorganized academic wish-list, the jury will reject the proposal. They are looking for industrial operational maturity.

The Implementation section is the structural backbone of your project. Once the Grant Agreement is signed, this section transforms from a proposal into a legally binding contract (often Annex 1, the "Description of Action"). Here is a tactical guide to structuring your Work Packages (WPs), milestones, and risk-mitigation matrices to prove your team can actually deliver the hardware.

## The Shift: From "We Will Try" to "We Will Deliver"

In academia, a research plan is exploratory; you follow the data. In a [commercial productization sprint]({filename}/1-year-sprint.md) ([moving from TRL 4 to TRL 8]({filename}/navigating_trl.md)), a Work Package is a strict, autonomous unit of work with a defined budget, timeline, and outcome.

Evaluators are highly allergic to "research-speak" in the Implementation section. 

*   **Bad (Academic):** "We will investigate the thermal properties of the laser housing."
*   **Good (Industrial):** "We will design, machine, and test a modular aluminum chassis that maintains a ±0.1°C [thermal stability]({filename}/thermal-management-deep-tech.md) under continuous operation."

## The "Science Breadboard" Work Package Structure

For [low-volume, niche scientific hardware]({filename}/low-volume-manufacturing.md), you shouldn't reinvent the wheel. Evaluators want to see a logical progression from the bench to the market. A standard, highly defensible Work Package structure based on the ["Science Breadboard" approach]({filename}/breadboard.md) for a [hardware asset carve-out]({filename}/asset-carveout-vs-spinoff.md) usually looks like this:

*   **WP 1: Core Hardware Optimization (The Payload):** Translating the fragile academic prototype into a robust, repeatable physics engine (e.g., standardizing optical mounts, [replacing 3D printed parts with toleranced CNC components]({filename}/3d-printing-to-cnc.md)).
*   **WP 2: Software Architecture & Control (The HAL):** Ripping out the [chaotic legacy LabVIEW scripts and building a commercial-grade Python/PyQt]({filename}/labview-to-python.md) [Hardware Abstraction Layer]({filename}/hardware-abstraction-layer.md) to ensure stable data acquisition.
*   **WP 3: Systems Engineering & Compliance (The Platform Tax):** Integrating the hardware and software into a unified chassis. This WP explicitly tackles [the Platform Tax]({filename}/budgeting.md), [EMI shielding]({filename}/ce-marking-checklist.md), [thermal management]({filename}/thermal-management-deep-tech.md), and preparing the technical file for [CE-marking]({filename}/ce-marking-requirements.md).
*   **WP 4: Pilot Deployment & Commercialization:** Deploying "Serial #001" to an early-adopter customer (like a [regional fab or academic lab partner]({filename}/selling-to-fabs-vs-labs.md)) to secure real-world validation and [Letters of Support]({filename}/letters_support.md).
*   **WP 5: Project Management & Dissemination:** The administrative overhead required to manage the grant, handle consortium reporting, and [protect foreground and background IP]({filename}/navigating-background-ip.md).

## Deliverables vs. Milestones: Getting the Granularity Right

A common trap is confusing Deliverables with Milestones. If you write them incorrectly, you will inadvertently create administrative nightmares for your engineering team.

*   **Deliverables are artifacts.** They are tangible items or reports submitted to the funding agency to prove a task was completed. (e.g., *Deliverable 3.1: EMI Shielding Test Report*; *Deliverable 2.1: Beta release of the PyQt GUI*). **Pro-Tip:** Do not promise a deliverable every month. You will bury your team in paperwork. Cluster them logically.
*   **Milestones are control points.** They are binary "Go/No-Go" decision gates where parallel workstreams converge. They must be verifiable. For hardware, the ultimate milestone is a **"Design Freeze"**—the moment where R&D stops, the Bill of Materials (BOM) is locked, and manufacturing begins. 

## The Risk Mitigation Matrix: Proving You Live in Reality

Juries do not trust founders who claim their project is "low risk." If it were low risk, a commercial bank would fund it (and it would fail the [Additionality test]({filename}/proving-additionality-deep-tech-grants.md)). Deep tech is inherently risky. A robust Risk Mitigation Matrix proves that you have the foresight to anticipate failure and the operational maturity to bypass it.

A winning matrix breaks risks down into three categories, assigns a probability (Low/Med/High) and severity (Low/Med/High), and provides a concrete mitigation strategy:

1.  **Technical Risks:** 
    *   *Risk:* The new compact laser diode fails to achieve the required coherence length due to thermal drift (Prob: Med, Sev: High). 
    *   *Mitigation:* Implement active Peltier cooling in WP1. Fallback: revert to the slightly bulkier, but proven, TRL 4 diode architecture while maintaining the software stack.
2.  **Supply Chain Risks:**
    *   *Risk:* A critical precision-machined component is single-sourced from a specialized vendor with a 6-month lead time (Prob: High, Sev: High).
    *   *Mitigation:* Identify and vet three alternative [local machine shops]({filename}/micro-cluster-manufacturing.md) during WP3 to ensure [low-volume supply chain resilience]({filename}/supply-chain-low-volume.md). Design the component to standard industrial tolerances rather than bespoke academic catalog specs.
3.  **Commercial/Regulatory Risks:**
    *   *Risk:* The instrument fails initial [CE-marking pre-compliance testing]({filename}/ce-marking-requirements.md) for electromagnetic emissions (Prob: Med, Sev: Med).
    *   *Mitigation:* Budget for external compliance consultants early in WP3 rather than retrofitting shielding at the end of the project.

## The Bottom Line

When you submit an execution plan that features tightly scoped Work Packages, verifiable "Design Freeze" milestones, and a brutally honest Risk Matrix, you send a clear signal to the evaluators. You are no longer an academic asking for a research grant; you are a [systems engineer]({filename}/researcher-to-systems-engineer.md) presenting a highly de-risked industrialization sprint.

## Related Guides & Resources

* [The Anatomy of a Winning Deep Tech Grant: The Four Universal Pillars]({filename}/anatomy-of-a-winning-deep-tech-grant.md)
* [How to Write the Horizon Europe Impact Pathway Section for Hardware Projects]({filename}/write-horizon-impact.md)
* [The "Science Breadboard" Approach: Eradicating the Platform Tax]({filename}/breadboard.md)
* [Managing Horizon Europe Consortia: Aligning Academic Research with Industrial Productization]({filename}/managing-horizon-europe-consortia.md)
* [De-Risking NWO & Horizon Europe Grants: A Strategic Approach for TTOs]({filename}/de-risking-NWO.md)
* [Why Every Academic Hardware Project Needs a Systems Engineer from Day One]({filename}/systems-engineer-day-one.md)
* [CE Marking for Measuring Instruments: When to Start Compliance Testing]({filename}/when-to-start-compliance-testing-ce-marking-measuring-instruments.md)
