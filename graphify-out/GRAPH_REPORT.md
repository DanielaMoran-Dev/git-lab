# Graph Report - proyectos  (2026-11-20)

## Corpus Check
- 98 files · ~56,845 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 14 file(s) not represented in the graph (top: (none) 10, .scss 2, .nswag 1)

## Summary
- 1033 nodes · 1488 edges · 94 communities (73 shown, 21 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 160 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5638a8df`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- MappingProfiles
- automapper
- Part 5: Practice
- ref_app_layout_index_css
- system_collections_generic
- Step 1 — Install Graphify
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- system_diagnostics
- Command
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
- IMapper
- Who uses it
- web_eventshub_src_index
- AppDbContext
- commit-msg
- pre-commit
- Handler
- Part 6 — Practice and Pitfalls
- Manual setup — OpenAPI doc generation + typed client for the EventsHub API
- .AddMapper
- 6. The write side — Intermediate
- Mapper
- Clean Architecture Fundamentals
- system_runtime_compilerservices
- web_eventshub_src_features_home_homepage_module
- Profile
- .Setup
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
- Part 2 — Layers in a .NET Solution
- .OnModelCreating
- Part 3 — Key Patterns
- 18. Logging, Caching, and Authentication / Authorization — Intermediate
- Part 1 — Foundations
- 10. Performance & Query Optimization
- Decisions
- 26. Common Mistakes: Anemic Domain, Leaky Abstractions, Over-Engineering — Intermediate
- 8. Loading Strategies in Depth
- EventsHub.Api
- 3. Querying Data
- 4. Change Tracking
- 9. Transactions & Concurrency Control
- 11. `DbContext` Pooling & Advanced Lifetime Management
- 1. What Is `DbContext`?
- 5. Saving Changes

## God Nodes (most connected - your core abstractions)
1. `Event` - 57 edges
2. `AppDbContext` - 28 edges
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

## Communities (94 total, 21 thin omitted)

### Community 1 - "EventsHub.Application.Core.Mapping"
Cohesion: 0.07
Nodes (30): EventsHub.Domain, EventsHub.Application.Core.Mapping, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Persistence (+22 more)

### Community 2 - "EventsHub.UnitTests.csproj"
Cohesion: 0.06
Nodes (32): MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4), Npgsql.EntityFrameworkCore.PostgreSQL (10.0.3), NSwag.AspNetCore (14.7.1) (+24 more)

### Community 3 - "EventsControllerTests"
Cohesion: 0.12
Nodes (20): ActionResult, Exception, HttpDelete, HttpPost, HttpPut, 8. Tests, ProducesResponseType, ServiceProvider (+12 more)

### Community 4 - "package.json"
Cohesion: 0.11
Nodes (17): @babel/core, babel-plugin-react-compiler, date-fns, @emotion/react, @emotion/styled, lint-staged, prettier, sass-embedded (+9 more)

### Community 5 - "Entity Framework Core: DbContext Deep Dive"
Cohesion: 0.20
Nodes (9): 0. Introduction, 13. Common Pitfalls & Anti-Patterns, 14. Summary Table, 15. Suggested Exercise, 1.5. How `DbContext` Works — Visual Overview, 6. `DbContext` Lifetime & Scope, 7. Key Features Overview, Concrete Failure Scenarios (+1 more)

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
Cohesion: 0.11
Nodes (19): EventsHub, How the pieces connect, Quick start, DateTime, Event, Category, City, Date (+11 more)

### Community 10 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 11 - "Requirements"
Cohesion: 0.07
Nodes (26): object-mapping Specification, Purpose, Requirement: Convention-based member matching, Requirement: Edit behavior is preserved, Requirement: Map into a new destination, Requirement: Map onto an existing destination, Requirement: Nested and collection members, Requirement: Per-member overrides (+18 more)

### Community 12 - "GlobalTestSetup"
Cohesion: 0.08
Nodes (20): Build, Test, and Development Commands, Coding Style & Naming Conventions, Commit & Pull Request Guidelines, graphify, Project Structure & Module Organization, Repository Guidelines, Security & Configuration Tips, Testing Guidelines (+12 more)

### Community 13 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 14 - "TypeMap"
Cohesion: 0.08
Nodes (26): IReadOnlyDictionary, LambdaExpression, MethodInfo, 2. Compiled delegates per map, Goals / Non-Goals, PropertyInfo, Action, Expression (+18 more)

### Community 15 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 16 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "MappingProfiles"
Cohesion: 0.27
Nodes (9): 1. Namespace and layout, Context, Design, Migration Plan, Open Questions, Risks / Trade-offs, 4. Documentation, MappingProfiles (+1 more)

### Community 19 - "Part 5: Practice"
Cohesion: 0.22
Nodes (9): 20. Testing CQRS systems — Intermediate, 22. Common pitfalls and anti-patterns — Intermediate, A quick self-check, Appendix: Glossary, Given / When / Then for aggregates, Guidelines, Part 5: Practice, Testing projections (+1 more)

### Community 22 - "Step 1 — Install Graphify"
Cohesion: 0.15
Nodes (12): Build the graph, Exclude noisy paths before the first build, Initialize in this repo, Keep the graph fresh — auto-rebuild on every commit, Notes for whoever runs this (not part of the agent prompt), Prompt: Install Graphify + OpenSpec in EventsHub, Register the Codex / ChatGPT skill, Step 1 — Install Graphify (+4 more)

### Community 23 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 25 - "Command"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

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
Cohesion: 0.20
Nodes (10): ControllerBase, Cross-cutting conventions actually in use, IMediator, EventsHubBaseController, Mediator, HttpGet, IEnumerable, WeatherForecastController (+2 more)

### Community 36 - "Git in Practice: A Step-by-Step Guide"
Cohesion: 0.17
Nodes (11): 1. Creating branches, 2. Checking out branches, 3. Commits, 4. Pull Requests, 5. Merge, 6. Cherry-pick, 7. Squash, Extra: Stash (bonus) (+3 more)

### Community 38 - "IMapper"
Cohesion: 0.17
Nodes (11): Capabilities, Impact, Modified Capabilities, New Capabilities, Proposal, What Changes, Why, IMapper (+3 more)

### Community 39 - "Who uses it"
Cohesion: 0.18
Nodes (10): Building, Contents, EventsHub.Domain, Who uses it, Current state / known rough edges, EventsHub — Web, Project layout, Running it (+2 more)

### Community 41 - "AppDbContext"
Cohesion: 0.14
Nodes (17): DbContext, DbContextOptions, DbSet, Architectural pattern, Components, EventsHub — Architecture, Generated vs. hand-maintained, Request walkthrough (+9 more)

### Community 44 - "Handler"
Cohesion: 0.16
Nodes (14): ILogger, Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id (+6 more)

### Community 45 - "Part 6 — Practice and Pitfalls"
Cohesion: 0.20
Nodes (10): 25. Folder and Project Structure: Layer-Based vs. Feature-Based — Intermediate, 27. When _Not_ to Use Clean Architecture — General, 28. Migrating an Existing Codebase Incrementally — Advanced, 29. Guided Exercise: Build "Create Event" Through Every Layer — General, Feature-based (vertical slices), Layer-based (by technical role), Part 6 — Practice and Pitfalls, Review questions (+2 more)

### Community 46 - "Manual setup — OpenAPI doc generation + typed client for the EventsHub API"
Cohesion: 0.20
Nodes (9): Current state on this branch, Manual setup — OpenAPI doc generation + typed client for the EventsHub API, Part 1 — Manually scaffold the pieces, Part 2 — Populate the generated content, Step 1: Create `src/EventsHub.OpenApi/` (the standalone doc-generation host), Step 2: Create `openapi/` (generated output folder), Step 3: Create `nswag/EventsHub.nswag` (checked-in codegen config), Step 4: Register the NSwag CLI as a local tool (+1 more)

### Community 47 - ".AddMapper"
Cohesion: 0.28
Nodes (8): Assembly, IServiceCollection, Adding a mapping profile, Adding a use case, Contents, EventsHub.Application, How it connects to the rest of the solution, Known rough edges

### Community 48 - "6. The write side — Intermediate"
Cohesion: 0.50
Nodes (4): 6. The write side — Intermediate, The command handler, The domain model and aggregates, Typical flow

### Community 50 - "Mapper"
Cohesion: 0.32
Nodes (5): Dictionary, Type, Mapper, Test, MappingProfilesTests

### Community 51 - "Clean Architecture Fundamentals"
Cohesion: 0.25
Nodes (7): 21. Unit Testing the Domain and Application Layers — General, 22. Mocking Boundaries — Intermediate, 23. Integration Testing with WebApplicationFactory and a Test Database — Advanced, 24. Architecture Tests — Advanced, Clean Architecture Fundamentals, Glossary, Part 5 — Testing

### Community 54 - "Profile"
Cohesion: 0.14
Nodes (13): 1. Test project, 2. Mapper core (alongside AutoMapper), 3. Cut over and remove AutoMapper, 5. Final integration check, Tasks, Type, MappingServiceCollectionExtensions, IReadOnlyList (+5 more)

### Community 56 - "13. Domain events and integration events — Intermediate"
Cohesion: 0.12
Nodes (17): 10. Single database, separated models — Intermediate, 11. Separate read and write stores — Advanced, 12. Eventual consistency — Advanced, 13. Domain events and integration events — Intermediate, Design principles, Domain events, Guidelines, Handling it in the user experience (+9 more)

### Community 57 - "IRequest"
Cohesion: 0.25
Nodes (8): IRequest, Command, Event, Command, Id, DeleteEvent, Command, Event

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

### Community 78 - "Part 2 — Layers in a .NET Solution"
Cohesion: 0.25
Nodes (8): 10. Project References and Enforcing the Dependency Direction — Intermediate, 13. CQRS: Commands vs. Queries — Intermediate, 6. The Domain Layer — Intermediate, 7. The Application Layer — Intermediate, 8. The Infrastructure / Persistence Layer — Intermediate, 9. The Presentation / API Layer — General, Part 2 — Layers in a .NET Solution, CreateEvent

### Community 79 - ".OnModelCreating"
Cohesion: 0.29
Nodes (7): 12. Testing with `DbContext`, 2. Configuration & Setup, Abstraction for Unit Testing, Fluent API vs. Data Annotations, Provider Options for Tests, Seeding Data for Integration Tests, ModelBuilder

### Community 80 - "Part 3 — Key Patterns"
Cohesion: 0.29
Nodes (7): 11. Dependency Injection and the Composition Root — Intermediate, 12. Repository and Unit of Work — Advanced, 14. MediatR and Pipeline Behaviors — Advanced, 15. The Result Pattern vs. Exceptions — Intermediate, 16. Mapping and DTO Boundaries — Intermediate, 17. Validation with FluentValidation — Intermediate, Part 3 — Key Patterns

### Community 81 - "18. Logging, Caching, and Authentication / Authorization — Intermediate"
Cohesion: 0.29
Nodes (7): 18. Logging, Caching, and Authentication / Authorization — Intermediate, 19. API Contracts and OpenAPI — Intermediate, 20. Configuration and the Options Pattern — General, Authentication and authorization, Caching, Logging, Part 4 — Cross-Cutting Concerns

### Community 82 - "Part 1 — Foundations"
Cohesion: 0.33
Nodes (6): 1. What Clean Architecture Is and the Problem It Solves — General, 2. Origins and Related Styles: Hexagonal, Onion, and Clean — General, 3. The Dependency Rule — General, 4. The Concentric-Circles Diagram — General, 5. SOLID Principles as the Basis — Intermediate, Part 1 — Foundations

### Community 83 - "10. Performance & Query Optimization"
Cohesion: 0.33
Nodes (6): 10. Performance & Query Optimization, Avoiding N+1 Systematically, Bulk Operations: `ExecuteUpdate` / `ExecuteDelete`, Compiled Queries, Indexing from the EF Side, Query Splitting Trade-offs

### Community 84 - "Decisions"
Cohesion: 0.33
Nodes (6): 3. Members from the source are matched case-sensitively, 4. Nested and collection members, 5. New-instance creation, 6. Errors and lifetime, 7. Startup wiring, Decisions

### Community 85 - "26. Common Mistakes: Anemic Domain, Leaky Abstractions, Over-Engineering — Intermediate"
Cohesion: 0.40
Nodes (5): 26. Common Mistakes: Anemic Domain, Leaky Abstractions, Over-Engineering — Intermediate, Leaky abstractions, Other frequent problems, Over-engineering, The anemic domain model

### Community 86 - "8. Loading Strategies in Depth"
Cohesion: 0.40
Nodes (5): 8. Loading Strategies in Depth, Choosing a Strategy, Eager Loading — `.Include()` / `.ThenInclude()`, Explicit Loading, Lazy Loading

### Community 87 - "EventsHub.Api"
Cohesion: 0.40
Nodes (5): EventsHub.Api, Regenerating the OpenAPI client, Running it, What it does, Wiring (`Program.cs`)

### Community 88 - "3. Querying Data"
Cohesion: 0.50
Nodes (4): 3. Querying Data, `AsNoTracking()`, Client-Side vs. Server-Side Evaluation, Deferred vs. Immediate Execution

### Community 89 - "4. Change Tracking"
Cohesion: 0.50
Nodes (4): 4. Change Tracking, Entity States, Snapshot-Based Change Detection, Tracking vs. No-Tracking, Revisited

### Community 90 - "9. Transactions & Concurrency Control"
Cohesion: 0.50
Nodes (4): 9. Transactions & Concurrency Control, Manual Transactions, Optimistic Concurrency Control, Pessimistic Concurrency (Brief)

### Community 91 - "11. `DbContext` Pooling & Advanced Lifetime Management"
Cohesion: 0.67
Nodes (3): 11. `DbContext` Pooling & Advanced Lifetime Management, `AddDbContextPool`, `IDbContextFactory<T>`

### Community 92 - "1. What Is `DbContext`?"
Cohesion: 0.67
Nodes (3): 1. What Is `DbContext`?, `DbContext` vs. `DbSet<T>`, Where It Fits in an Application

### Community 93 - "5. Saving Changes"
Cohesion: 0.67
Nodes (3): 5. Saving Changes, Concurrency Tokens (Preview), Implicit Transactions

## Knowledge Gaps
- **490 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+485 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 586 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `EventsControllerTests`, `ADDED Requirements`, `Requirements`, `GlobalTestSetup`, `MappingProfiles`, `Step 1 — Install Graphify`, `EventsHubBaseController`, `IMapper`, `Who uses it`, `AppDbContext`, `Handler`, `Part 6 — Practice and Pitfalls`, `.AddMapper`, `Mapper`, `Profile`, `IRequest`, `.OnModelCreating`, `Decisions`, `EventsHub.Api`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `AppDbContext` to `EventsHub.Application.Core.Mapping`, `EventsControllerTests`, `Entity Framework Core: DbContext Deep Dive`, `IMapper`, `Who uses it`, `Event`, `Handler`, `GlobalTestSetup`, `.AddMapper`, `.OnModelCreating`, `Step 1 — Install Graphify`, `EventsHub.Api`, `Command`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `Profile` connect `Profile` to `IMapper`, `MapperTests`, `TypeMap`, `.AddMapper`, `MappingProfiles`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `Event` (e.g. with `Project Structure & Module Organization` and `Architectural pattern`) actually correct?**
  _`Event` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `AppDbContext` (e.g. with `Architectural pattern` and `Components`) actually correct?**
  _`AppDbContext` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 9 inferred relationships involving `Profile` (e.g. with `1. Namespace and layout` and `Goals / Non-Goals`) actually correct?**
  _`Profile` has 9 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _490 weakly-connected nodes found - possible documentation gaps or missing edges._