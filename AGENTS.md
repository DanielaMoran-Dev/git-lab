# Repository Guidelines

## Project Structure & Module Organization

EventsHub is a full-stack web service project. Backend code lives under `src/`: `EventsHub.Api` exposes ASP.NET Core controllers, `EventsHub.Application` holds application logic, `EventsHub.Domain` contains domain models such as `Event`, `EventsHub.Persistence` contains EF Core context, migrations, and seed data, and `EventsHub.OpenApi`/`src/openapi` handle OpenAPI output and generated clients. Unit tests are in `tests/EventsHub.UnitTest`; YAML-based integration/API collections are in `tests/EventsHub.IntegrationTests`. The React/Vite frontend is in `web/EventsHub`, with components and styles in `web/EventsHub/src` and static assets in `web/EventsHub/public` or `web/EventsHub/src/assets`.

## Build, Test, and Development Commands

- `dotnet build src/EventsHub.Api/EventsHub.API.csproj` builds the API and referenced backend projects.
- `dotnet run --project src/EventsHub.Api/EventsHub.API.csproj` starts the local API and applies EF Core migrations on startup.
- `dotnet test tests/EventsHub.UnitTest/EventsHub.UnitTest.csproj` runs NUnit unit tests.
- `cd web/EventsHub && npm install` installs frontend dependencies.
- `cd web/EventsHub && npm run dev` starts the Vite development server.
- `cd web/EventsHub && npm run build` type-checks and builds the frontend.
- `cd web/EventsHub && npm run lint` runs ESLint on TypeScript/React files.

## Coding Style & Naming Conventions

Use nullable-enabled C# with implicit usings, matching the existing `.csproj` settings. Keep namespaces aligned with project names, e.g. `EventsHub.UnitTests.Controllers`. Name test methods with the pattern `Method_WhenCondition_ExpectedResult`. Use PascalCase for C# types and methods, camelCase for local variables, and async method names ending in `Async` when appropriate. Frontend code uses TypeScript, React function components, ES modules, and ESLint flat config; keep component files in `src` and use clear PascalCase component names.

## Testing Guidelines

Backend unit tests use NUnit with `Microsoft.NET.Test.Sdk` and `NUnit3TestAdapter`. Add focused tests beside related test classes under `tests/EventsHub.UnitTest`, and use `GlobalTestSetup` for shared database setup where applicable. Keep arrange/act/assert sections clear. Integration scenarios are stored as YAML collections under `tests/EventsHub.IntegrationTests`; add new endpoint cases in the matching feature folder.

## Commit & Pull Request Guidelines

Recent commits follow a short feature format such as `feat (parcial02) - add unit test`. Prefer concise, imperative messages with an optional course/module scope. Pull requests should describe the change, list test commands run, link related issues or assignments, and include screenshots when frontend UI changes are visible.

## Security & Configuration Tips

Do not commit local secrets or machine-specific settings. Keep connection strings in `appsettings.Development.json` for local development only, and review EF migrations before committing schema changes.
