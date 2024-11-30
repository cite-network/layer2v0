# System Architecture

```mermaid
graph TD
    A[Ethereum L1] --> B[Bridge]
    B --> C[OP Chain]
    C --> D[Indexer]
    C --> E[Graph DB]