using EventsHub.Domain;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options)
    : DbContext(options)
{
    public DbSet<Event> Activities { get; set; }
}