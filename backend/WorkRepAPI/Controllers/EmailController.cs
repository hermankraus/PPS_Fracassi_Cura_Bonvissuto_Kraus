

using Microsoft.AspNetCore.Mvc;

namespace WorkRepAPI.Controllers{
[Route("api/[controller]")]
[ApiController]
public class EmailController: ControllerBase
{ 
    private readonly IEmailService _emailService;
    public EmailController(IEmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost]
    public ActionResult SentEmail(EmailRequest emailRequest){
        _emailService.SendEmailAsync(emailRequest);

        return Ok();
    }
}


}