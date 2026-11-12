# Graph Report - proyectos  (2026-11-12)

## Corpus Check
- 98 files · ~56,794 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 14 file(s) not represented in the graph (top: (none) 10, .scss 2, .nswag 1)

## Summary
- 1031 nodes · 1482 edges · 78 communities (58 shown, 20 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 157 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- global_system
- EventsHub.Application.Core.Mapping
- EventsHub.UnitTests.csproj
- EventsControllerTests
- package.json
- Entity Framework Core: DbContext Deep Dive
- MapperTests
- Software Testing Fundamentals: A Developer's Guide
- ADDED Requirements
- Event
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- Requirements
- GlobalTestSetup
- https
- TypeMap
- EventsHub.OpenApi
- WeatherForecast
- Decisions
- automapper
- Part 5: Practice
- ref_app_layout_index_css
- system_collections_generic
- Step 1 — Install Graphify
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- system_diagnostics
- Clean Architecture Fundamentals
- 14. Event Sourcing — Advanced
- dependencies
- devDependencies
- system_linq
- compilerOptions
- @mui/material
- compilerOptions
- Part 4: npm only, `package.json` in a subfolder (Husky v9)
- Part 2: .NET only (Husky.Net)
- EventsHubBaseController
- Git in Practice: A Step-by-Step Guide
- system_threading_tasks
- Handler
- Who uses it
- web_eventshub_src_index
- AppDbContext
- commit-msg
- pre-commit
- Handler
- Part 6 — Practice and Pitfalls
- Manual setup — OpenAPI doc generation + typed client for the EventsHub API
- IMapper
- 6. The write side — Intermediate
- Mapper
- Repository Guidelines
- system_runtime_compilerservices
- web_eventshub_src_features_home_homepage_module
- Profile
- MappingProfiles
- 13. Domain events and integration events — Intermediate
- IRequest
- eslint.config.js
- 19. Implementing the dispatching pipeline — Intermediate
- Part 1: Foundations
- 21. CQRS in Web APIs — Intermediate
- vite.config.ts
- 23. Evolving toward CQRS — Advanced
- 5. When to use it and when not to — Intermediate
- 9. Validation and error handling — Intermediate
- 8. Handlers and dispatching — Intermediate
- scripts
- allowScripts
- overrides
- CqrsFundamentals.md
- husky-setup.md
- task-runner.json
- lint-staged
- tsconfig.json
- web_eventshub_src_app_features_home_homepage_module
- web_eventshub_src_app_layout_styles
- system_security_cryptography

## God Nodes (most connected - your core abstractions)
1. `Event` - 56 edges
2. `AppDbContext` - 27 edges
3. `TypeMap` - 24 edges
4. `Profile` - 20 edges
5. `IMapper` - 19 edges
6. `MapperTests` - 19 edges
7. `compilerOptions` - 18 edges
8. `Entity Framework Core: DbContext Deep Dive` - 18 edges
9. `Mapper` - 16 edges
10. `EventsControllerTests` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Step 1: Create `src/EventsHub.OpenApi/` (the standalone doc-generation host)` --references--> `WeatherForecastController`  [INFERRED]
  docs/guides/OpenApiSetup.md → src/EventsHub.Api/Controllers/WeatherForecastController.cs
- `Project Structure & Module Organization` --references--> `Event`  [INFERRED]
  AGENTS.md → src/EventsHub.Domain/Event.cs
- `Steps` --references--> `Event`  [INFERRED]
  docs/fundamentals/CleanArchitectureFundamentals.md → src/EventsHub.Domain/Event.cs
- `5. New-instance creation` --references--> `Event`  [INFERRED]
  openspec/changes/archive/2026-09-29-replace-automapper-with-custom-mapper/design.md → src/EventsHub.Domain/Event.cs
- `Context` --references--> `Event`  [INFERRED]
  openspec/changes/archive/2026-09-29-replace-automapper-with-custom-mapper/design.md → src/EventsHub.Domain/Event.cs

## Import Cycles
- None detected.

## Communities (78 total, 20 thin omitted)

### Community 1 - "EventsHub.Application.Core.Mapping"
Cohesion: 0.06
Nodes (37): EventsHub.Domain, EventsHub.Application.Core.Mapping, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Persistence (+29 more)

### Community 2 - "EventsHub.UnitTests.csproj"
Cohesion: 0.06
Nodes (32): MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4), NSwag.AspNetCore (14.7.1) (+24 more)

### Community 3 - "EventsControllerTests"
Cohesion: 0.13
Nodes (19): ActionResult, Exception, HttpDelete, HttpPost, HttpPut, ProducesResponseType, ServiceProvider, CancellationToken (+11 more)

### Community 4 - "package.json"
Cohesion: 0.11
Nodes (17): @babel/core, babel-plugin-react-compiler, date-fns, @emotion/react, @emotion/styled, lint-staged, prettier, sass-embedded (+9 more)

### Community 5 - "Entity Framework Core: DbContext Deep Dive"
Cohesion: 0.04
Nodes (47): 0. Introduction, 10. Performance & Query Optimization, 11. `DbContext` Pooling & Advanced Lifetime Management, 12. Testing with `DbContext`, 13. Common Pitfalls & Anti-Patterns, 14. Summary Table, 15. Suggested Exercise, 1.5. How `DbContext` Works — Visual Overview (+39 more)

### Community 6 - "MapperTests"
Cohesion: 0.08
Nodes (38): ArgumentException, ArgumentNullException, InvalidOperationException, TestCase, IReadOnlyList, List, ChildDest, Name (+30 more)

### Community 7 - "Software Testing Fundamentals: A Developer's Guide"
Cohesion: 0.06
Nodes (32): 0. Introduction, 10. Common Pitfalls & Anti-Patterns, 11. Summary Table, 12. Suggested Exercise, 1. What Is Software Testing?, 2. Why Testing Matters, 3. Core Testing Concepts & Terminology, 4. The Testing Pyramid (+24 more)

### Community 8 - "ADDED Requirements"
Cohesion: 0.07
Nodes (26): ADDED Requirements, Purpose, Requirement: Convention-based member matching, Requirement: Edit behavior is preserved, Requirement: Map into a new destination, Requirement: Map onto an existing destination, Requirement: Nested and collection members, Requirement: Per-member overrides (+18 more)

### Community 9 - "Event"
Cohesion: 0.12
Nodes (16): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+8 more)

### Community 10 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 11 - "Requirements"
Cohesion: 0.07
Nodes (26): object-mapping Specification, Purpose, Requirement: Convention-based member matching, Requirement: Edit behavior is preserved, Requirement: Map into a new destination, Requirement: Map onto an existing destination, Requirement: Nested and collection members, Requirement: Per-member overrides (+18 more)

### Community 12 - "GlobalTestSetup"
Cohesion: 0.16
Nodes (13): Testing Guidelines, Request walkthrough, OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, EventsHub.Persistence, Seed data caveat (+5 more)

### Community 13 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 14 - "TypeMap"
Cohesion: 0.09
Nodes (25): IReadOnlyDictionary, LambdaExpression, MethodInfo, 2. Compiled delegates per map, PropertyInfo, Action, Expression, Func (+17 more)

### Community 15 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 16 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Decisions"
Cohesion: 0.14
Nodes (15): 1. Namespace and layout, 3. Members from the source are matched case-sensitively, 4. Nested and collection members, 5. New-instance creation, 6. Errors and lifetime, 7. Startup wiring, 8. Tests, Context (+7 more)

### Community 19 - "Part 5: Practice"
Cohesion: 0.22
Nodes (9): 20. Testing CQRS systems — Intermediate, 22. Common pitfalls and anti-patterns — Intermediate, A quick self-check, Appendix: Glossary, Given / When / Then for aggregates, Guidelines, Part 5: Practice, Testing projections (+1 more)

### Community 22 - "Step 1 — Install Graphify"
Cohesion: 0.15
Nodes (12): Build the graph, Exclude noisy paths before the first build, Initialize in this repo, Keep the graph fresh — auto-rebuild on every commit, Notes for whoever runs this (not part of the agent prompt), Prompt: Install Graphify + OpenSpec in EventsHub, Register the Codex / ChatGPT skill, Step 1 — Install Graphify (+4 more)

### Community 23 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 25 - "Clean Architecture Fundamentals"
Cohesion: 0.04
Nodes (46): Command, 10. Project References and Enforcing the Dependency Direction — Intermediate, 11. Dependency Injection and the Composition Root — Intermediate, 12. Repository and Unit of Work — Advanced, 13. CQRS: Commands vs. Queries — Intermediate, 14. MediatR and Pipeline Behaviors — Advanced, 15. The Result Pattern vs. Exceptions — Intermediate, 16. Mapping and DTO Boundaries — Intermediate (+38 more)

### Community 26 - "14. Event Sourcing — Advanced"
Cohesion: 0.08
Nodes (24): 14. Event Sourcing — Advanced, 15. Projections and read model rebuilding — Advanced, 16. Outbox pattern and reliable messaging — Advanced, 17. Sagas and process managers — Advanced, 18. Idempotency and concurrency — Advanced, Benefits, Compensation, Concurrency (+16 more)

### Community 27 - "dependencies"
Cohesion: 0.13
Nodes (15): dependencies, axios, date-fns, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material (+7 more)

### Community 28 - "devDependencies"
Cohesion: 0.10
Nodes (21): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+13 more)

### Community 30 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 31 - "@mui/material"
Cohesion: 0.09
Nodes (34): axios, @fontsource/roboto, @mui/icons-material, @mui/material, react, react-calendar, react-dom, react-router (+26 more)

### Community 32 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 33 - "Part 4: npm only, `package.json` in a subfolder (Husky v9)"
Cohesion: 0.14
Nodes (14): Optional: add Prettier (code formatting), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Step 10: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky, Step 3: Point the `prepare` script at the subfolder, Step 4: Install the hooks (+6 more)

### Community 34 - "Part 2: .NET only (Husky.Net)"
Cohesion: 0.14
Nodes (14): Part 2: .NET only (Husky.Net), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Create a local tool manifest, Step 3: Install Husky as a local tool, Step 4: Install the Git hooks (+6 more)

### Community 35 - "EventsHubBaseController"
Cohesion: 0.14
Nodes (14): ControllerBase, Cross-cutting conventions actually in use, IMediator, EventsHubBaseController, Mediator, HttpGet, IEnumerable, WeatherForecastController (+6 more)

### Community 36 - "Git in Practice: A Step-by-Step Guide"
Cohesion: 0.17
Nodes (11): 1. Creating branches, 2. Checking out branches, 3. Commits, 4. Pull Requests, 5. Merge, 6. Cherry-pick, 7. Squash, Extra: Stash (bonus) (+3 more)

### Community 38 - "Handler"
Cohesion: 0.17
Nodes (10): Capabilities, Impact, Modified Capabilities, New Capabilities, Proposal, What Changes, Why, CancellationToken (+2 more)

### Community 39 - "Who uses it"
Cohesion: 0.18
Nodes (10): Building, Contents, EventsHub.Domain, Who uses it, Current state / known rough edges, EventsHub — Web, Project layout, Running it (+2 more)

### Community 41 - "AppDbContext"
Cohesion: 0.18
Nodes (13): DbContext, DbContextOptions, DbSet, Architectural pattern, Components, EventsHub — Architecture, Generated vs. hand-maintained, System overview (+5 more)

### Community 44 - "Handler"
Cohesion: 0.21
Nodes (11): ILogger, Query, CancellationToken, Task, Handler, CancellationToken, List, Task (+3 more)

### Community 45 - "Part 6 — Practice and Pitfalls"
Cohesion: 0.13
Nodes (15): 25. Folder and Project Structure: Layer-Based vs. Feature-Based — Intermediate, 26. Common Mistakes: Anemic Domain, Leaky Abstractions, Over-Engineering — Intermediate, 27. When _Not_ to Use Clean Architecture — General, 28. Migrating an Existing Codebase Incrementally — Advanced, 29. Guided Exercise: Build "Create Event" Through Every Layer — General, Feature-based (vertical slices), Layer-based (by technical role), Leaky abstractions (+7 more)

### Community 46 - "Manual setup — OpenAPI doc generation + typed client for the EventsHub API"
Cohesion: 0.20
Nodes (9): Current state on this branch, Manual setup — OpenAPI doc generation + typed client for the EventsHub API, Part 1 — Manually scaffold the pieces, Part 2 — Populate the generated content, Step 1: Create `src/EventsHub.OpenApi/` (the standalone doc-generation host), Step 2: Create `openapi/` (generated output folder), Step 3: Create `nswag/EventsHub.nswag` (checked-in codegen config), Step 4: Register the NSwag CLI as a local tool (+1 more)

### Community 47 - "IMapper"
Cohesion: 0.26
Nodes (10): Assembly, IServiceCollection, Wiring (`Program.cs`), IMapper, Adding a mapping profile, Adding a use case, Contents, EventsHub.Application (+2 more)

### Community 48 - "6. The write side — Intermediate"
Cohesion: 0.50
Nodes (4): 6. The write side — Intermediate, The command handler, The domain model and aggregates, Typical flow

### Community 50 - "Mapper"
Cohesion: 0.32
Nodes (5): Dictionary, Type, Mapper, Test, MappingProfilesTests

### Community 51 - "Repository Guidelines"
Cohesion: 0.25
Nodes (7): Build, Test, and Development Commands, Coding Style & Naming Conventions, Commit & Pull Request Guidelines, graphify, Project Structure & Module Organization, Repository Guidelines, Security & Configuration Tips

### Community 54 - "Profile"
Cohesion: 0.20
Nodes (9): 2. Mapper core (alongside AutoMapper), Type, MappingServiceCollectionExtensions, IReadOnlyList, List, Profile, Maps, EventSummaryProfile (+1 more)

### Community 55 - "MappingProfiles"
Cohesion: 0.22
Nodes (8): Handler, 1. Test project, 3. Cut over and remove AutoMapper, 4. Documentation, 5. Final integration check, Tasks, SetUp, MappingProfiles

### Community 56 - "13. Domain events and integration events — Intermediate"
Cohesion: 0.12
Nodes (17): 10. Single database, separated models — Intermediate, 11. Separate read and write stores — Advanced, 12. Eventual consistency — Advanced, 13. Domain events and integration events — Intermediate, Design principles, Domain events, Guidelines, Handling it in the user experience (+9 more)

### Community 57 - "IRequest"
Cohesion: 0.25
Nodes (8): IRequest, Command, Event, Command, Event, GetEventDetails, Query, Id

### Community 58 - "eslint.config.js"
Cohesion: 0.25
Nodes (7): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, typescript-eslint

### Community 59 - "19. Implementing the dispatching pipeline — Intermediate"
Cohesion: 0.33
Nodes (6): 19. Implementing the dispatching pipeline — Intermediate, A minimal dispatcher, Building the pipeline, Libraries versus hand-written, Practical guidance, The essential contracts

### Community 60 - "Part 1: Foundations"
Cohesion: 0.25
Nodes (8): 1. What is CQRS? — General, 2. CQS vs. CQRS — General, 3. The problem CQRS solves — General, 4. Commands, Queries, and Events — General, Commands, Events, Part 1: Foundations, Queries

### Community 61 - "21. CQRS in Web APIs — Intermediate"
Cohesion: 0.33
Nodes (6): 21. CQRS in Web APIs — Intermediate, Asynchronous commands, Choosing resource styles, Guidelines, Status codes, Verbs and messages

### Community 62 - "vite.config.ts"
Cohesion: 0.40
Nodes (4): @rolldown/plugin-babel, vite, vite-plugin-mkcert, @vitejs/plugin-react

### Community 63 - "23. Evolving toward CQRS — Advanced"
Cohesion: 0.50
Nodes (4): 23. Evolving toward CQRS — Advanced, A staged approach, Decision checkpoints, Migration techniques

### Community 64 - "5. When to use it and when not to — Intermediate"
Cohesion: 0.40
Nodes (5): 5. When to use it and when not to — Intermediate, A useful rule of thumb, Signals that CQRS may pay off, Signals that it is probably unnecessary, The costs

### Community 65 - "9. Validation and error handling — Intermediate"
Cohesion: 0.40
Nodes (5): 9. Validation and error handling — Intermediate, Guidelines, The Result pattern, Types of failure, Where validation belongs

### Community 66 - "8. Handlers and dispatching — Intermediate"
Cohesion: 0.50
Nodes (4): 8. Handlers and dispatching — Intermediate, Design guidelines, Pipeline behaviors, Responsibilities

### Community 67 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 70 - "CqrsFundamentals.md"
Cohesion: 0.25
Nodes (7): 7. The read side — Intermediate, CQRS Fundamentals: A Tool-Agnostic Reference Guide, Design guidelines, Part 2: Core Building Blocks, Query handlers, Read models, Table of Contents

### Community 71 - "husky-setup.md"
Cohesion: 0.50
Nodes (3): How to use this guide, Installing Husky in a Project: .NET and npm, Where to run the commands (read this once)

### Community 73 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,css}, *.{ts,tsx}

## Knowledge Gaps
- **492 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+487 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 587 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `EventsHubBaseController`, `EventsControllerTests`, `Handler`, `Who uses it`, `ADDED Requirements`, `AppDbContext`, `Requirements`, `GlobalTestSetup`, `Part 6 — Practice and Pitfalls`, `Handler`, `IMapper`, `Decisions`, `Mapper`, `Repository Guidelines`, `Step 1 — Install Graphify`, `MappingProfiles`, `IRequest`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `AppDbContext` to `EventsHub.Application.Core.Mapping`, `EventsHubBaseController`, `EventsControllerTests`, `Entity Framework Core: DbContext Deep Dive`, `Handler`, `Who uses it`, `Event`, `GlobalTestSetup`, `Handler`, `IMapper`, `Step 1 — Install Graphify`, `Clean Architecture Fundamentals`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `Event` (e.g. with `Project Structure & Module Organization` and `Architectural pattern`) actually correct?**
  _`Event` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `AppDbContext` (e.g. with `Architectural pattern` and `Components`) actually correct?**
  _`AppDbContext` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 9 inferred relationships involving `Profile` (e.g. with `1. Namespace and layout` and `Goals / Non-Goals`) actually correct?**
  _`Profile` has 9 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _492 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EventsHub.Application.Core.Mapping` be split into smaller, more focused modules?**
  _Cohesion score 0.05734767025089606 - nodes in this community are weakly interconnected._