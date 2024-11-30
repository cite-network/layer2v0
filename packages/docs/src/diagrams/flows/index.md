---
layout: home
hero:
  name: Graph OP Chain
  text: Documentation
  tagline: Comprehensive documentation for the Graph Operation Chain
  actions:
    - theme: brand
      text: Architecture
      link: /architecture/
    - theme: alt
      text: Data Flows
      link: /flows/
    - theme: alt
      text: Components
      link: /components/

features:
  - title: Architecture
    details: Detailed architectural diagrams and explanations of the Graph OP Chain system.
  - title: Data Flows
    details: Comprehensive flow diagrams showing how data moves through the system.
  - title: Components
    details: Detailed documentation of each system component and their interactions.
---

# Graph Op Chain Documentation

Welcome to the Graph Op Chain documentation. This documentation covers the architecture, components, and flows of our L2 chain implementation.

## Quick Links

- [Architecture Overview](/architecture/)
- [Components](/components/)
- [Flow Diagrams](/flows/)

## Example Mermaid Diagram

```mermaid
graph TD
    A[L2 Chain] --> B[Graph Operations]
    B --> C[State Processing]
    B --> D[Data Indexing]
    C --> E[State Commitment]
    D --> F[Query Layer]