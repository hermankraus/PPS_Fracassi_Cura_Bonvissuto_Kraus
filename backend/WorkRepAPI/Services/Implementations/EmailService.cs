
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace WorkRepAPI;

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    public EmailService(IConfiguration config)
    {
        _config = config;
    }
    public void SendEmailAsync(EmailRequest emailRequest)
    {
       var email = new MimeMessage();
       email.From.Add(MailboxAddress.Parse("a47613301@gmail.com"));
       email.To.Add(MailboxAddress.Parse(emailRequest.To));
       email.Subject = emailRequest.Subject;
       email.Body = new TextPart(TextFormat.Html) {Text = emailRequest.Body} ;
       
       using var smtp = new SmtpClient();
       smtp.Connect(_config.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
       smtp.Authenticate(_config.GetSection("EmailUsername").Value,
                         _config.GetSection("EmailPassword").Value);
       smtp.Send(email);
       smtp.Disconnect(true);
       
    }










}
