using Microsoft.EntityFrameworkCore;
using EventsHub.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(
        builder.Configuration.GetConnectionString("SqliteConnection")
    );
});

var app = builder.Build();

// Crear la base de datos, aplicar migraciones y agregar datos iniciales.
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var context = services.GetRequiredService<AppDbContext>();

        await context.Database.MigrateAsync();
        await DbInitializer.SeedDataAsync(context);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();

        logger.LogError(
            ex,
            "An error occurred during database migration or seeding."
        );
    }
}

app.MapControllers();

app.Run();