<<<<<<< HEAD
using System.Diagnostics;
=======
>>>>>>> fe0a5b616101767fc26154c77d0cf0b33bc1835c
using EventsHub.Domain;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Persistence;

<<<<<<< HEAD
public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Event> Events { get; set; }
    
=======
public class AppDbContext(DbContextOptions<AppDbContext> options)
    : DbContext(options)
{
    public DbSet<Event> Activities { get; set; }
>>>>>>> fe0a5b616101767fc26154c77d0cf0b33bc1835c
}