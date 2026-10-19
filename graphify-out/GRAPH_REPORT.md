# Graph Report - proyectos  (2026-10-19)

## Corpus Check
- 75 files · ~36,966 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 9, .nswag 1, .css 1)

## Summary
- 603 nodes · 824 edges · 44 communities (32 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- EventsRpcClient
- EventsHub.Persistence
- EventsHub.UnitTest.csproj
- EventsController
- EventsHub/package.json
- compilerOptions
- Event
- devDependencies
- compilerOptions
- Event
- Command
- Handler
- Repository Guidelines
- http
- Step 1 — Install Graphify
- EventsHub.OpenApi
- WeatherForecast
- Handler
- IRequest
- Handler
- ref_app_layout_index_css
- AppDbContext
- ActivityDashboard.tsx
- Part 2: .NET only (Husky.Net)
- Tests
- AppDbContextModelSnapshot
- openspec-explore/SKILL.md
- web/package.json
- tsconfig.json
- index.d.ts
- EventsHubBaseController
- EventsHub.UnitTests.csproj
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- React + TypeScript + Vite
- README.md
- web_eventshub_src_index
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- task-runner.json
- pre-commit

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `AppDbContext` - 14 edges
7. `ApiException` - 14 edges
8. `Part 1: .NET + npm in the same repo (e.g. EventsHub)` - 14 edges
9. `Part 2: .NET only (Husky.Net)` - 14 edges
10. `Part 3: npm only, `package.json` in the repo root (Husky v9)` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Step 3: Create `nswag/EventsHub.nswag` (checked-in codegen config)` --references--> `ApiException`  [INFERRED]
  docs/guides/OpenApi.md → src/src/EventsHub.OpenApi/Generated/EventsHubRpcClient.generated.cs
- `Verify` --references--> `EventsController`  [INFERRED]
  docs/guides/install-graphify-openspec.md → src/EventsHub.Api/Controllers/EventsController.cs
- `Verify` --references--> `AppDbContext`  [INFERRED]
  docs/guides/install-graphify-openspec.md → src/EventsHub.Persistence/AppDbContext.cs
- `Testing Guidelines` --references--> `GlobalTestSetup`  [INFERRED]
  AGENTS.md → tests/EventsHub.UnitTest/GlobalTestSetup.cs
- `Step 1: Create `src/EventsHub.OpenApi/` (the standalone doc-generation host)` --references--> `WeatherForecastController`  [INFERRED]
  docs/guides/OpenApi.md → src/EventsHub.Api/Controllers/WeatherForecastController.cs

## Import Cycles
- None detected.

## Communities (44 total, 12 thin omitted)

### Community 0 - "EventsRpcClient"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "EventsHub.Persistence"
Cohesion: 0.06
Nodes (37): automapper, EventsHub.Domain, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.Persistence, EventsHub.UnitTests.Controllers (+29 more)

### Community 2 - "EventsHub.UnitTest.csproj"
Cohesion: 0.07
Nodes (27): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4) (+19 more)

### Community 3 - "EventsController"
Cohesion: 0.12
Nodes (18): ActionResult, Handler, HttpDelete, HttpPost, HttpPut, NotFoundObjectResult, ProducesResponseType, ServiceProvider (+10 more)

### Community 4 - "EventsHub/package.json"
Cohesion: 0.06
Nodes (38): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+30 more)

### Community 5 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 6 - "Event"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 7 - "devDependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "Event"
Cohesion: 0.15
Nodes (12): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+4 more)

### Community 10 - "Command"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

### Community 11 - "Handler"
Cohesion: 0.32
Nodes (7): ILogger, CancellationToken, List, Task, GetEventList, Handler, Query

### Community 12 - "Repository Guidelines"
Cohesion: 0.11
Nodes (15): Build, Test, and Development Commands, Coding Style & Naming Conventions, Commit & Pull Request Guidelines, graphify, Project Structure & Module Organization, Repository Guidelines, Security & Configuration Tips, Testing Guidelines (+7 more)

### Community 13 - "http"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, http (+1 more)

### Community 14 - "Step 1 — Install Graphify"
Cohesion: 0.15
Nodes (12): Build the graph, Exclude noisy paths before the first build, Initialize in this repo, Keep the graph fresh — auto-rebuild on every commit, Notes for whoever runs this (not part of the agent prompt), Prompt: Install Graphify + OpenSpec in EventsHub, Register the Claude Code skill, Step 1 — Install Graphify (+4 more)

### Community 15 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 16 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Handler"
Cohesion: 0.25
Nodes (7): IMapper, CancellationToken, Task, Command, Event, EditEvent, Handler

### Community 18 - "IRequest"
Cohesion: 0.25
Nodes (8): IRequest, Command, Event, CreateEvent, Command, Id, DeleteEvent, String

### Community 19 - "Handler"
Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 21 - "AppDbContext"
Cohesion: 0.40
Nodes (5): DbContext, DbContextOptions, DbSet, AppDbContext, Events

### Community 22 - "ActivityDashboard.tsx"
Cohesion: 0.14
Nodes (18): @fontsource/roboto, @mui/material, react, react-dom, ActivityCard(), Props, ActivityDashboard(), Props (+10 more)

### Community 23 - "Part 2: .NET only (Husky.Net)"
Cohesion: 0.06
Nodes (31): How to use this guide, Installing Husky in a Project: .NET and npm, Optional: add Prettier (code formatting), Part 2: .NET only (Husky.Net), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Skipping hooks (use sparingly), Step 10: Commit the Husky files (+23 more)

### Community 24 - "Tests"
Cohesion: 0.29
Nodes (4): EventsHub.UnitTests, SetUp, Test, Tests

### Community 25 - "AppDbContextModelSnapshot"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 26 - "openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 27 - "web/package.json"
Cohesion: 0.12
Nodes (15): axios, eslint-config-prettier, lint-staged, prettier, dependencies, axios, devDependencies, eslint-config-prettier (+7 more)

### Community 35 - "EventsHubBaseController"
Cohesion: 0.11
Nodes (17): ControllerBase, Current state on this branch, Manual setup — OpenAPI doc generation + typed client for the EventsHub API, Part 1 — Manually scaffold the pieces, Part 2 — Populate the generated content, Step 1: Create `src/EventsHub.OpenApi/` (the standalone doc-generation host), Step 2: Create `openapi/` (generated output folder), Step 3: Create `nswag/EventsHub.nswag` (checked-in codegen config) (+9 more)

### Community 36 - "EventsHub.UnitTests.csproj"
Cohesion: 0.14
Nodes (12): EventsHub.API, EventsHub.Application, EventsHub.Domain, EventsHub.OpenApi, EventsHub.Persistence, net10.0, coverlet.collector (6.0.4), Microsoft.NET.Test.Sdk (17.14.0) (+4 more)

### Community 37 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 38 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + TypeScript + Vite

### Community 41 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

## Knowledge Gaps
- **279 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+274 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 352 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `WeatherForecastController` connect `EventsHubBaseController` to `EventsHub.Persistence`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _279 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EventsRpcClient` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.061955965181771634 - nodes in this community are weakly interconnected._
- **Should `EventsHub.UnitTest.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.07007575757575757 - nodes in this community are weakly interconnected._
- **Should `EventsController` be split into smaller, more focused modules?**
  _Cohesion score 0.12433862433862433 - nodes in this community are weakly interconnected._
- **Should `EventsHub/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05731707317073171 - nodes in this community are weakly interconnected._