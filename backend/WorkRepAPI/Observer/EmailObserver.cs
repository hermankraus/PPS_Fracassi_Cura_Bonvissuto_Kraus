using WorkRepAPI;

public class EmailObserver : IObserver
{
    private string _emailAddress;
    private EmailService _emailService;

    public EmailObserver(string emailAddress, EmailService emailService)
    {
        _emailAddress = emailAddress;
        _emailService = emailService;
    }

    public void Update(string message)
    {
        var emailRequest = new EmailRequest
        {
            To = _emailAddress,
            Subject = "Notification",
            Body = message
        };
        _emailService.SendEmailAsync(emailRequest);
    }
}

public class Estudiante : EmailObserver
{
    public Estudiante(string emailAddress, EmailService emailService)
        : base(emailAddress, emailService) { }
}

public class Compañia : EmailObserver
{
    public Compañia(string emailAddress, EmailService emailService)
        : base(emailAddress, emailService) { }
}

public class Admin : EmailObserver
{
    public Admin(string emailAddress, EmailService emailService)
        : base(emailAddress, emailService) { }
}