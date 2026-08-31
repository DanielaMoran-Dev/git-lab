using Microsoft.AspNetCore.Mvc;

namespace EventsHub.Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public abstract class BaseEventsHubController : ControllerBase
{
}