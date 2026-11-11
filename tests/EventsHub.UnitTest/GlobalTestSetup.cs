using EventsHub.Persistence;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.UnitTests;

[SetUpFixture]
public class GlobalTestSetup
{
    public static AppDbContext AppDbContext { get; private set; } = null!;

    [OneTimeSetUp]
    public async Task Setup()
    {
        DbContextOptions<AppDbContext> options =
            new DbContextOptionsBuilder<AppDbContext>()
                .UseSqlite("Data Source=:memory:")
                .Options;
        AppDbContext = new AppDbContext(options);
        await AppDbContext.Database.OpenConnectionAsync();
        await AppDbContext.Database.EnsureCreatedAsync();
        await DbInitializer.SeedDataAsync(AppDbContext);
    }

    [OneTimeTearDown]
    public async Task TearDown()
    {
        await AppDbContext.DisposeAsync();
    }
}
