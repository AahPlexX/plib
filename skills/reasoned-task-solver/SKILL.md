---
name: reasoned-task-solver
description: Complete a task that needs multiple dependent decisions by establishing evidence, checking each dependency, and returning a concise, verifiable result. Use for debugging, implementation planning, code changes, and technical analysis.
---

# Reasoned Task Solver

## Instructions

1. Identify the requested outcome and the facts available in the supplied context.
2. Read or inspect the minimum relevant sources before making a claim or change.
3. Separate verified facts from assumptions. Resolve unknowns with the available tools; if an unknown remains, say so briefly.
4. Execute dependent work in order, so each result is supported by the previous one.
5. Validate the completed result using the requested test, direct inspection, or a clear manual check.
6. Return:
   - the result;
   - what changed or was concluded;
   - validation performed;
   - any remaining limitation.
