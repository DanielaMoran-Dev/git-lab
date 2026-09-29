# Graph Report - proyectos  (2026-09-29)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 438 nodes · 661 edges · 30 communities (28 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `ApiException` - 13 edges
7. `AppDbContext` - 13 edges
8. `Event` - 13 edges
9. `EventsHub.Persistence` - 13 edges
10. `EventsHub.Domain` - 9 edges

## Surprising Connections (you probably didn't know these)
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTest/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTest/Controllers/EventsControllerTest.cs → src/EventsHub.Api/Controllers/EventsController.cs
- `EventsHub.UnitTests` --references--> `net10.0`  [EXTRACTED]
  web/EventsHub/tests/EventsHub.UnitTests/EventsHub.UnitTests.csproj → src/EventsHub.Api/EventsHub.API.csproj
- `EventsHub.UnitTests` --references--> `Microsoft.NET.Sdk`  [EXTRACTED]
  web/EventsHub/tests/EventsHub.UnitTests/EventsHub.UnitTests.csproj → src/EventsHub.Domain/EventsHub.Domain.csproj
- `Handler` --references--> `AppDbContext`  [EXTRACTED]
  src/EventsHub.Application/Events/Commands/CreateEvent.cs → src/EventsHub.Persistence/AppDbContext.cs

## Import Cycles
- None detected.

## Communities (30 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (32): automapper, EventsHub.Domain, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.Persistence, EventsHub.UnitTests.Controllers (+24 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (32): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4) (+24 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (18): ActionResult, Handler, HttpDelete, HttpPost, HttpPut, NotFoundObjectResult, ProducesResponseType, ServiceProvider (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (20): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+12 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (17): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+9 more)

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.15
Nodes (12): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (9): axios, @rolldown/plugin-babel, vite, vite-plugin-mkcert, @vitejs/plugin-react, dependencies, axios, devDependencies (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 13 - "Community 13"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, http (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.22
Nodes (8): ControllerBase, IMediator, EventsHubBaseController, Mediator, HttpGet, IEnumerable, WeatherForecastController, WeatherForecast

### Community 15 - "Community 15"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 16 - "Community 16"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Community 17"
Cohesion: 0.32
Nodes (7): ILogger, CancellationToken, List, Task, GetEventList, Handler, Query

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (7): IMapper, CancellationToken, Task, Command, Event, EditEvent, Handler

### Community 19 - "Community 19"
Cohesion: 0.25
Nodes (8): IRequest, Command, Event, CreateEvent, Command, Id, DeleteEvent, String

### Community 20 - "Community 20"
Cohesion: 0.29
Nodes (5): Migration, MigrationBuilder, DateTime, ModelBuilder, UpdateEventsModel

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 22 - "Community 22"
Cohesion: 0.32
Nodes (6): @fontsource/roboto, @mui/material, react, react-dom, App(), web_eventshub_src_index

### Community 23 - "Community 23"
Cohesion: 0.25
Nodes (8): dependencies, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react, react-dom

### Community 24 - "Community 24"
Cohesion: 0.29
Nodes (4): EventsHub.UnitTests, SetUp, Test, Tests

### Community 25 - "Community 25"
Cohesion: 0.40
Nodes (5): DbContext, DbContextOptions, DbSet, AppDbContext, Events

### Community 26 - "Community 26"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 27 - "Community 27"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **163 isolated node(s):** `Activity`, `EventsHub.OpenApi.Client`, `Headers`, `Response`, `Result` (+158 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 221 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Community 9` to `Community 3`, `Community 17`, `Community 18`, `Community 19`, `Community 21`, `Community 25`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Community 25` to `Community 1`, `Community 9`, `Community 11`, `Community 12`, `Community 17`, `Community 18`, `Community 21`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `Activity`, `EventsHub.OpenApi.Client`, `Headers` to the rest of the system?**
  _163 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07936507936507936 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.12433862433862433 - nodes in this community are weakly interconnected._