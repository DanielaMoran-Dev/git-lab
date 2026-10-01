# Graph Report - proyectos  (2026-09-29)

## Corpus Check
- 66 files · ~25,525 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 7, .css 2, .nswag 1)

## Summary
- 472 nodes · 690 edges · 35 communities (28 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `880b0161`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- vite.config.ts
- Command
- Repository Guidelines
- http
- Step 1 — Install Graphify
- EventsHub.OpenApi
- WeatherForecast
- Handler
- Handler
- IRequest
- 20260831022247_InitialCreate.Designer.cs
- Handler
- main.tsx
- dependencies
- Tests
- AppDbContext
- openspec-explore/SKILL.md
- scripts
- tsconfig.json
- index.d.ts

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `AppDbContext` - 14 edges
7. `ApiException` - 13 edges
8. `Event` - 13 edges
9. `EventsHub.Persistence` - 13 edges
10. `EventsController` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Testing Guidelines` --references--> `GlobalTestSetup`  [INFERRED]
  AGENTS.md → tests/EventsHub.UnitTest/GlobalTestSetup.cs
- `Verify` --references--> `EventsController`  [INFERRED]
  docs/guides/install-graphify-openspec.md → src/EventsHub.Api/Controllers/EventsController.cs
- `Verify` --references--> `AppDbContext`  [INFERRED]
  docs/guides/install-graphify-openspec.md → src/EventsHub.Persistence/AppDbContext.cs
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTest/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTest/Controllers/EventsControllerTest.cs → src/EventsHub.Api/Controllers/EventsController.cs

## Import Cycles
- None detected.

## Communities (35 total, 7 thin omitted)

### Community 0 - "EventsRpcClient"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "EventsHub.Persistence"
Cohesion: 0.11
Nodes (22): automapper, EventsHub.Domain, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.Persistence, EventsHub.UnitTests.Controllers, EventsHub.Application.Core (+14 more)

### Community 2 - "EventsHub.UnitTest.csproj"
Cohesion: 0.10
Nodes (27): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4) (+19 more)

### Community 3 - "EventsController"
Cohesion: 0.08
Nodes (26): ActionResult, ControllerBase, Handler, HttpDelete, HttpPost, HttpPut, IMediator, NotFoundObjectResult (+18 more)

### Community 4 - "EventsHub/package.json"
Cohesion: 0.11
Nodes (20): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+12 more)

### Community 5 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 6 - "Event"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 7 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+9 more)

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "Event"
Cohesion: 0.15
Nodes (12): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+4 more)

### Community 10 - "vite.config.ts"
Cohesion: 0.18
Nodes (9): axios, @rolldown/plugin-babel, vite, vite-plugin-mkcert, @vitejs/plugin-react, dependencies, axios, devDependencies (+1 more)

### Community 11 - "Command"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

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
Cohesion: 0.32
Nodes (7): ILogger, CancellationToken, List, Task, GetEventList, Handler, Query

### Community 18 - "Handler"
Cohesion: 0.25
Nodes (7): IMapper, CancellationToken, Task, Command, Event, EditEvent, Handler

### Community 19 - "IRequest"
Cohesion: 0.25
Nodes (8): IRequest, Command, Event, CreateEvent, Command, Id, DeleteEvent, String

### Community 20 - "20260831022247_InitialCreate.Designer.cs"
Cohesion: 0.10
Nodes (19): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, ModelSnapshot, DateTime, MigrationBuilder (+11 more)

### Community 21 - "Handler"
Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 22 - "main.tsx"
Cohesion: 0.32
Nodes (6): @fontsource/roboto, @mui/material, react, react-dom, App(), web_eventshub_src_index

### Community 23 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react, react-dom

### Community 24 - "Tests"
Cohesion: 0.29
Nodes (4): EventsHub.UnitTests, SetUp, Test, Tests

### Community 25 - "AppDbContext"
Cohesion: 0.40
Nodes (5): DbContext, DbContextOptions, DbSet, AppDbContext, Events

### Community 26 - "openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 27 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **182 isolated node(s):** `The Stance`, `Planning a Change`, `What You Might Do`, `Check for context`, `When no change exists` (+177 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 248 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppDbContext` connect `AppDbContext` to `EventsHub.Persistence`, `Event`, `Command`, `Repository Guidelines`, `Step 1 — Install Graphify`, `Handler`, `Handler`, `Handler`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `Event` connect `Event` to `EventsController`, `Handler`, `Handler`, `IRequest`, `Handler`, `AppDbContext`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `EventsController` connect `EventsController` to `EventsHub.Persistence`, `Step 1 — Install Graphify`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `The Stance`, `Planning a Change`, `What You Might Do` to the rest of the system?**
  _182 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EventsRpcClient` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.10810810810810811 - nodes in this community are weakly interconnected._
- **Should `EventsHub.UnitTest.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.0967741935483871 - nodes in this community are weakly interconnected._